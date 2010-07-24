<?php
require_once 'FizzBuzz.php';
class FizzBuzzSequence{
    public $oFizzBuzz;

    function __construct() {
		$this->oFizzBuzz = new FizzBuzz();
    }
    public function getFizzBuzzSequence($startSequence, $stopSequence){
		$sequence = "";

		if($stopSequence === null){
			$stopSequence = $startSequence;
		}

		for($i=$startSequence;$i<=$stopSequence;$i++){
			$sequence = $sequence.$this->oFizzBuzz->getFizzBuzzValueOf($i);
			if(!$this->isLastValueOfSequence($i,$stopSequence)){
				$sequence = $sequence.',';
			}
		}

		return $sequence;
    }
    public function isLastValueOfSequence($value, $lastValueOfSequence){
		if($value == $lastValueOfSequence){
			return true;
		}
    }
}
?>
