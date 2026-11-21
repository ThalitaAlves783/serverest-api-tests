# Testes de API · ServeRest 🔌

Testes automatizados da API REST pública [ServeRest](https://serverest.dev), escritos em **JavaScript** com o executor de testes nativo do **Node.js** (`node:test`), sem dependências externas.

Este projeto faz parte da minha transição para **automação de testes**. Sou analista de QA certificada **ISTQB® CTFL v4.0**.

## Cenários

| Endpoint | Cenário | Status esperado | Situação |
|---|---|---|---|
| `GET /usuarios` | Listar usuários | 200 | ✅ Automatizado |
| `POST /usuarios` | Cadastrar usuário novo | 201 |✅ Automatizado  |
| `POST /usuarios` | Cadastrar com e-mail já usado | 400 | ✅ Automatizado  |
| `POST /login` | Login com credenciais válidas | 200 | ✅ Automatizado  |
| `POST /login` | Login com senha errada | 401 | ✅ Automatizado  |

## Decisões de teste

- **Duas camadas de validação:** cada teste verifica o **status HTTP** e o **corpo** da resposta. Um status 200 não garante que os dados estão corretos.
- **Testes estáveis numa API pública:** a ServeRest é compartilhada e os dados mudam a todo momento. Por isso os testes não verificam nomes nem quantidades exatas, e sim regras que valem sempre (por exemplo, `quantidade` deve ser igual ao tamanho da lista `usuarios`).
- **Dados de teste fictícios e únicos:** os cadastros usam e-mails gerados a cada execução (`Date.now()`), evitando falhas por e-mail repetido e sem usar dados reais.

## Como rodar

Pré-requisito: [Node.js](https://nodejs.org/) 18 ou superior. Não há dependências para instalar.

```bash
git clone https://github.com/ThalitaAlves783/serverest-api-tests.git
cd serverest-api-tests
npm test
```

Os testes chamam a API real, então é preciso estar conectado à internet.

## Estrutura

```
src/serverest.js        → funções que chamam a API (GET e POST /usuarios)
test/usuarios.test.js   → testes do recurso /usuarios
```

## Próximos passos

- [X] Primeiro teste de API (GET /usuarios)
- [X] Testes de cadastro: sucesso e e-mail repetido
- [X] Testes de login: sucesso e senha inválida
- [X] Testes rodando no GitHub Actions a cada commit

## Contato

**Thalita Alves** · Analista de QA | ISTQB® CTFL v4.0
[LinkedIn](https://www.linkedin.com/in/thalita-alves-qa/) · [GitHub](https://github.com/ThalitaAlves783)
