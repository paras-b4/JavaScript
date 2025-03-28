
// let btn=document.querySelector('#heading')
// btn.onclick=((e)=>{
//     console.log(e)
//     console.log(e.type)
//     console.log(e.target)
//     console.log("heading was clicked")
//     let a=5
    
//     console.log(Math.pow(a,2))
//     alert("Hello paras yadav")
// })

// let n=document.querySelector('#btn1')
// n.onclick=((e)=>{
//     console.log(e)
//     console.log(e.type)
//     console.log(e.target)
//     console.log("button was double clicked ")
// })

// document.querySelector('div').onmouseenter=(e)=>{
//     console.log(e)
//     console.log(e.type)
//     console.log(e.target)
//     console.log("your are inside div")
// }

// document.querySelector("#btn2").ondblclick=(e)=>{
//     console.log(e)
//     console.log(e.type)
//     console.log(e.target)
//     console.log("submit button was double clicked ")
//     let a=10
//     console.log(Math.pow(a,2))
//     alert("Hello paras yadav")
// }

// Event Listner 

let heading= document.querySelector("#heading")
heading.addEventListener('mouseover',(e)=>{ // when your working with eventlistners then remove on from the events .
        console.log(e)
        console.log(e.type)
        console.log(e.target)
        console.log("you are entering in the heading")
        alert("hello everyone")
})

let btn=document.querySelector("#btn1")
btn.addEventListener("click",(e)=>
{
    console.log(e)
    console.log(e.type)
    console.log(e.target)
    console.log("you clicked the button ")
    alert("hello everyone")
})

// document.querySelector("#content").addEventListener("dblclick",(e)=>{
//     console.log(e)
//     console.log(e.type)
//     console.log(e.target)
//     console.log("you clicked the button twice")
//     alert("hello everyone")
// })

const handler=()=>{
    console.log("button was clicked- handler4")
}
let btn1=document.querySelector("#btn2")
btn1.addEventListener('click',(e)=>{
    console.log("button was clicked- handler1")
    console.log("button was clicked- handler2")
    console.log("button was clicked- handler3")
    
})
btn1.addEventListener('click',handler)
btn1.removeEventListener('click',handler)


// dark-light mode button 

let button=document.createElement("button")
button.style.backgroundColor='Red'
button.style.border="4px"
button.style.padding='4%'
button.style.margin='4%'
button.innerText='dark'

document.querySelector('#content').append(button)

let body=document.querySelector("body")
button.addEventListener('click',()=>
{
    if(button.innerText=='dark')
   {
        body.style.backgroundColor='black'
        button.innerText='light'
    
   }
   else{
    body.style.backgroundColor='palevioletred'
    button.innerText='dark'
   }

})
