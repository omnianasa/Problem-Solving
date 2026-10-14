
class Solution(object):
    def removeDuplicates(self, nums):
        numsSet = sorted(set(nums))
        k = len(numsSet)

        nums[:k] = numsSet

        for i in range(k, len(nums)):
            nums[i] = '_'

        return k
