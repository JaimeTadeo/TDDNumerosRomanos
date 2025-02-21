export default function numeros(num) {
    const romanos = [
        { value: 5, symbol: "V" },
        { value: 4, symbol: "IV" },
        { value: 1, symbol: "I" }
    ];

    let resultado = "";

    for (const { value, symbol } of romanos) {
        while (num >= value) {
            resultado += symbol;
            num -= value;
        }
    }

    return resultado;
}
