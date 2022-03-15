
//IMPORT SECTION
//  Import dotenv package - to work with environmental project's variables
import 'dotenv/config';
//  Import Helper(s)
import UserHelper from '../helpers/user.helper';
//  Create a new instanse of helper
const userHelper = new UserHelper();
//MAIN MOCHA HOOKS
//  Before - will be runned before all the tests - MAIN PRECONDITIONS
before(async () => {
  //Create a new user / login / save a token to variable etc
    await userHelper.login(process.env.EMAIL, process.env.PASSWORD);
    process.env["TOKEN"] = userHelper.response.body.payload.token;
    //console.log(userHelper.response.body);
    //console.log(process.env.TOKEN);
});
//  After - will be runned after all the tests - MAIN POSTCONDITIONS
after(async () => {
  //Clear all the test changes
});

