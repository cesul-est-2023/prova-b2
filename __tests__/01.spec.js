const { Livro, obterTop5Livros } = require("../src/01");

test("cria um livro", () => {
  const livro = new Livro("Livro 1", 100);

  expect(livro.titulo).toBe("Livro 1");
  expect(livro.paginas).toBe(100);
});

test("retorna os 5 livros com mais páginas", () => {
  const livros = [
    new Livro("Livro 3", 300),
    new Livro("Livro 2", 200),
    new Livro("Livro 4", 400),
    new Livro("Livro 6", 600),
    new Livro("Livro 1", 100),
    new Livro("Livro 5", 500),
    new Livro("Livro 7", 700),
  ];

  const top5Livros = obterTop5Livros(livros);

  expect(top5Livros).toEqual([
    new Livro("Livro 7", 700),
    new Livro("Livro 6", 600),
    new Livro("Livro 5", 500),
    new Livro("Livro 4", 400),
    new Livro("Livro 3", 300),
  ]);
});
