<?php

class FizzBuzz {

    public function getFizzBuzzValueOf($value) {
        if ($value % 15 === 0) {
            return  "FizzBuzz";
        }
        if ($value % 3 === 0) {
            return "Fizz";
        }
        if ($value % 5 === 0) {
            return  "Buzz";
        }
        return $value;
    }

}