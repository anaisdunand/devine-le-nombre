let secretNumber
let attemptsNumber

const input = document.querySelector(".box__input")
const textZone = document.querySelector(".box__text")

const checkButton = document.getElementById("check")
const replayButton = document.getElementById("replay")

const isDigit = new RegExp("^[0-9]$")
const allowedKeys = ["Backspace", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Enter"]