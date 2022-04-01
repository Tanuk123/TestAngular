const Category = require("../model/category.model");
const { response } = require("express");

exports.addcategory = (request, response, next) => {
  Category.create({
    categoryname: request.body.categoryname,
    categoryimage: "https://angularbackendapi.herokuapp.com/images"/ + request.file.filename,
  })
    .then((result) => {
      return response.status(201).json(result);
    })
    .catch((err) => {
      console.log(err);
      return response.status(500).json({ message: "opps something went wrong!" });
    });
  }

  exports.viewcategory=(request,response,next)=>{
    Category.find()
    .then(result=>{
      return response.status(201).json(result);
    }).catch(err=>{
      console.log(err);
      return response.status(500).json({error:"Something went wrong"});
    });
  }

  // exports.deletecategory=(request,response,next)=>{
  //   Category.deleteOne({_id:request.params.id}
  //     .then(result=>{
  //       console.log(result);
  //       if(result.deletedCount)
  //        return response.status(201).json({message:"Deleted Success"});
  //        else
  //        return response.status(204).json({message:"Not Deleted"});
  //     }).
  //     catch(err=>{
  //       console.log(err);
  //       return response.status(500).json({error:"Oops! Something went wrong"});
  //     })
  //     )
  // }

  // exports.updatecategory=(request,response,next)=>{
  //  Category.updateOne({_id:request.params.id},
  //     {
  //       $set:{
  //         categoryname:request.body.categoryname,
  //         categoryimage:"http://localhost:3000/images/"+request.file.filename
  //       }
  //   })
  //  .then(result=>{
  //    console.log(result);
  //    if(result.modifiedCount)
  //     return response.status(201).json({message:"Updated successs"});
  //     else
  //      return response.status(204).json({message:"Not Success"});
  //  })
  //  .catch(err=>{
  //    console.log(err);
  //    return response.status(500).json({error:"Something went wrong"});
  //  })
  // }
