// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    // set pointers both at beginning
    let i = 0;
    let j = 0;

    // loops through str1
    while (j !== str2.length){
        // moves both pointers if found, incrementing pass
        if(str1[i]===str2[j]){
            i++;
        }
        // if all letters of str1 were passed through return true
        if (i === str1.length) return true;
        
        // moves pointer for str2 if letter not found
        j++
    }
    return false;
}
