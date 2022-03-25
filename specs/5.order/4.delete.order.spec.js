import { expect } from "chai";
//  Import helper(s)
import VendorHelper from "../../helpers/vendor.helper";
import ServiceHelper from "../../helpers/service.helper";

const serviceHelper = new ServiceHelper();
const vendorHelper = new VendorHelper();
let vendorId = null;
let serviceId = null;
const name = "Jey Lo First name"; 

 // const vendorPrice = 1740;
 // const clientPrice = 1520;

//Main Test Suite
describe("\nSuccessful delete service sub suite", () => {
  //BEFORE hook
  before(async () => {
    await vendorHelper.create("name", "description");
       console.log(vendorHelper.response.body,"Vendor_IDtext");
      vendorId = vendorHelper.response.body.payload;

      await serviceHelper.create(name, vendorId, 1520, 1740);
      console.log(serviceHelper.response.body,"Service IDtext");
      serviceId = serviceHelper.response.body.payload;
   
      await serviceHelper.delete();
     console.log(serviceHelper.response.body, "La-la-la");
    console.log(process.env.SERVICEID);

  });
  //Test Cases
  it("Checking that response status code is 200", () => {
    expect(serviceHelper.response.statusCode).to.eq(200);
  })
  it("Checking that response include message", () => {
    expect(serviceHelper.response.body.message).to.eq("Service deleted");
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
})