const mysql=require('mysql');
const express=require('express');
var app=express();
const bodyparser=require('body-parser');
app.use(bodyparser.json());
const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Ayush@2002',
    database: 'nodejsschema'
});
con.connect((err)=>{
    if(!err)
    console.log("DB connected");
else
console.log("DB failed \n Error : "+JSON.stringify(err,undefined,2));
});
app.listen(3000,()=>console.log("Server running"));
app.get('/display',(req,res)=>{
    con.query('Select * from product',(err,rows,fields)=>{
        if(!err)
        res.send(rows);
    else
    console.log(err);
    })
});