let animo = "aprovada"

switch (animo){
    case "aprovada":
        console.log("Parabéns, você foi aprovada(o)!");
        break;

    case "lista":
        console.log("Você está na nossa lista de espera");
        break;

    case "reprovada":
        console.log("Você foi reprovada(o)")
        break;
    
    default:
        console.log('não se aplica')
}

console.log(animo);