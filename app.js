const express=require('express');
const adminroutes= require('./Routes/admin.js');
const shoproutes=require('./Routes/shop.js');
const app=express();
app.use(express.urlencoded({extended :  false}));
app.use(express.json()); // storing json use in database

app.use(adminroutes);
app.use(shoproutes);

app.use((req,res,next) =>
{
    res.send('<h1>Page not Found 404 Error </h1>');
});

app.listen(5500, console.log('Server up at 5500'));