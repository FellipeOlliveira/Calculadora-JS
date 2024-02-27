const mostruario = document.getElementById('resultado')


const escrever = (number) => {
    mostruario.innerHTML += number
}

const calcular = () => {
    let macaco = mostruario.innerHTML
    let calculo = eval(macaco)
    console.log(mostruario.innerHTML)
    console.log(calculo)

    mostruario.innerHTML = calculo
}