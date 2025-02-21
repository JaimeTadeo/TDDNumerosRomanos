import numeros from "./NumerosRomanos.js";

describe("Numeros Romanos", () => {
    it("debería convertir 1 a I", () => {
        expect(numeros(1)).toEqual("I");
    });
});
