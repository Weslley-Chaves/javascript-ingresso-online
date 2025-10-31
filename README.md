# 🎟️ e-Ticket

> Projeto desenvolvido em **JavaScript, HTML e CSS** durante o curso de  **Lógica de Programação da Alura** .

---

## 📘 Sobre o Projeto

O **e-Ticket** é um sistema simples de  **compra de ingressos online** , que simula a escolha de tipos de assento (pista, cadeira superior e inferior), controla o **estoque disponível** e desativa automaticamente as opções esgotadas.

O foco do exercício é praticar  **estruturas condicionais** , **funções reutilizáveis** e **conversão de tipos** em JavaScript.

---

## 🧠 O que foi aprendido

Durante o desenvolvimento do projeto, foram praticados conceitos essenciais de  **lógica de programação** :

### 🔹 Manipulação e conversão de dados

* Utilizar `parseInt()` para converter strings em números inteiros;
* Ler valores dos elementos da página com `document.getElementById().value`;
* Atualizar textos na tela com `.textContent`.

### 🔹 Estrutura e organização

* Criar funções separadas para diferentes responsabilidades (`comprar()` e `desabilitarOpcao()`);
* Usar condicionais (`if / else if`) para decidir o tipo de ingresso;
* Reutilizar código com funções auxiliares e variáveis globais de controle.

### 🔹 Interação com o DOM

* Atualizar elementos HTML dinamicamente (estoque, alertas e estados do `<select>`);
* Desabilitar opções esgotadas (`option.disabled = true`).

---

## 🧩 Estrutura do Projeto

```
e-ticket/
│
├── 📂 assets/
│   ├── SVG/
│   │   ├── Hachuras.svg
│   │   └── Ingresso.svg
│   └── PNG/
│       └── Logo e-tricket.png
│
├── 📂 js/
│   └── app.js
│
├── 📂 styles/
│   ├── _reset.css
│   └── style.css
│
├── index.html
└── README.md
```

---

## ⚙️ Funcionamento

1️⃣ Escolha o **tipo de ingresso** no menu.

2️⃣ Informe a **quantidade desejada** (máximo 10 por compra).

3️⃣ Clique em  **Comprar** .

4️⃣ O sistema:

* Verifica se há ingressos disponíveis;
* Atualiza o estoque na tela;
* Desativa automaticamente as opções esgotadas;
* Exibe alertas amigáveis ao usuário.

---

### 🧩 Exemplo de lógica:

```javascript
if (valorSelecionado === 'pista') {
  if (pista >= quantidade) {
    pista -= quantidade;
    document.getElementById('qtd-pista').textContent = pista;
    if (pista === 0) desabilitarOpcao('pista');
  } else {
    alert(`Estoque insuficiente para Pista. Restam ${pista}.`);
  }
}
```
---

## 🛠️ Tecnologias Utilizadas

| Tecnologia                  | Função                 |
| --------------------------- | ------------------------ |
| **HTML5**             | Estrutura da aplicação |
| **CSS3**              | Estilização e layout   |
| **JavaScript (ES6+)** | Lógica e interatividade |

---

## 👨‍💻 Autor

**Weslley Chaves**

📎 [GitHub](https://github.com/Weslley-Chaves) | 💼 [LinkedIn](https://www.linkedin.com/in/weslley-s-chaves-789890228/)

🗓️ Última atualização: **31/10/2025**
