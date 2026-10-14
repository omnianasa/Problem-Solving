import java.util.Arrays;

class Solution {
    public String longestCommonPrefix(String[] strs) {
        Arrays.sort(strs);
        int i = 0;
        String first = strs[0];
        String last = strs[strs.length - 1];
        int minLength = Math.min(first.length(), last.length());
        while (i < minLength && first.charAt(i) == last.charAt(i)) {
            i += 1;
        }
        return first.substring(0, i);

    }
}