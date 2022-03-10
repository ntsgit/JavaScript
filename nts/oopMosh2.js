//initialize an object using factory function and then constructor function

/*let address = {
    street: 'a',
    city: 'b',
    zipCode: 'c'
}*/

//factory function
function address(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    }
}

const address1 = address('a','b','c');
console.log(address1);

//constructor function

function Address(street, city, zipCode) {
    this.street = street,
    this.city = city,
    this.zipCode = zipCode
}

const address2 = new Address('a','b','c');
console.log(address2);