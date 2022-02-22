
/*
var user = function (name, age, email, employee) {
	return {
		name: name,
		age: age,
		email: email,
		employee: employee,
		sayHi: function() {
			return `Hi, I'm ${name}`
		}
	}
}

var user1 = user('Petar', 25, 'petar@m.com', true)
console.log(user1)
console.log(user1.sayHi())
*/

// Function Factory
// https://www.javascripttutorial.net/javascript-factory-functions/

var user = function (name, age, email, employee) {
	return {
		name: name,
		age: age,
		email: email,
		employee: employee,
		show: function () {
			return `${this.name}, ${this.age}, ${this.email}`
		}
	}
}
var user1 = user('Petar', 25, 'petar@m.com', true)
console.log(user1.show())

var book = function (title, pages, author, year) {
	return {
		title: title,
		pages: pages,
		author: author,
		year: year,
		show: function () {
				return `${this.title}, ${this.author}, ${this.pages}`
		}
	}
}

var book1 = book('Test', 20, 'dmnacademy', 2022)
console.log(book1.show())