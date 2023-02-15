
console.log("demo2 is executed");


//explicit type declaration
let mname :string

//mname =true // it will give error beacuse mane var we are declaring as string okay

mname = "MNC";


function add(a:number,b:number): number{
    return a+b;
}
let mynum = add(10,30) //
console.log(mynum);


//implicit type declaration , declaration by programing language itslef , developer dont need to declare 

let f = true
function display(){ // here in this function return type is void but we are not declaring anything so automaticallly langauge it self declaring this okay 
    console.log("this is desplay function message")
}
display()



