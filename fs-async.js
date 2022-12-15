const {readFile, writeFile} = require('fs');

console.log('start');

readFile('./content/ebube.txt', 'utf8', (err,result) => {
    if(err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/yawn.txt', 'utf8', (err,result) =>{
        if(err){
            console.log(err)
            return
        }
        const second = result;
        writeFile('./content/result-async.txt', `Here's is the result of both file: ${first}, ${second}`, (err, result)=>{
            if(err){
                console.log(err);
                return
            }
            console.log('done with this task')
        })
    })
})
console.log('starting new task');
