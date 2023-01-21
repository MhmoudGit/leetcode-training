const merge = (nums1, m, nums2, n) => {
    nums1.length = m
    nums2.length = n
    let sorted = nums1.concat(nums2)
    sorted.sort()
    return sorted
};

console.log(merge([0],0 , [1], 1));  
