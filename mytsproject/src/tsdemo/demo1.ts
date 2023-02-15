


console.log("Demo1 TS file done");


for(let i =1; i<=5;i++){
console.log(i);
}
//console.log("value of i after for loop",i); // var is a global scope
// let is a block scope 

const orgname = "OPTUM";

//orgname = "IBM"; // can not reassing the const value okay because its a constant

//anonymous function

let m = function(){
    return "OPtum Org";
}
console.log(m); // its will print function struture it self
console.log(m()); // now it will return the function value okay 


// Arrow function - ignore hte function keyword & return keyword , its kind od lambda function in java 


let t = ()=>"UHG"
console.log(t());

//in arroy function if we use multiline  in curly braccres then use return kwyword okay 
let mt = () =>{
    console.log("first Line");
    console.log("second Line");
    console.log("last Line");
    return "multi arrow"
}
console.log(mt());


//arrow function with single paramter

let sp = (y:any)=>y
console.log(sp("satya"));
console.log(sp(30+40));

