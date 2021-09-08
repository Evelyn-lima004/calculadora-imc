const botao = document.getElementById("botao")

function calculoImc() {
    const nome = document.getElementById("nome").value
    const altura = document.getElementById("altura").value
    const peso = document.getElementById("peso").value
    const resultado = document.getElementById("resultado")

    if (nome == '' || altura == '' || peso == '') {
        resultado.textContent = 'Preencha todos os campos!'
    } else {
        const valorImc = (peso / (altura * altura)).toFixed(1)

        let classificacao = '';
        let frase = '';

        if (valorImc < 18.5) {
            classificacao = 'abaixo do peso.'
        } else if (valorImc >= 18.5 && valorImc < 25) {
            classificacao = 'Peso ideal <span class="blue">Parabéns!</span>'
        } else if (valorImc >= 25 && valorImc < 30) {
            classificacao = 'Acima do peso'
        } else if (valorImc >= 30 && valorImc < 35) {
            classificacao = 'Obesidade grau I.'
        } else if (valorImc >= 35 && valorImc < 40) {
            classificacao = 'Obesidade grau II.'
        } else {
            classificacao = 'Obesidade grau III. <span class="red">Cuidado!</span>'
        }

        resultado.innerHTML = `${nome}, seu IMC é  ${valorImc}. Seu estado é: ${classificacao} `
    }
}

function capturarEnter(event) {
    if (event.key == "Enter") {
        calculoImc()
    }
}

botao.addEventListener('click', calculoImc)
document.querySelector('form').addEventListener('keypress', capturarEnter)
