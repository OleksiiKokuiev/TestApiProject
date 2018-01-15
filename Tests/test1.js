"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../Core/api");
var request = require('request');
var TestSuite1 = (function () {
    function TestSuite1() {
        this.Api = new api_1.default();
    }
    TestSuite1.prototype.test0 = function () {
        console.log("test1.ts");
        this.Api.test();
    };
    TestSuite1.prototype.test1 = function () {
        //Test1: Get request should return body which contain all entities
        console.log("Test1: Get request should return body which contain all entities");
        this.Api.getAllEntities()
            .then(function (body) {
            return body.length > 400
                ? console.log(body + '\n' + "PASSED")
                : console.log(body + '\n' + "FAILED");
        })
            .catch(function () { return console.log("Error"); });
    };
    TestSuite1.prototype.test2 = function () {
        //Test2: Get request should return response with status code 200
        console.log("Test2: Get request should return response with status code 200");
        this.Api.getAllEntitiesStatusCode()
            .then(function (statusCode) {
            statusCode === 200
                ? console.log(statusCode + '\n' + "PASSED")
                : console.log(statusCode + '\n' + "FAILED");
        })
            .catch(function () { return console.log("Error"); });
    };
    TestSuite1.prototype.test3 = function () {
        //Test3: Create unsuccessful POST request and receive 422 status code and error's text
        //Add error's text to response
        console.log("Test3: Create unsuccessful POST request and receive 422 status code and error's text");
        this.Api.creationNewEntityFailed("anyInvalidKey")
            .then(function (statusCode) {
            statusCode === 422
                ? console.log(statusCode + '\n' + "PASSED")
                : console.log(statusCode + '\n' + "FAILED");
        })
            .catch(function () { return console.log("Error"); });
    };
    TestSuite1.prototype.test4 = function () {
        //Test4: User is able to add new antity and receive 201's response
        console.log("Test4: User is able to add new antity and receive 201's response");
        this.Api.addNewEntity({ title: 'Oleksii', due: '2017-07-22' })
            .then(function (statusCode) {
            statusCode === 201
                ? console.log(statusCode + '\n' + "PASSED")
                : console.log(statusCode + '\n' + "FAILED");
        })
            .catch(function () { return console.log("Error"); });
    };
    return TestSuite1;
}());
var test1 = new TestSuite1();
//test1.test1();
//test1.test2();
//test1.test3();
//test1.test4();
