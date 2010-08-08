var FizzBuzzSequence = function(start, end){
    var start = start;
    var end = end;
    var calculatedString = '';

    (function(){
        var arr = [];
        for (i = start; i <= end; i++) {
            var value = FizzBuzz.getFizzBuzzValueOf(i);
            arr.push(value);
            calculatedString = arr.join(',');
        }
    }());

    this.getString = function(){
        return calculatedString;
    }
}