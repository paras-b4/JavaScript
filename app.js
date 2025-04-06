/*
 JavaScript (JS) is a versatile programming language used for both frontend and backend development.

 javascript is used to create interactive web pages by handling events , manipulating DOM ,and updating content dynamically 

 with the rise in node.js and express.js . javascript is now widely used for server-side development .
 
 1. how javascript works ?
 js engine reads the js code and break it into tokens .
 It then converts the tokens into an Abstract Syntax Tree (AST).
 The JS engine converts AST into an intermediate form called bytecode.

 The JS Virtual Machine (JSVM) executes the bytecode using an interpreter.
 Interpreter (Ignition in V8) starts executing the bytecode line by line

  JIT (Just-in-Time Compiler) is part of the JSVM and helps optimize execution.
 🟢 JS bytecode is executed by the JavaScript Virtual Machine (JSVM).
 🟢 The JIT Compiler (inside JSVM) speeds up execution by compiling bytecode into machine code.


 */
// console.dir("hello world") // use dir if you want to inspect dom element 

// variables is a type of container used to store/hold values 
// js is dynamically types language means datatype are determined at runtime so we need not explicitly detrmine the type .
// let num=4+7
// console.log(num)
// console.log(num+3)

// let name='paras\'s laptop'
// // we can use double quotes into single quotes and vice versa . 
// console.log(name)

// constants 

// let r=6
// const pi=3.14 // if we create a variable as const then we cannot reassign the same variable to a new value .
// let area
// r=5
// area=pi*r*r
// console.log(area)


// Data type is used to describe the type of data 
// js datatype are 1. primitive and 2. objects
// 1. Number 2.string 3. boolean  4. null 5.symbols like (let num=symbol('id')) 6. bigint 7.undefined like (let num )
// let data=8
// let user="paras"
// let data1=3.4
// let num=null
// let is=true
// let num1=9868471145n
// let hex=0xabcdef247
// let oct=0o76540
// console.log(oct)
// console.log(typeof oct) //number 
// console.log(hex)
// console.log(typeof hex) // number
// console.log(num1+23n) // we canot convert bigint to int 
// console.log(typeof num1) // bigint 
// console.log(typeof data+data1) // number
// console.log(typeof user) // string
// console.log(typeof num) // object 
// console.log(typeof is) // boolean
// let num=10
// console.log(Number.MAX_VALUE*10) // infinity
// let num2
// let num=Symbol("👨‍💻 paras yadav ")
// let num1="👨‍💻 paras yadav "
// console.log(num2) // undefined 
// console.log(typeof num1) // string 
// console.log(typeof num) // symbol 

// String datatype
// let firstname='paras'
// let lastname=' yadav'
// let fullname=firstname+lastname
// console.log(fullname.toUpperCase());
// console.log(fullname.slice(-5,-3))
// // we have diff command for string like \n , \t , \b , \v ,\ for skip the quotes 
// let username='parass\b yadav\'s \vlaptop'
// console.log(username)

// Boolean datatype
// let bool= 5<7
// console.log(bool)
// let name=null
// let n
// console.log(n)
// console.log(typeof n) // undefines 
// console.log(name)
// console.log(typeof name) // object

// let num=5
// console.log(num/'paras') // nan 
// let num=String(100)
// console.log(num,typeof num)
// let num1=Number(num)
// console.log(num1,typeof num1)

// let x
// console.log(x,typeof x) // undefined ,undefined 
//  x=10
// console.log(x,typeof x) // 10 ,number
// x='paras'+100 // here js automatically or implicitly convert the type of one datatype into another datatype is called coersion 
// console.log(x,typeof x) // paras100 , string 
// y=100+"yadav"
// console.log(y,typeof y)
// // a='paras'-100 // nan (not a number)
// a='1000'-10
// console.log(a,typeof a)
// console.log("5" + 3);   // "53" (Number 3 is converted to a string)
// console.log("5" - 3);   // 2 (String "5" is converted to a number)
// console.log(5 * "2");   // 10 (String "2" is converted to a number)
// console.log(5 == "5");  // true (String "5" is converted to number 5)

// let x=!100
// console.log(x,typeof x) // flase ,boolean

// let x1=2+""
// console.log(x1,typeof x1)

// x1=+x1 + 10 // here + operator try to convert string into number .
// console.log(x1,typeof x1)

// let n=parseInt('123 paras')
// console.log(n,typeof n)

// Arithmetic operator

// let num=5
// let num1=2
// let num2=true // 1
// let num3=true // 1
// console.log(num2+num3)
// let result=num+num1+1*3/2
// console.log(result,typeof result)
// console.log(num+num1)
// console.log(num-num1)
// console.log(num/num1)
// console.log(num%num1)
// console.log(num*num1)
// console.log(num**num1)
// console.log("power is",Math.pow(num,num1))
// console.log(++num)
// num++ // post increent 
// console.log(num)

// Relational or comparision operator 

// let num=5
// let num1=6
// console.log(`num is : ${num} and num1 is : ${num1}`,num>num1)
// console.log(`num is : ${num} and num1 is : ${num1}`,num<num1)
// console.log(`num is : ${num} and num1 is : ${num1}`,num>=num1)
// console.log(`num is : ${num} and num1 is : ${num1}`,num<=num1)
// console.log(`num is : ${num} and num1 is : ${num1}`,num===num1) // here === check both datatype and value as well 
// console.log(`num is : ${num} and num1 is : ${num1}`,num==num1) // here == check the values
// console.log(`num is : ${num} and num1 is : ${num1}`,num!=num1)
// let x='paras'
// let y='disha'
// console.log(x>y) // in case of string it check the ascii value of first character 
// let x1='pen'
// let x2='pencile'
// console.log(x1>x2)
// // 'p' vs 'p' ✅ (same)
// // 'e' vs 'e' ✅ (same)
// // 'n' vs 'n' ✅ (same)
// let a='5'
// let a1=5
// console.log(a==a1)// check only values 
// console.log(a===a1) //check both value and type 
// let x='' // falsey values are "",0,-0,nan,null
// let y=false
// console.log(x==y)
// let x1=1
// let y1=true
// console.log(x1==y1)

// Logical operator 

// let x=7 ,y=8, z=3
// let result=x<y && x<z
// console.log(result)
// console.log(x<y || x<z)
// console.log(!(x<y && x<z))

// if else 

// let num1=6
// let num2=14
// let num3=15
// // let result = num1>num2
// if(num1>num2 && num1>num3)
// {
//     console.log(num1,"is greater")
// }
// else if(num2>num1 && num2>num3)
// {
//     console.log(num2,"is greater")
// }
// else
// {
//     console.log(num3,"is greater ")
// }
// console.log("bye ")

// ternary operatoe 
// let num=10
// let result=num%2==0 ? "even no":"odd no"
// console.log(result)

// switch case // in js if you want to check multiple values in one case then it must be seperate case not coma seperated .
// let day='sunday'
// switch (day.toLowerCase()) {
//     case 'monday':
//     case'tuesday':
//         console.log("6 am")
//     break;
//     case 'wednesday': 
//     case 'thrusday':
//         console.log("7 am")
//     break;
//     case 'friday':
//     case 'saturday':
//         console.log("8 am")
//     break;
//     case 'sunday':
//         console.log("10 am")
//     break;
//     default:
//         console.log("enter a valid day ")
//     break;
// }


// while loop
// let i=0
// while (i<=5) 
// {
//         console.log(i,"hello")
//         let j=0
//         while(j<=5)
//         {
//             console.log(j,"hi")
//             j++
//         }
//         i++
// }


// do-while
// let i=0
// do{
//     console.log(i,"hello")
//     let j=0
//     do{
//         console.log(j,"hi")
//         j++
//     }while(j<=5)
//     i++
// }while(i<=5)


// for loop

// for(let i=5;i>=0;i--)
// {
//     console.log(i,"hello world")
// }

// for(let i=0;i<=5;i++)
// {
//     console.log(i,"hello world")
// }

// let i=1
// for(;i<=5;)
// {
//     console.log(i,"hi")
//     i++
// }

// objects
// let name="sub"
// let person={
//     name:"paras yadav",
//     age:23,
//     marks:98,
//     sub:{
//         name:["java","js","python"]
//     }
// }
// console.log(person)
// console.log(person['name'])
// delete person.age
// console.log(person[name])
// console.log("no of subjects are ",person?.sub.name.length)

// let person={
//     name:"paras yadav",
//     age:23,
//     marks:98,
//     sub:{
//         name:["java","js","python"]
//     }
// }

// for (let k in person)
// {
//     console.log(k,person[k])

// }

// functions

// function greet(n)
// {
//     console.log("good morning",n)
//     return 1
// }
// let name='Paras Yadav'
// console.log(greet(name))

// function greet(u)
// {
//     return `hello ${u}`
// }
// let name="Paras Yadav"
// console.log(greet(name))

// function expression
// let sum = function(x,y)
// {
//         if(x>y)
//         {
//             console.log("division is ",x/y)
//         }
//         else{
//             let temp=x
//             x=y
//             y=temp
//             console.log("division is ",x/y)
//         }
// } 
// let add=sum
// add(4,2)
// add(2,4)

// Arrow function
// let sum =(x,y)=>
// {
//         if(x>y)
//         {
//             console.log("division is ",x/y)
//         }
//         else{
//             let temp=x
//             x=y
//             y=temp
//             console.log("division is ",x/y)
//         }
// } 
// let add=sum
// add(4,2)
// add(2,4)


// Method 
// let laptop={
//     cpu:'i7',
//     ram: 16,
//     name:"dell",
//     greet:function()
//     {
//         return ("hello good morning ")

//     },
//     config:function()
//     {
//         return "in laptop configuration"
//     }

// }
// let r=laptop.greet()
// console.log(r)
// let r1=laptop.config()
// console.log(r1)


// Types of Arrays
// let values = new Array()
// values.push(10,20,30,40,50,'paras')
// for (let k in values)
// {
//     console.log(k,values[k])
// }
// for( let k of values)
// {
//     console.log(k)
// }
// console.log(values.pop()) // pop the last element
// console.log(values.shift()) // delete the element from the beginning 
// console.log(values.unshift(10)) // insert value at the beginning .
// console.log(values.length) // gives the length of array
// console.log(values.splice(2,2,15,30))
// console.log(values) 


// let arr=[]
// arr.push(11,22,33,44,55,'paras1')
// console.log(arr.length)
// for (let k in arr)
// {
//     console.log(k,arr[k]) // here in this for loop it will give the index and we can fetch the corresponding values 
// }
// for (let k of arr)
// {
//     console.log(k) // here in this for loop we can directly fetch the values .
// }
// console.log(arr)


// let num=[12,24,36,48,60,'paras2']
// console.log(num.length)
// console.log(num)


// Array destructuring in js 
// let num=[5,7,2,9,4,1,8,6]
// let [x,y,z,a1]=num
// console.log(x,y,z,a1)
// let num1=[5,7,2,9,4,1,8,6]
// let [a,b,...c]=num1
// console.log(a,b,c)

// let words ="My Name is Paras Yadav Currently learning JavaScript ".split(' ')
// let [a,b,...c]=words
// console.log(a,b,c)

// for each loop 
// let nums=[42,51,24,98,65,12]
// nums.forEach((n,i,nums)=>
// {
//     console.log(n,i,nums)

// }   )

// filter = filter is a method used to filter elements based on given condition , 
// map = map is a method used to transform each element of an array elements , 
// reduce = reduce combines the elements and byperforming operation and gives the single value  

// let nums=[42,51,24,98,65,12]
// nums.filter((n)=>n%2==0).map((n)=>n*2).forEach((n)=>console.log(n))


// set is an unordered collection of unique elements that does not allow duplicates and does not support indexing.
// let nums=new Set("paras yadav")
// nums.add('java')
// nums.add('javaScript')
// nums.add(10)
// nums.add(20)
// console.log(nums)

// map stores data in key,value pairs .for each value a key is associated with it and key must be unique and value can be duplicate .
// let num=new Map()
// num.set(1,"paras")
// num.set(2,"paras1")
// num.set(3,"paras2")
// num.set(4,"paras3")
// num.set(5,"paras4")
// console.log(num.get(2))
// let k=0
// for(let k of num) // return the values or elements 
// {
//     console.log(k)
// }
// for(let k in num) // works with objects key and array index .
// {
//     console.log(k)
// }
// num.forEach(n=>{
//     if(k>=num.size)
//     {
//         console.log('bye')
        
//     }
//     else{
//         k++
//         console.log(k)
//         console.log(n)
//     }

// })

// console.log(num)

// let num={
//     1:'paras',
//     2:'yadav',
//     3:'paras1',
//     4:'paras2',
//     5:'paras3'
// }
// for(let k in num) // it will return the index ,key in objects 
// {
//     console.log(k,num[k])
// }
// let num1=[1,2,3,4,5,6]
// for(let k of num1) //only works with array for of loop gives the elements 
// {
//     console.log(k)
// }

// classes and objects 
// js object has a special property called prototype . prototype refers to the object which you want to inherite or used the methods and properties .
// js object is an entity having state(properties) and behaviour (methods)
// tyoeof an array is object 

// Inheriting properies and methods from one object to another object .using prototype 
// const emp={
//     calTax:function(n){
//         console.log(`tax rate is 10% of ${n.salary} `)
//     }
// }
// let parasyadav={
//      salary:2500000,
//     calTax(n){ // if parent object use prototype and inherite a method and property then if we redefine the same methods and property then it will overriden .
//         console.log(`tax rate is 20% of ${n.salary}`)
//     },
//     status(){
//         console.log(`salary is ${this.salary}`)
//     }
// }
// parasyadav.__proto__=emp
// let n=parasyadav
// parasyadav.calTax(n)
// parasyadav.status()

// class ToyotaCar{
//     constructor(price,milage)
//     {
//         this.price=price
//         this.milage=milage
//         console.log("creating new object")
//     }
//     // price=30000000
//    start()
//    {
//      console.log("start")
//    }
//    stop()
//    {
//     console.log("stop")
//    }
//    brand(brand)
//    {
//     this.brand=brand 
//     console.log("car barnd is ",brand,this.price)
//    }
// }
// let fortuner = new ToyotaCar(500000,15)
// let vellfire=new ToyotaCar(1000000,14)
// vellfire.brand('landcruser')
// fortuner.brand('fortuner')
// console.log(fortuner)
// console.log(vellfire)
// fortuner.start()
// fortuner.stop()

// class inheritance 
// class person{
//     constructor()
//     {
//         this.species="homo sapiens"
//     }
//     eat()
//     {
//         console.log("eat")
//     }
//     sleep()
//     {
//         console.log("sleep")
//     }
//     work() 
//     {
//         console.log("do nothing")
//     }
// }
// class Engineer extends person
// {
//     work()
//     {
//         console.log("solving problem ,build something ")
//     }
// }
// class Doctor extends person{
//     work()
//     {
//         console.log("treat patients")
//     }
// }
// let engineer=new Engineer
// console.log(engineer)
// engineer.eat()
// engineer.sleep()
// engineer.work()

// let doctor=new Doctor
// console.log(doctor)
// doctor.eat()
// doctor.sleep()
// doctor.work()

// super() ,method 

// class person extends Object
// {
//     constructor()
//     {
//         super()
//         this.species="homo sapiens"
//         console.log("persons constructor")
        
//     }
//     eat()
//     {
//         console.log("eat")
//     }
//     sleep()
//     {
//         console.log("sleep")
//     }
//     work() 
//     {
//         console.log("do nothing")
//     }
// }
// class Engineer extends person
// {
//     constructor(name)
//     {
        
//         console.log("Engineer constructor ")
//         super()
//         this.name=name
//         this.hardwork='Engineers are very hard worker '
//         console.log("Working at Office",this.hardwork)
//     }
//     work()
//     {
//         super.sleep()
//         console.log("solving problem ,build something ")
//     }
// }
// class Doctor extends person{
//     constructor(name)
//     {
//         super()
//         this.name=name
//         console.log("doctor constructoe",name)
//     }
//     work()
//     {
//         super.eat()
        
//         console.log("treat patients")
//     }
// }

// let engineer=new Engineer('paras1')
// console.log(engineer)
// //engineer.eat()
// // engineer.sleep()
//  engineer.work()
// let doctor=new Doctor("paras")
// console.log(doctor)
// doctor.work()



// try catch

// let a=15
// let b=6
// console.log("a=",a)
// console.log("b=",b)
// console.log("a+b",a+b)
// console.log("a-b",a+b)
// // try catch for defining critical statements 
// try {
//     console.log("a+c",a+c)// Error
// } catch (error) {
//     console.log("somthing went wrong ")
// }
// console.log("a*b",a*b)
// console.log("a/b",a/b)
// console.log("a%b",a%b)



// this keyword 

// let laptop={
//     cpu:'i7',
//     ram:8,
//     brand:'hp',
//     getconfig:function()
//     {
        
//         console.log("My laptop brand is",this.brand,this.cpu,this.ram) // this refers to the current object in this case it is laptop .
//     }
// }
// let laptop1={
//     cpu:"i9",
//     ram:16,
//     brand:'Dell',
//     getconfig:function()
//     {
//         // console.log("My laptop brand is",laptop.brand,laptop.cpu,laptop.ram)
//         console.log("My laptop brand is",this.brand,this.cpu,this.ram) // this refers to the current object in this case it is laptop .
//     },
//     compare(other)
//     {
//         if(this.cpu>other.cpu)
//         {
//             console.log(this.brand,this.cpu,this.ram)
//         }
//         else{
//             console.log(other.brand,other.cpu,other.ram)
//         }
//     }
// }

// laptop1.getconfig()
// laptop.getconfig()
// laptop1.compare(laptop)
// if(laptop.cpu>laptop1.cpu)
// {
//     console.log(laptop)
// }
// else{
//     console.log(laptop1)
// }




// while loop
// let num= 564782
// let num2=[]
// while(num>0)
// {
//     console.log(num%10);
//     num2.push(num%10)
//     num=parseInt(num/10)
// }
// console.log(num2)

// javascript object

// let input='name'
// let alien={
//     name:'paras',
//     color:'red',
//     'work exp': 4,
//     tech1:{
//         sub:'java',
//         marks: 98
//     }
// }
// for(let k in alien)
// {
//     console.log(k,alien[k])
// }
// let n=delete alien.color
// console.log(n) // delete will return true or false it deleted then true otherwise false 
// console.log(alien['work exp'],alien.name +" "+alien.color+" "+alien[input]+" "+alien.tech1?.sub?.length )


// let words ="My Name is Paras Yadav Currently learning JavaScript ".split(' ') // it will split on the basis of " " space and "," commas .
// let [a,b,...c]=words
// console.log(a)
// console.log(b)
// console.log(a,b,c)
// let fruit="apple , mango , banana".split(",")
// console.log(fruit)

// let nums=new Map()
// nums.set(1,"11")
// nums.set(2,'22')
// nums.set(3,'33')
// nums.set(4,'44')
// nums.set(5,'55')
// nums.set(6,'66')
// nums.set(7,'77')
// let article=[
//     {
//         'nums':{
//             "id":'22',
//             'p':"11",
//             'a':'33',
//             'r':'44',
//             'a':'55',
//             's':'66',
//             7:'77'

//     }
// }
// ]
// article.map((e)=>{
//     console.log(e.nums.id)
//    console.log(e.nums[7])
//     // console.log(e.nums.7) did not work because its is a number 
//     console.log(e.nums.p)
        
// })
// let articles= [
//     {


      
//         "source": {
//           1: "bbc-sport",
//           "name": "BBC Sport"
//         },
//         "author": null,
//         "title": "IPL 2025 results: Australia's Mitchell Starc takes first five-wicket haul in T20s as DC beat SRH",
//         "description": "Mitchell Starc takes his first five-wicket haul in T20 cricket as Delhi Capitals cruise to a seven-wicket win over Sunrisers Hyderabad in the Indian Premier League.",
//         "url": "http://www.bbc.co.uk/sport/cricket/articles/cjwv37241d7o",
//         "urlToImage": "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/0c2c/live/8d7e46d0-0d60-11f0-8cb6-ef080be5aa48.jpg",
//         "publishedAt": "2025-03-30T13:52:22.875376Z",
//         "content": "Mitchell Starc took his first five-wicket haul in T20 cricket as Delhi Capitals cruised to a seven-wicket win over Sunrisers Hyderabad in the Indian Premier League.\r\nThe 35-year-old Australia left-ar… [+1532 chars]"
//     }
// ]

//       articles.map((e)=>{
//         console.log(e.source[1])
            
//     })


// this is called loosly typed language means variable can change their type automatically 
// let x='paras'
// x=10
// console.log(x)

// Hoisting 

// let num=4
// console.log(num)

// // console.log(num1)
// // console.log(num2)
// console.log(v)
// var v=10 // if we try to print variable before its initilization . then with var it prints undefined 
// const num2=6 // if we try to print variable before its initilization . then with const it gives error  
// let num1=4 // if we try to print variable before its initilization . then with let it gives error .

// Hoisting with functions 
// 1

// it will not give error
// greet()
// function greet()
// {
//    console.log('hello paras')
// }

// 2

// let greet=function f(){
//   return "hello good morning "
// }
// console.log(greet())

// 3

// it will give error .
// console.log(greet())
// let greet=function f(){
//   return "hello good morning "
// }

// 4

// it also gives error .
// console.log(greet())
// let greet=()=>{
//   return 'hello paras'
// }


