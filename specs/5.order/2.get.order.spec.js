import { expect } from "chai";
//  Import helper(s)
import OrderHelper from "../../helpers/order.helper";
import ClientHelper from "../../helpers/client.helper";
import ServiceHelper from "../../helpers/service.helper";
import VendorHelper from "../../helpers/vendor.helper";

const serviceHelper = new ServiceHelper();
const vendorHelper = new VendorHelper();
const clientHelper = new ClientHelper();
const orderHelper = new OrderHelper();

//Main Test Suite
describe("\nSuccessful get service sub suite", () => {
  let clientPrice =7777;
  let clientPaid = 5555;
  let vendorPrice = 3333;
  let vendorPaid = 1111;
  let orderNotes = "Tra-La-la-la";
  
  let clientId = null;
  let vendorId = null;
  let serviceId = null;
  let orderId = null;
 
  //BEFORE hook
  before(async () => {
    await clientHelper.create("Boris", "phone", "email", "notes");
    console.log(clientHelper.response.body, "Client IDtext");
     clientId = clientHelper.response.body.payload;
    console.log(clientId, "tra-ta-ta");

    await vendorHelper.create("name", "description");
    console.log(vendorHelper.response.body,"Vendor_IDtext");
     vendorId = vendorHelper.response.body.payload;
    console.log(vendorId,"text1" );

    await serviceHelper.create("Brigit", vendorId, 5040, 5024);
    console.log(serviceHelper.response.body,"Service_IDtext");
     serviceId = serviceHelper.response.body.payload;
    console.log(serviceId,"text2" );

    await orderHelper.create(clientId, serviceId, clientPrice, clientPaid, vendorPrice, vendorPaid, orderNotes);
    console.log(orderHelper.response.body,"Order_IDtext");
     orderId = orderHelper.response.body.payload;
    console.log(orderId,"text3" );

    await orderHelper.getByID(orderId);
    console.log(orderId,"Text order") ;
    console.log(orderHelper.response.body);
  });
  //Test Cases
  it("Checking that response status code is 200", () => {
    expect(orderHelper.response.statusCode).to.eq(200);
  })
  it("Checking that response include message", () => {
    expect(orderHelper.response.body.message).to.eq("Get Order by id ok");
  });
  it("Checking that response include message", () => {
    expect(orderHelper.response.body.message).not.to.be.undefined;
  });
  it("Checking that response include success", () => {
    expect(orderHelper.response.body.success).to.eq(true);
  });
  it("Checking that response include success", () => {
    expect(orderHelper.response.body.success).not.to.be.undefined;
  });
  //
  it("Checking that response include fail", () => {
    expect(orderHelper.response.body.fail).to.eq(false);
  });
  it("Checking that response include fail", () => {
    expect(orderHelper.response.body.fail).not.to.be.undefined;
  });
  //silent
  it("Checking that response include silent", () => {
    expect(orderHelper.response.body.silent).to.eq(true);
  });
  it("Checking that response include silent", () => {
    expect(orderHelper.response.body.silent).not.to.be.undefined;
  });
  it("Checking that response include orderId", () => {
    expect(orderHelper.response.body.payload).not.to.be.undefined;
  });
  
  //order Id
  it("Checking that response include orderID", () => {
    expect(orderHelper.response.body.payload._id).not.to.be.undefined;
  });
  it("Checking that orderId is a string", () => {
    expect(orderHelper.response.body.payload._id).to.be.an("string");
  });
  it("Checking that response include orderID has 24 symbols", () => {
    expect(orderHelper.response.body.payload._id.length).to.eq(24);
  });
  it("Checking that ID is the same as orderID", () => {
    expect(orderHelper.response.body.payload._id).to.eq(orderId);
  });
  //service
  it("Checking that response include service", () => {
    expect(orderHelper.response.body.payload.service).not.to.be.undefined;
  });
  it("Checking that service is an object", () => {
    expect(orderHelper.response.body.payload.service).to.be.an("object");
  });
  it("Checking that service is the same as serviceId", () => {
    expect(orderHelper.response.body.payload.service._id).to.eq(serviceId);
  });
  //service name
  it("Checking that response include service name", () => {
    expect(orderHelper.response.body.payload.service.name).not.to.be.undefined;
  });
  it("Checking that name is a string", () => {
    expect(orderHelper.response.body.payload.service.name).to.be.an("string");
  });
  it("Checking that name is the same", () => {
    expect(orderHelper.response.body.payload.service.name).to.eq("Brigit");
  });
//client
  it("Checking that response include client", () => {
    expect(orderHelper.response.body.payload.client).not.to.be.undefined;
  });
  it("Checking that client is an object", () => {
    expect(orderHelper.response.body.payload.client).to.be.an("object");
  });
  it("Checking that client is the same as clientId", () => {
    expect(orderHelper.response.body.payload.client._id).to.eq(clientId);
  });
  //client name
  it("Checking that response include client name", () => {
    expect(orderHelper.response.body.payload.client.name).not.to.be.undefined;
  });
  it("Checking that name is a string", () => {
    expect(orderHelper.response.body.payload.client.name).to.be.an("string");
  });
  it("Checking that name is the same", () => {
    expect(orderHelper.response.body.payload.client.name).to.eq("Boris");
  });
  //client Price
  it("Checking that response include clientPrice", () => {
    expect(orderHelper.response.body.payload.clientPrice).not.to.be.undefined;
  });
  it("Checking that clientPrice is a number", () => {
    expect(orderHelper.response.body.payload.clientPrice).to.be.an("number");
  });
  it("Checking that response include clientPrice is the same", () => {
    expect(orderHelper.response.body.payload.clientPrice).to.eq(clientPrice);
  });
  //vendor Price
  it("Checking that response include vendorPrice", () => {
    expect(orderHelper.response.body.payload.vendorPrice).not.to.be.undefined;
  });
  it("Checking that vendorPrice is a number", () => {
    expect(orderHelper.response.body.payload.vendorPrice).to.be.an("number");
  });
  it("Checking that response include vendorPrice is the same", () => {
    expect(orderHelper.response.body.payload.vendorPrice).to.eq(vendorPrice);
  });
})
