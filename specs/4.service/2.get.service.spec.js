import { expect } from "chai";
//  Import helper(s)
import ServiceHelper from "../../helpers/service.helper";
import VendorHelper from "../../helpers/vendor.helper";
const serviceHelper = new ServiceHelper();
const vendorHelper = new VendorHelper();

//Main Test Suite
describe("\nSuccessful get service sub suite", () => {
  //BEFORE hook
  before(async () => {
    //await vendorHelper.create("name", "description");
     //console.log(vendorHelper.response.body,"Vendor_IDtext");
     //let vendorId = vendorHelper.response.body.payload;
    
     await serviceHelper.getByID();
    console.log(process.env.serviceID,"Text service") ;
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
  //
  it("Checking that response include silent", () => {
    expect(serviceHelper.response.body.silent).to.eq(true);
  });
  it("Checking that response include silent", () => {
    expect(serviceHelper.response.body.silent).not.to.be.undefined;
  });
  it("Checking that response include serviceId", () => {
    expect(serviceHelper.response.body.payload).not.to.be.undefined;
  });
  //
  it("Checking that response.body.payload.serviceId is a string", () => {
    expect(serviceHelper.response.body.payload._id).to.be.an("string");
  });
  it("Checking that response include description", () => {
    expect(serviceHelper.response.body.payload.description).not.to.be.undefined;
  });
  //
  it("Checking that description is a string", () => {
    expect(serviceHelper.response.body.payload.description).to.be.an("string");
  });
  it("Checking that response include serviceID has 24 symbols", () => {
    expect(serviceHelper.response.body.payload._id.length).to.eq(24);
  });
  it("Checking that ID is the same as serviceID", () => {
    expect(serviceHelper.response.body.payload._id).to.eq(process.env.serviceID);
  });
})