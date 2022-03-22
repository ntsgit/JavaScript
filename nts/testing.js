let compare = (first, second) => {
    let newArr = [];
    for (let i = 0; i < second.length ; i++) {
        if (first.indexOf(second[i]) === -1) newArr.push(second[i])
        //TODO: rewrite line 4 to a solution with for loop insted of indexOf implementation
    } 
    return newArr;  

}


function diffArray(arr1, arr2) {

    let first = compare(arr1,arr2);
    let second = compare(arr2,arr1);

    return first.concat(second);
}



console.log(diffArray([1, 2, 3, 5, 4],[1, 2, 3, 5, 'a']));
//in 1 for loop to concat first and second
//remove duplicates