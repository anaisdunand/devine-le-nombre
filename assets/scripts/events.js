input.addEventListener("keydown", (event) => {
    if (allowedKeys.includes(event.key)) {
        if (event.key === "Enter") {
            checkButton.classList.add("box__button--active")
            setTimeout(() => {
                checkButton.classList.remove("box__button--active")
            }, 150)

            checkButton.submit()
        }
    } else if (!isDigit.test(event.key)) {
        event.preventDefault()
    }
})

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const userNumber = Number(input.value)

    if (userNumber < 1 || userNumber > 1000 || userNumber === "") {
        input.classList.add("box__input--error")
        textZone.textContent = "On a dit un nombre entre 1 et 1000..."
    } else {
        input.classList.remove("box__input--error")
        attemptsNumber++

        changeHistory(userNumber)

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

    input.value = ""
})

replayButton.addEventListener("click", () => {
    resetGame()
})