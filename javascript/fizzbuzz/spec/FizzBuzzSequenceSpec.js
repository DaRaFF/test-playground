describe("FizzBuzzSequence", function() {

    it('should return String "1" in a sequence from 1 to 1', function () {
        var fizzBuzzSequence = new FizzBuzzSequence(1,1);
        expect(fizzBuzzSequence.getString()).toEqual("1");
    });
    it('should return String "1,2,3" in a sequence from 1 to 3', function () {
        var fizzBuzzSequence = new FizzBuzzSequence(1,3);
        expect(fizzBuzzSequence.getString()).toEqual("1,2,3");
    });
    it('should end with String "98,99,100" in a sequence from 1 to 100', function () {
        var fizzBuzzSequence = new FizzBuzzSequence(1,100);
        expect(fizzBuzzSequence.getString()).toMatch("98,99,100$");
    });
});