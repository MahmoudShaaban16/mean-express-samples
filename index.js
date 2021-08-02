const express=require("express");

var app=express();

app.use(express.text());
// regular expression path
app.get('/ab*cd',function(req,res){
 res.send("this is a response from the pattern path get endpoint");
})
app.post("/products",function(req,res){

    console.log(res)
    res.status(200).send(req.body);
},function(req,res){});


app.delete("/users/:userId/:clinicId",function(req,res){

    
    console.log(req.params.userId);
    res.send(req.params.userId);
})

var portNumber=process.env.Express_Port|| 3344;
console.log(process.env.PRT);
app.listen(portNumber,function(){console.log(`the server is running on port ${portNumber}`)});
