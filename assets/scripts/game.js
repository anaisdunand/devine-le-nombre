function startGame() {
    secretNumber = Math.floor(Math.random() * 1000) + 1
    attemptsNumber = 0
}

function resetGame() {
    startGame()

    input.value = ""
    input.classList.remove("box__input--error")

    textZone.innerHTML = "Devine à quel nombre je pense &#x1F609;"
    textZone.classList.remove("box__text--won", "box__text--clue")

    checkButton.disabled = false

    history.classList.add("history--hidden")
    historyList.innerHTML = "";
}