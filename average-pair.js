// add whatever parameters you deem necessary
function averagePair(arr, target) {
    // set pointers
    let left = 0;
    let right = arr.length-1;

    while (left < right){
        // adjust pointers depending on average
        let avg = (arr[left] + arr[right])/2
        if (avg===target) return true;
        else if(avg>target){
            right --;
        }else{
            left ++;
        }
    }
    return false;
}
