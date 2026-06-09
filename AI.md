# AI.md — Registro de uso de Inteligência Artificial

**Disciplina:** Desenvolvimento Web  
**Projeto:** OrbitWatch — Monitoramento Global via Satélite  
**Ferramenta utilizada:** Claude (Anthropic)

---

## Interação 1

**O que foi solicitado para a IA:**  
Analisar o `index.html` existente do projeto e identificar o que faltava de acordo com o checklist da disciplina de Web Dev: slideshow com 3 imagens, formulário com validação, quiz dinâmico com 10 perguntas e 3 opções de troca de tema de cor de fundo.

**O que a IA retornou:**  
Um diagnóstico comparando o que já existia no projeto com o que precisava ser implementado, listando as 4 funcionalidades ausentes.

**O que foi alterado ou rejeitado:**  
Nenhuma alteração nessa etapa. O diagnóstico foi aceito integralmente.

---

## Interação 2

**O que foi solicitado para a IA:**  
Gerar o `index.html` completo com as 4 funcionalidades faltantes adicionadas ao site já existente, mantendo o estilo espacial do projeto e usando somente JavaScript puro, sem frameworks.

**O que a IA retornou:**  
O arquivo `index.html` completo contendo:
- Slideshow com 3 slides temáticos (Monitoramento Oceânico, Incêndios Florestais e Atividade Vulcânica), com navegação por botões e dots e auto-avanço a cada 5 segundos.
- Formulário de cadastro de alertas com campos de nome, e-mail, região e mensagem, com validação que impede envio com campos vazios ou e-mail inválido.
- Quiz com 10 perguntas sobre aquecimento global, satélites e a API EONET, com feedback imediato, barra de progresso e tela de resultado.
- Seletor de 3 temas de cor (azul, verde e roxo) fixo na tela, aplicado via classes CSS com variáveis customizadas.
- Todo o JavaScript embutido dentro de uma tag `<script>` no próprio HTML.

**O que foi alterado ou rejeitado:**  
O JavaScript embutido foi rejeitado pelo grupo para manter a organização do projeto. Foi solicitada a separação em arquivo externo (ver Interação 3).

---

## Interação 3

**O que foi solicitado para a IA:**  
Separar todo o JavaScript do `index.html` em um arquivo externo `js/script.js`.

**O que a IA retornou:**  
O arquivo `script.js` com todo o código JavaScript extraído (tema de cores, slideshow, validação do formulário e quiz), e o `index.html` atualizado com a tag `<script src="js/script.js"></script>` no lugar do bloco inline.

**O que foi alterado ou rejeitado:**  
Nenhuma alteração. Os arquivos foram aceitos e integrados ao projeto conforme entregues.