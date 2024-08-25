// add whatever parameters you deem necessary
function longestFall(arr) {
    // edge case for empty arrays
    if(!arr.length) return 0;

    // variables to hold count and max
    let maxLength= 1;
    let lengthCount = 1;

    // iterate through array and check if next val descends
    for (let i=0; i<arr.length-1; i++){
        if(arr[i+1]<arr[i]){
            // increase count
            lengthCount++;
            // update max length
            maxLength = Math.max(maxLength, lengthCount)
        }
        else{
            // reset count
            lengthCount = 1;
        }
    }
    return maxLength;
}
