<?php

require_once 'FizzBuzzSequence.php';
require_once 'FizzBuzz.php';

$oFizzBuzzSequence = new FizzBuzzSequence;
echo $oFizzBuzzSequence->getFizzBuzzSequence(1,100);
