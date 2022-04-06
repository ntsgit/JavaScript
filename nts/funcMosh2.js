// create a circle object using an object literal sintax
//set property radius (it should be read and write property)
//set area property (it should be read only)

const circle = {
    radius: 1,
    get area() {
        return Math.PI * this.radius * this.radius;
    }
}
circle.radius = 2; // should change radius and return area calculated with radius as 2
circle.area = 20; // should not change area and still return whatever is calculated withtin and obj
console.log(circle.area);