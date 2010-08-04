<?php

require_once 'PHPUnit/Framework.php';

require_once dirname(__FILE__) . '/../FizzBuzz.php';

class FizzBuzzTest extends PHPUnit_Framework_TestCase {

    protected function setUp() {
        $this->object = new Fizzbuzz;
    }

    public function testFizzBuzzValueOfOneShouldBeOne() {
        $this->assertEquals("1", $this->object->getFizzBuzzValueOf(1));
    }

    public function testFizzBuzzValueOfTwoShouldBeTwo() {
        $this->assertEquals("2", $this->object->getFizzBuzzValueOf(2));
    }

    public function testFizzBuzzValueOfThreeShouldBeFizz() {
        $this->assertEquals("Fizz", $this->object->getFizzBuzzValueOf(3));
    }

    public function testFizzBuzzValueofFiveShouldBeBuzz() {
        $this->assertEquals("Buzz", $this->object->getFizzBuzzValueOf(5));
    }

    public function testFizzBuzzMultipleValueOfThreeShouldBeFizz() {
        $this->assertEquals("Fizz", $this->object->getFizzBuzzValueOf(6));
    }

    public function testFizzBuzzMultipleValueOfFiveShouldBeBuzz() {
        $this->assertEquals("Buzz", $this->object->getFizzBuzzValueOf(10));
    }

    public function testFizzBuzzMultipleValueOfFiveAndThreeShouldBeFizzBuzz() {
        $this->assertEquals("FizzBuzz", $this->object->getFizzBuzzValueOf(15));
    }

}
?>
