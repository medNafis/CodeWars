filter_words = function(words, letters)  {
    const res = []
    const letterArray = letters.split('');
    for(let i=0; i<words.length; i++) {
        for(let j=0; j<letterArray.length; j++) {
            if (words[i].includes(letterArray[j])) {
                res.push(words[i]);
                break;
            }
        }  
    }
    return res;
}

words = ["the","the", "bro", "well", "the", "well", "ex", "what", "what", "ae", "east" ];
letters = "h"
console.log(filter_words(words, letters));