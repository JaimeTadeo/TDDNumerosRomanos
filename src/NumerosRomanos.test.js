import numeros from "./NumerosRomanos.js";

describe("Numeros Romanos", () => {
    it("debería convertir 1 a I", () => {
        expect(numeros(1)).toEqual("I");
    });

    it("debería convertir 2 a II", () => {
        expect(numeros(2)).toEqual("II");
    });

    it("debería convertir 3 a III", () => {
        expect(numeros(3)).toEqual("III");
    });

    it("debería convertir 4 a IV", () => {
        expect(numeros(4)).toEqual("IV");
    });

    it("debería convertir 5 a V", () => {
        expect(numeros(5)).toEqual("V");
    });
});
