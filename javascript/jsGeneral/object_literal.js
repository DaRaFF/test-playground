console.log("--- object_literal ---");

////OBJECT LITERALS
//
//This is a initialised object with object name meinObjekt
//All members are public (variables and functions)
//You can add any members at runtime - e.g. meinObjekt.d = 'blubb'
var meinObjekt = {
    a: 3,
    b: 4,
    c: function(){
        return meinObjekt.a*meinObjekt.b;
    }
}




//NAMESPACES

//create namespaces with object literals
var namespace = {
    caching: {},
    orm: {
        mapping: {},
        save: {}
    }
}
//expand namespace with function
namespace.orm.mapping.message = function(){
    return "all right";
}
//console logging - return = function()
console.log(namespace.orm.mapping.message);
//console logging - return = "all right"
console.log(namespace.orm.mapping.message());


console.log("--- object_literal end ---");

