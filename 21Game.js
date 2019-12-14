document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector("#startGame");


    const beginGame =  async () => { 
        try {
            let res = await axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
            debugger;

        } catch (err) {
            console.log("ERROR")
          }
    }
button.addEventListener("click", () => {
    beginGame();
})


})