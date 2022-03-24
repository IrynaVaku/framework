module.exports = {
    //Import babel to the project
  require: '@babel/register',
    //Setup all the specs that will be runned
  spec: 'specs/4.service/3.edit.service.spec.js',
    //Setup configuretion file - MAIN HOOKS
  file: 'config/setup.js',
    //Setup all the specs that will be ignored
  //ignore: 'specs/example.spec',
    //Setup additionall timeout (2000 by default)
  //timeout: 10000
}
