function contar(){
    var inicio = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var passos = window.document.getElementById('txtp')
    var res = window.document.getElementById('res')
    if(inicio.value.length == 0 || fim.value.length == 0 || passos.length == 0){
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossivel contar'
    } else{
        res.innerHTML = 'Contando: '
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passos.value)
        if (p <= 0){
            res.innerHTML = 'PASSO INVÁLIDO! considerando PASSO 1     \n'
            p = 1
        }
        if(i < f){
            //contagem crescente
            for(contador = i; contador<=f; contador+= p){
                res.innerHTML += `${contador} 👉`
            }
        } else{ 
            //contagem regressiva
            for (var contador = i; contador >=f; contador -= p)
            res.innerHTML +=`${contador} 👉`
        }
        res.innerHTML += '🏁' 
    }    
}

