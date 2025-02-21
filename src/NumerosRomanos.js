export default function numeros(num) {
    let resultado = "";

    if (num === 4) {
        return "IV";
    }

    for (let i = 0; i < num; i++) {
        resultado += "I";
    }

    return resultado;
}
