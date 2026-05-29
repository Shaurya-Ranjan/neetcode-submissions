class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagramsMap = new Map();

        for (const str of strs){
            const sortedStr = str.split('').sort().join('');

            if (anagramsMap.has(sortedStr)){
                anagramsMap.get(sortedStr).push(str)
            }else{
                anagramsMap.set(sortedStr,[str]);
            }
        }
        return Array.from(anagramsMap.values());
    }
}
