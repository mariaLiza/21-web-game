document.addEventListener("DOMContentLoaded", () => {
  let startGameButton = document.querySelector("#startGame")
  let aceDiv = document.querySelector(".aceButtons")
  let aceOne = document.querySelector("#aceOne")
  let aceTwo = document.querySelector("#aceTwo")

  const beginGame = async () => {
    try {
      let res = await axios.get(
        `https://deckofcardsapi.com/api/deck/new/draw/?count=2`
      )

      // if (res.data.cards[0].value !== "ACE") {
      //   beginGame()
      //   return
      // }

      let playerScore = 0
      let dealerScore = 0

      const checkValue = cards => {
        cards.forEach(val => {
          if (
            val.value === "KING" ||
            val.value === "QUEEN" ||
            val.value === "JACK"
          ) {
            val.value = 10
          } else if (val.value === "ACE") {
            // console.log(aceDiv)
            aceDiv.classList.remove("hidden")
            aceOne.onClick = function addToScore() {
              val.value = 1
            }
            aceTwo.onClick = function addToScore() {
              val.value = 11
            }
          } else {
            val.value
          }
        })
      }
      checkValue(res.data.cards)
      let p = document.querySelector("#cards")
      let cardPic1 = document.createElement("img")

      cardPic1.src = res.data.cards[0].image
      p.appendChild(cardPic1)

      let cardPic2 = document.createElement("img")  
      cardPic2.src = res.data.cards[1].image
      p.appendChild(cardPic2)

      let playerSum = document.querySelector("#playerSum")
      playerScore =
        Number(res.data.cards[0].value) + Number(res.data.cards[1].value)

      playerSum.innerText = `Your score is ${playerScore}`

      if (playerScore >= 21) {
        playerSum.innerText = "You Lose"
      } else {
        playerSum.innerText = `Your score is ${playerScore}, do you Hit or Stay?`
      }
    } catch (err) {
      console.log(err)
    }
  }
  startGameButton.addEventListener("click", () => {
    beginGame()
  })
})
