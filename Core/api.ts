import endpoints from "./helpers/endpoints.helper";
const request = require('request');

export default class Api {

    test() {
        console.log("It works!");
}
    getAllEntities(){
        return new Promise((resolve, reject) => {
            request.get(endpoints.getAllEntities, function (error, response, body) {
                //console.log('body:', body); // Print the HTML .
                return resolve(body);
            });
        });

    }
    getAllEntitiesStatusCode() {
        return new Promise((resolve, reject) => {
            request.get(endpoints.getAllEntities, function (error, response) {
                //console.log('statusCode:', response.statusCode);
                return resolve(response.statusCode);
            });
        });
    }

    creationNewEntityFailed(invalidKey) {
        return new Promise((resolve, reject) => {
            request.post(endpoints.getAllEntities, invalidKey, function(error, response, body) {
               // console.log('statusCode:', response.statusCode);
               // console.log('response:', error);
               // console.log('body:', body);
               /* var newObj = new Object();
                newObj.error = error;
                newObj.response = response.statusCode;
                newObj.body = body;*/
                return resolve(response.statusCode);
            });
        });
    }

   addNewEntity(newEntity) {
       return new Promise((resolve, reject) => {
           request.post(endpoints.getAllEntities, {form: newEntity}, function (error, response) {
               console.log(newEntity);
               return resolve(response.statusCode);
           });
       });
   }
}

