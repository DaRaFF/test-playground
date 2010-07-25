TestCase("htmlTest", {
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
    },

    testHtml: function(){
        assertEquals("", "", this.btnNeu.style.visibility);
        assertEquals("", "hidden", this.btnBearbeiten.style.visibility);
    },

    tearDown: function() {
    }
});