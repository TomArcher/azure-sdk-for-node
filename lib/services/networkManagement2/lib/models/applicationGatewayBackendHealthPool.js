/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the ApplicationGatewayBackendHealthPool class.
 * @constructor
 * Application gateway backendhealth pool.
 *
 * @member {object} [backendAddressPool] Reference of application gateway
 * backend address pool resource.
 * 
 * @member {array} [backendAddressPool.backendIPConfigurations] Collection of
 * references to IPs defined in NICs
 * 
 * @member {array} [backendAddressPool.backendAddresses] Backend addresses
 * 
 * @member {string} [backendAddressPool.provisioningState] Provisioning state
 * of the backend address pool resource Updating/Deleting/Failed
 * 
 * @member {string} [backendAddressPool.name] Resource that is unique within a
 * resource group. This name can be used to access the resource
 * 
 * @member {string} [backendAddressPool.etag] A unique read-only string that
 * changes whenever the resource is updated
 * 
 * @member {array} [backendHttpSettingsCollection] List of application gateway
 * backendhealth http settings.
 * 
 */
function ApplicationGatewayBackendHealthPool() {
}

/**
 * Defines the metadata of ApplicationGatewayBackendHealthPool
 *
 * @returns {object} metadata of ApplicationGatewayBackendHealthPool
 *
 */
ApplicationGatewayBackendHealthPool.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ApplicationGatewayBackendHealthPool',
    type: {
      name: 'Composite',
      className: 'ApplicationGatewayBackendHealthPool',
      modelProperties: {
        backendAddressPool: {
          required: false,
          serializedName: 'backendAddressPool',
          type: {
            name: 'Composite',
            className: 'ApplicationGatewayBackendAddressPool'
          }
        },
        backendHttpSettingsCollection: {
          required: false,
          serializedName: 'backendHttpSettingsCollection',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'ApplicationGatewayBackendHealthHttpSettingsElementType',
                type: {
                  name: 'Composite',
                  className: 'ApplicationGatewayBackendHealthHttpSettings'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = ApplicationGatewayBackendHealthPool;
