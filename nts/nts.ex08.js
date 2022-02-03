// switch variables without using additional temporary variable

let a = 10;
let b = 4;

a = a + b;
//console.log(a)
b = a - b;
//console.log(b)
a = a - b;
console.log(a)
console.log(b)

//amount in bills
//bills 5000, 2000, 1000 ,500, 200, 100,50, 20, 10

const amountInBills = (n) => {
    let a, b, c, d, e, f, g;
    a= Math.floor(n/5000);
    n= n - a*5000;
    b=Math.floor(n/2000);
    n= n - b*2000;
    c=Math.floor(n/1000);
    n= n- c*1000;
    d=Math.floor(n/500);
    n=n-d*500;
    e=Math.floor(n/200);
    n=n-e*200;
    f=Math.floor(n/100);
    n=n-f*100;
    g=Math.floor(n/50);
    n=n-g*50;

    console.log(`Amount is equal to ${a} x 5000, ${b} x2000, ${c} x 1000, ${d} x 500, ${e} x 200, ${f} x 100, ${g} x 50, and ${n} change`)

}
amountInBills(30)