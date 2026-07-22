func twoSum(nums []int, target int) []int {

	for idx1, val1 := range nums {
		for idx2 := idx1 + 1; idx2 < len(nums); idx2++ {
			if val1+nums[idx2] == target {
				return []int{idx1, idx2}
			}
		}
	}
	return nil

}
