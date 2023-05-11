"use strict"

import KMS from 'aws-sdk/clients/kms';

export function newKMS(params) {
    return () => new KMS(params);
}

export function encryptImpl(kms, params) {
    return () => kms
        .encrypt(params)
        .promise();
}

export function decryptImpl(kms, params) {
    return () => kms
        .decrypt(params)
        .promise();
}
