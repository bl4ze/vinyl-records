// Create clients and set shared const values outside of the handler.

// Create a DocumentClient that represents the query to add an item
const dynamodb = require('aws-sdk/clients/dynamodb');
const docClient = new dynamodb.DocumentClient();
const { v1: uuidv1 } = require('uuid');

// Get the DynamoDB table name from environment variables
const tableName = process.env.SAMPLE_TABLE;

const IS_CORS = true;

//handle cors
const processResponse = require('./process-response');

/**
 * A simple example includes a HTTP post method to add one item to a DynamoDB table.
 */
exports.putItemHandler = async (event) => {

    if (event.httpMethod === 'OPTIONS') {
        return processResponse(IS_CORS);
    }

    if (event.httpMethod !== 'POST') {
        throw new Error(`postMethod only accepts POST method, you tried: ${event.httpMethod} method.`);
    }
    // All log statements are written to CloudWatch
    console.info('received:', event);

    // Get id and name from the body of the request
    const body = JSON.parse(event.body)
    let id = body.id;
    const {artist, album, pic, tracks, username, description, isFavorite} = body;

    if(!id){
        id = uuidv1();
    }
    // Creates a new item, or replaces an old item with a new item
    // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#put-property
    var params = {
        TableName : tableName,
        Item: { id, artist, album, pic, tracks, username, description, isFavorite }
    };

    const result = await docClient.put(params).promise();

    return processResponse(IS_CORS, {...body, id}, event)
}
