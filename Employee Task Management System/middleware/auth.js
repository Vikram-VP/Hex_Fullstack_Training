const jwt=require('jwtwebtoken');

const auth=(req,res,callback)=>{

    // i am reading the token from theh authorization header which wwill be passed by the postman
        try{
    // Bearer token
    let token=req.headers('Authorization');

    if(!token){
        return res.status(400).json({msg:"No token passed"})
    }
    // split the token from bearer keyword
    let actualToken=token.split(' ');

    const SECRET_KEY='15111983200722';
    let obj=jwt.verify(actualToken,SECRET_KEY);

    req.user=obj;// this will now be tranfered to the api where i use auth
    callback();
}
catch(err){
    return res.status(400).json({msg:"ERROR IN AUTH"})
}
}

module.exports=auth;