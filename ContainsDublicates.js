const ContainsDuplicates = (nums) => {
    // sets doesnt contain duplicates
    const noDups = new Set(nums)
    let goal = []
    noDups.forEach((one) => goal.push(one))
    console.log(nums);
    console.log(goal);
    // hence the length of goal and nums should differ if nums[] has duplicates its length will be greater than goal[] which doesnt has any dubs
	if (nums.length === goal.length) {
        return false
    } else {
        return true
    }
}

console.log(ContainsDuplicates([1,1,1,3,3,4,3,2,4,2]))
