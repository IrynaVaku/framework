import { expect } from "chai";
//  Import helper(s)
import OrderHelper from "../../helpers/order.helper";
import ServiceHelper from "../../helpers/service.helper";
import VendorHelper from "../../helpers/vendor.helper";
import ClientHelper from "../../helpers/client.helper";

const orderHelper = new OrderHelper();
const serviceHelper = new ServiceHelper();
const vendorHelper = new VendorHelper();
const clientHelper = new ClientHelper();
 
let clientPrice =5555;
let clientPaid = 3333;
let vendorPrice = 2222;
let vendorPaid = 1111;
let orderNotes = "La-la-la";

let clientId = null;
let vendorId = null;
let serviceId = null;

//Main Test Suite
describe("\nSuccessful create new order sub suite", () => {
  //BEFORE hook
  before(async () => {
    await clientHelper.create("name", "phone", "email", "notes");
    console.log(clientHelper.response.body, "Client IDtext");
     clientId = clientHelper.response.body.payload;
    console.log(clientId, "tra-ta-ta");

    await vendorHelper.create("name", "description");
    console.log(vendorHelper.response.body,"Vendor_IDtext");
     vendorId = vendorHelper.response.body.payload;
    console.log(vendorId,"text1" );

    await serviceHelper.create("name", vendorId, 4050, 3012);
    console.log(serviceHelper.response.body,"Service_IDtext");
     serviceId = serviceHelper.response.body.payload;
    console.log(serviceId,"text2" );

    await orderHelper.create(clientId, serviceId, 5555, 3333, 2222, 1111, "orderNotes");
    console.log(orderHelper.response.body,"Order_IDtext");
    let orderId = orderHelper.response.body.payload;
    console.log(orderId,"text3" );
  });
  
  //Test Cases
  it("Checking that response status code is 200", () => {
    expect(orderHelper.response.statusCode).to.eq(200);
  });
  it("Checking that response include message", () => {
    expect(orderHelper.response.body.message).to.eq("Order created");
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
  //
  it("Checking that response include silent", () => {
    expect(orderHelper.response.body.silent).to.eq(true);
  });
  it("Checking that response include silent", () => {
    expect(orderHelper.response.body.silent).not.to.be.undefined;
  });
  it("Checking that response include orderId", () => {
    expect(orderHelper.response.body.payload).not.to.be.undefined;
  });
  //
  it("Checking that response.body.payload.orderId is a string", () => {
    expect(orderHelper.response.body.payload).to.be.an("string");
  });
  it("Checking that response include orderID has 24 symbols", () => {
    expect(orderHelper.response.body.payload.length).to.eq(24);
  });
})