// create a function which can move elements in an array when index and the offset of the element is given

const numbers = [1, 2, 3, 4];

const output = move(numbers, 0, 1);

console.log(output);

function move(array, index, offset) {
    let position = index + offset; // the index which the element will take place when moved
    if (position >= array.length || position < 0) { //if it is passed array length or it is getting negative index it should report an error
        console.error('invalid offset');
        return;
    } 
    
    let output = [...array]; //copy the array so it doesn't get changed
    const element = output.splice(index, 1)[0]; //remove an element which needs to be moved and store it in a variable
    output.splice(position, 0, element);
    return output;
    
}