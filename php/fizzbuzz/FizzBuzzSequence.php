<?php

require_once 'FizzBuzz.php';

class FizzBuzzSequence {

    private $oFizzBuzz;

    function __construct() {
        $this->oFizzBuzz = new FizzBuzz();
    }

    public function getFizzBuzzSequence($start, $stop) {
        $calculatedString = "";

        for ($i = $start; $i <= $stop; $i++) {
            $arr[] = $this->oFizzBuzz->getFizzBuzzValueOf($i);
        }

        $calculatedString = implode(",", $arr);

        return $calculatedString;
    }

}
