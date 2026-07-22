func groupAnagrams(strs []string) [][]string {

	anagramMap := make(map[string][]string)

	for _, str := range strs {
		b := []byte(str)
		sort.Slice(b, func(i, j int) bool {
			return b[i] < b[j]
		})

		key := string(b)
		anagramMap[key] = append(anagramMap[key], str)
	}
	var result [][]string
	for _, group := range anagramMap {
		result = append(result, group)
	}

	return result
}