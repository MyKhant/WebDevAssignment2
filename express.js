const express = require('express');
const app = express();

app.get("",(req,res)=>{
    res.send('<h1>Hello World</h1>')
}),

app.get("/home",(req,res)=>{
    res.sendfile(__dirname + "/index.html")
}),

app.get("/about",(req,res)=>{
    res.sendfile(__dirname + "/about.html")
}),

app.get("/song",(req,res)=>{
    res.sendfile(__dirname + "/song.html")
}),

app.get("/contact",(req,res)=>{
    res.sendfile(__dirname + "/contact.html")
})



app.listen(3000,()=>{
    console.log('server is running up at port:3000')
})
