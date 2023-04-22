const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

//Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)


//funções
function toggleScreen() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}

function handleTryClick(event){
    event.preventDefault()// não faça o padrão desse evento(não envia o formulario)
    
    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10){
        alert("Digite um número de 0 a 10")
    }

    if(Number(inputNumber.value) === randomNumber){
        toggleScreen()
        screen2.querySelector("h2").innerText = `acertou em ${xAttempts} tentativas`
    }
    
    if(Number(inputNumber.value) != ""){
        xAttempts++
    }
    
    inputNumber.value = ""
}

function handleResetClick() {
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10);
}

document.addEventListener('keydown', function(e){
    if(e.key == 'Enter' && screen1.classList.contains('hide')){
        handleResetClick()
    }
})
