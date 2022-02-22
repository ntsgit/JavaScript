
console.log('Prototype')

function User(name, year, email) {
	this.name = name,
		this.year = year,
		this.email = email
}

User.prototype.getAge = function () {
	return new Date().getFullYear() - this.year
}

var u = new User('Petar', 1995, 'petar@mail.com')
console.log(u)