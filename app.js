console.log('Starting.......');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

var user = os.userInfo();

console.log(_.isString(true));
console.log(_.isString('str'));

var filteredArray = _.uniq(['A','B','A']);
console.log(filteredArray);

fs.appendFile('testFile.txt',`Hello ${user.username} age is ${notes.age}`, function (err) {
    console.log('Unable to write to a file');
});


var res = notes.addNote();
console.log(res);

var sum = notes.add(5,4);
console.log(sum);

