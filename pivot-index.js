// add whatever parameters you deem necessary
function pivotIndex(arr) {
    // sum of all numbers in arr
    const totalSum = arr.reduce((acc, curr) => acc + curr, 0);
    // initiate left sum
    let leftSum = 0;

    for (let i=0; i<arr.length; i++){
        // calculate rightSum as pivot index moves up
        let rightSum = totalSum - leftSum - arr[i];
        if (leftSum === rightSum) return i;
    
        leftSum += arr[i]
    }
    // if no index found return -1
    return -1;
}
