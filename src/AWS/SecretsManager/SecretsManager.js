"use strict"

import SecretsManager from 'aws-sdk/clients/secretsmanager';

export function newSecretsManager(params) {
    return () => new SecretsManager(params);
}

export function getSecretValueImpl(sm, params) {
    return () => sm
        .getSecretValue(params)
        .promise();
}
