
console.log('Objects')

const user1 = {
  name: 'Adam',
  age: 32,
  email: 'adam@mail.com',
  employee: true
}


const user2 = {
  name: 'Eve',
  age: 17,
  email: 'eve@mail.com',
  employee: false
}

//console.log(user1)
//console.log(user2)

let user = user1
console.log(`current user`, user);
console.log(`current user is employee ${user.employee}`);

user = user2
console.log(`current user`, user);
console.log(`current user is employee ${user.employee}`);