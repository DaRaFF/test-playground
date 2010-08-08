describe ('Fibonacci', function(){
    it ('should return 0 if i put 0 into Fibonacci', function () {
        value = fibonacci(0);
        expect(0).toEqual(value);
    });
    it ('should return 1 if i put 1 into Fibonacci', function () {
        value = fibonacci(1);
        expect(1).toEqual(value);
    });
    it ('should return 1 if i put 2 into Fibonacci', function () {
        value = fibonacci(2);
        expect(1).toEqual(value);
    });
    it ('should return 3 if i put 4 into Fibonacci', function () {
        value = fibonacci(4);
        expect(3).toEqual(value);
    });
    it ('should return 5 if i put 5 into Fibonacci', function () {
        value = fibonacci(5);
        expect(5).toEqual(value);
    });
    it ('should return 8 if i put 6 into Fibonacci', function () {
        value = fibonacci(6);
        expect(8).toEqual(value);
    });
});