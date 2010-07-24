//function myRealFunction
function myRealFunction(){
    return "I'm a real function";
}

//object myapp.Greeter
myapp = {};
myapp.Greeter = function() { };
myapp.Greeter.prototype.greet = function(name) {
  return "Hello " + name + "!";
};
myapp.Greeter.prototype.goodbye = function(name) {
  return "Bye " + name + "!";
};

