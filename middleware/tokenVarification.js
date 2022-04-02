const { response, request } = require('express');
const jwt=require('jsonwebtoken');

exports.tokenvarify=(request,response,next)=>{
    console.log(request.headers.Authorization)
    try{
       if(!request.headers.Authorization)
       return response.status(401).send("UnAuthorized request");
       if(request.headers.Authorization==null)
       return response.status(401).send("UnAuthorized request");

       let token =request.headers.Authorization.split(" ")[1];
       let payload=jwt.varify(token,"hjdjshfdhsjhf");
       console.log(payload);
       next();
    }
    catch(err){
        console.log(err);
        return response.status(401).send("UnAuthorized request");
    }
}