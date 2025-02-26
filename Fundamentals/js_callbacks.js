function welcome(name,callback,logout){ //callback =()=>{ console.log('GoodBye!!')}
    console.log('Welcome '+ name);
    // i want to call another func from within this func
    callback();
    logout();
}

const bye=()=>{console.log('GoodBye!!')}//Since there is onlyy one statement there is no need of brazers

welcome('harry',bye,()=>{});//The logout function is given directly using blank arrow function
// check limit -- validate -- benificinary acct -- verify ba -- transfer -- op debit credit

