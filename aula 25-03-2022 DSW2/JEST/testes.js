const soma = require("./funcoes");
test("Soma 1 + 2 igual a 3", () =>{
 expect(soma(1, 2)).toBe(3);
})
test("Soma 1 + 2 não é igual a 2", () =>{
 expect(soma(1, 2)).not.toBe(2);
})  
