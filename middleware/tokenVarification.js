const jwt=require('jsonwebtoken');

exports.tokenvarify=(request,response,next)=>{
    try{
        if(!request.headers.authorization)
        return response.status(401).send("UnAuthorized request");
        if(request.headers.authorization == null)
        return response.status(401).send("UnAuthorized request");
 
        let token =request.headers.authorization.split(" ")[1];
        let Payload=jwt.verify(token,"hjdjshfdhsjhf");
        next();
    }
    catch(err){
        console.log(err);
        return response.status(401).send("UnAuthorized request");
    }
     
}