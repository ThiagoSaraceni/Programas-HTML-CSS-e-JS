function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')    
    var res = document.getElementById('resultado')
    if (fano.value.lenght == 0 || Number(fano.value) > ano ) {
        // se não digitou o ano
        window.alert('[ERRO] Verifique os dados novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
    }
    if (fsex[0].checked){
        //se a variavel fsex na  posicao 0, que e o masculino estiver checada/marcada entao 
        genero = 'Homem'
        if (idade >=0 & idade < 10){
            //Criança
            img.setAttribute('scr', 'fotos/menino-crianca.png')
        }else if(idade <21 ){
            //Jovem         
            img.setAttribute('src', 'fotos/menino-jovem.png')  
        }else if(idade < 50){
            //Adulto
            img.setAttribute('src', 'fotos/homem-adulto.png')
        }else{
            //idoso
            img.setAttribute('src', 'fotos/homem-idoso.png')
        }
    }else if(fsex[1].checked){
        genero = 'Mulher'
        if (idade >=0 & idade < 10){
            //Criança
            img.setAttribute('src', 'fotos/menina-crianca.png')
        }else if(idade <21 ){
            //Jovem     
            img.setAttribute('src', 'fotos/menina-jovem.png')      
        }else if(idade < 50){
            //Adulto
            img.setAttribute('src', 'fotos/mulher-adulta.png')
        }else{
            //idoso
            img.setAttribute('src', 'fotos/mulher-idosa.png')
        }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos `
    res.style.textAlign = 'center'
    res.appendChild(img)
    //adicionando o elemento img que no caso e nossa foto. sem o appendChild, não mostraria a foto
}