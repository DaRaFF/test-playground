TestCase("JSTestExampleTest", {
    setUp: function() {
        //here you can set up some html stuff for the test
        /*:DOC +=
        <div>
           <input id="btn_1" type="button" value="Neu">
           <input id="btn_2" type="button" value="Bearbeiten" style="visibility:hidden">
           <input id="btn_3" type="button" value="Drucken">
           <input id="btn_4" type="button" value="Excel">
        </div>
        */
       
        this.btnNeu = document.getElementById('btn_1');
        this.btnBearbeiten = document.getElementById('btn_2');

        //tmp backup, because myRealFunction is global and the mock
        //is overwriting the function
        this.tmpMyRealFunction = myRealFunction;
    },


    testImARealFunction: function(){
        assertEquals("", "I'm a real function", myRealFunction());
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

    testMockupObjectGreeter: function(){
        var mockedObject = mock(myapp.Greeter);
        when(mockedObject).greet().thenReturn("hello world");
        assertEquals("", "hello world", mockedObject.greet("myName"));
        assertEquals("", undefined, mockedObject.goodbye("myName"));
    },

    testHtml: function(){
        assertEquals("Neu Button ist sichtbar", "", this.btnNeu.style.visibility);
        assertEquals("Bearbeiten Button ist unsichtbar", "hidden", this.btnBearbeiten.style.visibility);
    },
    
    tearDown: function() {
        myRealFunction = this.tmpMyRealFunction;
    }
});