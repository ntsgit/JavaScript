
//Rotate an array of n elements to the right by k steps.
//For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].


const rotate = (n,k) => {
    let arr=[1,2,3,4,5,6,7];

    for (let i=1; i<k+1; i++) {
        arr.unshift(arr[arr.length-1]);
        arr.pop(arr[arr.length+1]);
    }
    return arr;
}

console.log(rotate(6,3));

/*let arr=[1,2,3,4,5,6,7];
arr.unshift(22);
console.log(arr);
arr.pop(arr[7]);
console.log(arr);*/

/*const rotate = (k) => {
    let arr=[1,2,3,4,5,6,7];

    for (let i=0; i<=k; i++) {
        let tmp = arr[arr.length-i];
        arr[arr.length-i]=arr[i];
        arr[i] = tmp;

    }

    return arr;

}
console.log(rotate(3));*/