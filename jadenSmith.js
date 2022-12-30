String.prototype.toJadenCase = function(str) {
    let res = ''; 
    const array = str.split(' ');
    let x;
    for (let word in array) {
        x = array[word].charAt(0).toUpperCase();
        array[word] = x + array[word].substring(1, array[word].length );
        res += ' ' + array[word];
    }
    
    return res.substring(1, res.length);

}

var str = "hello iam mamak"
console.log(str.toJadenCase(str));