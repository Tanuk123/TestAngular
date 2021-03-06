var express = require('express');
const jwt=require('jsonwebtoken');
const tokenvarification=require('../middleware/tokenVarification');
var router = express.Router();
const userController=require('../controller/user.controller');
const categoryController=require('../controller/category.controller.js');
const productController=require('../controller/product.controller');
const multer = require("multer");
var Storage = multer.diskStorage({
  destination: "public/images",
  filename: function (request, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
var upload = multer({ storage: Storage });

router.post("/signup" ,userController.signup);
router.post("/signin" ,userController.signin);

router.post("/addcatgeory",tokenvarification.tokenvarify,upload.single("categoryimage"),categoryController.addcategory); 
router.get("/viewcategory",tokenvarification.tokenvarify,categoryController.viewcategory);
router.post("/deletecategory",tokenvarification.tokenvarify,categoryController.deletecategory);
router.post("/updatecategory",tokenvarification.tokenvarify,upload.single("categoryimage"),categoryController.updatecategory);

router.post("/addproduct",tokenvarification.tokenvarify,upload.single('productimage'),productController.addproduct);
router.get("/viewproduct",tokenvarification.tokenvarify,productController.viewproduct);
router.post("/deleteproduct/:id", tokenvarification.tokenvarify,productController.deleteproduct);
router.post("/updateproduct",tokenvarification.tokenvarify, upload.single('productimage'), productController.updateproduct);


module.exports = router;

