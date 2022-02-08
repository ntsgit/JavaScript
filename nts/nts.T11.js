// TODO
// function to calculate k*(k+1)*...*(2k-1)*2k

const calcK = (k) => {
    let m = 1;
    
    
    for (let i=0; i<=k; i++){
        m = (k+i)*m
        console.log(m);
        
    }
    return m
}
console.log(calcK(2));