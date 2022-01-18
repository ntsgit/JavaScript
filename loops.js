//if an hor is between 6am and 12 pm: good morning
//if it is between 12pm and 6pm: good afternoon
//otherwise good evening

const d = new Date();
let hour = d.getHours();
if (hour >= 6 && hour < 12) {
    console.log('good morning');

}
else if (hour >= 12 && hour <18) {
    console.log('good afternoon');

}
else {
    console.log('good evening');

}