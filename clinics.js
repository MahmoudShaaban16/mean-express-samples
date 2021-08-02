var express=require("express");
const app=express();
var routeName='/clinics';
app.use(routeName,express.json());
app.use("/students",express.text());

var clinics=[{id:1,name:"clinic1",openTime:'10:20 am'},{id:2,name:"clinic2",openTime:'12:20 am'},{id:3,name:"clinic3",openTime:'9:20 am'}]
app.get(routeName,function(req,res){

    res.status(200).send(clinics);

});

app.get(routeName+"/:id",function(req,res,next){
    console.log(req.params.id);
    return;
   
},function fn2(req,res){

    var id=req.params.id;
    if(id){

        var clinic=clinics.filter((c)=>{return c.id==id});
        res.status(200).send(clinic);
    }
    else
    {
        res.status(400).send("invalid clinic id")
    }
   

});

app.post(routeName,(req,res)=>{

    // read data from the request body

    var clinic=req.body;
    if(clinic!=null){
        if(clinic.name && clinic.name.length>10){
            // valid clinic object
           // save the new clinic to the database
           var lastId=clinics[clinics.length-1].id;
           clinic.id=lastId+1; 
           clinics.push(clinic);
           res.status(201).send(clinic);

        }
        else
        res.status(400).send("invalid clinic name length, less than 10 characters");
    }
    else
    {
        res.status(400).send("an empty or invalid request");
    }

})

app.listen(2234,()=>{console.log("your app is listening on port 2233")});