import { expect } from "chai";
//  Import helper(s)
import VendorHelper from "../../helpers/vendor.helper";
import ServiceHelper from "../../helpers/service.helper";

const serviceHelper = new ServiceHelper();
const vendorHelper = new VendorHelper();
let vendorId = null;
let serviceId = null;

const name1 = "Jey Lo First name"; 
const name2 = "Ann Lo Name after edit";
  const clientPrice1 = 4020;
  const clientPrice2 = 2050;
  const vendorPrice1 = 1740;
  const vendorPrice2 = 1520;
//Main Test Suite
describe("\nSuccessful edit service sub suite", () => {
    //BEFORE hook
    before(async () => {
      await vendorHelper.create("name", "description");
       console.log(vendorHelper.response.body,"Vendor_IDtext");
      vendorId = vendorHelper.response.body.payload;
      
      await serviceHelper.create(name1, vendorId, clientPrice1, vendorPrice1);
      console.log(serviceHelper.response.body,"Service IDtext");
      serviceId = serviceHelper.response.body.payload;

      await serviceHelper.edit( serviceId, vendorId, name2, clientPrice2, vendorPrice2);
      console.log(serviceHelper.response.body);
      console.log(serviceId, "Edit");
      
     /* await serviceHelper.getByID(serviceId);
      console.log(serviceId,"Text service2") ;
      console.log(serviceHelper.response.body);*/
  });
  //Test Cases
  it("Checking that response status code is 200", () => {
    expect(serviceHelper.response.statusCode).to.eq(200);
  });
  it("Checking that response include message", () => {
    expect(serviceHelper.response.body.message).to.eq("Service updated");
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
    });
    describe("\nSuccessful edit service sub suite", () => {
      //BEFORE hook
      before(async () => {
        
        await serviceHelper.getByID(serviceId);
      console.log(serviceId,"Text service2") ;
      console.log(serviceHelper.response.body);
  });
  it("Checking that response status code is 200", () => {
    expect(serviceHelper.response.statusCode).to.eq(200);
  });
})