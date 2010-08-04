FizzBuzzSequence = function(start, end){
    var start = start;
    var end = end;
    var calculatedString = '';

    (function(){
        var arr = [];
        for (i = start; i <= end; i++) {
            arr.push(i);
            calculatedString = arr.join(',');
        }
    }());

    this.getString = function(){
        return calculatedString;
    }
}