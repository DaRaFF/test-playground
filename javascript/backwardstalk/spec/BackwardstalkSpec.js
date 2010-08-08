describe ('Backwards Talk', function(){
    it ('should return A if i put A into Backwards Talk', function () {
        value = backwardsTalk("A");
        expect("A").toEqual(value);
    });
    it ('should return ultra if i put artlu into Backwards Talk', function () {
        value = backwardsTalk("artlu");
        expect("ultra").toEqual(value);
    });
});