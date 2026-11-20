const test = require("node:test");
const assert = require("node:assert");
const { listarUsuarios } = require("../src/serverest");

test("GET /usuarios responde 200 com uma lista de usuários", async () => {
  const { status, corpo } = await listarUsuarios();

  assert.strictEqual(status, 200);
  assert.ok(Array.isArray(corpo.usuarios));
  assert.strictEqual(corpo.quantidade, corpo.usuarios.length);
});
