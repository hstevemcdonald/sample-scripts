// What is destructring? A syntax that makes it possible to extract values from arrays or propertise from objects into distinct values
// What is spread syntax? A syntax that allows an iterable to be expanded in a place where 0 or more arguments or elements are expected, or an object expression to be expanded where 0 or more key-value pairs are expected
// What is the rest operator? A syntax that allows remaining elements of an iterable to be represented as an array
// Why is it useful? Less code, more readable

let sampleArray = ['John', 'Mary', 'Susan'];

let [userA, userB, userC] = sampleArray;

console.log('userA', userA);
console.log('userB', userB);
console.log('userC', userC);

let [, , userC2] = sampleArray; // skipping elements of an array
console.log('userC2', userC2);

let [userA3, ...userC3] = sampleArray;
console.log('userC3', userC3);

let sampleObject = {
  names: [, ...sampleArray],
  cityData: 'Oakland',
  stateData: 'California',
  countryData: 'USA'
};

let { cityData: city, stateData: state, ...names } = sampleObject; // names using 'rest' syntax, using alternate variable binding

console.log('Names', names);
console.log('City', city);
console.log('State', state);

let newObject = {
  foo: '1',
  ...sampleObject
};

let { foo, cityData: city2, stateData: state2, ...names2 } = sampleObject; // names using 'rest' syntax, using alternate variable binding

console.log('Foo', foo);
console.log('Names', names);
console.log('City', city);
console.log('State', state);
console.log(newObject.hasOwnProperty('cityData'));
