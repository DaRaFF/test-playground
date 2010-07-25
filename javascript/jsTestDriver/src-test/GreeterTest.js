TestCase("GreeterTest", {
    setUp: function() {
        //tmp backup, because myapp.Greeter is global and the mock
        //is overwriting the methods i mock
        this.tmpObjectGreeter = myapp.Greeter;
    },

    testMockupObjectGreeter: function(){
        //prepare an object for mocking - some stubbing functions will be added
        //to the object
        myapp.Greeter = mock(myapp.Greeter);
        //if i call greet() - return value = "Hello Mockito"
        //else nothing is happening to other functions in the object
        //same behaviour as before the mock
        when(myapp.Greeter).greet().thenReturn("Hello Mockito!");

        assertEquals("", "Hello Mockito!", myapp.Greeter.greet("Mr. Johnson"));
        assertEquals("", "Bye Mr. Johnson!", myapp.Greeter.goodbye("Mr. Johnson"));
    },


    tearDown: function() {
        //Restore myapp.Greeter to original
        myapp.Greeter = this.tmpObjectGreeter;
    }
});