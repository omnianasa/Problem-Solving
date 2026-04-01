class Solution(object):
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
        res = 0
        roman_letters = {'I': 1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000}
        for ch1, ch2 in zip(s, s[1:]):
            if roman_letters[ch1] < roman_letters[ch2]:
                res -= roman_letters[ch1]
            else:
                res +=roman_letters[ch1]
        return res + roman_letters[s[-1]]