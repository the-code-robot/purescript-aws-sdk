"use strict"

import CloudWatch from 'aws-sdk/clients/cloudwatch';

export function newCloudWatch(params) {
  return () => new CloudWatch(params);
}

export function getMetricStatisticsImpl(cw, p) {
  return () => cw.getMetricStatistics(p).promise().then(JSON.stringify);
}
