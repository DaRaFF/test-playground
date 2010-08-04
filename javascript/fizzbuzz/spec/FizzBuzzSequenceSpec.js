describe("FizzBuzzSequence", function() {
    it('should be initialised', function () {
        var fizzBuzzSequence = new FizzBuzzSequence(1,1);
        expect(fizzBuzzSequence).toBeDefined();
    });

    it('should be a test', function () {
        var foo = 0;            // set up the world
        foo++;                  // call your application code

        expect(foo).toEqual(1); // passes because foo == 1
    });

});