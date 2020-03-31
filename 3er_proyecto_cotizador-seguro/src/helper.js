export function diferenciaAnios(anios){

    return new Date().getFullYear()-anios;
}

//calculo a total segun el tipo de marca
export function varianteMarca(marca){
    if(marca === "Asiático")
        return 0.05;
    else if(marca === "Americano")
        return 0.15;
    else
        return 0.3;
}

export function variantePlan(plan){
    if(plan === "basico")
        return 0.2;
    else
        return 0.5;
}
