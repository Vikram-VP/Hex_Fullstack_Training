const jwt=require('jsonwebtoken');

const auth=(req,res,callback)=>{
    try{
        let token=req.headers("Authorization");
        if(!token)
            return res.status(400).json({'msg':'No token passed'})
        let actualToken=token.split(' ')[1];

        const SECRET_KEY='15111983200722';
        let obj=jwt.verify(actualToken,SECRET_KEY);

        req.user=obj;
        callback();
    }
    catch(err){
        return res.status(400).json({msg:"ERROR IN AUTH"})
    }
}

module.exports=auth;
