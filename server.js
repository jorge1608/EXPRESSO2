const express = require('express')

const server=express()

server.listen(3000)

server.use((req, res, next)=>{
    console.log('teste')
    next();
})

server.use((req,res,next)=>{
    req.resquestTime=Date.now();
    next();
})

server.get('/',(req,res)=>{
    console.log(req.resquestTime);
    res.send('<h1>Teste</h1>')
})
