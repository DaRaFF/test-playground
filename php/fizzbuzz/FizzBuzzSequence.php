<?php

require_once 'FizzBuzz.php';

class FizzBuzzSequence {

    private $_fizzBuzz;

    function __construct() {
        $this->_fizzBuzz = new FizzBuzz();
    }

    public function getFizzBuzzSequence($start, $stop) {
        $arr = array();
        $calculatedString = "";

        for ($i = $start; $i <= $stop; $i++) {
            $arr[] = $this->_fizzBuzz->getFizzBuzzValueOf($i);
        }

        $calculatedString = implode(",", $arr);

        return $calculatedString;
    }

}
