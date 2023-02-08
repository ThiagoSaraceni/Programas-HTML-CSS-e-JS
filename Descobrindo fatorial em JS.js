function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}
console.log(fatorial(5))
//5! = 5 x 4 x 3 x 2 x 1
    /* a nova variavel fat comeca valendo 1 pra embaixo fazermos ela multiplicar por 1 e conseguir ter o primeiro valor do fatorial, e depois começar a multiplicar pela nossa variavel c, que vai ficar diminuindo o valor ate chegar a 1
    exemplo fat igual 1
    fatorial = fatorial * contador
    1 = 1 * 5
    agora o cont vira 4

    5 = 5 x 4
    20 = 20 x 3 

    return fat
}
console.log(fatorial(5))
*/ 
//5! = 5 x 4 x 3 x 2 x 1