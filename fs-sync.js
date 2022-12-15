const {readFileSync, writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./content/yawn.txt', 'utf8');
const second = readFileSync('./content/ebube.txt', 'utf-8' );



writeFileSync ('./content/result-sync.txt', `Here is the result : ${first}, ${second}` ,{flag: 'a' });

console.log('done with this task');
console.log('starting new task');