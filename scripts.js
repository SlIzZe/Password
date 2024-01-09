const lengthTeg = document.querySelector("#length")
const letterTeg = document.querySelector("#letter_yes")
const numberTeg = document.querySelector("#numbers")
const simbolTeg = document.querySelector("#simbols")
const generateBtn = document.querySelector(".generator_btn")
const passwordTeg = document.querySelector(".generator_password")
const errorTeg = document.querySelector(".error_pass")
const generateCopy = document.querySelector(".generate_copy")

const randomizer = (max) => {
  let rand = Math.random() * max
  return Math.floor(rand)
}

generateBtn.addEventListener("click", () => {
  if(lengthTeg.value && +lengthTeg.value > 7 && +lengthTeg.value < 129){
    const length = +lengthTeg.value
    const isLetterChecked = letterTeg.checked
    const isNumberChecked = numberTeg.checked
    const isSimbolChecked = simbolTeg.checked

    const symbolString = '~`!@#$%^&*(){}[]|;:,.-_=+/'
    const numberString = '123456789'
    const letterString = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'

    let simbolsForUse = ''

    simbolsForUse = (isNumberChecked ? numberString : '') + (isSimbolChecked ? symbolString : '') + (isLetterChecked ? letterString : '')

    if(simbolsForUse){
      let result = ''
      for(let i = 0; i < length; i++) {
        const random = randomizer(simbolsForUse.length)
        result = `${result}${simbolsForUse[random]}`
      }
      passwordTeg.innerText = result
      lengthTeg.style.border = '1ps solid #000'
      errorTeg.innerText = ''
      generateCopy.style.display = 'inline'
    }else{
      errorTeg.innerText = 'You should select'
    }
  }else{
    lengthTeg.style.border = '1px solid red'
    errorTeg.innerText = 'Please check length input!'
  }
})

generateCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(result) // скопировать текст
})