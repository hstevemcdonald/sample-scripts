// What is moment? - A module Parse, validate, manipulate, and display dates and times in JavaScript.
// Why is it useful? - Allows easy manipulation and display of time-related data, Supports time-zones, supports chaining

const moment = require('moment');

let now = moment().format();

console.log('Now is:', now);

let later = moment()
  .add('3', 'hours')
  .format();

console.log('Later is:', later);

let todayTimestamp = Date.now();
let convertTime = moment(todayTimestamp, 'x').format('MMMM Do, YYYY');

console.log(
  'Now - converted from Date in more human readable format is:',
  convertTime
);
