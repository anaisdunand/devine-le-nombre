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

function makeDraggable(element) {
    let isDragging = false
    let offsetX = 0
    let offsetY = 0

    element.addEventListener("mousedown", (event) => {
        isDragging = true
        offsetX = event.clientX - element.offsetLeft
        offsetY = event.clientY - element.offsetTop
        element.style.cursor = "grabbing"
    })

    document.addEventListener("mousemove", (event) => {
        if (!isDragging) return

        element.style.left = `${event.clientX - offsetX}px`
        element.style.top = `${event.clientY - offsetY}px`
    })

    document.addEventListener("mouseup", () => {
        isDragging = false
        element.style.cursor = "grab"
    })
}