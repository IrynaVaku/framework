module.exports = {
    //Import babel to the project
  require: '@babel/register',
    //Setup all the specs that will be runned
  spec: 'specs/**/3.edit.order.spec.js',
    //Setup configuretion file - MAIN HOOKS
  file: 'config/setup.js',
    //Setup all the specs that will be ignored
  //ignore: 'specs/example.spec',
    //Setup additionall timeout (2000 by default)
  timeout: 5000
}
