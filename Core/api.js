"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var endpoints_helper_1 = require("./helpers/endpoints.helper");
var request = require('request');
var Api = (function () {
    function Api() {
    }
    //My initial attempt
    Api.prototype.test = function () {
        console.log("It works!");
    };
    Api.prototype.getAllEntities = function () {
        return new Promise(function (resolve, reject) {
            request.get(endpoints_helper_1.default.getAllEntities, function (error, response, body) {
                //console.log('body:', body); // Print the HTML .
                return resolve(body);
            });
        });
    };
    Api.prototype.getAllEntitiesStatusCode = function () {
        return new Promise(function (resolve, reject) {
            request.get(endpoints_helper_1.default.getAllEntities, function (error, response) {
                //console.log('statusCode:', response.statusCode);
                return resolve(response.statusCode);
            });
        });
    };
    Api.prototype.creationNewEntityFailed = function (invalidKey) {
        return new Promise(function (resolve, reject) {
            request.post(endpoints_helper_1.default.getAllEntities, invalidKey, function (error, response, body) {
                // console.log('statusCode:', response.statusCode);
                // console.log('response:', error);
                // console.log('body:', body);
                /* var newObj = new Object();
                 newObj.error = error;
                 newObj.response = response.statusCode;
                 newObj.body = body;*/
                return resolve(response);
            });
        });
    };
    Api.prototype.addNewEntity = function (newEntity) {
        return new Promise(function (resolve, reject) {
            request.post(endpoints_helper_1.default.getAllEntities, { form: newEntity }, function (error, response) {
                console.log(newEntity);
                return resolve(response.statusCode);
            });
        });
    };
    Api.prototype.updateEntity = function (entityId, newEntity) {
        return new Promise(function (resolve, reject) {
            request.put(endpoints_helper_1.default.updateEntity + entityId, { form: newEntity }, function (error, response) {
                return resolve(response.statusCode);
            });
        });
    };
    Api.prototype.deleteEntity = function (entityId) {
        return new Promise(function (resolve, reject) {
            request.delete(endpoints_helper_1.default.updateEntity + entityId, function (error, response, body) {
            });
            return resolve(response.statusCode);
        });
    };
    ;
    return Api;
}());
exports.default = Api;
