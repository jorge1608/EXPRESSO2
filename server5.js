const express = require('express');
const app = express();
app.listen(3000, () => {
    console.log('servidor no ar ')
})

//rotas base 

app.get('/', (req,res)=>{
    res.send("teste com parâmetros")
})

//rotas com hífen 

app.get('/distancia/:pontoA-:pontoB',(req,res)=>{
    const pontoA=req.params.pontoA
    const pontoB=req.params.pontoB
    const distancia= pontoA-pontoB;
    res.send(`á distância, usando hífen entre ${pontoA} e ${pontoB} é ${distancia}`);
})

//rotas com ponto 

app.get('/distancia/:pontoA.:pontoB',(req,res)=>{
    const pontoA=req.params.pontoA
    const pontoB=req.params.pontoB
    const distancia= pontoB-pontoA;
    res.send(`á distância, usando ponto entre ${pontoA} e ${pontoB} é ${distancia}`);
})