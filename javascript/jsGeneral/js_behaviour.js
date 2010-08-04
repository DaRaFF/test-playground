console.log("--- js_behaviour ---");


//init namespace with some functions and objects
function TheGreat() {}

TheGreat.imGreater = function () {
    return "imGreater";
}

TheGreat.imAlsoGreater = function () {
    this.a = 11;
    this.b = 12;
    this.c = function(){return true}
    return "imAlsoGreater";
}
TheGreat.imTheGreatest = {
    d: 11,
    e: 12,
    f: function(){return true}
}


//type object - an empty object
var imGreaterObject = new TheGreat.imGreater;
console.log(imGreaterObject);

//type function
var imGreaterFunction = TheGreat.imGreater;
console.log(imGreaterFunction);

//type string - "imGreater"
var imGreaterFunctionExecuted = TheGreat.imGreater();
console.log(imGreaterFunctionExecuted);




//type object - with members a,b,c - return is irrelevant
var imAlsoGreaterObject = new TheGreat.imAlsoGreater;
console.log(imAlsoGreaterObject);

//type function
var imAlsoGreaterFunction = TheGreat.imAlsoGreater;
console.log(imAlsoGreaterFunction);

//type string - "imAlsoGreater"
var imAlsoGreaterFuctionExecuted = TheGreat.imAlsoGreater();
console.log(imAlsoGreaterFuctionExecuted);






//TheGreat.imTheGreatest is an object literal and therefore always an instanced object

//error - an object can not be reinstanced
//var imTheGreatestObject = new TheGreat.imTheGreatest;

//type object - with members d,e,f
var imTheGreatest = TheGreat.imTheGreatest;
console.log(imTheGreatest);

//error - an object can not executed as a function
//var imTheGreatestFunctionExecuted = TheGreat.imTheGreatest();




console.log("--- js_behaviour end ---");




