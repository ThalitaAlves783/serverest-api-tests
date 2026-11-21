const BASE_URL = "https://serverest.dev";

// GET /usuarios: lista todos os usuários cadastrados
async function listarUsuarios() {
  const resposta = await fetch(`${BASE_URL}/usuarios`);
  const corpo = await resposta.json();
  return { status: resposta.status, corpo };
}

// POST /usuarios: cadastra um novo usuário
async function cadastrarUsuario(usuario) {
  const resposta = await fetch(`${BASE_URL}/usuarios`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario),
  });
  const corpo = await resposta.json();
  return { status: resposta.status, corpo };
}

// POST /login: realizar login de um usuário
async function loginUsuario(credenciais) {
  const resposta = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credenciais),
  });
  const corpo = await resposta.json();
  return { status: resposta.status, corpo };
}




module.exports = { listarUsuarios, cadastrarUsuario, loginUsuario };
