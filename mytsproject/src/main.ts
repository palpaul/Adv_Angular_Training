
// import "./tsdemo/demo1";
// import "./tsdemo/demo2";
//import "./tsdemo/MyModule";

import { disp,org } from "./tsdemo/MyModule";

import { Emp, Employee ,IPerson} from "./tsdemo/OopModule";
console.log("main Ts file executed");

disp(); // its a member depedency we are exporitng this function in MyModule.ts file and here importing and calling the same function okay
console.log(org); // now calling org as well 

// for using class we need to create the obj of that class or initializevthe obj of the class
let e1:Emp = new Emp(101,"Rahul")
var emp1:Emp = new Emp(102,"Paul");
e1.showEmpDetails();
emp1.showEmpDetails()


// Interface obj Inslization
let p1: IPerson = {personId: 201,personName:"Baha"}
console.log(p1)

//class simplified 
let e2: Employee = new Employee(500,"MNC")
console.log(e2);