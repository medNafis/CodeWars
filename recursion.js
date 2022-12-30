//using for loop
function sumTo(n) {
    let sum = 0
    for ( let i = 1 ; i < n+1 ; i++)
        sum += i
    return sum
}

//using recursion
function recSum(n) {
    if(n==1)
        return 1
    return n + recSum(n-1)
}

console.log(prog(9))

//using arithmetic progression
function prog(n) {
    return n * ( n + 1 ) / 2
 }