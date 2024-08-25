// add whatever parameters you deem necessary
function separatePositive(arr) {
    let start = 0;
    let end = arr.length-1

    while(start<end){
        // if start neg & end pos, switch positions
        if(arr[start] < 0 && arr[end] > 0){
            [arr[start], arr[end]] = [arr[end], arr[start]]
            // move pointers
            start ++;
            end --;
        }
        else{
            // if start positive, move up pointed
            if(arr[start] > 0) start ++;
            // else move down pointer
            else end--;
        }
    }
    return arr;
}
