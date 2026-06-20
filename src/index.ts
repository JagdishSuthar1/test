// import type ts = require("typescript");

// class Student {

//     constructor(public name : string , public age : number , public course : string , public readonly studentId : number) {};

//     introduce() : void {
//         console.log("My name is : ", this.name)
//     }
// }

// class PaymentService {
//     constructor(private balance : number) {
        
//     }

//     pay(amount : number) : number  {
//       if(amount <=0 || amount > this.balance) return 0;
      
//       else {
//         this.validateUPI();
//         this.connectToBank();
//         this.payAmount(amount);
//         return 1;
//       }
//     }

//     private validateUPI() : void{
//         console.log("Validating the UPI....")
//     }

//     private connectToBank() : void {
//         console.log("Connecting to the Bank....")
//     }

//     private payAmount(amount : number) {
//         console.log("Paying the amount : ", amount);
//     }

//     getBalance() : number {
//         return this.balance
//     }

//     setBalance(balance : number) {
//         if(balance <= 0) {
//             console.log("balance can't be set")
//         }

//         this.balance = balance
//     }
// }

// const student = new Student("Jagdish",22, "B.Tech", 101);
// student.introduce();
// console.log("My age is : ",student.age);

// console.log(student.course)

// // const account = new BankAccountNumber(2340);

// // console.log("My account balance is : ", account.getBalance());

// // console.log("Now i am changing my account balance");

// // account.setBalance(4560)
// // console.log("My account balance is : ", account.getBalance());

// const payment1 = new PaymentService(12334);

// payment1.pay(455);


// console.log("------------------------------------\n")


// ///////////////////////////////////////////////
// ///////////////////////////////////////////////

// class Employee {
//     constructor(public id : number, public name : string , public  salary : number) {}

//     work() : void {
//         console.log(`Employee with id ${this.id} correponds to ${this.name} who has salaray of ${this.salary}`)
//     }
// }

// class Developer extends Employee {
//     constructor(id : number, name : string , salary : number, public devDepartment : string) {
//         super(id, name, salary);
//     }
//     override work() : void {
//         console.log(`Employee with id ${this.id} correponds to ${this.name} who has salaray of ${this.salary} and department is ${this.devDepartment}`)
//     }

//     superWork() : void {
//         super.work()
//     }
// }

// const dev1 = new Developer(101, "Jagdish", 8980, "SDE");
// dev1.work()
// dev1.superWork()


// console.log("------------------------------------\n")
// console.log("------------------------------------\n")

// ///////////////////////////////////////////////
// ///////////////////////////////////////////////

// class NotificationService {
//     send() : void {
//         console.log("Sending notification from base class")
//     }
// }

// class EmailNotificationService extends NotificationService {
//     override send() : void {
//         console.log("Sending notification from email class")
//     }

//     onlyEmailCanCall() : void {
//         console.log("Only email can call")
//     }
// }

// class SmsNotificationService extends NotificationService {
//     override send() : void {
//         console.log("Sending notification from sms class")
//     }

//        onlySmsCanCall() : void {
//         console.log("Only sms can call")
//     }
// }

// const not1 = new NotificationService();
// const not2 = new EmailNotificationService();
// const not3 = new SmsNotificationService();

// not1.send();
// not2.send();
// not3.send();


// console.log("-----------------------------------\n\n")
// const allNotifications : NotificationService[] = [
//     new EmailNotificationService(),
//     new SmsNotificationService()
// ]


// allNotifications[0]?.send();
// allNotifications[1]?.send();
// console.log("-----------------------------------\n\n")


// class Operations {
    
//      add(a : number , b : number) : number;
    
//      add(a : string , b : string) : string;
    
    
//      add (a : string | number , b : string | number) : number | string {
//         if(typeof a == "number" && typeof b === "number") {
//             return a + b;
//         }
//         else if(typeof a == "string" && typeof b === "string") {
//             return a + b;
//         }
//         else return 0;
//     }
// }



// const op = new Operations();
// console.log(op.add(3, 5))

// console.log("-----------------------------------")
// console.log("-----------------------------------\n\n")

// interface User {
//     id : number , 
//     name : string,
//     age? : number
// }

// const person = {
//     id : 1,
//     name : "jagdish",
//     age : 22,
//     city : "Knagar"
// }
// const user1 : User = person

// interface Emp {
//     readonly id : number,
//     name : string,
// }

// interface Emp {
//     age : number
// }

// const emp1 : Emp = {
//     id : 2,
//     name : "Jagdish",
//     age : 22
// }


// emp1.name = "Jaggu";
// // emp1.id = 45
// console.log(emp1)

// interface Dev extends Emp {
//     program : string
// }

// const dev2 : Dev = {
//     id : 1,
//     name : "Jagdish",
//     age : 22,
//     program : "ts"
// }

// console.log(dev2)

// type Status = "archive" | "active";
// type callback = () => void;

// interface Animal {
//     name : string;

//     speak() : void ;
// }

// class Dog implements Animal {
//     name : string;

//     constructor(name : string) {
//         this.name = name 
//     }

//     speak(): void {
//         console.log("Dog barks")
//     }

//     walk() : void {
//         console.log("Dog can walk")
//     }

// }

// interface Calculator {
//     add(a : number , b : number) : number;
// }

// class Basic implements Calculator {
//     add(a : number , b : number) : number{
//         return  a + b;
//     }

// }

// const dog1 = new Dog("II")
// dog1.walk()


// const calc = new Basic();
// console.log(calc.add(4,6));

// interface Person {
//     name : string,
//     age : number
// }

// interface EmployeeDetails extends Person {
//     id : number,
//     department : string,
//     salary : number
// }

// class Employee implements EmployeeDetails {
//     constructor(public name : string , public age : number, public id : number, public department : string , public salary : number) {}
    

// }

// interface Printable {
//     print() : void;
// }

// interface Savable {
//     save() : void;
// }

// interface Document extends Printable , Savable {
//     title : string;
// }

// const user : Document = {
//     title: "My Document",
//     print() {
//         console.log("Printing")
//     }
//     ,
//     save() {
//         console.log("Saving")
//     }
// }

// console.log(user.print())

// abstract class Animal {
//     constructor(public name : string, public color : string) {}
//     abstract sound() : void;
//     eat() : void {
//         console.log("Eating..")
//     }
// }


// class Dog extends Animal {
//     constructor(public name : string, public color : string) {
//         super(name , color)
//     }

//     sound() : void {
//         console.log("Dog barks")
//     }

//     info() : void {
//         console.log(`Dog name is "${this.name}" and color is "${this.color}"`)
//     }
// }

// const animal1 = new Dog("ii", "white");
// animal1.sound();
// animal1.info();
// animal1.eat();


// class Student {
//     static schoolName = "IIT JODHPUR";
//     constructor(public name : string) {}
//     static eat() : void {
//         console.log(`student can eat and its school name is ${Student.schoolName}`)
//     }
// }

// console.log(Student.schoolName);
// const student1 = new Student("Jagdish");
// Student.eat();

// class Logger {
//     private static instance : Logger;
//     private constructor() {}

//     static getInstance() : Logger {
//         if(!Logger.instance) {
//             return Logger.instance = new Logger();
//         }
//         else return Logger.instance;
//     }

//     log(message : string) {
//         console.log(message)
//     }
// }

// const logger : Logger = Logger.getInstance();
// logger.log("Instance created")

// class Box <K, V> {
//     constructor(public key : K,public value : V) {}

//     typeOfValue() {
//         console.log("The type of value is : ", typeof(this.value))
//     }

//     print<V> () : void{
//             console.log("the value is : ", this.value)
//     }
// }

// const b1 = new Box<string, number> ("Jagdish", 12);
// b1.typeOfValue();
// b1.print()


function merge<T extends object, U extends object> (obj1 : T , obj2 : U) {
    return {obj1, obj2};
}

console.log(merge({name : "Jagdish"},{age : 22}))
console.log("I am in new branch")