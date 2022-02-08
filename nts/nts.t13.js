//S=1!+2!+3!+...n!

const factoriel = (n) => {
    let m=1;
    for(let i=n; i>0; i--){
        m *= i;
    }
    return m;
}

const sum = (n) => {
    let s=0;
    for(let i=1; i<=n;i++) {
        s+=factoriel(i)
    }
    return s;

}

console.log(sum(4))
