/* const http = require('http')

port = 3000;

server = http.createServer((req,res)=>{
    res.writeHead(200, {'content-type': 'text/html'})
    res.write('<form action ="fileupload" method= "post" enctype = multipart/form-data">')
    res.write('<input type ="file" name"fileupload"><br></br>')
    res.write('<input type ="submit"')
    res.write('</form>')
    res.end();
})

server.listen(port);
console.log('server available at http://localhost:3000'); */


/* var http = require('http')
var formidable = require('formidable')
var fs = require('fs')

port = 3000;

server = http.createServer((req, res)=>{
    if(req.url === '/fileupload'){
        var form = new formidable.IncomingForm();
        form.parse(req,function(err,fields,files){

            var oldPath = files.filetoupload.filepath;
            var newPath = 'C:/Users/Holmes/'+files.filetoupload.originalFilename;
            fs.rename(oldPath,newPath, function (err){

                if(err) throw err;
                res.write('file uploaded and move!')
                res.end();
            })
        })
    }
    else{
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<form action ="fileupload" method= "post" enctype = multipart/form-data">')
         res.write('<input type ="file" name"fileupload"><br></br>')
        res.write('<input type ="submit"')
        res.write('</form>')
        res.end();
    }
})


server.listen(port);
console.log('server available at http://localhost:3000'); 
 */