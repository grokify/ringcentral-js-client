/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import methodinfo = require('./MethodInfo');
import deviceaddressinfo = require('./DeviceAddressInfo');

export class ShippingInfo extends model.Model {

    /**
     * Shipping status of the order item. It is set to 'Initial' when the order is submitted. Then it is changed to 'Accepted' when a distributor starts processing the order. Finally it is changed to Shipped which means that distributor has shipped the device.
     */
    status:ShippingInfoStatus;

    /**
     * Shipping carrier name. Appears only if the device status is  Shipped 
     */
    carrier:string;

    /**
     * Carrier-specific tracking number. Appears only if the device status is  Shipped 
     */
    trackingNumber:string;

    /**
     * Shipping method information
     */
    method:methodinfo.MethodInfo;

    /**
     * Shipping address for the order. If it coincides with the Emergency Service Address, then can be omitted. By default the same value as the emergencyServiceAddress. Multiple addresses can be specified; in case an order contains several devices, they can be delivered to different addresses
     */
    address:deviceaddressinfo.DeviceAddressInfo;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'status', Class: ShippingInfoStatus, isArray: false,isRequired: false},
            {property: 'carrier', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'trackingNumber', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'method', Class: methodinfo.MethodInfo, isArray: false,isRequired: false},
            {property: 'address', Class: deviceaddressinfo.DeviceAddressInfo, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'ShippingInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum ShippingInfoStatus {
    Initial = <any>'Initial',
    Accepted = <any>'Accepted',
    Shipped = <any>'Shipped'
}