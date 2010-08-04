describe("FizzBuzz", function() {

    describe("when no special rule catches", function(){
        it('should return 1 if I put 1 into Fizzbuzzer', function () {
            var value = FizzBuzz.getFizzBuzzValueOf(1);
            expect(1).toEqual(value);
        });
        it('should return 2 if I put 2 into Fizzbuzzer', function () {
            var value = FizzBuzz.getFizzBuzzValueOf(2);
            expect(2).toEqual(value);
        });
    });


    describe("when a fizzbuzz rule catches", function(){
        it('should return Fizz if I put 3 into Fizzbuzzer', function () {
            var value = FizzBuzz.getFizzBuzzValueOf(3);
            expect("Fizz").toEqual(value);
        });
        it('should return Buzz if I put 5 into Fizzbuzzer', function () {
            var value = FizzBuzz.getFizzBuzzValueOf(5);
            expect("Buzz").toEqual(value);
        });
        it('should return FizzBuzz if I put 15 into Fizzbuzzer', function () {
            var value = FizzBuzz.getFizzBuzzValueOf(15);
            expect("FizzBuzz").toEqual(value);
        });
    });

    describe("when a multiple fizzbuzz rule catches", function(){
        it('should return Fizz if I put 6 into Fizzbuzzer', function () {
            var value = FizzBuzz.getFizzBuzzValueOf(6);
            expect("Fizz").toEqual(value);
        });
        it('should return Buzz if I put 10 into Fizzbuzzer', function () {
            var value = FizzBuzz.getFizzBuzzValueOf(10);
            expect("Buzz").toEqual(value);
        });
    });
});

