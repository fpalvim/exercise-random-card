window.onload = () => {
    
    let randomSuit = getRandomSuits()
    document.querySelector(".left-side").classList.add(randomSuit)
    document.querySelector(".right-side").classList.add(randomSuit)
    document.querySelector(".middle").innerHTML = getRandomNumbers()

    setTimeout(function(){
        window.location.reload(1);
     }, 10000);
}

getRandomNumbers = () => {
let number = ["A", "K", "Q", "J", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
let randomNumber = Math.floor(Math.random () * number.length)
return number[randomNumber]
}


getRandomSuits = () => {
    let suit = ["spade", "heart", "club", "diamond"]
    let randomSuit = Math.floor(Math.random () * suit.length)
    return suit[randomSuit]
}