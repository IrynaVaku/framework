import { expect } from "chai";
//  Import helper(s)
import ClientHelper from "../../helpers/client.helper";
//  Creating a new instance of helper(s)
//import setup  from "../../config/setup";
const clientHelper = new ClientHelper();
//Main Test Suite
describe("\nSuccessful delete client sub suite", () => {
  //BEFORE hook
  before(async () => {
    await clientHelper.delete();
    console.log(process.env.CLIENTID);
    console.log(clientHelper.response.body);
    
  });
  //Test Cases
  it("Checking that response status code is 200", () => {
    expect(clientHelper.response.statusCode).to.eq(200);
  })
  it("Checking that response include message", () => {
    expect(clientHelper.response.body.message).to.eq("Client deleted");
  });
  it("Checking that response include message", () => {
    expect(clientHelper.response.body.message).not.to.be.undefined;
  });
  it("Checking that response include success", () => {
    expect(clientHelper.response.body.success).to.eq(true);
  });
  it("Checking that response include success", () => {
    expect(clientHelper.response.body.success).not.to.be.undefined;
  });
  //
  it("Checking that response include fail", () => {
    expect(clientHelper.response.body.fail).to.eq(false);
  });
  it("Checking that response include fail", () => {
    expect(clientHelper.response.body.fail).not.to.be.undefined;
  });
  //
  it("Checking that response include silent", () => {
    expect(clientHelper.response.body.silent).to.eq(true);
  });
  it("Checking that response include silent", () => {
    expect(clientHelper.response.body.silent).not.to.be.undefined;
  });
})