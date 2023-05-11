
"use strict"

import Pricing from 'aws-sdk/clients/pricing';

export function newPricing(params) {
    return () => new Pricing(params);
}

export function getProductsImpl(client, filters, serviceCode, token, max) {
    return () => client.getProducts({ Filters: filters, ServiceCode: serviceCode, NextToken: token, MaxResults: max }).promise();
}
