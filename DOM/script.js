// alert("hello paras")
// console.log("hii")

// console.log(document.body)       //for printing html 

// console.dir(document.body)       // for printing objects 

// document.body.style.backgroundColor='red'

// for changing h1 from the js to new h1
// document.body.childNodes[3].innerText='new DOM document object model '

// for changing paragraph from js 
// document.body.childNodes[7].innerText='new paragraph'// we can check the childNode from the document.body(console.dir(document.body)) object .


// let heading =document.getElementById("heading") // if id is not matching with the html id then it return null 
// console.dir(heading)

// let myId=document.getElementById("myId")
// console.dir(myId)
// console.log(myId)

// let classheading=document.getElementsByClassName("classheading") // it gives the html collection . if there is no class then it return the emply collection .
// console.dir(classheading)

// let paragraph=document.getElementsByTagName("p")
// console.dir(paragraph)
// console.log(paragraph)


// let first=document.querySelector("body")
// first.innerHTML= "<div><h1>hello world </h1></div>" // gives the complete html content 
// first.innerText="hello paras" // pure text 
// console.log(first)
// console.dir(first)


// let firstel=document.querySelector("p")
// firstel.innerHTML="<div><h1>hello world </h1></div>"
// console.log(firstel)
// console.dir(firstel)


// let p=document.querySelectorAll("p") // it return the Nodelist 
// console.dir(p)
// console.log(p)


// let div=document.querySelector("div") // here we are select the div
// console.log(div) //printing html 
// console.log(div.getAttribute("id")) // fetching its attribute 
// console.log(div.getAttribute("name")) // fetching it attribute 


// let par=document.querySelector("p") //here we are seleting the paragraph tag
// console.log(par) // here we are printing the paragraph
// console.log(par.getAttribute("class")) // fetching its attribute 
// par.setAttribute("class","hello")  // know we are explicitely set the attribute 
// par.style.backgroundColor='red' // here we use node.style that overwrite the css if you donot want to overwrite the css then use [ par.classList.add('new class') ]
// par.style.fontSize="20px"  // we can also set the style 
// par.style.fontStyle="AbortSignal"
// par.innerText='Hello paras' // it will over write the text .
// console.log(par)

// let button=document.createElement("button")
// button.innerText="click here!!!"
// button.style.backgroundColor='Red'
// button.innerHTML="<h4> submit <h4>"
// //button.remove()

// let div=document.querySelector("#box1")
// div.append(button) // it will add the button at the end of the content 
// // div.prepend(button) // it will add the button at the top of the content at starting 
// // div.before(button) // it will add the button before starting the div 

// let r=document.querySelector("#li")
// r.remove()


// console.dir(document.body)