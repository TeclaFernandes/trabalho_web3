const express = require('express');
const server = express();
const fs = require('fs'); 



server.get('/profgeral', (req, res)=>{                                      
res.json([{nome: 'Harley', Cargo: 'Dono da Chapada'}, {Nome: 'Alexandre', Cargo: 'Protetor de Recife'}, ])
})

server.get('/prof/cargos/:id', (req, res)=>{
    let profs = ['Dono da Chapada', 'Protetor de Recife'] 
    let meuId = req.params.id
    return res.json({
        nome: profs[meuId] })
    })

server.get('/prof/:id', (req, res)=>{
    let profs = ['Harley', 'Alexandre'] 
    let meuId = req.params.id
    return res.json({
        nome: profs[meuId] })
        })

server.get('/alunosgeral', (req, res)=>{
    res.json([{nome: 'Tecla Fernandes', winx: 'Musa'}, {nome:'Samira Anabel', winx:'Stella'}, {nome: 'Rayra ketylle', winx: 'Aisha'}, {nome: 'Felipe Geymison', winx: 'Bloom'}, {nome: 'Debora Evylly', winx: 'Flora'} ])
    let profs = ['Tecla Fernandes', 'Samira Anabel', 'Rayra Ketylle', 'Felipe Geymison', 'Debora Evylly'] 
    })


server.get('/alunos/:id', (req, res)=>{
    let profs = ['Tecla Fernandes', 'Samira Anabel', 'Rayra Ketylle', 'Debora Evylly', 'Felipe Geymison'] 
    let meuId = req.params.id
    return res.json({
    nome: profs[meuId] })
})



server.listen(3000);