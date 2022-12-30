countFrequencies = function(words) {
    words.sort();
    let count = 1;
    let res = [];
    for (let i = 0; i < words.length ; i++) {
        if(words[i] == words[i+1] ) 
            count++; 
        else {
            res.push(count);
            count = 1;
        }
    }
    return res;
}

words = [ "the","the", "bro", "well", "the", "well", "ex", "what", "what"];
console.log(words.sort())
console.log(countFrequencies(words));