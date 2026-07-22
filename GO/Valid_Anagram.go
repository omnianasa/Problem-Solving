func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}
	var charCount [26]int
	for i := 0; i < len(s); i++ {
		charCount[s[i]-'a']++
		charCount[t[i]-'a']--
	}

	for _, count := range charCount {
		if count != 0 {
			return false
		}
	}

	return true

}
