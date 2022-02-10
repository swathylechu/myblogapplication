const express = require('express');

const app=express();//object initializaion
app.use(express.urlencoded({extended:true}));//code for sending post method
app.use(express.json());



//fake db
const articleinfo={

    'node':{
        upvotes:0,
        comments:[]
    },
    'react':{
        upvotes:0,
        comments:[]
    },

    'express':{
        upvotes:0,
        comments:[]
    },
}
//backend routing

app.post('/api/article/:name/upvotes',(req,res)=>{
   const articlename= req.params.name;//geting url parameter using this 
   articleinfo[articlename].upvotes += 1;
   res.send('$ {articlename} now have .upvotes');

})

//comments routing

app.post('/api/article/:name/comments,(req,res)=> {
    const articlename= req.params.name; //geting url parameter using this 

})
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











