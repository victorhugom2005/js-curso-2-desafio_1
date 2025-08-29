let titulo = document.querySelector("h1");
titulo.innerHTML = 'Hora do desafio!';

function verificarChute() {
    console.log('Butão clicado ;)')
}

function verificarChute2() {
    alert('Eu amo JS')
}

function chuteCidade() {
    let cidade = prompt('Cite uma cidade do Brasil')
    alert(`Estive em ${cidade} e lembrei de você`)
}

function chuteMath() {
    let numero1 = parseInt(prompt('Digite o primeiro número'))
    let numero2 = Number(prompt('Digite o segundo número'))
    let resultado = numero1 + numero2;
    if (Number.isNaN(resultado)){
        alert('Resultado Inválido')
        chuteMath()
    } else {
        alert(`${numero1} + ${numero2} = ${resultado}`)
    }
}

function AreaTri() {
    let base = parseInt(prompt('Digite a base do triângulo'))
    let altura = Number(prompt('Digite a altura do triângulo'))
    let resultado = base * altura / 2;
    if (Number.isNaN(resultado)){
        alert('Resultado Inválido')
        AreaTri()
    } else {
        alert(`A área do triângulo é ${resultado}`)
    }
}