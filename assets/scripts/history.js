function changeHistory(userNumber) {
    const listItem = document.createElement("li")
    listItem.classList.add("history__item")

    let arrow = ""

    if (userNumber < secretNumber) {
        arrow = "🠅"
    } else if (userNumber > secretNumber) {
        arrow = "🠇"
    } else {
        arrow = "✔"
    }

    history.classList.remove("history--hidden")

    listItem.innerHTML = `${userNumber} ${arrow}`
    historyList.appendChild(listItem)
}