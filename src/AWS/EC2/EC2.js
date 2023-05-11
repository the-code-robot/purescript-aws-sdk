"use strict"

import EC2 from 'aws-sdk/clients/ec2';

const newEC2 = (params) =>
  () => new EC2(params)

const describeInstancesImpl = (ec2, filters) =>
  () => {
    if (filters.length == 0) {
      return ec2.describeInstances().promise()
    }
    else {
      return ec2.describeInstances({ Filters: filters }).promise()
    }
  }

const describeTagsImpl = (ec2, filters) =>
  () => ec2.describeTags({ Filters: filters }).promise()

const describeInstanceAttributeImpl = (ec2, attribute, instanceId) =>
  () => ec2.describeInstanceAttribute({ Attribute: attribute, InstanceId: instanceId }).promise()

const describeInstanceTypesImpl = (ec2, instanceTypes) =>
  () => ec2.describeInstanceTypes({ InstanceTypes: instanceTypes }).promise()

export {
	newEC2,
	describeInstancesImpl,
	describeTagsImpl,
	describeInstanceAttributeImpl,
	describeInstanceTypesImpl,
}
