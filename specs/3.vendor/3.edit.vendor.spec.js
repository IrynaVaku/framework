import { expect } from "chai";
//  Import helper(s)
import VendorHelper from "../../helpers/vendor.helper";

const vendorHelper = new VendorHelper();
const name1 = "Jey Lo";
const name2 = "Ann Lo";
const description1 = "prereg";
const description2 = "commit";
//Main Test Suite
describe("\nSuccessful edit vendor sub suite", () => {
  //BEFORE hook
  before(async () => {
    await vendorHelper.create(name1, description1);
    process.env.VENDORID = vendorHelper.response.body.payload;
    await vendorHelper.edit(name2, description2);
    await vendorHelper.getByID();
     console.log(vendorHelper.response.body);
    console.log(process.env.VENDORID);

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
})