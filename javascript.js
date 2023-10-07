var winningSpot = Math.floor(Math.random()*9)
var losingSpot = Math.floor(Math.random()*9)


const game = (clickedItem) => {
    if (clickedItem === winningSpot) {
        document.getElementById(winningSpot).innerHTML ="🎁"
        alert("You found a treasure")
    }
    else if (clickedItem === losingSpot) {
        document.getElementById(losingSpot).innerHTML ="🤢"
        alert("You found a bomb")
    }
    else{
        alert("You found nothing")
        document.getElementById(clickedItem).innerHTML ="✔"
        }
}
