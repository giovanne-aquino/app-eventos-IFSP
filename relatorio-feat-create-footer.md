📋 Relatório de Branch - feat-create-footer
Arquivo relacionado:
src/components/footer/Footer.jsx

📍 Descrição Geral:
O objetivo da branch feat-create-footer foi criar o componente de rodapé (Footer) do site, utilizando estrutura semântica em HTML (<footer>) e estilização com Tailwind CSS.
O componente é responsivo e modular, preparado para abrigar seções de navegação, informações institucionais e redes sociais.

🎯 O que foi feito:
Criação do componente Footer.

Renderização dinâmica de blocos (Menu, Conta, Categoria, Siga-nos) usando .map().

Aplicação de responsividade com classes Tailwind (flex-wrap, sm, md breakpoints).

Estilização visual com cores específicas (bg-[#034833] e text-[#A9A9A9]) e fontes personalizadas (Montserrat e Open Sans).

Separação visual do rodapé com uma linha (border-t) e texto centralizado.

Inclusão de uma div branca reservada (provavelmente para ícones, QR Code ou logo futuro).

✅ Status:
Concluído.
O componente está implementado e funcional.

🛠️ Possibilidades de melhoria:
Transformar os itens de lista (<li>) em links reais (<a> com href).

Adicionar ícones ou conteúdo à div branca reservada para evitar confusão visual.

Possível extração do array de blocos para um arquivo separado (ex: footerData.js) para facilitar a manutenção futura.

📌 Observação Final:
Apesar de funcional, é importante revisar futuramente o conteúdo da div branca oculta (hidden md:block), pois ela está vazia e pode gerar inconsistência visual se publicada sem ajustes.
