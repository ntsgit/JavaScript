// for m,n calc S=n*(n+m)*(n+2m)*...*(n+m*m)

const calcS = (n, m) => {
    let S = 1;

    for (let i = 0; i <= m; i++) {
        S = (n + i*m) * S
        console.log(S)

    }
    return S;
}

console.log(calcS(2, 3))