// print 3 digit numbers for which following is applicable
// ABC = (AB)^2 - C^2
// example 147 = 14*14 - 7*7


const check = (n) => {
    let c = n % 10;
    let a = Math.trunc(n/10);

    return (n==a*a-c*c) ? true : false;
}

console.log(check(147));