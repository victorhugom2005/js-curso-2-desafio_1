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
    let numero2 = parseInt(prompt('Digite o segundo número'))
    let resultado = numero1 + numero2;
    alert(`${numero1} + ${numero2} = ${resultado}`)
}