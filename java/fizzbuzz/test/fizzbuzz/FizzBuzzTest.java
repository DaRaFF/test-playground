package fizzbuzz;

import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class FizzBuzzTest {

    private FizzBuzz _fizzbuzz;

    @Before
    public void setUp() {
       _fizzbuzz = new FizzBuzz();
    }

    @Test
    public void testFizzBuzzValueOfOneShouldBeOne() {
        assertEquals("1", this._fizzbuzz.getFizzBuzzValueOf(1));
    }
    
    @Test
    public void testFizzBuzzValueOfTwoShouldBeTwo() {
        assertEquals("2", this._fizzbuzz.getFizzBuzzValueOf(2));
    }

    @Test
    public void testFizzBuzzValueOfThreeShouldBeFizz() {
        assertEquals("Fizz", this._fizzbuzz.getFizzBuzzValueOf(3));
    }

    @Test
    public void testFizzBuzzValueofFiveShouldBeBuzz() {
        assertEquals("Buzz", this._fizzbuzz.getFizzBuzzValueOf(5));
    }

    @Test
    public void testFizzBuzzMultipleValueOfThreeShouldBeFizz() {
        assertEquals("Fizz", this._fizzbuzz.getFizzBuzzValueOf(6));
    }

    @Test
    public void testFizzBuzzMultipleValueOfFiveShouldBeBuzz() {
        assertEquals("Buzz", this._fizzbuzz.getFizzBuzzValueOf(10));
    }

    @Test
    public void testFizzBuzzMultipleValueOfFiveAndThreeShouldBeFizzBuzz() {
        assertEquals("FizzBuzz", this._fizzbuzz.getFizzBuzzValueOf(15));
    }

}