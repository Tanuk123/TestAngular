const { response, request } = require('express');
const jwt=require('jsonwebtoken');

exports.tokenvarify=(request,response,next)=>{
    try{
        console.log(request.headers.Authorization)
        if(!request.headers.Authorization)
        return response.status(401).send("UnAuthorized request 1 ");
        if(request.headers.Authorization == null)
        return response.status(401).send("UnAuthorized request 2 ");
 
        let token =request.headers.Authorization.split(" ")[1];
        let payload=jwt.verify(token,"hjdjshfdhsjhf");
        console.log(payload);
        next();
    }
    catch(err){
        return response.status(401).send("UnAuthorized request");
    }
     
}