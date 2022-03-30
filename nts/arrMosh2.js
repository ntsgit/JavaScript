//write a function to replace includes() method which checks if an array includes a certain element

const numbers = [1, 2, 3, 4];

console.log(includes(numbers, 4));

function includes(array, searchElement) {
    for (let el of array) 
        if (el === searchElement) return true
    
    return false
}