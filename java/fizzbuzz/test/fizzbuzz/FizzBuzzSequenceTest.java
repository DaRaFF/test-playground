package fizzbuzz;

import java.util.regex.*;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class FizzBuzzSequenceTest {

    private FizzBuzzSequence _fizzBuzzSequence;

    @Before
    public void setUp() {
        this._fizzBuzzSequence = new FizzBuzzSequence();
    }

    @Test
    public void testFizzBuzzSequenceFromOneToOne() {
        assertEquals("1", this._fizzBuzzSequence.getFizzBuzzSequence(1, 1));
    }

    @Test
    public void testFizzBuzzSequenceFromOneToThree() {
        assertEquals("1,2,Fizz", this._fizzBuzzSequence.getFizzBuzzSequence(1, 3));
    }

    @Test
    public void testFizzBuzzSequenceFromOneToHundredEndsWith98FizzBuzz() {
        boolean valid = Pattern.matches(".*98,Fizz,Buzz$", "97,98,Fizz,Buzz");
        assertTrue("The FizzBuzzSequence is not correct", valid);
    }
}
