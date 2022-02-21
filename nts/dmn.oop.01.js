
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
console.log(`Is employee ${user.employee}\n`);

user = user2
console.log(`current user`, user);
console.log(`Is employee ${user.employee}`);
user.name = 'Mileva'
console.log(`current user`, user);