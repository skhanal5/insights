import bcrypt from "bcryptjs";
import {
  PutCommand,
  QueryCommand,
  DeleteCommand,
  GetCommand,
  UpdateCommand,
} from "@aws-sdk/lib-dynamodb";


const authHandler = async (tableName, event) => {
    // fetch user if exists
    let requestBody = JSON.parse(event.body);
    let responseBody;
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
      responseBody = userWithoutPassword;
      return responseBody
    } else {
      throw new Error("Invalid credentials. Try again");
    }
}

const registrationHandler = async (tableName, event) => {
    let requestBody = JSON.parse(event.body);
    let responseBody;
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
    responseBody = res;
    return responseBody;

    //haven't handled error here...
}

const addApplicationHandler = async (tableName, event, dynamo) => {
  let requestBody = JSON.parse(event.body);
  let responseBody;
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
  responseBody = appWithoutPassword;
  return responseBody;
}

const fetchApplicationsHandler = async (tableName, event, dynamo) => {
  let responseBody;
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
    responseBody = "No applications found";
  } else {
    responseBody = apps.Items;
  }
  return responseBody
}


const deleteApplicationHandler = async (tableName, event, dynamo) => {
  let requestBody = JSON.parse(event.body);
  let responseBody;
  const deletedApp = await dynamo.send(
    new DeleteCommand({
      TableName: tableName,
      Key: {
        email: event.pathParameters.email,
        app_id: requestBody.app_id
      }
    })
  );
  if (deletedApp.hasOwnProperty("$metadata")) {
    body = "Successfully deleted";
  } else {
    body = "Failed to delete";  
  }

  return responseBody
}

export {registrationHandler, authHandler, addApplicationHandler, fetchApplicationsHandler, deleteApplicationHandler}