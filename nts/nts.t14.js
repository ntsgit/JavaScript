//S=1!/1/2 + 2!/(1/2+1/3) + ... + n!/(1/2 +1/3 + ... + 1/(n+1))

const factoriel = (n) => {
    let m = 1;
    for (let i = n; i > 0; i--) {
        m *= i;
    }
    return m;
}
//console.log(factoriel(1))

const fractionSum = (n) => {
    
    let sum = 0;
    let i=2;

    while (i<=n+1) {
        //console.log("i = ",i)
        sum += 1/i;
        i++

    }

    return sum;
    
}
console.log(fractionSum(3))


const f = (n) => {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        //console.log("j = ",i, "fs = ", fractionSum)
        total += factoriel(i)/fractionSum(i)
        //console.log("total = ",total)
        
    }
    return total;

}
console.log(f(2))
