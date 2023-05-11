"use strict"

import CostExplorer from 'aws-sdk/clients/costexplorer';

export function newCE(params) {
  return () => new CostExplorer(params);
}

export function getCostAndUsageImpl(ce, params) {
  return () => ce.getCostAndUsage(params).promise();
}
