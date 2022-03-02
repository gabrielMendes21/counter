const decrease = document.querySelector('.decrease')
const reset = document.querySelector('.reset')
const increase = document.querySelector('.increase')
const counterValue = document.querySelector('span')

function changeColor(element) {
  if (Math.sign(element.textContent) == -1) {
    element.style.color = "red"
  }
  else if (Math.sign(element.textContent) == 1) {
    element.style.color = "green"
  }
  else if (Math.sign(element.textContent) == 0) {
    element.style.color = "black"
  }
}

decrease.onclick = () => {
  counterValue.textContent -= 1

  changeColor(counterValue)
}

reset.onclick = () => {
  counterValue.textContent = 0

  changeColor(counterValue)
}

increase.onclick = () => {
  counterValue.textContent++

  changeColor(counterValue)
}