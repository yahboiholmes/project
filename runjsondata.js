const express = require('express')
const fileReads = require('fs')
const filedata = require('./datajson/createdata.json')


fileReads.readFile('./datajson/createdata.json', {encoding: 'utf-8'}, (err,createdata)=>{
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log('read data completed!');
        console.log(createdata);
    }
})