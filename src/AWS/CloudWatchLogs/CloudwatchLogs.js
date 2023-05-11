"use strict"

import {CloudWatchLogs} from 'aws-sdk';

export function newCloudWatchLogs(params) {
  return () => new CloudWatchLogs(params);
}

export function describeLogGroupsImpl(cw, params) {
  return () => cw.describeLogGroups(params).promise();
}

export function describeLogStreamsImpl(cw, params) {
  return () => cw.describeLogStreams(params).promise();
}

export function putRetentionPolicyImpl(cw, groupName, retention) {
  return () => cw.putRetentionPolicy({ logGroupName: groupName, retentionInDays: retention }).promise();
}

export function deleteRetentionPolicyImpl(cw, groupName) {
  return () => cw.deleteRetentionPolicy({ logGroupName: groupName }).promise();
}

export function createExportTaskImpl(cw, destination, from, groupName, to) {
  return () => cw.createExportTask({ destination: destination, from: from, logGroupName: groupName, to: to }).promise();
}

export function listTagsLogGroupImpl(cw, groupName) {
  return () => cw.listTagsLogGroup({ logGroupName: groupName }).promise();
}
