function calcularIMC (peso,altura){
    return peso/(altura**2)
}

function classificar(imc){
    let categoria
    if (imc <18.5) {
        categoria = "abaixo do peso"
    } else if (imc < 25){
        categoria = " com peso ideal. <span class='azul'>Parabens</span>"
    }else if (imc < 30){
        categoria = " levemente acima do peso"
    } else if (imc < 35 ){
        categoria = "com obesidade I"
    }else if( imc < 40){
        categoria = "com obesidade II"
    }else{
    categoria = "obesidade III, <span class='vermelho'> cuidado </span>"
    }
    return categoria
}

function camposValidos(){
return document.querySelector("form").reportValidity()
}

function exibirResultado(){
    const resultado = document.getElementById("resultado")
    const nome = document.getElementById("nome").value
    const peso = document.getElementById("peso").value.replace(",",".")
    const altura = document.getElementById("altura").value.replace(",",".")

    if(camposValidos()){
    const imc = calcularIMC(peso,altura)
    const classificacao = classificar(imc)
   
   //toFixed - fixa as casas decimais
    resultado.innerHTML = nome  + " seu imc é " + imc.toFixed(1) + " e você esta" + classificacao
    }else
    resultado.textContent = "preencha os campos"
}


function capturarEnter(evento){
    if(evento.key == "enter")
    exibirResultado()
}
//eventos

document.getElementById("calcular").addEventListener("click", exibirResultado)
documento.querySelector("form").addEventListener("keypress",capturaEnter)