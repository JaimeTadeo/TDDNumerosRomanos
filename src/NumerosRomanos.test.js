import numeros from "./NumerosRomanos.js";

describe("Numeros Romanos", () => {
    it("debería convertir 1 a I", () => {
        expect(numeros(1)).toEqual("I");
    });

    it("debería convertir 4 a IV", () => {
        expect(numeros(4)).toEqual("IV");
    });
});
