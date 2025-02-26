//traditonal way -- old way
function welcome(){
    let fname='Harry'; //this cope is only within this function
    return "Welcome "+ fname;
}

function welcomev2(fname){
    return "Welcome "+ fname;
}

console.log(welcome()); //welcome harry
console.log(welcomev2('john'));//welcome john

//Arrow function 

const welcomear=()=>{
    let fname=" Harry ";
    return "Welcome "+ fname;
}

const welcomev2ar=(fname)=>{
    return "Welcome "+ fname;
}
console.log(welcomear()); //welcome Harry
console.log(welcomev2ar('john'));//welcome john

/**
 * Usecase : the customer is giving the name in format : HArry JAmes potter
 * Task: convert name into harry_james_potter
 */

const formatName=(name)=>{
    name=name.toLowerCase().replaceAll(' ','_');;
    return name;
}

console.log(formatName('HArry JAmes potter'));