const Product=require('../models/product')

// defining the operation or the apis 

exports.addProduct=async (req,res)=>{
    try{
        let productData=req.body;// getting the product details as the request from the user through api
        const productObj= new Product(productData);// creating a obj for the received data 
        productData=productObj.save();// saving the data
        res.status(200).json(`Product Added Successfully`);// giving the response to the user
    }
    catch(err){
        res.status(400).json(`Product not added ${err}`);// used to display the error
    }

}

exports.getAllProducts=async(req,res)=>{
    try{
        const products= await Product.find();
        res.status(200).json(products);

    }
    catch(err){
        res.status(400).json({'msg':`error in api : ${err}`})
    }
}

exports.getProductByTitle=async (req,res)=>{
    try{
        let title=req.params.title;
        const product = await Product.findOne({title:title});
        if(!product){
            res.status(400).json({'msg':'product with the title not found'})
        }
        else{
            res.status(200).json(product);
        }
    }
    catch(err){
        res.status(400).json({'msg':`error in api : ${err}`})
    }
    
}

exports.getAllProductsByCat=async (req,res)=>{
    try{
        let cat=req.params.cat;
        const products= await Product.find({category:cat});
        if(!product){
            res.status(400).json({'msg':'product with the category not found'})
        }
        else{
            res.status(200).json(products);
        }
    }
    catch(err){
        res.status(400).json({'msg':`error in api : ${err}`})
    }
    
}

exports.deleteProductById=async (req,res)=>{
    try{
        let id=req.params.id;
        const product= await Product.findByIdAndDelete(id);
        if(product==null){
            res.status(400).json({'msg':'product with the id not found'})
        }
        else{
            res.status(200).json({'msg':'product deleted successfully'})
        }
    }
    catch(err){
        res.status(400).json({'msg':`error in api : ${err}`})
    }
}

exports.updateProduct=async(req,res)=>{
    try{
        let id=req.params.id;
        let newbody=req.body;
        const product= await Product.findByIdAndUpdate(id,{$set:{title,price}},{new:true});
        if(!product){
            res.status(400).json({'msg':`Product not found`})
        }
        else{
            res.status(200).json({'msg':`Product updated sucessfuly`});
        }


    }
    catch(err){
        res.status(400).json({'msg':`error in api : ${err}`}) 
    }
}

// Alternative approach for update

/*const product = await Product.findById(id);
if (!product) return res.status(404).json({ msg: "Product not found" });

product.title = req.body.title || product.title;
product.price = req.body.price || product.price;

await product.save();
res.status(200).json({ msg: "Product updated successfully", product });*/