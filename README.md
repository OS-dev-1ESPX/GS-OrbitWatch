# 🛰️ OrbitWatch — Monitoramento Global via Satélite

> Sistema inteligente de monitoramento ambiental que integra dados da NASA e da rede Starlink para acompanhar o aquecimento global e prever desastres naturais em tempo real.

---

## 📌 Sobre o Projeto

O **OrbitWatch** é um projeto acadêmico desenvolvido para a disciplina de **Desenvolvimento Web** da **FIAP**, como parte do trabalho de Global Solution.

A solução consiste em uma landing page que apresenta um sistema de monitoramento climático global baseado em duas fontes de dados integradas:

- **Rede Starlink (SpaceX)** — utilizada como infraestrutura distribuída de coleta de dados climáticos, captando variações de temperatura em diferentes regiões do planeta e identificando anomalias térmicas que possam indicar riscos ambientais.
- **API EONET da NASA** *(Earth Observatory Natural Event Tracker)* — registra eventos naturais extremos em tempo real, como tufões, incêndios florestais, vulcões e tempestades, permitindo acompanhar desastres ativos e recentes em escala global.

O diferencial da solução está na **integração entre as duas frentes**: o aquecimento global é tratado como a **causa** e os desastres naturais como a **consequência**. Ao cruzar dados de temperatura com eventos registrados pelos satélites da NASA, o sistema deixa de ser apenas reativo e passa a ter **capacidade preditiva**, antecipando regiões com maior risco antes que o desastre aconteça.

---

## 🧱 Estrutura do Projeto

```
GS-OrbitWatch-main/
├── css/
│   └── style.css     # Estilos (variáveis CSS, layout, temas de cor)
├── js/
│   └── script.js     # Lógica do site (slideshow, quiz, formulário, temas)
├── images/
│   └── globe-heat.svg
├── AI.md             # Registro de uso de IA no projeto
└── README.md
```

---

## ✨ Funcionalidades

### 🖼️ Slideshow
Apresenta 3 slides temáticos sobre os fenômenos monitorados pelo sistema:
- Monitoramento Oceânico
- Incêndios Florestais
- Atividade Vulcânica

Navegação por botões e dots, com auto-avanço a cada 5 segundos.

### 📋 Formulário de Alertas
Cadastro para recebimento de alertas da OrbitWatch, com campos de nome, e-mail, região e mensagem. Inclui **validação** que impede o envio com campos vazios ou e-mail inválido.

### 🧠 Quiz Interativo
10 perguntas sobre aquecimento global, satélites e a API EONET da NASA, com:
- Feedback imediato por questão
- Barra de progresso
- Tela de resultado final

### 🎨 Seletor de Temas
3 temas de cor disponíveis (azul, verde e roxo), aplicados via classes CSS com variáveis customizadas. O seletor fica fixo na tela durante a navegação.

---

## 🗂️ Seções da Landing Page

| Seção | Descrição |
|---|---|
| Hero | Apresentação do sistema com dados de impacto em números |
| Problema | Contextualização da crise climática |
| Tecnologia | Explicação sobre Starlink e API EONET |
| Objetivos | Metas do OrbitWatch |
| Público | Quem se beneficia da solução |
| Benefícios | Impacto real no mundo |
| Aplicação | Como o sistema funciona na prática |
| Slideshow | Galeria de fenômenos monitorados |
| Contato | Formulário de cadastro de alertas |
| Quiz | Teste de conhecimento interativo |

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** — estrutura semântica da página
- **CSS3** — variáveis customizadas, Flexbox, transições e efeitos hover
- **JavaScript (Vanilla)** — slideshow, validação de formulário, quiz dinâmico e troca de temas, sem uso de frameworks ou bibliotecas externas

---

## 🚀 Como Executar

1. Clone ou baixe este repositório
2. Abra o arquivo `index.html` diretamente no navegador

Não é necessária nenhuma instalação ou servidor local.

---

## 🤖 Uso de Inteligência Artificial

O uso de IA no desenvolvimento deste projeto está documentado no arquivo [`AI.md`](./AI.md), com registro detalhado de cada interação: o que foi solicitado, o que foi retornado e o que foi aceito ou rejeitado pelo grupo.

---

## 📚 Contexto Acadêmico

| Campo | Informação |
|---|---|
| Instituição | FIAP |
| Disciplina | Desenvolvimento Web |
| Projeto | Global Solution |
| Tema | Mudanças Climáticas e Desastres Naturais |

---

## 👥 Integrantes

| Nome | RM |
|---|---|
| Vinicius Di Tulio Gomes Silva | RM 573019 |
| Lucas Zarantonelli Lourenço | RM 569164 |
| Felipe Romano de Paula Souza | RM 571653 |
| Nicole Barbosa Oliveira de Lima | RM 569505 |
| Ryan Romagnoli Santos | RM 568845 |

---

## 📄 Licença

Este projeto está licenciado sob os termos descritos no arquivo [LICENSE](./LICENSE).
