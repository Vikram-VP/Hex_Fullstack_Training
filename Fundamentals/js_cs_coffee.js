/**
 * create functions to take order of coffee from a customer and after 3 seconds serve it
 */

//const takeOrder=(custName,item,callback)=>{console.log('order received for '+ custName + " ,preparing "+item);}
const takeOrder=(custName,item,callback)=>{console.log(`order recieved for customer ${custName} ,preparing ${item}`); 
setTimeout(()=>callback(custName,item),3000);
}
const serve=(custName,item)=>console.log(`serving ${item} to customer ${custName}`)

takeOrder('harry','latte',serve);
