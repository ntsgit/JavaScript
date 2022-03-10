//street
//city
//zipCode
//showAddress(address)
//create an obj

let address = {
    street : 'Highwater Tower',
    city : 'Paris',
    zipCode : '23568'
}
function showAddress(address) {
    for (let key in address)
        console.log(key, address[key]);
}

showAddress(address);