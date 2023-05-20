//listen for clicks on the add person button
// increment the count when button clicked
// change the count-el in html to get the new count
let countEl=document.getElementById("count-el")
let count=0
let saveEl=document.getElementById("save")
function increment()
{
    count+=1
    countEl.innerText=count
    console.log(count)
}
function save()
{ 
    let countStr =count+" - "
    saveEl.textContent+=countStr // alternative for innerText, u get spaces
    countEl.innerText=0 //use textContent instead 
    count=0
}
  