
const calculadora = (() => {
    let mostruario = document.getElementById('resultado')

    reset = () => mostruario.innerHTML = ''
    setMostruario = (valor) => mostruario.innerHTML += valor
    getMostruario = () => mostruario.innerHTML
    resultadoFinal = (valor) => mostruario.innerHTML = valor
    
    return { getMostruario, setMostruario, reset , resultadoFinal}
})()


const escrever = (number) => {
    calculadora.setMostruario(number)
}

const calcular = () => {
    let expression = calculadora.getMostruario()
    let calculo = eval(espression)
    calculadora.reset()
    calculadora.resultadoFinal(calculo)
}

const resetar = () => {
    calculadora.reset()
}