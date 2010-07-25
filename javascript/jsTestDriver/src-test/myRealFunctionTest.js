TestCase("myRealFunctionTest", {
    setUp: function() {
        //tmp backup, because myRealFunction is global and the mock
        //is overwriting the function
        this.tmpMyRealFunction = myRealFunction;
    },


    testImARealFunction: function(){
        assertEquals("", "real function", myRealFunction());
    },

    testMockFunctionWith0Argument: function(){
        //i mock my real existing function
        myRealFunction = mockFunction();

        //everytime i call myRealFunction - return value = false
        when(myRealFunction)().then(function() {
            return false;
        });

        assertEquals("", false, myRealFunction());
    },

    testMockFunctionWith1ArgumentAndFilterFoo: function(){
        //i mock my real existing function
        myRealFunction = mockFunction();

        //if i call my real function with 'foo' - return value = false
        //else - return value = undefined
        when(myRealFunction)("foo").then(function(arg) {
            return false;
        });

        assertEquals("", undefined, myRealFunction("im not in the filter declaration"));
        assertEquals("", false, myRealFunction("foo"));
    },

    tearDown: function() {
        myRealFunction = this.tmpMyRealFunction;
    }
});
