const path=require('path');
const express = require('express');
const router=express.Router();

router.use('/add-product',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','shop.html'));

});
router.get('/add-product',(req,res,next)=>{
    console.log(req.body); // collecting data from user side
    res.direct('/');
});
 module.exports=router;