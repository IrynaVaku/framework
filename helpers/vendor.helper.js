//IMPORT SECTION
//  Import supertest - HTTP Vendor that allows us to create and send a request from a test framework to server
import supertest from 'supertest';
//  Import dotenv package - to work with environmental project's variables
import 'dotenv/config';
    //Create a new Class for authHelper - will store response from a server in response property (variable) all the methods (functions) that related to auth
class VendorHelper {
  constructor() {
    this.response = null;
  }
    //Create a new method
  async create(name, description) {
    //Create, setup, send request to server, wait for the response (async/await) and save the respponse from server to response property (variable)
    await supertest(process.env.BASE_URL)
      //Setup a request method - POST and an endpoint - /auth
      .post('/vendor')
      .set("Authorization", process.env.TOKEN)
      //Setup payload - object with 2 keys - login and password (and their values)
      .send({ name, description })
      //Save a response from server to esponse property (variable)
      .then((res) => {
        this.response = res;
      });
  }
  async get(name, description) {
    //Create, setup, send request to server, wait for the response (async/await) and save the respponse from server to response property (variable)
    await supertest(process.env.BASE_URL)
      //Setup a request method - POST and an endpoint - /auth
      .get(`/vendor/${process.env.VENDORID}`)
      .set("Authorization", process.env.TOKEN)
      //Setup payload - object with 2 keys - login and password (and their values)
      .send({ name, description })
      //Save a response from server to esponse property (variable)
      .then((res) => {
        this.response = res;
      });
  }
}
    //Export the Class
export default VendorHelper;
