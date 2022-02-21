
console.log('Objects')

const user = function(name, age, email, employee) {
	return {
		name: name,
		age: age,
		email: email,
		employee: employee
	}
}

const userES6 = (name, age, email, employee) => ({
		name: name,
		age: age,
		email: email,
		employee: employee
	})

const user11 = user('Adam', 30, 'ad@m.com', true)
console.log(user11)
const user12 = user('Eve', 17, 'eve@m.com', false)
console.log(user12)
let user13 = user11
user13.name = 'Mileva'
console.log(user11)