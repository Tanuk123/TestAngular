const User=require('../model/user.model');
const jwt=require('jsonwebtoken');
exports.signup=(request,response)=>{
    
    let username=request.body.username;
    let email=request.body.email;
    let password=request.body.password;
    let mobile=request.body.mobile;

    User.create({
        username:username,
        email:email,
        password:password,
        mobile:mobile
    }).then(result=>{
        console.log(result);
        return response.status(201).json(result);
    }).catch(err=>{
        console.log(err);
    });
}

exports.signin=(request,response)=>{
    
    User.findOne({
        email:request.body.email,
        password:request.body.password
    })
    .then(result=>{
        let status;
        let payload= {subject:result._id}
        let token =jwt.sign(payload,'hjdjshfdhsjhf');
       return response.status(200).json({
           status: "Login success",
           currentuser:result,
           token:token
       });
     }).catch(err=>{
        console.log(err);
        return response.status(500).json({message:"Oops!something went wrong"});

    });
}