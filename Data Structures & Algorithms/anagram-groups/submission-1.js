class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const c = new Map();
        let sorted;
        let anagrams

        for (let str of strs){
            sorted = str.split("").sort().join("");
            if(c.has(sorted)){
                c.get(sorted).push(str);
            }
            else{
                c.set(sorted, [str])}
            
        }
        return Array.from(c.values());

    }
}
