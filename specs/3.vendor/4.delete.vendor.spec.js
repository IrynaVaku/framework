import { expect } from "chai";
//  Import helper(s)
import VendorHelper from "../../helpers/vendor.helper";

const vendorHelper = new VendorHelper();
//Main Test Suite
describe("\nSuccessful delete vendor sub suite", () => {
  //BEFORE hook
  before(async () => {
    await vendorHelper.delete();
     console.log(vendorHelper.response.body);
    console.log(process.env.VENDORID);

  });
  //Test Cases
  it("Checking that response status code is 200", () => {
    expect(vendorHelper.response.statusCode).to.eq(200);
  })
  it("Checking that response include message", () => {
    expect(vendorHelper.response.body.message).to.eq("Vendor deleted");
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
})