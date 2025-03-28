// let n=document.querySelector("h1")
// let m=n.innerText
// n.innerText=m +" greet by Paras yadav"
// console.log(n)


let a=document.querySelectorAll(".box")
let i=0
// for in loop is Used to iterate over object properties (keys)
// for of loop is Used to iterate over values directly
for(let k of a)
{
    k.innerText=`uique content ${i}`
    i++
}

// console.log(a[0].innerHTML='uique content 1')
