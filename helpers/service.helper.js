
import supertest from 'supertest';

import 'dotenv/config';   

class ServiceHelper {
  constructor() {
    this.response = null;
    let vendorId = process.env.VENDORID
  }
   
  //Create a new  method
  async create(name, vendorId, clientPrice, vendorPrice) {
    //Create, setup, send request to server, wait for the response (async/await) and save the respponse from server to response property (variable)
    await supertest(process.env.BASE_URL)
      //Setup a request method - POST and an endpoint - /auth
      .post('/service')
      .set("Authorization", process.env.TOKEN)
      //Setup payload - object with 2 keys - login and password (and their values)
      .send({ name, vendor: vendorId, clientPrice, vendorPrice})
      //Save a response from server to esponse property (variable)
      .then((res) => {
        this.response = res;
      });
  }
  async getByID(serviceId) {
    //Create, setup, send request to server, wait for the response (async/await) and save the respponse from server to response property (variable)
    await supertest(process.env.BASE_URL)
      //Setup a request method - POST and an endpoint - /auth
      .get(`/service/${serviceId}`)
      .set("Authorization", process.env.TOKEN)
      //Setup payload - object with 2 keys - login and password (and their values)
     // .send({ name, description })
      //Save a response from server to esponse property (variable)
      .then((res) => {
        this.response = res;
      });
  }
  async edit( serviceId, vendorId, name, clientPrice, vendorPrice) {
    //Create, setup, send request to server, wait for the response (async/await) and save the respponse from server to response property (variable)
    await supertest(process.env.BASE_URL)
      //Setup a request method - POST and an endpoint - /auth
      .patch(`/service/${serviceId}`)
      .set("Authorization", process.env.TOKEN)
      //Setup payload - object with 2 keys - login and password (and their values)
      .send({ vendorId, name, clientPrice, vendorPrice})
      //Save a response from server to esponse property (variable)
      .then((res) => {
        this.response = res;
      });
  }
  async deleteByID(serviceId) {
    await supertest(process.env.BASE_URL)
      .delete(`/service/${serviceId}`)
      .set("Authorization", process.env.TOKEN)
      .then((res) => {
        this.response = res;
      });
  }
}
    //Export the Class
export default ServiceHelper;
