import { expect } from "chai";
//  Import helper(s)
import VendorHelper from "../../helpers/vendor.helper";

const vendorHelper = new VendorHelper();

//Main Test Suite
describe("\nSuccessful create new vendor sub suite", () => {
  //BEFORE hook
  before(async () => {
    await vendorHelper.create("name", "description");
    console.log(vendorHelper.response.body,"Vendor_IDtext");
    process.env["VENDORID"] = vendorHelper.response.body.payload;
    console.log(process.env.VENDORID,"text" );
    //console.log(vendorHelper.response.body);
  });
  //Test Cases
  it("Checking that response status code is 200", () => {
    expect(vendorHelper.response.statusCode).to.eq(200);
  })
  it("Checking that response include message", () => {
    expect(vendorHelper.response.body.message).to.eq("Vendor created");
  });
  it("Checking that response include message", () => {
    expect(vendorHelper.response.body.message).not.to.be.undefined;
  });
  it("Checking that response include success", () => {
    expect(vendorHelper.response.body.success).to.eq(true);
  });
  it("Checking that response include success", () => {
    expect(vendorHelper.response.body.success).not.to.be.undefined;
  });
  //
  it("Checking that response include fail", () => {
    expect(vendorHelper.response.body.fail).to.eq(false);
  });
  it("Checking that response include fail", () => {
    expect(vendorHelper.response.body.fail).not.to.be.undefined;
  });
  //
  it("Checking that response include silent", () => {
    expect(vendorHelper.response.body.silent).to.eq(true);
  });
  it("Checking that response include silent", () => {
    expect(vendorHelper.response.body.silent).not.to.be.undefined;
  });
  it("Checking that response include vendorId", () => {
    expect(vendorHelper.response.body.payload).not.to.be.undefined;
  });
  //
  it("Checking that response.body.payload.vendorId is a string", () => {
    expect(vendorHelper.response.body.payload).to.be.an("string");
  });
  it("Checking that response include vendorID has 24 symbols", () => {
    expect(vendorHelper.response.body.payload.length).to.eq(24);
  });
})