var express = require('express');
var router = express.Router();
const userController=require('../controller/user.controller');
const categoryController=require('../controller/category.controller.js');
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
router.post("/addcatgeory",upload.single("categoryimage"),categoryController.addcategory); 

module.exports = router;
