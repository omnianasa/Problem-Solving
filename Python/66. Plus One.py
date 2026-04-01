class Solution(object):
    def plusOne(self, digits):
        """
        :type digits: List[int]
        :rtype: List[int]
        """
        digits_str = ''.join(str(item) for item in digits)
        res = str(int(digits_str) + 1)
        return [int(i) for  i in res]

        