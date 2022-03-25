
import supertest from 'supertest';

import 'dotenv/config';   

class OrderHelper {
  constructor() {
    this.response = null;

    /*let clientId = process.env.CLIENTID
    let vendorId = process.env.VENDORID
    let serviceId = process.env.SERVICEID*/
  }
   //Create a new  method
   async create(clientId, serviceId, clientPrice, clientPaid, vendorPrice, vendorPaid, orderNotes) {
    //Create, setup, send request to server, wait for the response (async/await) and save the respponse from server to response property (variable)
    await supertest(process.env.BASE_URL)
      .post('/order')
      .set("Authorization", process.env.TOKEN)
      .send({ client: clientId, service: serviceId, clientPrice, clientPaid, vendorPrice, vendorPaid, orderNotes })
      .then((res) => {
        this.response = res;
      });
    }
  
  async getByID(orderId) {
    //Create, setup, send request to server, wait for the response (async/await) and save the respponse from server to response property (variable)
    await supertest(process.env.BASE_URL)
      .get(`/order/${orderId}`)
      .set("Authorization", process.env.TOKEN)
      .then((res) => {
        this.response = res;
      });
  }
  async edit( orderId, clientId, serviceId, clientPrice, clientPaid, vendorPrice, vendorPaid, orderNotes) {
    //Create, setup, send request to server, wait for the response (async/await) and save the respponse from server to response property (variable)
    await supertest(process.env.BASE_URL)
      //Setup a request method - POST and an endpoint - /auth
      .patch(`/order/${orderId}`)
      .set("Authorization", process.env.TOKEN)
      //Setup payload - object with 2 keys - login and password (and their values)
      .send({ orderId, clientPrice, clientPaid, vendorPrice, vendorPaid, orderNotes})
      //Save a response from server to esponse property (variable)
      .then((res) => {
        this.response = res;
      });
  }
  async delete() {
    await supertest(process.env.BASE_URL)
      .delete(`/order/${orderId}`)
      .set("Authorization", process.env.TOKEN)
      .then((res) => {
        this.response = res;
      });
  }
}
    //Export the Class
export default OrderHelper;
