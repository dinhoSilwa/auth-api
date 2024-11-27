# To-Do List - Sistema de Cadastro de Usuário com Autenticação

Este é um guia passo a passo para criar um sistema de cadastro de **nome**, **email** e **senha**, com **autenticação** usando **Mongoose**, **Express**, **TypeScript** e **Node.js**.

## Estrutura do Projeto

1. **Definir a Estrutura de Diretórios do Projeto**

   - Crie a seguinte estrutura de diretórios:
     - `src/`
       - `controllers/`: Funções que controlam a lógica das rotas (ex: cadastro, login).
       - `models/`: Esquemas do Mongoose.
       - `routes/`: Definição das rotas da API.
       - `middlewares/`: Middlewares como autenticação.
       - `config/`: Configuração do banco de dados e outras configurações do projeto.

---

## Modelagem e Lógica

2. **Definir o Modelo de Usuário (Mongoose Schema)**

   - Crie um modelo de usuário com os seguintes campos:
     - **nome** (string)
     - **email** (string, único)
     - **senha** (string, com hash)
   - Adicione validações:
     - E-mail único.
     - Método para comparar a senha fornecida com o hash.

---

3. **Configurar Conexão com o Banco de Dados (MongoDB)**

   - Configure a conexão com o MongoDB usando **Mongoose**.
   - Certifique-se de que a conexão com o banco seja bem-sucedida.

---

4. **Definir as Funções de Cadastro e Autenticação**

   - **Cadastro:**
     - Receba os dados de **nome**, **email** e **senha**.
     - Verifique se o e-mail já existe no banco.
     - Crie um hash da senha com `bcryptjs`.
     - Salve o usuário no banco de dados.
   - **Login:**
     - Receba **email** e **senha**.
     - Verifique se o usuário existe.
     - Compare a senha fornecida com o hash armazenado no banco.
     - Gere um **JWT** se a autenticação for bem-sucedida.

---

## Rotas da API

5. **Definir as Rotas de Cadastro e Login**

   - **POST** `/auth/register`: Cadastro de usuário.
   - **POST** `/auth/login`: Login de usuário e geração do token.

---

6. **Criar Middleware de Autenticação**

   - Crie um middleware que valide o **JWT**:
     - Verifique se o token está presente nos cabeçalhos da requisição.
     - Valide o token usando a chave secreta.
     - Decodifique o token e valide o usuário autenticado.

---

## Validações e Tratamento de Erros

7. **Aplicar Validações e Tratamento de Erros**

   - Valide os dados de entrada, garantindo que o **email** e a **senha** estejam no formato correto.
   - Trate os erros:
     - E-mail já registrado.
     - Senha incorreta.
     - Erros de validação de dados de entrada.

---

## Segurança

8. **Proteger Rotas com Autenticação**

   - Para rotas que exigem login, aplique o middleware de autenticação.
     - Exemplo: proteger rotas como `/profile`, `/settings`, etc.

9. **Testar a API**

   - Use ferramentas como **Postman** ou **Insomnia** para testar:
     - O fluxo de **cadastro** de novos usuários.
     - O fluxo de **login** e geração de token.
     - O uso do token nas rotas protegidas.

---

## Finalização

10. **Ajustes Finais**

    - Certifique-se de que todas as respostas da API sejam adequadas:
      - Respostas de erro (`4xx`, `5xx`).
      - Respostas de sucesso (`200`), com os dados necessários.
    - Ajuste as mensagens de erro:

      - "Email já registrado."
      - "Credenciais inválidas."

    - Adicione melhorias de segurança:
      - Use **HTTPS**.
      - Armazene o **JWT** de forma segura (com as flags `HttpOnly` e `Secure` nos cookies).
      - Configure o **CORS** (se necessário).

11. **Preparação para Produção**

    - Valide a performance do sistema.
    - Configure o ambiente de produção (variáveis de ambiente, usando **dotenv**).
    - Desploe a aplicação para um servidor (e.g., **Heroku**, **AWS**, **DigitalOcean**).

---

## Fluxo do Sistema

- **Cadastro de Usuário:**
  - O usuário envia **nome**, **email** e **senha**.
  - O sistema valida o e-mail e cria um hash para a senha.
  - O usuário é salvo no banco de dados.
- **Login de Usuário:**
  - O usuário envia **email** e **senha**.
  - O sistema verifica as credenciais e gera um **JWT** se autenticado.
- **Acesso a Rotas Protegidas:**
  - O usuário envia o **JWT** no cabeçalho para acessar rotas protegidas.
  - O middleware de autenticação valida o **JWT** e autoriza o acesso se válido.

---

Com este passo a passo, você pode criar um sistema completo de cadastro, login e autenticação com **Mongoose**, **Express**, **TypeScript** e **JWT**.
