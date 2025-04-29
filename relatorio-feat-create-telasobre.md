
# 📋 Relatório de Branch - `feat-create-Telasobre`

**Arquivos relacionados:**  
- `src/components/About.jsx`
- `src/components/Desenvolvedores.jsx`

---

## 📍 Descrição Geral:

O objetivo da branch `feat-create-Telasobre` foi **estruturar a tela "Sobre"** do projeto **App Eventos IFSP**, apresentando informações institucionais sobre o projeto, os objetivos acadêmicos e os desenvolvedores responsáveis.  
A tela é composta de duas partes principais: **Descrição do Projeto** e **Galeria de Desenvolvedores**, com design responsivo e estilização em Tailwind CSS.

---

## 🎯 O que foi feito:

- **Criação do componente `About`**:
  - Bloco inicial "Sobre" com destaque visual (fundo verde e bordas arredondadas).
  - Seção "Sobre o Projeto" detalhando o propósito, tecnologias utilizadas e objetivos do App Eventos IFSP.
  - Uso de listas (`ul`, `li`) para organizar tecnologias e objetivos.
  - Importação e exibição do componente `Desenvolvedores`.

- **Criação do componente `Desenvolvedores`**:
  - Renderização de uma **galeria de desenvolvedores** utilizando `.map()` sobre um array de objetos.
  - Cada desenvolvedor é apresentado com **foto, nome e matrícula**.
  - Organização responsiva em grades (`grid`) adaptáveis a diferentes tamanhos de tela (mobile, tablet e desktop).
  - Estilo visual limpo, com destaque para fotos arredondadas e informações centralizadas.

- **Responsividade e Estilização**:
  - Utilização de classes Tailwind para espaçamento, tipografia, cores e grid.
  - Adaptação automática da grade de desenvolvedores conforme o tamanho da tela.

---

## ✅ Status:

**Concluído.**  
Os componentes `About` e `Desenvolvedores` foram implementados de forma funcional e responsiva.

---

## 🛠️ Possibilidades de melhoria:

- **Melhorar a acessibilidade das imagens** adicionando `alt` texts mais descritivos para usuários de leitores de tela.
- **Centralizar e padronizar imagens dos desenvolvedores** para manter consistência visual caso imagens externas variem em tamanho ou qualidade.
- **Carregamento otimizado de imagens**: As fotos dos desenvolvedores poderiam utilizar técnicas como `next/image` (caso o projeto esteja em Next.js) para melhorar o desempenho de carregamento.

---

## 📌 Observação Final:

> A estrutura da Tela Sobre está bem organizada e já reflete boas práticas de semântica, design responsivo e modularidade dos componentes. Recomenda-se apenas pequenos ajustes futuros voltados para acessibilidade e performance de imagens.
