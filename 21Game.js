document.addEventListener("DOMContentLoaded", () => {
  let startGameButton = document.querySelector("#startGame")

  const beginGame = async () => {
    try {
      let res = await axios.get(
        `https://deckofcardsapi.com/api/deck/new/draw/?count=2`
      )
      const checkValue = cards => {
        let aces = []
        cards.forEach(el => {
          if (
            el.value === "KING" ||
            el.value === "QUEEN" ||
            el.value === "JACK"
          ) {
            el.value = 10
          } else if (el.value === "ACE") {
           
            el.value = Math.floor(Math.random(aces.push(el.value)))
            console.log(aces)
          } else {
            el.value
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
    } catch (err) {
      console.log(err)
    }
  }
  startGameButton.addEventListener("click", () => {
    beginGame()
  })
})
