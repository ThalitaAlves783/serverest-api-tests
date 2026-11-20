const test = require("node:test");
const assert = require("node:assert");
const { listarUsuarios, cadastrarUsuario } = require("../src/serverest");

test("GET /usuarios responde 200 com uma lista de usuários", async () => {
  const { status, corpo } = await listarUsuarios();

  assert.strictEqual(status, 200);
  assert.ok(Array.isArray(corpo.usuarios));
  assert.strictEqual(corpo.quantidade, corpo.usuarios.length);
});

test("POST /usuarios cadastra um usuário novo e responde 201", async () => {
    const novoUsuario = {
      nome: "Fulano de Tal",
      email: Date.now() + "@tha.com.br",
      password: "senha123",
      administrador: "true"
    }

    const { status, corpo } = await cadastrarUsuario(novoUsuario);
    assert.strictEqual(status, 201);
    assert.strictEqual(corpo.message, "Cadastro realizado com sucesso");
    assert.ok(corpo._id);
})


test("POST /usuarios com e-mail já cadastrado responde 400", async () => {
    const usuarioRepetido = {
      nome: "Usuário Duplicado",
      email: "thalita.a.santos@qa.com.br",
      password: "senha123",
      administrador: "true"
    }
    
    const { status, corpo } = await cadastrarUsuario(usuarioRepetido);
    assert.strictEqual(status, 400);
    assert.strictEqual(corpo.message, "Este email já está sendo usado");
    assert.ok(!corpo._id);
})