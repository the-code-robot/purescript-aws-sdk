"use strict"

import AWS from 'aws-sdk';

export const newSharedIniFileCredentials = (params) => () => new AWS.SharedIniFileCredentials(params)
