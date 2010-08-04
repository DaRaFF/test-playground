<?php

require_once 'PHPUnit/Framework.php';

require_once dirname(__FILE__) . '/../FizzBuzzSequence.php';

class FizzBuzzSequenceTest extends PHPUnit_Framework_TestCase {

    protected function setUp() {
        $this->object = new FizzBuzzSequence;
    }

    public function testFizzBuzzSequenceOneToOne() {
        $this->assertEquals("1", $this->object->getFizzBuzzSequence(1, null));
    }

    public function testFizzBuzzSequenceOneToTwo() {
        $this->assertEquals("1,2", $this->object->getFizzBuzzSequence(1, 2));
    }

    public function testFizzBuzzSequenceOneToHundred() {
        $fullStr = $this->object->getFizzBuzzSequence(1, 100);
        $endStr = "Fizz,Buzz";
        $this->assertEquals($endStr, $this->endsWith($fullStr, $endStr));
    }

    public function testIfEndsWithIfTrueIsTrue() {
        $fullStr = "95,96,97,98,99,100";
        $endStr = "99,100";
        $this->assertTrue($this->endsWith($fullStr, $endStr));
    }

    public function testIfEndsWithIfFalseIsFalse() {
        $fullStr = "95,96,97,98,99,100";
        $endStr = "98,100";
        $this->assertFalse($this->endsWith($fullStr, $endStr));
    }

    public function testIsLastValueOfSequence() {
        $this->assertTrue($this->object->isLastValueOfSequence(66, 66));
    }

    function endsWith($FullStr, $EndStr) {
        $StrLen = strlen($EndStr);
        $FullStrEnd = substr($FullStr, strlen($FullStr) - $StrLen);
        return $FullStrEnd == $EndStr;
    }

}
?>
