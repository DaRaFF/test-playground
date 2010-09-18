<?php

require_once 'PHPUnit/Framework.php';
require_once dirname(__FILE__) . '/../FizzBuzz.php';

class FizzBuzzTest extends PHPUnit_Framework_TestCase {

    private $_fizzbuzz;

    protected function setUp() {
        $this->_fizzbuzz = new Fizzbuzz;
    }

    public function testFizzBuzzValueOfOneShouldBeOne() {
        $this->assertEquals("1", $this->_fizzbuzz->getFizzBuzzValueOf(1));
    }

    public function testFizzBuzzValueOfTwoShouldBeTwo() {
        $this->assertEquals("2", $this->_fizzbuzz->getFizzBuzzValueOf(2));
    }

    public function testFizzBuzzValueOfThreeShouldBeFizz() {
        $this->assertEquals("Fizz", $this->_fizzbuzz->getFizzBuzzValueOf(3));
    }

    public function testFizzBuzzValueofFiveShouldBeBuzz() {
        $this->assertEquals("Buzz", $this->_fizzbuzz->getFizzBuzzValueOf(5));
    }

    public function testFizzBuzzMultipleValueOfThreeShouldBeFizz() {
        $this->assertEquals("Fizz", $this->_fizzbuzz->getFizzBuzzValueOf(6));
    }

    public function testFizzBuzzMultipleValueOfFiveShouldBeBuzz() {
        $this->assertEquals("Buzz", $this->_fizzbuzz->getFizzBuzzValueOf(10));
    }

    public function testFizzBuzzMultipleValueOfFiveAndThreeShouldBeFizzBuzz() {
        $this->assertEquals("FizzBuzz", $this->_fizzbuzz->getFizzBuzzValueOf(15));
    }

}
?>
