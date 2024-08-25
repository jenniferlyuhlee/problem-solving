// add whatever parameters you deem necessary
function sameFrequency(int1, int2) {
    // convert to strings to iterate over
    int1 = int1.toString()
    int2 = int2.toString()

    // checks length
    if (int1.length !== int2.length) return false;

    // create frequency maps for each integer string
    const int1Map = createFreqCounter(int1)
    const int2Map = createFreqCounter(int2)

    // iterate over 1 map to see if second map is equal
    for (let [numkey, value] of int1Map){
        if (int2Map.get(numkey) !== value) return false;
    }
    return true;
}
