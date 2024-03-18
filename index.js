const getSpan = document.querySelector('span')
const clickButton = document.querySelector('button')

clickButton.addEventListener('click',() =>{
    const getName = prompt("Enter your name : ")
    getSpan.textContent= getName
})