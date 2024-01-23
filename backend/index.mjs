import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  PutCommand,
  QueryCommand,
  DeleteCommand,
  GetCommand,
  UpdateCommand,
} from "@aws-sdk/lib-dynamodb";

import bcrypt from "bcryptjs";

const client = new DynamoDBClient({});
const dynamo = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
  console.log(event);
  let body;
  let statusCode = 200;
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
    "Access-Control-Allow-Credentials" : true, // Required for cookies, authorization headers with HTTPS
    "Access-Control-Allow-Headers" : "*",
    "Access-Control-Allow-Methods": "*"
  };
  
  /*
    API methods should do one thing really well
  */
  try {
    switch (event.resource) {
      //auth-js route
      case "/auth": {
        const tableName = "users";
        // fetch user if exists
        let requestBody = JSON.parse(event.body);
        const user = await dynamo.send(
          new GetCommand({
            TableName: tableName,
            Key: {
              email: requestBody.email,
            },
          })
        );
        
        const res = await bcrypt.compare(requestBody.password, user.Item.password);
        if (res) {
          const { password, ...userWithoutPassword } = user.Item;
          body = userWithoutPassword;
        } else {
          throw new Error("Invalid credentials. Try again");
        }
        break; 
      }

      //registration (POST)
      case "/users": {
        let requestBody = JSON.parse(event.body);
        const tableName = "users";
        const res = await dynamo.send(
          new PutCommand({
            TableName: tableName,
            Item: {
              id: requestBody.id,
              email: requestBody.email,
              firstName: requestBody.firstName,
              lastName: requestBody.lastName,
              password: await bcrypt.hash(requestBody.password, 10),
            },
            ConditionExpression: "attribute_not_exists(email)"
          })
        );
        body = res;
        break;
      }
      case "/applications": {
        if (event.requestContext.httpMethod == "OPTIONS") break;
        let requestBody = JSON.parse(event.body);
        const tableName = "applications";
        const res = await dynamo.send(
          new UpdateCommand({
            TableName: tableName,
            Key: {
              email: requestBody.email,
              app_id: requestBody.app_id
            },
            ExpressionAttributeNames: {
              "#C": "Company",
              "#R": "Role",
              "#L": "Location",
              "#D": "Date",
              "#S": "Status",
            },
            ExpressionAttributeValues: {
             ":c": requestBody.company,
             ":r": requestBody.role,
             ":l": requestBody.app_location,
             ":d": requestBody.date,
             ":s": requestBody.app_status,
            },
            UpdateExpression: "SET #C = :c, #R = :r, #L = :l, #D = :d, #S = :s",
            ReturnValues: "ALL_NEW"
          })
        );
        const { password, ...appWithoutPassword } = res.Attributes;
        body = appWithoutPassword;
        break;
      }
      case "/applications/{email}": {
        
        //get all apps for a single user
        const tableName = "applications";
        let requestBody = JSON.parse(event.body);
        if (event.requestContext.httpMethod == "OPTIONS") break;
        
        switch (event.requestContext.httpMethod) {
          case "GET": {
            const apps = await dynamo.send(
              new QueryCommand({
                TableName: tableName,
                KeyConditionExpression: "#pk = :pk",
                ExpressionAttributeNames: {
                  "#pk": "email",
                },
                ExpressionAttributeValues: {
                  ":pk": event.pathParameters.email,
                }
              })
            );
            if (apps.Count == 0) {
              body = "No applications found";
            } else {
              body = apps.Items;
            }
            break;
          }
          case "POST": {
            const deletedApp = await dynamo.send(
              new DeleteCommand({
                TableName: tableName,
                Key: {
                  email: event.pathParameters.email,
                  app_id: requestBody.app_id
                }
              })
            );
            console.log(deletedApp);
            if (deletedApp.hasOwnProperty("$metadata")) {
              body = "Successfully deleted";
            } else {
              body = "Failed to delete";  
            }
            break;
          }
        }
        break;
      }
    default:
        throw new Error(`Unsupported route: "${event.resource}`);
    }
  } catch (err) {
    statusCode = 400;
    body = err.message;
  } finally {
    body = JSON.stringify(body);
  }

  return {
    statusCode,
    body,
    headers,
  };
};
