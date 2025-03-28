// synchronous = In synchronous programming, the code executes line by line, in the order it is written. (means our code is execute in a way as we define them ),
// asynchronous means task run in the background without blocking other operation .


// // synchronous 
// let n1=function hello(name)
// {
//     console.log("hello",name)
// }
// n1('paras')
// n1('paras1')
// n1('paras2')
// // Asynchronous 
// let n=function hello(name)
// {
//     console.log("hello",name)
// }
// n('paras')
// setTimeout(()=>n('paras1'),2000)
// n('paras2')

// callbacks is a function pass as an argument in another function

// function sum(a,b) // original function 
// {
//     console.log(a+b)
// }
// function newsum(a,b,n)
// {
//     n(a,b)
// }
//  newsum(2,5,sum)// callback 
// // newsum(5,6,(a,b)=>{ // also a callback function
// //     console.log(a+b)
// // })


// callback hell : nested callbacks stacked below one another forming a pyramid structure .

// function getdata(data,newdata)
// {
//     setTimeout(()=>{
//         console.log("data ",data)
//         if(newdata)
//         {
//             newdata()
//         }
//     },2000)
    

// }
// console.log("fetching data 1")
// getdata(1,()=>
// {
//     console.log("fetching data 2")
//     getdata(2,()=>{
//         console.log("fetching data 3")
//         getdata(3)
//     })
// })

// Promises A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation. It has three states: is for "eventual" completion of task . it is an object in js

// let p=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("i am a promise ")
//         resolve("success")
//     },10000)
// })
// let p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("i am a promise ")
//         reject("hello")
//     },10000)
// })

// Promise chaining 

// function getdata(data)
// {
//     return new Promise((resolve,reject)=>
//     {
//         setTimeout(()=>{
//             console.log("data = ",data)
//             resolve("success")
//         },5000)
//     })
// }
// console.log("fetching data 1")
// let p=getdata(1)
// p.then((res)=>{
//     console.log("promise fullfilled 1",res)
//     console.log('fetching data 2')
//     let p1=getdata(2)
//     p1.then((res)=>{
//         console.log("promise fullfilled 2",res)
//     })

// })

// Async-Await = async function always retuen a promise . await pauses the execution of its surrounding async function until the promise is settled .

// function getdata(data)
// {
//     return new Promise((resolve,reject)=>{
    
//         setTimeout(()=>{
//             console.log('data',data)
//             resolve('success')
//         },2000)
        
//     })
// }
// async function getalldata()
// {
//    console.log("fetching data 1")
//    await getdata(1)
//    console.log("fetching data 2")
//    await getdata(2)
//    console.log("fetching data 3")
//    await getdata(3)

// }
// getalldata()

let d=document.querySelector("#btn")

const url='https://dog.ceo/api/breeds/image/random/3'
const getFacts=async ()=>{
    console.log("getting data ")
    let response=await fetch(url)
    console.log(response)
    let data= await response.json()
    let nums=[]
    for (let i in data)
    {
         console.log("hello",data[i])
        nums.push(data[i])

        
    }
  
  
}

d.addEventListener('click',getFacts)



