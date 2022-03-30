

const movies = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 3},
    {title: 'f', year: 2017, rating: 4.5}
]

//all the movies in 2018 with rating > 4
//sort them by their rating
//descending order
//pick their title

const titles = movies
    .filter(movie => movie.rating>=4 && movie.year === 2018) //filer the array by rating and year criteria
    .sort((a,b) => a.rating - b.rating) //sort the array by rating and use a callback function
    .reverse() //reverse the order of the array because we want descening order and sort is ascending by default
    .map(movie => movie.title); //finally map the array to display only titles
console.log(titles);