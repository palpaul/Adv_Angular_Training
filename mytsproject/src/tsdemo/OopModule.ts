//class and interface
export class Emp{
    //declare data mmembers with access modifier

    public empid:number
    public empname:string

    //constructor initialize data menber
    constructor(empid:number,empname:string){
        this.empid = empid
        this.empname = empname
        console.log("its a emp class");
    }

    // method members

    public showEmpDetails(){
        console.log("EMployee Name :", this.empname, "Employee Id: ", this.empid)
    }
}

//simplified class Defination oin ts
export class Employee{
    constructor(public eid:number, public ename:string){

    }
}

// Interface
export interface IPerson{
    personId:number
    personName:string
}
