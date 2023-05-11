"use strict"

import ECS from 'aws-sdk/clients/ecs';

export function newECS(params) {
  return () => new ECS(params);
}

export function listClustersImpl(ecs) {
  return () => ecs.listClusters().promise();
}

export function listTasksImpl(ecs, clusterArn, containerInstanceArn) {
  return () => ecs.listTasks({ cluster: clusterArn, containerInstance: containerInstanceArn }).promise();
}

export function listContainerInstancesImpl(ecs, clusterArn) {
  return () => ecs.listContainerInstances({ cluster: clusterArn }).promise();
}

export function describeClustersImpl(ecs, clusterArns) {
  return () => ecs.describeClusters({ clusters: clusterArns }).promise();
}

export function describeContainerInstancesImpl(ecs, clusterArn, containerInstanceArns) {
  return () => ecs.describeContainerInstances({ cluster: clusterArn, containerInstances: containerInstanceArns }).promise();
}

export function describeTasksImpl(ecs, taskArns, clusterArn) {
  return () => ecs.describeTasks({ tasks: taskArns, cluster: clusterArn }).promise();
}
