// Create clients and set shared const values outside of the handler.

// Get the DynamoDB table name from environment variables
const tableName = process.env.SAMPLE_TABLE;

// Create a DocumentClient that represents the query to add an item
const dynamodb = require('aws-sdk/clients/dynamodb');
const docClient = new dynamodb.DocumentClient();
const IS_CORS = true;

//handle cors
const processResponse = require('./process-response');

/**
 * A simple example includes a HTTP get method to get one item by id from a DynamoDB table.
 */
exports.getByIdHandler = async (event) => {

  if (event.httpMethod === 'OPTIONS') {
    return processResponse(IS_CORS);
  }

  if (event.httpMethod !== 'GET') {
    throw new Error(`getMethod only accept GET method, you tried: ${event.httpMethod}`);
  }
  // All log statements are written to CloudWatch
  console.info('received:', event);

  // Get id from pathParameters from APIGateway because of `/{id}` at template.yml
  const id = event.pathParameters.id;

  // Get the item from the table
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#get-property
  var params = {
    TableName : tableName,
    Key: { id: id },
  };
  const data = await docClient.get(params).promise();
  const item = data.Item;
  return processResponse(IS_CORS, item, event);
}
