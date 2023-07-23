const path =require('path');
const hbs=require('hbs');
const express = require('express');
const app= express();
const port= process.env.PORT ||4000


// public static path
const static_path = (path.join(__dirname,"../public"));

app.set('view engine','hbs');
app.use(express.static(static_path));




// routing
app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/about",(req,res)=>{
    res.render("about.hbs");
});

app.get("/weather",(req,res)=>{
    res.render("weather");
});

app.get("*",(req,res)=>{
    res.render("404error");
});


app.listen(port,()=>{
    console.log(`Listening On Port ${port}`);
});
