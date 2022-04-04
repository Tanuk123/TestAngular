const Product = require("../model/product.model");
const { response } = require("express");

exports.addproduct = (request, response, next) => {
       
    Product
          .create({
            productname:request.body.productname,
            productprice:request.body.productprice,
            productqty:request.body.productqty,
            productDescription:request.body.productDescription,
            productimage:"https://angularbackendapi.herokuapp.com/images/"+request.file.filename,
            categoryId:request.body.categoryId
          })
          .then((result) => {
            return response.status(201).json(result);
          })
          .catch((err) => {
            console.log(err);
            return response.status(403).json({ message: "opps something went wrong!" });
          });
      }

exports.viewproduct = (request,response,next)=>{
    Product.find()
  .then(results=>{
    return response.status(200).json(results);
  })
  .catch(err=>{
    return response.status(500).json({message:"not found"})
  });
}

exports.deleteproduct=(request,response,next)=>{
    Product.deleteOne({_id:request.params.id})
  .then(result=>{
      console.log(result);
      if(result.deletedCount)
       return response.status(202).json({message:"delete success"});
      else 
      return response.status(204).json({message:"not deleted"});
    })
  .catch(err=>{
    console.log(err);
    return response.status(500).json({message:"Oops! something went wrong"});
  });
}

exports.updateproduct=(request,response)=>{
    Product.updateOne({_id:request.body.productId},
      {
        $set:{
            productname:request.body.productname,
            productprice:request.body.productprice,
            productqty:request.body.productqty,
            productDescription:request.body.productDescription,
            productimage:"https://angularbackendapi.herokuapp.com/images/"+request.file.filename,
        }
      }
    )
   .then(result=>{
     console.log(result)
      if(result.modifiedCount)
        return response.status(202).json({message:"update  success..."});
      else
        return response.status(204).json({message:"not updated...."});
   })
   .catch(err=>{
     console.log(err);
     return response.status(500).json({message:"something went wrong"})
   })
}
