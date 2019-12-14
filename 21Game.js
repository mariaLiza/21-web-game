document.addEventListener("DOMContentLoaded", async() => {
    let button = document.querySelector("#startGame");


    const startGame = (element) => {
        try {
            let res = await axios.get(`https://deckofcardsapi.com`);

        } catch (err) {
            console.log("ERROR")
          }
    }
button.addEventListener("click", () => {
    startGame(element);
})


})