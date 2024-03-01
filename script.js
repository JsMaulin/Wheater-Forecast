

const key = "e9f8e4bfc12fd5ae7417a163b7c13eee"

function colocarDadosNaTela(dados){
    console.log(dados)
    document.querySelector(".city").innerHTML = "Tempo em: " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + " °C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Humidade: " + dados.main.humidity + " %"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector(".feel-like").innerHTML = "Sensação Térmica: " + Math.floor(dados.main.feels_like) + " °C"

}


async function buscarCidade(cidade){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then (resposta => resposta.json())
    colocarDadosNaTela(dados)
}



function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-city").value
    
    buscarCidade(cidade)
}