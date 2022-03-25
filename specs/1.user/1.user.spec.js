//IMPORT SECTION
//  Import {expect} assertion function from Chai assertion library
import { expect } from "chai";
//  Import helper(s)
import UserHelper from "../../helpers/user.helper";
//  Creating a new instance of helper(s)
const userHelper = new UserHelper();
//  Main Test Suite
describe("\nSuccessful create new user sub suite (happy path with valid login and password)", () => {
  //BEFORE hook
  before(async () => {
    await userHelper.create("firstName", "lastName", process.env.EMAIL, process.env.PASSWORD);
    //console.log(userHelper.response);
  });
  //Test Cases CREATE USER
  it("Checking that response status code is 201", () => {
    expect(userHelper.response.statusCode).to.eq(201);
  });
  //
  it("Checking that response include message", () => {
    expect(userHelper.response.body.message).to.eq("User created successfully. Please check your email and verify it");
  });
  it("Checking that response include message", () => {
    expect(userHelper.response.body.message).not.to.be.undefined;
  });
  //
  it("Checking that response include success", () => {
    expect(userHelper.response.body.success).to.eq(true);
  });
  it("Checking that response include success", () => {
    expect(userHelper.response.body.success).not.to.be.undefined;
  });
  //
  it("Checking that response include fail", () => {
    expect(userHelper.response.body.fail).to.eq(false);
  });
  it("Checking that response include fail", () => {
    expect(userHelper.response.body.fail).not.to.be.undefined;
  });
  //
  it("Checking that response include silent", () => {
    expect(userHelper.response.body.silent).to.eq(true);
  });
  it("Checking that response include silent", () => {
    expect(userHelper.response.body.silent).not.to.be.undefined;
  });
});
//Login Test cases LOGIN
describe("\nSuccessful login user sub suite (happy path with valid login and password)", () => {
  //BEFORE hook
  before(async () => {
    await userHelper.login(process.env.EMAIL, process.env.PASSWORD);
    process.env.USERID = userHelper.response.body.payload.userId;
    console.log(process.env.USERID);
  });
  //Test Cases
  it("Checking that response status code is 200", () => {
    expect(userHelper.response.statusCode).to.eq(200);
  });
  //
  it("Checking that response include message", () => {
    expect(userHelper.response.body.message).to.eq("Auth success");
  });
  it("Checking that response include message", () => {
    expect(userHelper.response.body.message).not.to.be.undefined;
  });
  //
  it("Checking that response include token with length has more than 200 symbols", () => {
    expect(userHelper.response.body.payload.token).to.have.lengthOf.greaterThan(200);
  });
  it("Checking that response include token", () => {
    expect(userHelper.response.body.payload.token).not.to.be.undefined;
    console.log(userHelper.response.body.payload.token);
  });
  //
  it("Checking that response.body.payload.token is a string", () => {
    expect(userHelper.response.body.payload.token).to.be.an("string");
  });
  it("Checking that response include user role is array", () => {
    expect(userHelper.response.body.payload.user.roles).to.be.an("array");
  });
  //
  it("Checking that response body.payload.user.roles", () => {
    expect(userHelper.response.body.payload.user.roles).not.to.be.undefined;
  });
  //it("Checking that response include user role is new", () => {
   // expect(userHelper.response.body.payload.user.roles[0]).to.eq("new");
  //});
  it("Checking that response include user role is verified", () => {
     expect(userHelper.response.body.payload.user.roles[0]).to.eq("verified");
   });
  it("Checking that response includs acl key that is not undefined", () => {
    expect(userHelper.response.body.payload.acl).not.to.be.undefined;
  });
  it("Checking that response include acl is user.auth", () => {
    expect(userHelper.response.body.payload.acl[0]).to.eq("user.auth");
  });
  it("Checking that response include userId", () => {
    expect(userHelper.response.body.payload.userId).not.to.be.undefined;
  });
  //
  it("Checking that response.body.payload.userId is a string", () => {
    expect(userHelper.response.body.payload.userId).to.be.an("string");
  });
  it("Checking that response include userID has 24 symbols", () => {
    expect(userHelper.response.body.payload.userId.length).to.eq(24);
  });
});
