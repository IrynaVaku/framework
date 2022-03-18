import { expect } from "chai";
//  Import helper(s)
import ServiceHelper from "../../helpers/service.helper";
import VendorHelper from "../../helpers/vendor.helper";
const serviceHelper = new ServiceHelper();
const vendorHelper = new VendorHelper();
//let vendor 

//Main Test Suite
describe("\nSuccessful create new service sub suite", () => {
  //BEFORE hook
  before(async () => {
    await vendorHelper.create("name", "description");
    process.env["VENDORID"] = vendorHelper.response.body.payload;
    console.log(vendorHelper.response.body,"Vendor_IDtext");
    let vendorId = vendorHelper.response.body.payload;
    
    await serviceHelper.create("name", "vendorId", "vendorPrice","clientPrice");
    console.log(serviceHelper.response.body,"Service_IDtext");
    process.env["SERVICEID"] = serviceHelper.response.body.payload;
    console.log(process.env.serviceID,"text" );
    //console.log(serviceHelper.response.body);
  });
  //Test Cases
  it("Checking that response status code is 200", () => {
    expect(serviceHelper.response.statusCode).to.eq(200);
  })
  it("Checking that response include message", () => {
    expect(serviceHelper.response.body.message).to.eq("Service created");
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
    expect(serviceHelper.response.body.payload).to.be.an("string");
  });
  it("Checking that response include serviceID has 24 symbols", () => {
    expect(serviceHelper.response.body.payload.length).to.eq(24);
  });
})