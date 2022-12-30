function narcissistic(value) {
    let addition = 0;
    let array = Array.from(String(value), Number);
    //iterate through array
    //add all digits power of array length 
    for( let i = 0; i < array.length; i++) {
        addition += Math.pow(array[i], array.length);
    }
    //if addition is equal to value return true
    if ( addition == value )
        return true;
    else return false;
}

value = 9;

console.log(narcissistic(value));