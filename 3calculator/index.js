let Num1=document.getElementById("num1-el")
let Num2=document.getElementById("num2-el")
let Sum1=document.getElementById("sum")

Num1.innerText=50
Num2.innerText=120
let a=50
let b=120
function add()
{
    let c
    c=a+b
    Sum1.textContent+=c
}
function sub()
{
    let c
    c=a-b
    Sum1.textContent+=c
}
function mul()
{
    let c
    c=a*b
    Sum1.textContent+=c
}
function div()
{
    let c
    c=a/b
    Sum1.textContent+=c
}