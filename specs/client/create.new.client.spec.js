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
    //console.log(clientHelper.response.statusCode);
    console.log(clientHelper.response.body);
    
  });
  //Test Cases
  it("Checking that response status code is 200", () => {
    expect(clientHelper.response.statusCode).to.eq(200);
  })
})