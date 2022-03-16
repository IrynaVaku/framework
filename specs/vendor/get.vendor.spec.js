import { expect } from "chai";
//  Import helper(s)
import VendorHelper from "../../helpers/vendor.helper";

const vendorHelper = new VendorHelper();
//Main Test Suite
describe("\nSuccessful get vendor sub suite", () => {
  //BEFORE hook
  before(async () => {
    await vendorHelper.get("name", "description");
    process.env.VENDORID = vendorHelper.response.body.payload._id
    console.log(process.env.VENDORID);
    console.log(vendorHelper.response.body);
  });
  //Test Cases
  it("Checking that response status code is 200", () => {
    expect(vendorHelper.response.statusCode).to.eq(200);
  })
  it("Checking that response include message", () => {
    expect(vendorHelper.response.body.message).to.eq("Get Vendor by id ok");
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
    expect(vendorHelper.response.body.payload._id).to.be.an("string");
  });
  it("Checking that response include description", () => {
    expect(vendorHelper.response.body.payload.description).not.to.be.undefined;
  });
  //
  it("Checking that description is a string", () => {
    expect(vendorHelper.response.body.payload.description).to.be.an("string");
  });
  it("Checking that response include vendorID has 24 symbols", () => {
    expect(vendorHelper.response.body.payload._id.length).to.eq(24);
  });
  it("Checking that ID is the same as vendorID", () => {
    expect(vendorHelper.response.body.payload._id).to.eq(process.env.VENDORID);
  });
})