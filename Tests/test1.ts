import Api from "../Core/api";

const request = require('request');

class TestSuite1 {
    Api = new Api();

    test0() {
          console.log("test1.ts");
          this.Api.test();
      }
    test1() {
        //Test1: Get request should return body which contain all entities
        console.log("Test1: Get request should return body which contain all entities");

        this.Api.getAllEntities()
            .then(body => {
                return body.length > 400
                    ? console.log(body + '\n' + "PASSED")
                    : console.log(body + '\n' + "FAILED");
            })
            .catch(() => console.log("Error"));
    }

    test2() {
        //Test2: Get request should return response with status code 200
        console.log("Test2: Get request should return response with status code 200");

        this.Api.getAllEntitiesStatusCode()
            .then(statusCode => {
                statusCode === 200
                    ? console.log(statusCode + '\n' + "PASSED")
                    : console.log(statusCode + '\n' + "FAILED");
            })
            .catch(() => console.log("Error"));

    }

    test3() {
        //Test3: Create unsuccessful POST request and receive 422 status code and error's text
        //Add error's text to response
        console.log("Test3: Create unsuccessful POST request and receive 422 status code and error's text");

        this.Api.creationNewEntityFailed("anyInvalidKey")
            .then(statusCode => {
                statusCode === 422
                    ? console.log(statusCode + '\n' + "PASSED")
                    : console.log(statusCode + '\n' + "FAILED");
            })
            .catch(() => console.log("Error"));
    }

    test4() {
        //Test4: User is able to add new entity and receive 201's response
        console.log("Test4: User is able to add new antity and receive 201's response");

        this.Api.addNewEntity(  {title: 'Oleksii', due: '2017-07-22'})
            .then(statusCode => {
                statusCode === 201
                    ? console.log(statusCode + '\n' + "PASSED")
                    : console.log(statusCode + '\n' + "FAILED");
            })
            .catch(() => console.log("Error"));
    }

    test5() {
        //Test5: User is able to update entity and receive message "entity is updated"
        console.log("Test5: User is able to update entity and receive message \"entity is updated\"");

        this.Api.updateEntity(13114,  {title: 'Oleksii', due: '2018-07-22'})
            .then(statusCode => {
                statusCode === 200
                    ? console.log(statusCode + '\n' + "PASSED")
                    : console.log(statusCode + '\n' + "FAILED");
            })
            .catch(() => console.log("Error"));
    }

    test6() {
        //Test6: User is able to delete entity and receive 204 status response
        console.log("Test6: User is able to delete entity and receive 204 status response");

        this.Api.deleteEntity(13086)
            .then(statusCode => {
                statusCode === 204
                    ? console.log(statusCode + '\n' + "PASSED")
                    : console.log(statusCode + '\n' + "FAILED");
            })
            .catch(() => console.log("Error"));
    }
}

let test1 = new TestSuite1();

//test1.test1();
//test1.test2();
//test1.test3();
//test1.test4();
//test1.test5();
//test1.test6();

