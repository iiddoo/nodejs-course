// working with JSON exapmles

// create JSON object
const myObject = {
    name: 'my name',
    age: 120,
    smile: true
};

// convert JSON object to string
const myString = JSON.stringify(myObject);

// create string
const myStringObject = '{"name": "my name","age": 120,"smile": true}';

// convert string to JSON object
const myParsedObject = JSON.parse(myStringObject);

// print results
console.log(typeof myObject, myObject);
console.log(typeof myString, myString);
console.log(typeof myStringObject, myStringObject);
console.log(typeof myParsedObject, myParsedObject);