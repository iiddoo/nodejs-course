// examples functions to be tested
 
// add two numbers
module.exports.add = (a, b) => a + b;

// square number
module.exports.square = number => number * number + 1;

// set name for user object
module.exports.setName = (user, fullname) => {
    const splitted = fullname.split(' ');
    user.firstName = splitted[0];
    user.lastName = splitted[1];
    return user;
};

// async function
module.exports.asyncFunc = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('I am done');
        }, 1000);
    });
};