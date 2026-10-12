class Solution {
    public boolean isPalindrome(int x) {
        if (x < 0) {
            return false;
        }
        String x_str = String.valueOf(x);
        String x_reversed = new StringBuilder(x_str).reverse().toString();
        return x_str.equals(x_reversed);
    }
}