import numeros from "./NumerosRomanos.js";

describe("Numeros Romanos", () => {
    it("debería convertir 1 a I", () => {
        expect(numeros(1)).toEqual("I");
    });

    it("debería convertir 2 a II", () => {
        expect(numeros(2)).toEqual("II");
    });
});
