const express=require('express')
const{addProduct,getAllProducts,getProductByTitle,getAllProductsByCat,deleteProductById,updateProduct}=require('../controllers/productcontroller');
const router=express.Router();

router.post('/addproduct',addProduct);
router.get('/getAll',getAllProducts);
router.get('/getproduct/:title',getProductByTitle);
router.get('/getproductbycat/:cat',getAllProductsByCat);
router.delete('/deleteproduct/:id',deleteProductById);
router.put('/updateproduct/:id',updateProduct);
module.exports=router;  //exporting the router to use in other files.  //export