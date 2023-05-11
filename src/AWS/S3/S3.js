"use strict"

import S3 from 'aws-sdk/clients/s3';

export function newS3(params) {
    return () => new S3(params);
}

export function getObjectImpl(s3, params) {
    return () => s3
        .getObject(params)
        .promise();
}

export function getSignedUrlImpl(s3, operation, params) {
    return () => s3
        .getSignedUrlPromise(operation, params);
}

export function createBucketImpl(s3, bucket, config) {
    return () => s3
        .createBucket({ Bucket: bucket, CreateBucketConfiguration: config })
        .promise();
}

export function putBucketPolicyImpl(s3, bucket, policy) {
    return () => s3
        .putBucketPolicy({ Bucket: bucket, Policy: policy })
        .promise();
}
