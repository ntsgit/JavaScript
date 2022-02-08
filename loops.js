//if an hor is between 6am and 12 pm: good morning
//if it is between 12pm and 6pm: good afternoon
//otherwise good evening

const d = new Date();
let hour = d.getHours();
if (hour >= 6 && hour < 12) {
    console.log('good morning');

}
else if (hour >= 12 && hour < 18) {
    console.log('good afternoon');

}
else {
    console.log('good evening');

}

//switch statement

let role ='guest';
switch (role) {
    case 'guest':
        console.log('Guest User');
        break;
    case 'moderator':
        console.log('moderator user');
        break;
    default:
        console.log('unknown user');
}

//for - display odd number less than 5
for (let i =0 ; i<5 ; i++) {
    if (i%2 !== 0) console.log(i);
}

//while

let i=0;
while (i<5) {
    if (i%2 !== 0) console.log(i);
    i++;
}

const arr = [1,2];
arr.push(3);
console.log(arr);


//const arr= [1,2,3,4,5,6,7,8,9];

const ArrayEven = (n) => {
    let arr = [];
    for (let i=0; i<n; i++) {
        
        if (i % 2 == 0)  arr.push(i)
    }
    return arr;
}
const printArr = ArrayEven(10);
console.log(printArr);
