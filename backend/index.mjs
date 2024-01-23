import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
} from "@aws-sdk/lib-dynamodb";

import { addApplicationHandler, authHandler, deleteApplicationHandler, fetchApplicationsHandler, registrationHandler } from "./utils.mjs";

const client = new DynamoDBClient({});
const dynamo = DynamoDBDocumentClient.from(client);
const applicationsTable = "applications";
const userTable = "users";

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
        let body = await authHandler(userTable, event, dynamo)
        break; 
      }

      //registration (POST)
      case "/users": {
        body = await registrationHandler(userTable, event, dynamo)
        break;
      }
      case "/applications": {

        // CORS Prefetch response
        if (event.requestContext.httpMethod == "OPTIONS") break;

        const tableName = "applications";
        body = await addApplicationHandler(applicationsTable, event, dynamo);
      }

      case "/applications/{email}": {

        // CORS Prefetch response
        if (event.requestContext.httpMethod == "OPTIONS") break;
        
        switch (event.requestContext.httpMethod) {
          //get all apps for a single user
          case "GET": {
            body = await fetchApplicationsHandler(applicationsTable, event, dynamo);
            break;
          }
          
          //delete a single application from a user
          case "POST": {
            body = await deleteApplicationHandler(applicationsTable, event, dynamo);
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
