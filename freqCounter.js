// helper function to create frequency counter using a map
function createFreqCounter(iterable) {
    let freq = new Map();
    for (let el of iterable){
        let elCount = freq.get(el) || 0;
        freq.set(el, elCount + 1);
    }
    return freq;
}