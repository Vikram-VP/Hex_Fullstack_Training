const x=[4,6,1,8,30];

console.log(x.length);//6
console.log(x[3])//8

/**
 * Employee: Table
 * id   namee   department   empnum    city
 * 1    Harry   IT           1234      Bangalore
 * 2    Ron     Dev          5678      Mumbai
 * 
 */

let emp1={ // this is an object in js
    id:1,
    name:"Harry",
    department:"IT",
    empnum:1234,
    city:"Bangalore",
    salary: 60000
}

let emp2={
    id:2,
    name:"Ron",
    department:"Dev",
    empnum:5678,
    city:"Mumbai",
    salary: 70000

    }

let employee=[emp1,emp2];
let empArray=[];
console.log(empArray.length);//0
empArray.push(emp1);
empArray.push(emp2);
console.log(empArray.length);//2
console.log(employee.length);//2

// Iterate over the Array

empArray.forEach((e)=>console.log(e))

/**
 * filter method : it filters the records which do not satisfy the given criteria
 * filter empArray based on the given city
 * 
 */

let empFilter = empArray.filter((e)=>e.city.toLowerCase() === "Mumbai".toLowerCase())
empFilter.forEach((e)=>{console.log(e)})

// Note: === checks the datatype and then the value, whereas == checks only the value
//* Spread operator it create a clone of the array
/**
 *let x=[1,2,3] --> address -->100-->1,2,3
 ...x ---> address -->200 -->1,2,3
 */ 

 console.log(...employee.filter((e)=>e.city.toLowerCase()==='Bangalore'.toLowerCase()))
 /* Map:Give increment of 10% to all the employe*/
 console.log("After Increment")
 // piped method!! using multiple function
 let empArrayInc = empArray.filter((e)=>e.city.toLowerCase()==='Bangalore'.toLowerCase()).map((e)=>({...e,salary:e.salary+(e.salary*0.1)}))
 empArrayInc.forEach((e)=>console.log(e))

 /** Sort operation
  * [2,4]
  * [2,2]
  * [4,2]
  */

 console.log("-----After sorting-----")
 console.log(employee.sort((e1,e2)=>e1.salary - e2.salary))//ascending
 console.log(employee.sort((e1,e2)=>e2.salary - e1.salary))//descending
