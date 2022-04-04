const { default: mongoose } = require("mongoose");
const Schema= mongoose.Schema;
const productSchema = new mongoose.Schema({
  productname: {
    type: String,
    required: true
  },
  productprice:{
      type:Number,
      require:true,
      min:1
  },
  productqty:{
    type:Number,
    require:true,
    min:1
  },
  productDescription:{
    type: String,
    required: true
  },
  productimage: {
    type: String,
    required: true
  },

  categoryId: {
     type:Schema.Types.ObjectId,
     require:true
  }
});
module.exports = mongoose.model("product", productSchema);