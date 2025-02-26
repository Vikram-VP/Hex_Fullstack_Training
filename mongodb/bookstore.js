const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    title:{type:String,required:true},
    author:{type:String,default:'Unknown'},
    price:{type:Number}
})

const Book = mongoose.model('Book',bookSchema);
module.exports=Book;
