/**
a) Determine how many digits does one number () have? 
b) Is 3-digit number a palindrom?
c) Is 4-digit number a palindrom?
d) Is n-digit number a palindrom?
*/

const noOfDigits = (n) => {
    let i = 1;
    if (n < 1) return 'not a whole number'

    while (n / 10 >= 1) {
        n /= 10;
        i++
    }
    return i;
}

console.log(noOfDigits(3));

const isPalindrome3 = (n) => {
    let a = n % 10;
    //let b = ((n % 100) - a )/10
    let c = (n - (n % 100)) / 100
    return a === c ? true : false
}
console.log(`${isPalindrome3(121)}`)

const isPalindrome4 = (n) => {
    let a = n % 10;
    let b = ((n % 100) - a) / 10
    let c = ((n - (n % 100)) / 100) % 10
    let d = (n - (n % 1000)) / 1000
    return (a === d && b === c) ? true : false


}
console.log(`${isPalindrome4(1221)}`)

const isPalindromeN = (n) => {
    const reversedNum = parseFloat(n.toString().split('').reverse().join('')) * Math.sign(n)
    //console.log(typeof reversedNum(n))
    //console.log(typeof n)
    //console.log(n==reversedNum(n))
    return reversedNum == n ? true : false
}

console.log(`${isPalindromeN(12321)}`)

const reversed = (n) => {
    let result = 0;

    while (n >= 1) {
        n = Math.floor(n)
        result += n % 10
        result *= 10
        n /= 10;
    }
    
    return result/10;

}


const isPalindromeN2 = (n) => {
    return n === reversed(n) ? true : false
}
console.log(isPalindromeN2(151));
