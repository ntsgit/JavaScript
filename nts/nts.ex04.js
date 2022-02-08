/** Armstorng number
a) determine if a 3 digit number is an Armstrong number
a2) check if a input number is a  3 digit number
b) determine Armstrong numbers in interval [100-1000]
c) determine  Armstrong numbers in an array of numbers

153 = 1*1*1 + 5*5*5 + 3*3*3
123 ! 

*/
//a)
const isArmstrong = (n) => {
    let a = n % 10;
    let b = ((n % 100) - a )/10
    let c = (n - (n % 100))/100
    return (n === a*a*a + b*b*b + c*c*c)  ?  true : false
} 

isArmstrong(153);
console.log(`${isArmstrong(153)}`)

//a2)
const checkArmstrong = (n) => {
    return (n>99 && n<1000) ? console.log('argument is a 3 digit number') : console.log('argument is not a 3 digit number')
}
checkArmstrong(1537)

//b
for (let i = 100; i < 1000; i++) {
    if (isArmstrong(i)) console.log(i)
}

//c

const arrArmstrong = (arr) => {
    for (let i=0; i<arr.length; i++) {
        if (isArmstrong(arr[i])) console.log(`${arr[i]} is Armstrong number`)
        console.log(`${arr[i]} is not Armstrong number`)
    }

}
arrArmstrong([222,371,153,698])


