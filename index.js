function Relogio(){
    //Forma com que pego do sistema a data
    var data = new Date()
    //////

    //Pegando horas,minutos e segundos e armazendando em variaveis
    var hr = data.getHours()
    var min = data.getMinutes()
    var seg = data.getSeconds()
    /////////


    //Criando a variavel horas e adicionando as variaveis  hr / seg / min da forma que será exibida 
    var horas = hr + ":" + min  + ":" + seg
    /////

    //Criando a variavel tempo e recebendo do documento html o elemento com o nome divRelogio
    var tempo = window.document.getElementById("divRelogio")
    //////
    //Substituir no documento html (divRelogio) o parametro que passei na variavel horas
    tempo.innerHTML = horas
}

//Chamando a funcao relogio e passando o intervalo do tempo que ela deve ser chamada 
setInterval(Relogio, 500)