<?php

require_once 'PHPUnit/Framework.php';

require_once dirname(__FILE__) . '/../FizzBuzzSequence.php';

class FizzBuzzSequenceTest extends PHPUnit_Framework_TestCase {

    protected function setUp() {
        $this->object = new FizzBuzzSequence;
    }

    public function testFizzBuzzSequenceOneToOne() {
        $this->assertEquals("1", $this->object->getFizzBuzzSequence(1, 1));
    }

    public function testFizzBuzzSequenceOneToThree() {
        $this->assertEquals("1,2,Fizz", $this->object->getFizzBuzzSequence(1, 3));
    }

    public function testFizzBuzzSequenceOneToHundredEndsWith98FizzBuzz() {
        $fullStr = $this->object->getFizzBuzzSequence(1, 100);
        $this->assertRegExp("/98,Fizz,Buzz$/",$fullStr);
    }
}