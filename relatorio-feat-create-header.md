
# 📋 Relatório de Branch - `feat-create-header`

**Arquivo relacionado:**  
`src/components/header/Header.jsx`

---

## 📍 Descrição Geral:

O objetivo da branch `feat-create-header` foi **criar o componente de cabeçalho (`Header`) do site**, utilizando estrutura semântica em HTML (`<header>`) e estilização com Tailwind CSS.  
O componente apresenta navegação adaptável entre desktop e mobile, além de incluir controle de autenticação (Login/Logout).

---

## 🎯 O que foi feito:

- **Criação do componente `Header`.**
- **Criação do componente auxiliar `IsLoggedIn`.**
- **Implementação do menu de navegação com itens dinâmicos** (como Início, Eventos, Sobre, Criar Evento).
- **Controle de navegação ativa** (`active`) para destacar o item atual.
- **Responsividade**:
  - Layout desktop: menu horizontal visível, login/logout separado.
  - Layout mobile: botão hamburger que expande o menu verticalmente.
- **Design estilizado** com Tailwind (`bg-[#034833]`, responsividade via `md:hidden`, `gap`, `border-t`, etc.).
- **Incorporação de ícones** usando a biblioteca `lucide-react` (ícones de menu e fechar).

---

## ✅ Status:

**Concluído.**  
O componente está implementado e funcional.

---

## 🛠️ Possibilidades de melhoria:

- **Inserir imagem de logo definitiva:** Atualmente é utilizado um link externo temporário (`TODO: GET THE CHANGED LOGO`).
- **Ajustar imagem de perfil de usuário:** Futuramente substituir por um SVG conforme marcado no comentário (`TODO: USE THE SVG`).
- **Melhorar acessibilidade:** Adicionar atributos `aria-label` nos botões do menu para melhor experiência de navegação por teclado/leitores de tela.

---

## 📌 Observação Final:

> O componente já contempla uma estrutura sólida para autenticação e navegação em dispositivos móveis e desktops. Atenção futura para atualização das imagens temporárias (logo e foto de perfil) conforme disponibilização dos arquivos finais.
