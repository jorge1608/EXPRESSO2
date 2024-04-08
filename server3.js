const express = require('express');

const app = express();

app.listen(3000,()=>{
    console.log('SERVIDOR EM EXECUÇÃO')
})

app.get('/',(req,res)=>{
    res.send('teste 1 ')
})

//rotas com 1 parametro 

app.get('/olá/:nome',(req,res)=>{
    res.send('teste 2, tudo bem'+req.params.nome+"?")

})

//rota com dois parâmetros 

app.get('/ola/:nome',(req,res)=>{
    res.send('teste3, tudo bem'+req.params.nome+"da empresa"+req.params.empresa);


})

//rota com soma de dois parâmetros 

app.get('/soma/:a/:b', (req,res)=>{
    res.send("resultado da soma é" + (parseInt(req.params.a)+parseInt(req.params.b)));
})