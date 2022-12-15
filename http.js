const http = require('http');
const port = 4040
const server = http.createServer((req,res) => {
    
    if(req.url === '/'){
        res.end('Stan, What\'s this gibberish')
    }
    if(req.url === '/about'){
        res.end('Stevo dey code for me jarey')
    }
    res.end(`
    <h1>Oops<h1/>
    <p>We can't Seem to find what you're looking for<p/>
    <a href="/">Back Home<a/>
    `)
});

server.listen(port)