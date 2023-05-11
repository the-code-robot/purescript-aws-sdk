"use strict"

import AWS from 'aws-sdk';

export function newDynamoDbClient(params) {
  return () => new AWS.DynamoDB(params);
}

export function getItemImpl(db, params) {
  return () => db.getItem(params).promise();
}

export function putItemImpl(db, params) {
  return () => db.putItem(params).promise();
}

export function createTableImpl(db, params) {
  return () => db.createTable(params).promise();
}
