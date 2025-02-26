const mongoose=require('mongoose')

const productSchema=mongoose.Schema({
    'title':{type:String,required:true},
    'price':{type:Number,required:true},
    'category':{type:String,required:true},
    'shortDesc':{type:String,required:true}
})
const Product=mongoose.model('Product',productSchema);
module.exports=Product;
