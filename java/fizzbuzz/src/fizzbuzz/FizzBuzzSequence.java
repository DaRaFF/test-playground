package fizzbuzz;

public class FizzBuzzSequence {

    private FizzBuzz _fizzBuzz;

    public FizzBuzzSequence() {
        _fizzBuzz = new FizzBuzz();
    }

    public String getFizzBuzzSequence(int start, int stop) {
        String calculatedString = "";
        String arr[] = new String[stop - start + 1];

        for (int i = start; i <= stop; i++) {
            arr[i-1] = _fizzBuzz.getFizzBuzzValueOf(i);
        }
        calculatedString = FizzBuzzSequence. implode(arr, ",");

        return calculatedString;
    }

    /**
     * Helperfunktion - Wandelt die Inhalte eines Arrays in eine String um
     * @param ary Array, welcher umgewandelt werden soll
     * @param delim Trennzeichen zwischen den einzelnen Elementen
     * @return Umgewandelter String
     */
    public static String implode(String[] ary, String delim) {
        String out = "";
        for (int i = 0; i < ary.length; i++) {
            if (i != 0) {
                out += delim;
            }
            out += ary[i];
        }
        return out;
    }
}

