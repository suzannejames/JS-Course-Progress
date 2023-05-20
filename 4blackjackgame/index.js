let messageEl=document.getElementById("message-el")
let cardsEl=document.querySelector("#cards-el")
let firstcard=getRandomCard(), secondcard=getRandomCard()
let cards=[firstcard,secondcard]
let sum=firstcard+secondcard
let sumEl=document.getElementById("sum-el")
//alternate: let sumEl=document.querySelector("#sum-el")
let hasBlackJack=false,isAlive=true,message=""
function getRandomCard()
{
    var num=(Math.floor(Math.random()*13)+1)//return a number between 0.000 and 1.000 not inclusive of 1
    if (num>10)
    {
        return 10
    }
    else if(num===1) //=== strict equality
    {
        return 11
    }
    else
    {
        return num
    }

}
// math.floor() removes decimal for eg 3.455 will become 3
function startGame()
{
    renderGame()
}
function renderGame()
{
    cardsEl.textContent="Cards:"
    for(let i=0;i<cards.length;i++) 
    {
        cardsEl.textContent+=" "+cards[i]
    } 
    sumEl.textContent="Sum:"+sum
    if(sum<=20)
    {
        message="Do you want to draw a new card?"
    }
    else if(sum==21)
    {
        message="YOU HAVE GOT BLACKJACK!"
        hasBlackJack=true
    }
    else{
        message="You're out of the game!"
        isAlive=false
    }
    messageEl.textContent=message
}
function newCard(){
    let card=getRandomCard()
    sum+=card
    cards.push(card)
    renderGame()
}