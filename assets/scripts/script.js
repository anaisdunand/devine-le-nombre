function startGame() {
    secretNumber = Math.floor(Math.random() * 1000) + 1
    attemptsNumber = 0
}

function resetGame() {
    startGame()

    input.value = ""
    input.placeholder = "Ex: 420"
    input.classList.remove("box__input--error")
    textZone.innerHTML = "Devine à quel nombre je pense &#x1F609;"
    textZone.classList.remove("box__text--won", "box__text--clue")
    checkButton.disabled = false
}

input.addEventListener("keydown", (event) => {
    if (allowedKeys.includes(event.key)) {
        if (event.key === "Enter") {
            checkButton.click()
        }
    } else if (!isDigit.test(event.key)) {
        event.preventDefault()
    }
})

checkButton.addEventListener("click", () => {
    const userNumber = Number(input.value)

    if (userNumber < 1 || userNumber > 1000 || userNumber === "") {
        input.classList.add("box__input--error")
        textZone.textContent = "On a dit un nombre entre 1 et 1000..."
    } else {
        input.classList.remove("box__input--error")
        attemptsNumber++

        if (userNumber === secretNumber) {
            textZone.classList.add("box__text--won")
            textZone.innerHTML = `Bravo !<br>Tu as trouvé en<br>${attemptsNumber} tentatives`
            checkButton.disabled = true
        } else if (userNumber < secretNumber) {
            textZone.classList.add("box__text--clue")
            textZone.textContent = "C'est plus !"
        } else {
            textZone.classList.add("box__text--clue")
            textZone.textContent = "C'est moins !"
        }
    }

    input.placeholder = `${input.value}`
    input.value = ""
})

replayButton.addEventListener("click", () => {
    resetGame()
})