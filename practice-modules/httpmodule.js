/* const http = require('http')

const server = http.createServer((request, response)=>{
    response.end('Hellow Bogart');
})

server.listen(3000,()=>{
    console.log('Server is available at http://localhost:3000');
}) */


// server jumping
/* const http = require('http')
const server = http.createServer((request, response) => {
    if (request.url === '/'){
        response.end('this is the homepage')
    }
    else if(request.url === '/about'){
        response.end('this is the about page')
    }
    else if(request.url === '/contact'){
        response.end('this is the contac page')
    }
    else if (request.url === '/profile'){
        response.end('this is the profile page')
    }
    else {
        response.end('404 Error Occured')
    }
})
server.listen(3000, ( ) =>{
    console.log('server is available at http://localhost:3000');
}) */

/* const http = require ('http')

port = 3000;

const server = http.createServer((request, response) => {
    if(request.url === '/'){
        response.writeHead(201, {'content-type':'text/html'})
        response.write('<h1>This is the HomePage!</h1>')
        response.end()
    }
    else if (request.url === '/about'){
        response.writeHead(200, {'content-type':'text/html'})
        response.write ('<h1> This is the About Page!</h1>')
        response.end();
    }
    else{
        response.end('404 error Occured!')
    }
})
/* server.listen(3000, ()=> {
    console.log('server is available at http://localhost:3000');
}) 

server.listen(port);
console.log('server is available at http://localhost:3000'); */



// working in progress!!!!!!!!!!!!!!!

/* const http = require('http');
const fs = require('fs');
// Get the contents of the HTML, CSS, JS and Logo files
const homePage = fs.readFileSync('./navbar-app/index.html')
const homeStyles = fs.readFileSync('./navbar-app/style.css');
const homeLogo = fs.readFileSync('./navbar-app/logo.svg');
const homeLogic = fs.readFileSync('./navbar-app/browser-app.js');

// Creating the Server
const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === '/'){
    	res.writeHead(200, {'content-type': 'text/html'});
        res.write('<h1> This is the HomePage</h1>');
        res.end();
    } else if(url === '/about'){
    	res.writeHead(200, {'content-type': 'text/html'});
        res.write('<h1>About Page</h1>');
        res.end();
    } else{
    	res.writeHead(200, {'content-type': 'text/html'});
        res.write('<h1>404, Resource Not Found</h1>');
        res.end();
    }
})

server.listen(3000, () => {
	console.log('Server available at http://localhost:3000');
})


 */

