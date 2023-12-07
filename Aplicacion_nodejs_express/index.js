const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send('Hello world')

})

app.get('/about',(req,res)=>{
    res.send('Esta no es la principal')

})

app.get('/weather',(req,res)=>{
    res.send('Por si acaso otra ')

})

app.listen(3000)
console.log('Server on port ${3000}')