// sum of first n numbers
// n!

const sum = (n) => {
    let result = 0;
    for (let i=0; i<=n; i++) {
     result += i 
    }
    return result;

}
console.log(sum(9))

const factoriel = (n) => {
    let result =1;
    for (let i=n; i>0; i--) {
        result *= i
    }
    return result

}

console.log(factoriel(9))