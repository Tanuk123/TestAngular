const Category = require("../model/category.model");
const { response } = require("express");

exports.addcategory = (request, response, next) => {
  Category.create({
    categoryname: request.body.categoryname,
    categoryimage: "http://localhost:3000/images/" + request.file.filename,
  })
    .then((result) => {
      return response.status(201).json(result);
    })
    .catch((err) => {
      console.log(err);
      return response
        .status(403)
        .json({ message: "opps something went wrong!" });
    });
  }