class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
const freqMap = new Map();

nums.forEach(num => {
  freqMap.set(num, (freqMap.get(num) || 0) + 1);
});
const counts = Array.from(freqMap.entries())
 const top = counts.sort((a,b)=>b[1]-a[1]);

  const topk = top.slice(0,k);

  return topk.map(pair=> pair[0]);

    }};


