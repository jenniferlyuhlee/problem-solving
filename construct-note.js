// add whatever parameters you deem necessary
function constructNote(message, letters) {
    // create map of letters
    const lettersMap = createFreqCounter(letters)
    // iterate through message
    for(let char of message){
        if (!lettersMap.has(char)){
            return false;
        }
        else{
            // reduce count of letter if it's present
            lettersMap.set(char, lettersMap.get(char)-1)
            // remove letter from map when count reaches 0
            if (lettersMap.get(char)===0){
                lettersMap.delete(char)
            }
        }
    }
    return true;
}
