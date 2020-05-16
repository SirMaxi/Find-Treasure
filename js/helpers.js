// function getRandomNumber(size) {
    
// }

//La primera funcion es lo mismo que lo de aca abajo

let getRandomNumber = size => {
    return Math.floor(Math.random() * size);
}

let getDistance = (e, target) => {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

let getDistanceHint = distance => {
    if(distance < 30) { // Todos estos numeros son pixeles
        return "Super Caliente!";
    } else if(distance < 40) {
        return "Muy Caliente";
    } else if(distance < 60) {
        return "Caliente";
    } else if(distance < 100) {
        return "Tibio";
    } else if(distance < 180) {
        return "Frio";
    } else if(distance < 360) {
        return "Muy Frio";
    } else {
        return "Congelado!";
    }
}