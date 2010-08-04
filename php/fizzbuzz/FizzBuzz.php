<?php

class FizzBuzz {

    public function getFizzBuzzValueOf($value) {
        $fizzBuzzReturnValue = $value;
        if ($value % 3 === 0) {
            $fizzBuzzReturnValue = "Fizz";
        }
        if ($value % 5 === 0) {
            $fizzBuzzReturnValue = "Buzz";
        }
        if ($value % 15 === 0) {
            $fizzBuzzReturnValue = "FizzBuzz";
        }

        return $fizzBuzzReturnValue;
    }

}

