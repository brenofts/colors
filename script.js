var r = 255
var g = 255
var b = 255
var rgb

var redValue = document.getElementById('redValue')
var greenValue = document.getElementById('greenValue')
var blueValue = document.getElementById('blueValue')
var menu = document.querySelector('.menu')
var modal = document.getElementById('modal')
var input = document.querySelectorAll('input')
var body = document.querySelector('body')
var inputName = document.getElementById('inputName')

blueValue.addEventListener('click', () => {
  modal.classList.replace('hidden', 'modal')
  menu.classList.add('blur')
})

document.getElementById('red').addEventListener('input', (e) => {
  var redSet = 'rgb(' + e.target.value + ', 0, 0)'
  redValue.style.backgroundColor = redSet
  input[1].style.backgroundColor = redSet
  r = e.target.value
  rgb = "rgb(" + r + ', ' + g + ", " + b + ")"
  body.style.backgroundColor = rgb
})

document.getElementById('green').addEventListener('input', (e) => {
  var greenSet = 'rgb(0, ' + e.target.value + ', 0)'
  greenValue.style.backgroundColor = greenSet
  input[2].style.backgroundColor = greenSet
  g = e.target.value
  rgb = "rgb(" + r + ', ' + g + ", " + b + ")"
  body.style.backgroundColor = rgb
  inputName.style.animation = 'hideInput 0.5s'
  inputName.style.marginTop = '-10vh'
})

document.getElementById('blue').addEventListener('input', (e) => {
  var blueSet = "rgb(0, 0, " + e.target.value + ")"
  blueValue.style.backgroundColor = blueSet
  input[3].style.backgroundColor = blueSet
  b = e.target.value
  rgb = "rgb(" + r + ', ' + g + ", " + b + ")"
  body.style.backgroundColor = rgb
  inputName.style.animation = 'showInput 1s'
  inputName.style.marginTop = '2vh'
})