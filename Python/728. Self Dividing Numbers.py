class Solution(object):
    def selfDividingNumbers(self, left, right):
        """
        :type left: int
        :type right: int
        :rtype: List[int]
        """
        res = []
        def is_self_divide(num):
            copy = num
            while copy > 0:
                ns = copy%10
               
                if ns == 0 or num % ns != 0:
                    return False
                copy //= 10 
            return True
        for i in range(left, right + 1):
            if is_self_divide(i):
                res.append(i)

        return res

        