// price range objects

let priceRanges = [
    { label: '$', tooltop: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10 },
    { label: '$$', tooltop: 'Moderate', minPerPerson: 11, maxPerPerson: 20 },
    { label: '$$$', tooltop: 'Expensive', minPerPerson: 21, maxPerPerson: 50 }
    
]

let arr = [1,2,3,4,5,6,7]

for (let i=0; i<=3; i++) {
    //let a = arr[0]
    arr.unshift(arr[arr.length-1-i])
    //arr[arr.length-1]=a

}


console.log(arr)