import { expect } from "chai";
//  Import helper(s)
import ServiceHelper from "../../helpers/service.helper";
import VendorHelper from "../../helpers/vendor.helper";
const serviceHelper = new ServiceHelper();
const vendorHelper = new VendorHelper();
let vendorId;
let serviceId;

//Main Test Suite
describe("\nSuccessful get service sub suite", () => {
 let name ="Peter";
  let clientPrice = 4050; 
 let vendorPrice = 3012;
 
  //BEFORE hook
  before(async () => {
    await vendorHelper.create("name", "description");
     console.log(vendorHelper.response.body,"Vendor_IDtext");
    vendorId = vendorHelper.response.body.payload;
    
     await serviceHelper.create(name, vendorId, clientPrice, vendorPrice);
     console.log(serviceHelper.response.body,"Service_IDtext");
    serviceId = serviceHelper.response.body.payload;

     await serviceHelper.getByID(serviceId);
    console.log(serviceId,"Text service") ;
    console.log(serviceHelper.response.body);
  });
  //Test Cases
  it("Checking that response status code is 200", () => {
    expect(serviceHelper.response.statusCode).to.eq(200);
  })
  it("Checking that response include message", () => {
    expect(serviceHelper.response.body.message).to.eq("Get Service by id ok");
  });
  it("Checking that response include message", () => {
    expect(serviceHelper.response.body.message).not.to.be.undefined;
  });
  it("Checking that response include success", () => {
    expect(serviceHelper.response.body.success).to.eq(true);
  });
  it("Checking that response include success", () => {
    expect(serviceHelper.response.body.success).not.to.be.undefined;
  });
  //
  it("Checking that response include fail", () => {
    expect(serviceHelper.response.body.fail).to.eq(false);
  });
  it("Checking that response include fail", () => {
    expect(serviceHelper.response.body.fail).not.to.be.undefined;
  });
  //silent
  it("Checking that response include silent", () => {
    expect(serviceHelper.response.body.silent).to.eq(true);
  });
  it("Checking that response include silent", () => {
    expect(serviceHelper.response.body.silent).not.to.be.undefined;
  });
  it("Checking that response include serviceId", () => {
    expect(serviceHelper.response.body.payload).not.to.be.undefined;
  });
  //name
  it("Checking that response include name", () => {
    expect(serviceHelper.response.body.payload.name).not.to.be.undefined;
  });
  it("Checking that name is a string", () => {
    expect(serviceHelper.response.body.payload.name).to.be.an("string");
  });
  it("Checking that name is the same", () => {
    expect(serviceHelper.response.body.payload.name).to.eq(name);
  });
  //service Id
  it("Checking that response include serviceID", () => {
    expect(serviceHelper.response.body.payload._id).not.to.be.undefined;
  });
  it("Checking that serviceId is a string", () => {
    expect(serviceHelper.response.body.payload._id).to.be.an("string");
  });
  it("Checking that response include serviceID has 24 symbols", () => {
    expect(serviceHelper.response.body.payload._id.length).to.eq(24);
  });
  it("Checking that ID is the same as serviceID", () => {
    expect(serviceHelper.response.body.payload._id).to.eq(serviceId);
  });
//vendor
  it("Checking that response include vendor", () => {
    expect(serviceHelper.response.body.payload.vendor).not.to.be.undefined;
  });
  it("Checking that vendor is a string", () => {
    expect(serviceHelper.response.body.payload.vendor).to.be.an("string");
  });
  it("Checking that response include vendor has 24 symbols", () => {
    expect(serviceHelper.response.body.payload.vendor.length).to.eq(24);
  });
  it("Checking that vendor is the same as vendorId", () => {
    expect(serviceHelper.response.body.payload.vendor).to.eq(vendorId);
  });
  //client Price
  it("Checking that response include clientPrice", () => {
    expect(serviceHelper.response.body.payload.clientPrice).not.to.be.undefined;
  });
  it("Checking that clientPrice is a number", () => {
    expect(serviceHelper.response.body.payload.clientPrice).to.be.an("number");
  });
  it("Checking that response include clientPrice is the same", () => {
    expect(serviceHelper.response.body.payload.clientPrice).to.eq(clientPrice);
  });
  //vendor Price
  it("Checking that response include vendorPrice", () => {
    expect(serviceHelper.response.body.payload.vendorPrice).not.to.be.undefined;
  });
  it("Checking that vendorPrice is a number", () => {
    expect(serviceHelper.response.body.payload.vendorPrice).to.be.an("number");
  });
  it("Checking that response include vendorPrice is the same", () => {
    expect(serviceHelper.response.body.payload.vendorPrice).to.eq(vendorPrice);
  });
})
