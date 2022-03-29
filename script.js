
function planos(){
    let planos = document.getElementById("plano")
    let options = planos.options;
    let itemAtual = planos.selectedIndex;

    let titulo = document.getElementById("valortotal")
    let paragrafo = document.getElementById("pmes")
    
    if(options[itemAtual].index == 0){
        titulo.innerHTML = "R$144,50*"
        paragrafo.innerHTML = "Pague hoje R$289,00 por dois anos de assinatura!"
    }
    else if(options[itemAtual].index == 1){
        titulo.innerHTML = "R$109,50*"
        paragrafo.innerHTML = "Pague hoje R$219,00 por dois anos de assinatura!"

    }
    else if(options[itemAtual].index == 2){
        titulo.innerHTML = "R$59,50*"
        paragrafo.innerHTML = "Pague hoje R$119,00 por dois anos de assinatura!"

    }
    else if(options[itemAtual].index == 3){
        titulo.innerHTML = "R$69,00*"
        paragrafo.innerHTML = "Trata-se de aproximadamente<br>R$5,75/ mês"

    }
    else{
        window.alert("Algo deu errado!")
    }
}

