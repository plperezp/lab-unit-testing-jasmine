//UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
  describe("Function - divide", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("Si el divisor es igual a 0 tiene que devolver undefined", () => {
      expect(add(9,  0).toBe(undefined));
      expect(add(20,  0).toBe(undefined));
      expect(add(19 , 0).toBe(undefined));
    });
    it("Debe tomar dos argumentos", () => {
      expect(add.length).toBe(2);
    });
    it("Ambos argumentos han de estar definidos", () => {
      expect(add).toBeDefined();
    });
    it("Tiene que retornar undefined si cualquier argumento no es un número", () => {
      expect(add("patata", 2)).toEqual(undefined);
      expect(add(["rainbow", "forest"], 6)).toEqual(undefined);
      expect(add(25, true)).toEqual(undefined);
    });
    it("tiene que devolver undefined si alguno de los argumentos no esta provisto", () => {
      expect(add(1)).toEqual(undefined);
      expect(add()).toEqual(undefined);
      expect(add(undefined, 1)).toEqual(undefined);
    });
  });
});
