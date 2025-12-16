# 📚 Sistema de Gerenciamento de Biblioteca (Library Management System)

 **Status:** Concluído

## Sobre o Projeto

Este projeto é uma solução Full Stack para gerenciamento de bibliotecas, desenvolvido com foco na experiência do usuário e na robustez dos dados. O objetivo foi criar uma plataforma onde administradores podem gerenciar o acervo e usuários podem alugar livros, realizar leituras e interagir com a comunidade através de avaliações.

O diferencial deste sistema é a integração híbrida: ele gerencia livros cadastrados internamente e também consome dados externos da **Google Books API**, oferecendo um catálogo vasto e dinâmico.

---

## 🛠 Tech Stack

### **Backend**
* **Java & Spring Boot:** Para construir uma API RESTful segura e eficiente.
* **Spring Security & JWT:** Implementação de autenticação robusta e controle de sessão stateless.
* **Hibernate/JPA:** Para ORM e persistência de dados.
* **MySQL:** Banco de dados relacional.
* **JavaMailSender:** Para notificações automáticas via e-mail.

### **Frontend**
* **React.js:** Criação de interfaces reativas e componentizadas.
* **Tailwind CSS:** Estilização utilitária para agilidade.
* **DaisyUI:** Biblioteca de componentes para UI (User Interface) elegante e consistente.

---

## 🚀 Funcionalidades Principais

### 🔐 Autenticação e Segurança
* **Login e Cadastro:** Sistema completo de registro e login de usuários.
* **Segurança JWT:** Autenticação via JSON Web Token com encriptação de senha.
* **Gestão de Sessão:** Persistência de sessão utilizando cookies e funcionalidade de Logout seguro.
* **Regras de Senha:** Validação robusta (mínimo de 8 dígitos, letras maiúsculas e minúsculas).

### 📚 Gestão de Acervo (Catálogo)
* **Busca Híbrida:** Pesquisa de livros por título, autor, categoria ou palavra-chave, unificando resultados do banco de dados local e da **Google Books API**.
* **Detalhamento:** Exibição rica de capas, descrições, categorias e médias de avaliação.
* **Painel Administrativo:** Dashboard exclusivo para o admin criar, atualizar e excluir livros e categorias.

### 📖 Área do Leitor e Aluguéis
* **Perfil do Usuário:** Página dedicada onde o usuário visualiza seus aluguéis e dados da conta.
* **Sistema de Leitura:** Interface para acessar e ler o livro digitalmente após o aluguel.
* **Controle de Prazos:** Lógica de negócio que define um prazo de leitura de 15 dias.
* **Notificações Inteligentes:**
    * Alerta visual na interface sobre o prazo.
    * **Envio de e-mail** automático notificando o usuário 3 dias antes da data de devolução.

### ⭐ Avaliações e Social
* **Sistema de Review:** Usuários podem avaliar livros com notas e comentários.
* **Cálculo de Média:** O sistema calcula e exibe automaticamente a média das avaliações de cada obra.
* **Gestão de Comentários:** Liberdade para o usuário editar ou excluir suas próprias avaliações.

---

## 🧩 Arquitetura e Decisões de Projeto

### Integração com Google Books API
Um dos desafios técnicos foi "hidratar" o nosso banco de dados. Para não dependermos apenas de inserções manuais, o backend busca informações na API do Google quando uma pesquisa é realizada, enriquecendo a experiência do usuário final sem sobrecarregar o banco local desnecessariamente.

### Sistema de Notificações
A retenção e o cumprimento de prazos são cruciais. Implementamos um *job* no backend que verifica diariamente os prazos de devolução e dispara e-mails preventivos, garantindo que o usuário não perca a data de entrega.

---

## 👥 Autores

Este projeto foi desenvolvido colaborativamente por:

* **Ana Paula** - *Foco: Frontend Architecture, UI/UX (DaisyUI), Integração com API, Funcionalidades de Usuário e Admin*
* **Lívia** - *Foco: Backend Security, Auth (JWT), Session Management*
* **Mari** - *Foco: Backend Logic (Books, Google API), Business Rules (Prazos/Notificações)*

---

### Como rodar o projeto

```bash
# Clone este repositório
$ git clone [https://link-do-seu-repositorio.com](https://link-do-seu-repositorio.com)

# Acesse a pasta do projeto no terminal/cmd
$ cd nome-do-projeto

# Instale as dependências do Frontend
$ cd frontend
$ npm install

# Execute a aplicação Frontend
$ npm start

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
