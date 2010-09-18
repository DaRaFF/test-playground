<?php

require_once 'PHPUnit/Framework.php';

require_once dirname(__FILE__) . '/../FizzBuzzSequence.php';

class FizzBuzzSequenceTest extends PHPUnit_Framework_TestCase {

    private $_fizzBuzzSequence;

    protected function setUp() {
        $this->_fizzBuzzSequence = new FizzBuzzSequence;
    }

    public function testFizzBuzzSequenceFromOneToOne() {
        $this->assertEquals("1", $this->_fizzBuzzSequence->getFizzBuzzSequence(1, 1));
    }

    public function testFizzBuzzSequenceFromOneToThree() {
        $this->assertEquals("1,2,Fizz", $this->_fizzBuzzSequence->getFizzBuzzSequence(1, 3));
    }

    public function testFizzBuzzSequenceFromOneToHundredEndsWith98FizzBuzz() {
        $fullStr = $this->_fizzBuzzSequence->getFizzBuzzSequence(1, 100);
        $this->assertRegExp("/.*98,Fizz,Buzz$/",$fullStr);
    }
}