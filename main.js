"use strict";
/*type Student = {
  name: string;
  rollNumber: number;
  age: number;
  subject: string;
};

type Teacher = {
  name: string;
  age: number;
  exp: number;
  status: string;
};

let stud1: Student = {
  name: "ASGHAR ALI",
  rollNumber: 1234,
  age: 25,
  subject: "english",
};

let teach1: Teacher = {
  name: "HAMZAH",
  age: 40,
  exp: 6,
  status: "professional",
};
console.warn(stud1.name);
console.log(stud1.age);
console.log(stud1.rollNumber);
console.log(stud1.subject);*/
// function add (a:number,b:number):number{
// return a+b
// console.log(10+20);
/*type person = { name: string; subject: string; age: number; status: boolean };

const person: person = {
  name: "KHAWAJA ASGHAR ALI",
  subject: "ENGLISH",
  age: 40,
  status: true,
};
console.log(
  "My Name is" +" " +person.name +" "+ "My Subject is"+ " "+person.subject +" "+"And i Am Telling You My Age is"+" "+person.age+" "+"and my status is" +" " +person.status);
console.log(person.subject);
console.log(person.name);
console.log(person.age);
console.log(person.status);*/
/*type father = { name:string , age:number , status:string , profession:string

};

const father:father = { name       : "KHAWAJA SHAUKAT ALI",
                        age        :  72,
                        status     : "FATHER",
                        profession : "BUSINESS"

};
type son1 = { name     : string,
              age      :number,
              status   :string,
              student  :boolean,
              Fsubject :String,
};

const son1 :son1 ={ name        :"KHAWAJA ASGHAR ALI",
                    age         :46,
                    status      :"married",
                    student     :true,
                    Fsubject    :"ENGLISH",

                    
};
console.log(`MY FATHER NAME IS ${father.name},AND MY NAME IS ${son1.name}`)
console.log(father.age)
console.log(son1.age)
console.log(father.profession)
console.log(son1.Fsubject)
console.log(son1.status)*/
//   now we will study about type literal / ///
/*type Name = string;
type Age = number;
type Person = {
    name: Name;
    age: Age;
};
const person:Person={
  name: "khawja",
  age :46,
};
console.log(person.name)*/
// kiwi value will be added in last of this array//
// let fruits:string[]=["mango","orange","banana","chery","graphs"];
// fruits.push("kiwi");
// console.log(fruits);
// out put///[ 'mango', 'orange', 'banana', 'chery', 'graphs', 'kiwi' ]
// let fruits:string[]=["mango","orange","banana","chery","graphs"];
// furints.pop();
// console.log(fruits);
// output==now kiwi will be remove at last from array..
// let fruits:string[]=["mango","orange","banana","chery","graphs"];
// fruits.unshift("watermelan");
// console.log(fruits);
// out put///[ 'watermelen', 'orange', 'banana', 'chery', 'graphs', 'kiwi' ]
// watermelan will be added in first of array..
// let fruits:string[]=["mango","orange","banana","chery","graphs"];
// fruits.unshift("kiwi");
// console.log(fruits);
// out put///["kiwi" 'mango', 'orange', 'banana', 'chery', 'graphs']
// kiwi will be added in first of array///
// let fruits:string[]=["mango","orange","banana","chery","graphs"];
// fruits.shift();
// let a = fruits.shift()
// console.log(fruits);
// console.log(a)
// out put///['orange', 'banana', 'chery', 'graphs',  ]
// mango willbe remove from the first of array//
// let furints:string[]=["mango","orange","banana","chery","graphs"];
// furints[2]="kiwi"
// console.log(furints);
// isme hamne banana ki jaga kiwi se replace kar di he.
// let furits: string[] = ["apple", "orange", "mango", "banana", "pineapple"];
// let SliceArray = furits.slice(0, 4);
// console.log(SliceArray);
// is kisim ke amal me ham jo bhi pehli value assign krte he(0=apple)usko shamil karte hen
// aur last value(4=pineapple)isko shamil nhi krte.to out put icka ayega [apple,orange,mange,banana]
// kunke number 4 per pineapple he //
// let furits: string[] = ["apple", "orange", "mango", "banana", "pineapple"];
// let SliceArray = furits.slice(1);
// console.log(SliceArray);
// out put apple ko chor ka answer ye hoga[orange,mango,banana,pineapple]
// let furits: string[] = ["apple", "orange", "mango", "banana", "pineapple"];
// let SliceArray = furits.slice();
// console.log(SliceArray);
// agar fruits.slice()empty chore ge to answer pora array hi ayega//
// 0         1         2        3           4
// let fruits: string[] = ["apple", "orange", "mango", "banana", "pineapple"];
//  fruits.splice(2,1);
// console.log(fruits);
// is me btaya jaraha he ke 2 number ki jo value he(mango)usko remove karna he aur 1 number ka
// matlab heke bas aik hi value remov karni he to sirf mango hi remove hoga aur baki sara array
// answer hoga//
// 0         1         2         3         4
// let fruits: string[] = ["apple", "orange", "mango", "banana", "pineapple"];
//  fruits.splice(3,0);
// console.log(fruits);
// is amal me 3 aur zero ka matlab he ke 3 number ki value remove karni he ya nahi uska inhesar
//  agli valu per hoga yani 0 he yani 3 number ki value 0 remove karni he (uper jese hamne kamkia he )
// 2 number ki bs aik (1) hi value  remove krni thi to wo remove hogai thi magar yahan hamne
// 3 number ki value 0 remove karni he isla matlab remove nhi hoski to output poora array hi hoga..
// 0          1         2         3         4
// let fruits: string[] = ["apple", "orange", "mango", "banana", "pineapple"];
//  fruits.splice(1,1);
//  fruits.splice(2,1);
// console.log(fruits);
// is kisim ke method me pehle 1,1 yani 1 orange he jo 1 bar delete hojaye ga to baki
// ["apple,mange,banana,pineapple "]reh jaye ga aur phir step two me 2,1 ka amal hoga aur
// 2 per banana he aur aik bar remove hojayga to output [apple mango aur pineapple ]hoga...
// let fruits:string []= [
//
// "apple",
//  "mange",
// "banan",
// "chery",
// "kiwi",
// ];
// role.push("saleem")
// role.shift()
// role.pop()
// role.splice(1,2)
// let fruitsArray=fruits.slice(1,3)
// fruits.splice(1,3)
// console.log(fruits);
// let drinktuple: [string, string, string, number, string] = [
// "cocacola","marinda","7up",3,"rccola",
// ];
// drinktuple[2]="pepsi"
// drinktuple[2]="pepsi"
// drinktuple[3]=8
// drinktuple[4]="limka"
// console.warn(drinktuple)
// let tuple:[string,string,string,string]=["asghar","ali","khawaja","anas"]
// let tupleMid=tuple.slice(2,0"ayan")
// Middle value
// let middleValue: string = "ayan";
// Tuple ko do hisson mein split karen
//  firsttuple: [] = tuple.slice(0, 2); // Pehle do elements
//  secondHalf: [] = tuple.slice(2); // Baki ke elements
// Naya tuple banaye, middle value ke saath
// let newTuple: [string,string,string,string,string] = [...firstHalf, middleValue, ...secondHalf];
// console.log("Original Tuple:", tuple);
// console.log("New Tuple:", newTuple);
// console.warn(tuple,middleValue)
// ENUM ... ENUM ..ENUM  ////
// enum role {managr,clerk,peon,teaboy}
// console.log(role.pe
// for loop
// for (let i=0 ; i<10 ; i++)
// {
// console.log(`first time ${i +1}`); }
// for loop //////
// let staff:string[]=["manage","officer","clerk","peon","tea boy","sweeper"]
// // console.log(staff.length)
// for (let i = 0 ; i < 5 ; i++){
//   console.log(i+1)
// }
//                      //  0          1         2      3       4        5
//   let staff:string[]=["officer","manager","clerk","peon","tea boy","sweeper"];
//     console.log(`Rank  1 , ${staff[0]} He is superior all of them office`)
//     console.log(`Rank  2 , ${staff[1]} He is subordinate of his officer`)
//     console.log(`Rank  3 , ${staff[2]} He is subordinate of his manager`)
//     console.log(`Rank  4 , ${staff[3]} He is subordinate of his clerk `)
//     console.log(`Rank  5 , ${staff[4]} He is subordinate of his peon`)
//     console.log(`Rank  6 , ${staff[5]} He is a private worker}`)
//       for (let i = 6 ; i < staff.length; i++) {
//      // console.log(`Rank ${i+1}, ${staff[i]}`);
//  let fruits:string[]=["mango","apple","banaa","kiwi","cherry","graps"]
//  console.log(`1 ${fruits[0] } is my favorite fruite`)
// for (let i=2;i< fruits.length; i++){
//   console.log(i)
// let stafflist: string[] = [
//   "asghar",
//   "ali",
//   "khawaja",
//   "ayan",
//   "anas",
//   "azan",
//   "ibrahim",
//   "waseem",
//   "saim",
//   "asif",
// ];
// for (
//   let i = 0;  true ; i++){
// console.log(`${i+1},${stafflist[i]}`)
// }
//   enum trafficSignal {
//     Red,
//     Yellow,
//     Green
//   }  
//   // console.log(trafficSignal.green)
//   let currentSignal:trafficSignal=trafficSignal.Red;
// switch(currentSignal){
//   case trafficSignal.Red:
// console.log("stop yuor whicle right now");
// break;
// case trafficSignal.Yellow:
//   console.log("ready to go");
//   break;
//   case trafficSignal.Green:
//     console.log("go");
//     break;
// }\\
var TrafficSignal;
(function (TrafficSignal) {
    TrafficSignal[TrafficSignal["Red"] = 0] = "Red";
    TrafficSignal[TrafficSignal["Yellow"] = 1] = "Yellow";
    TrafficSignal[TrafficSignal["Green"] = 2] = "Green";
})(TrafficSignal || (TrafficSignal = {}));
let currentSignal = TrafficSignal.Red;
switch (currentSignal) {
    case TrafficSignal.Red:
        console.log("Stop the vehicle now");
        break;
    case TrafficSignal.Yellow:
        console.log("Prepare to stop");
        break;
}
