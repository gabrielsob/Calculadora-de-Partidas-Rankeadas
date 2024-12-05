let resultado = soma(80, 5)
let mensagem = ("O heroi tem de saldo " + resultado + " está no nível ")

if(resultado <= 10)
    console.log(mensagem + "Ferro")
else if(resultado <= 20)
    console.log(mensagem + "Bronze")
else if(resultado <= 50)
    console.log(mensagem + "Prata")
else if(resultado <= 80)
    console.log(mensagem + "Ouro")
else if(resultado <= 90)
    console.log(mensagem + "Diamante")
else if(resultado <= 100)
    console.log(mensagem + "Lendário")
else if(resultado)
    console.log(mensagem + "Imortal")

function soma(vitoria, derota){
    let somatorio = vitoria - derota
    return somatorio
}