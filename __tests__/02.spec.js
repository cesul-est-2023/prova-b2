const {
  Produto,
  produtoMaisCaro,
  mediaValores,
  valorFinalCompra,
} = require("../src/02");

test("cria um objeto produto, com nome e preço", () => {
  const produto = new Produto("Produto 1", 10);
  expect(produto.nome).toBe("Produto 1");
  expect(produto.preco).toBe(10);
});

test("retorna o produto mais caro da lista", () => {
  const produtos = [
    new Produto("Produto 1", 10),
    new Produto("Produto 2", 20),
    new Produto("Produto 3", 15),
  ];
  expect(produtoMaisCaro(produtos)).toEqual(produtos[1]);
});

test("retorna o preço médio de uma lista de produtos", () => {
  const produtos = [
    new Produto("Produto 1", 10),
    new Produto("Produto 2", 20),
    new Produto("Produto 3", 15),
  ];
  expect(mediaValores(produtos)).toBe(15);
});

test("retorna o valor final de uma compra", () => {
  const produtos = [
    new Produto("Produto 1", 10),
    new Produto("Produto 2", 20),
    new Produto("Produto 3", 15),
  ];
  expect(valorFinalCompra(produtos)).toBe(38.25);
});
