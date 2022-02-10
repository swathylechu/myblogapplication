const express = require('express');

const app=express();//object initializaion
app.use(express.urlencoded({extended:true}));//code for sending post method
app.use(express.json());



//fake db
const articleinfo={

    'node':{
        upvotes:0
    },
    'react':{
        upvotes:0
    },

    'express':{
        upvotes:0
    },
}
//backend routing
app.get('/',function(req,res){

    res.send("Blog serverup!!");

})
app.post('/',function(req,res){
    res.send(`hi ${req.body.name}post is working`);
})
// port  number
app.listen((5000),()=>{
    console.log("Listening on port 5000");
})











