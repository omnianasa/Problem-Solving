import java.util.HashMap;
import java.util.Map;

class Solution {
    public int romanToInt(String s) {
        Map<Character, Integer> roman_dic = new HashMap<>();
        roman_dic.put('I', 1);
        roman_dic.put('V', 5);
        roman_dic.put('X', 10);
        roman_dic.put('L', 50);
        roman_dic.put('C', 100);
        roman_dic.put('D', 500);
        roman_dic.put('M', 1000);

        int total = 0;

        for (int i = 0; i < s.length(); i++) {
            if (i + 1 < s.length() && roman_dic.get(s.charAt(i)) < roman_dic.get(s.charAt(i + 1))) {
                total -= roman_dic.get(s.charAt(i));
            } else {
                total += roman_dic.get(s.charAt(i));
            }
        }
        return total;

    }

}