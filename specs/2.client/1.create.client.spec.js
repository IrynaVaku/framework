import { expect } from "chai";
//  Import helper(s)
import ClientHelper from "../../helpers/client.helper";
//  Creating a new instance of helper(s)
//import setup  from "../../config/setup";
const clientHelper = new ClientHelper();
//Main Test Suite
describe("\nSuccessful create new client sub suite", () => {
  //BEFORE hook
  before(async () => {
    await clientHelper.create("name", "phone", "email", "notes");
    process.env["CLIENTID"] = clientHelper.response.body.payload;
    console.log(process.env.CLIENTID);
    console.log(clientHelper.response.body);
    
  });
  //Test Cases
  it("Checking that response status code is 200", () => {
    expect(clientHelper.response.statusCode).to.eq(200);
  })
  //Test Cases
  it("Checking that response status code is 200", () => {
    expect(clientHelper.response.statusCode).to.eq(200);
  })
  it("Checking that response include message", () => {
    expect(clientHelper.response.body.message).to.eq("Client created");
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
  it("Checking that response include clientId", () => {
    expect(clientHelper.response.body.payload).not.to.be.undefined;
  });
  //
  it("Checking that response.body.payload.clientId is a string", () => {
    expect(clientHelper.response.body.payload).to.be.an("string");
  });
  it("Checking that response include clientID has 24 symbols", () => {
    expect(clientHelper.response.body.payload.length).to.eq(24);
  });
})