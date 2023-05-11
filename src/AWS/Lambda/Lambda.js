"use strict"

import AWS from 'aws-sdk';

export function newLambda(params) {
  return () => new AWS.Lambda(params);
}

export function invokeImpl(lambda, params) {
  return () => lambda.invoke(params).promise();
}
