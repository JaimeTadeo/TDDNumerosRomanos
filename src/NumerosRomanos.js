export default function numeros(num) {
    const romanos = [
        { value: 10, symbol: "X" },
        { value: 9, symbol: "IX" },
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
