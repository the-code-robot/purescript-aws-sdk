"use strict"

import STS from 'aws-sdk/clients/sts';

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/STS.html
export function newSTS(params) {
  return () => new STS(params);
}

export function assumeRoleImpl(sts, params) {
  return () => sts.assumeRole(params).promise();
}

