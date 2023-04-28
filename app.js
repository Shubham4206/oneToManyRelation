const express=require('express');
const app=express();
const router=require('./route/routeadmin.js');
const bodyparser=require('body-parser');
const sequelize=require('./connection/database.js');
const cors=require('cors');
const user=require('./model/user.js');
const product=require('./model/product.js');
app.use(cors());
app.use(bodyparser.json({extended:false}));
app.use(bodyparser.urlencoded({extended:false}));
app.use((req,res,next)=>{
    user.findByPk(1).then((User)=>{
        req.user=User;
        next();
    }).catch((err)=>{
        console.log(err);
    })
})
app.use(router);
user.hasMany(product);
product.belongsTo(user,{
    constraints:true,
    onDelete:'CASCADE'
});
sequelize.sync()
.then((result)=>{
    return user.findByPk(1);
})
.then((User)=>{
    if(!User){
        return user.create({
            name:'shubham',
            email:'xyz@gmail.com'
        })
    }
});
app.listen(5200);