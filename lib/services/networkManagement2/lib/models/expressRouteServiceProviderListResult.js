/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the ExpressRouteServiceProviderListResult class.
 * @constructor
 * Response for ListExpressRouteServiceProvider Api service call
 * @member {array} [value] Gets List of ExpressRouteResourceProvider
 * 
 * @member {string} [nextLink] Gets the URL to get the next set of results.
 * 
 */
function ExpressRouteServiceProviderListResult() {
}

util.inherits(ExpressRouteServiceProviderListResult, Array);

/**
 * Deserialize the instance to ExpressRouteServiceProviderListResult schema
 *
 * @param {JSON} instance
 *
 */
ExpressRouteServiceProviderListResult.prototype.deserialize = function (instance) {
  if (instance) {
    if (instance['value']) {
      var deserializedInstancevalue = [];
        instance['value'].forEach(function(element) {
        if (element) {
          element = new models['ExpressRouteServiceProvider']().deserialize(element);
        }
        deserializedInstancevalue.push(element);
      });
      Array.prototype.push.apply(this, deserializedInstancevalue);
    }
    if (instance['nextLink'] !== undefined) {
      this['nextLink'] = instance.nextLink;
    }
  }

  return this;
};

module.exports = ExpressRouteServiceProviderListResult;