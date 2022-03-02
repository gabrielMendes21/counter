const decrease = document.querySelector('.decrease')
const reset = document.querySelector('.reset')
const increase = document.querySelector('.increase')
const counterValue = document.querySelector('span')

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