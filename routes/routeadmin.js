const express=require('express');
const user=require('./model/user.js');
const product=require('./model/product.js');
const router=express.Router();

router.get('/get',(req,res,next)=>{
    const user=req.user;
    user.getproduct().then((result)=>{
        console.log(result)
    })
})
router.post('/post',(req,res,next)=>{
    const user=req.user;
    user.createproduct({
        name:'shubham',price:50
    }).then((result)=>{
        console.log(result)
    })
})
module.exports=router;