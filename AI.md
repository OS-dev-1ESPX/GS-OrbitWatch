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

---

# AI.md — Registro de Uso de Inteligência Artificial

## Projeto: OrbtitWatch
## Disciplina: Web Development
## Ferramenta utilizada: Claude (Anthropic)

---

## Interação 1

### O que foi solicitado para a IA
Criação completa de um projeto web sobre astronomia, atendendo a todos os requisitos do trabalho:
- HTML, CSS e JavaScript puros (sem frameworks)
- Slideshow com 3 imagens relacionadas ao tema
- Formulário com validação de campos obrigatórios
- Quiz dinâmico com 10 perguntas sobre o tema
- Exibição do resultado final do quiz
- 3 opções de troca de cor (tema) de fundo da página
- Design responsivo e acessível
- Separação dos arquivos em CSS e JS modulares

### O que a IA retornou
A IA gerou:
- `index.html`: estrutura HTML completa com todas as seções (nav, hero, slideshow, facts, quiz, formulário, footer)
- `css/style.css`: sistema de design com 3 temas CSS via variáveis customizadas (Cosmos, Nebulosa, Aurora)
- `js/stars.js`: geração dinâmica de estrelas animadas no hero
- `js/slideshow.js`: slideshow com 3 slides, auto-avanço, navegação por botões, teclado e touch
- `js/quiz.js`: quiz dinâmico com 10 perguntas, feedback por questão, placar e tela de resultado
- `js/form.js`: validação de formulário com mensagens de erro por campo e simulação de envio
- `js/theme.js`: troca de tema com persistência via localStorage
- `equipe.txt`: template do arquivo de equipe
- `AI.md`: este arquivo de registro

### O que foi alterado ou rejeitado e o motivo
- **Mantido na íntegra**: toda a estrutura HTML, CSS e lógica JavaScript, pois atendeu completamente os requisitos
- **Ajuste necessário**: preencher `equipe.txt` com os dados reais dos integrantes (nome, RM) e o link real do repositório GitHub
- **Ajuste necessário**: substituir o link do repositório no `equipe.txt` pelo link real após criar a organização e o repositório no GitHub
- **Consideração**: as imagens dos slides são geradas via CSS (gradientes e partículas) pois não há banco de imagens disponível; se desejado, podem ser substituídas por imagens reais colocadas na pasta `images/`




