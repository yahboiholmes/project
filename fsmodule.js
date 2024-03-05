const fileSystem = require('fs');

// make directory
/* fileSystem.mkdir('./projects', (err)=> {
    if (err){
        console.log(err);
    }
    else{
        console.log('new Folder Created Successfulysssss');
    }
}) */

// create file
//const data = 'Hi!, this is my new file.txt'
/* fileSystem.writeFile('./project/example.txt',(data),(err)=>{
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log('new file created!');
    }
}) */

//write file
/* fileSystem.writeFile('./project/example.txt', data, {flag: 'a'}, (err)=> {
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log('new file Created!');
    }
})
 */

//read file
/* fileSystem.readFile('./project/example.txt',{encoding: 'utf-8'}, (err,data)=>{
    if(err){
        console.log(err);
        return
    }
    else{
        console.log('successfuly read file');
        console.log(data);
    }
})
 */

// try catch
/* try {
    fileSystem.writeFileSync('./project/myFileSync.txt', 'Hi says myfilesync');
    console.log('write filesynch success');

   const fileData = fileSystem.readFileSync('./project/myFileSync.txt', 'utf-8');
    console.log('read filesynch success');
    console.log(fileData);
} catch (err) {
    console.log(err);

} */


// reading the directory of folder
/* fileSystem.readdir('./project', (err, files)=>{
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log('success in reading directory!');
        console.log(files);
    }
}) */

//renaming file
/* fileSystem.rename('./project/example.txt', './project/renaming.txt', (err)=>{
    if(err){
        console.log(err);
        return
    }
    else{
        console.log('renaming file completed!');
    }
}) */


/* fileSystem.unlink('./project/myFileSync.txt', (err) =>{
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log('deleted file successfully');
    }
}) */

