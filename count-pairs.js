// add whatever parameters you deem necessary
function countPairs(arr, int) {
    let count = 0;
    // create Set since arr has no duplicates
    let numSet = new Set(arr);
    // iterate over Set
    for (let num of numSet){
        // remove iteration so we don't count same pair again
        numSet.delete(num)
        // increment count if num has corresponding num that sums int
        if(numSet.has(int-num)){
            count ++;
        }
    }
    return count;
}
