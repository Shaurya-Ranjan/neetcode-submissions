class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let x = [];
        for (let i = 0; i<nums.length;i++){
            for(let j = i+1; j<nums.length;j++){
                if(nums[i]+nums[j] == target){
                    x[0] = i;
                    x[1] = j;
                    return x;
                }
            }
        }

    }
}
