/*
 * Description http://codingkata.org/katas/unit/fibonacci-killer
 */

var fibonacci = function(value){
    if(value > 1){
        return fibonacci(value-1) + fibonacci(value-2);
    }
    return value;
}