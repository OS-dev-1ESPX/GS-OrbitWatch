/* ---- TEMA DE CORES ---- */
function setTema(classe) {
    document.body.className = classe;
    document.querySelectorAll('.tema-barra button').forEach(function(btn) {
        btn.classList.remove('ativo');
    });
    const map = { '': 't-azul', 'tema-verde': 't-verde', 'tema-roxo': 't-roxo' };
    document.querySelector('.' + map[classe]).classList.add('ativo');
}

/* ---- SLIDESHOW ---- */
let slideAtual = 0;
const slides = document.querySelectorAll('.slide');
const dots   = document.querySelectorAll('.dot');

function irParaSlide(idx) {
    slides[slideAtual].classList.remove('ativo');
    dots[slideAtual].classList.remove('ativo');
    slideAtual = (idx + slides.length) % slides.length;
    slides[slideAtual].classList.add('ativo');
    dots[slideAtual].classList.add('ativo');
}

document.getElementById('slide-prev').addEventListener('click', function() { irParaSlide(slideAtual - 1); });
document.getElementById('slide-next').addEventListener('click', function() { irParaSlide(slideAtual + 1); });
dots.forEach(function(dot) {
    dot.addEventListener('click', function() { irParaSlide(parseInt(dot.dataset.idx)); });
});

setInterval(function() { irParaSlide(slideAtual + 1); }, 5000);

/* ---- FORMULÁRIO ---- */
function enviarFormulario() {
    let valido = true;

    const nome   = document.getElementById('nome');
    const email  = document.getElementById('email');
    const regiao = document.getElementById('regiao');

    [nome, email, regiao].forEach(function(campo) {
        campo.classList.remove('erro');
    });
    document.querySelectorAll('.msg-erro').forEach(function(el) {
        el.classList.remove('visivel');
    });

    if (!nome.value.trim()) {
        nome.classList.add('erro');
        document.getElementById('erro-nome').classList.add('visivel');
        valido = false;
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !regexEmail.test(email.value.trim())) {
        email.classList.add('erro');
        document.getElementById('erro-email').classList.add('visivel');
        valido = false;
    }

    if (!regiao.value) {
        regiao.classList.add('erro');
        document.getElementById('erro-regiao').classList.add('visivel');
        valido = false;
    }

    if (valido) {
        document.getElementById('form-alerta').style.display = 'none';
        document.getElementById('form-sucesso').classList.add('visivel');
    }
}

/* ---- QUIZ ---- */
const perguntas = [
    {
        pergunta: "Qual agência da NASA monitora eventos naturais em tempo real através da API EONET?",
        opcoes: ["Earth Observatory Natural Event Tracker", "National Oceanic Atmospheric Admin", "Jet Propulsion Laboratory", "Goddard Space Flight Center"],
        correta: 0,
        explicacao: "EONET significa Earth Observatory Natural Event Tracker e é mantido pela NASA para rastrear eventos naturais globais."
    },
    {
        pergunta: "Qual gás é o principal responsável pelo efeito estufa de origem humana?",
        opcoes: ["Oxigênio (O₂)", "Dióxido de Carbono (CO₂)", "Nitrogênio (N₂)", "Argônio (Ar)"],
        correta: 1,
        explicacao: "O CO₂ emitido pela queima de combustíveis fósseis é o principal gás do efeito estufa de origem antrópica."
    },
    {
        pergunta: "O que significa LEO no contexto de satélites como os da Starlink?",
        opcoes: ["Long Earth Orbit", "Low Energy Operation", "Low Earth Orbit", "Lunar Escape Orbit"],
        correta: 2,
        explicacao: "LEO (Low Earth Orbit) é a órbita baixa terrestre, onde os satélites Starlink operam entre 340 e 550 km de altitude."
    },
    {
        pergunta: "Qual fenômeno climático está associado ao aquecimento incomum das águas do Pacífico equatorial?",
        opcoes: ["La Niña", "El Niño", "Monção", "Frente Polar"],
        correta: 1,
        explicacao: "El Niño é o aquecimento anormal das águas superficiais do Pacífico equatorial, afetando o clima global."
    },
    {
        pergunta: "Em que tipo de órbita os satélites de observação terrestre geralmente operam para cobrir toda a superfície do planeta?",
        opcoes: ["Órbita geoestacionária", "Órbita polar heliosíncrona", "Órbita de Molniya", "Órbita de transferência de Hohmann"],
        correta: 1,
        explicacao: "A órbita polar heliosíncrona permite que o satélite passe por todas as latitudes, garantindo cobertura global."
    },
    {
        pergunta: "Qual é o principal objetivo do acordo de Paris (2015) em relação ao clima?",
        opcoes: ["Eliminar todo uso de petróleo até 2030", "Limitar o aumento da temperatura global a 1,5–2°C", "Criar um exército climático global", "Proibir desmatamento em 100 países"],
        correta: 1,
        explicacao: "O Acordo de Paris estabelece metas para limitar o aquecimento global a bem abaixo de 2°C, preferencialmente 1,5°C, em relação aos níveis pré-industriais."
    },
    {
        pergunta: "Qual tecnologia o OrbitWatch utiliza para detectar eventos naturais em tempo real?",
        opcoes: ["Radar meteorológico terrestre", "API EONET da NASA", "Redes de sensores oceânicos", "Imagens de drones autônomos"],
        correta: 1,
        explicacao: "O OrbitWatch consome a API EONET da NASA para obter dados de eventos naturais ativos em todo o planeta."
    },
    {
        pergunta: "O desmatamento contribui para o aquecimento global porque:",
        opcoes: ["Aumenta a reflexão solar (albedo)", "Reduz a absorção de CO₂ e libera carbono armazenado", "Cria mais nuvens de tempestade", "Aumenta a umidade atmosférica globalmente"],
        correta: 1,
        explicacao: "Florestas absorvem CO₂. Ao serem derrubadas, liberam o carbono armazenado e reduzem a capacidade de absorção futura."
    },
    {
        pergunta: "Qual das seguintes categorias NÃO é monitorada pelo EONET da NASA?",
        opcoes: ["Incêndios florestais", "Terremotos", "Tempestades tropicais", "Poluição sonora urbana"],
        correta: 3,
        explicacao: "O EONET monitora eventos naturais geofísicos e meteorológicos. Poluição sonora urbana não é um evento natural rastreável por satélite."
    },
    {
        pergunta: "Qual é a altitude aproximada dos satélites Starlink em órbita baixa?",
        opcoes: ["35.786 km (geoestacionária)", "550 km (LEO)", "2.000 km (MEO)", "200.000 km (órbita lunar)"],
        correta: 1,
        explicacao: "Os satélites Starlink operam principalmente a cerca de 550 km de altitude na órbita baixa terrestre (LEO)."
    }
];

let quizAtual = 0;
let pontuacao = 0;
let respondido = false;

function renderPergunta() {
    respondido = false;
    const p = perguntas[quizAtual];
    const progresso = (quizAtual / perguntas.length) * 100;
    document.getElementById('quiz-progress').style.width = progresso + '%';

    let html = '<div class="quiz-pergunta">';
    html += '<div class="quiz-numero">Pergunta ' + (quizAtual + 1) + ' de ' + perguntas.length + '</div>';
    html += '<h3>' + p.pergunta + '</h3>';
    html += '<div class="quiz-opcoes">';
    p.opcoes.forEach(function(opcao, i) {
        html += '<button class="quiz-opcao" onclick="responder(' + i + ')">' + opcao + '</button>';
    });
    html += '</div>';
    html += '<div class="quiz-feedback" id="quiz-feedback"></div>';
    html += '</div>';
    html += '<div class="quiz-nav"><button class="btn-proximo" id="btn-proximo" onclick="proximaPergunta()">';
    html += quizAtual < perguntas.length - 1 ? 'Próxima →' : 'Ver Resultado';
    html += '</button></div>';

    document.getElementById('quiz-pergunta-box').innerHTML = html;
}

function responder(idx) {
    if (respondido) return;
    respondido = true;

    const p = perguntas[quizAtual];
    const botoes = document.querySelectorAll('.quiz-opcao');
    const feedback = document.getElementById('quiz-feedback');

    botoes.forEach(function(btn) { btn.disabled = true; });

    if (idx === p.correta) {
        pontuacao++;
        botoes[idx].classList.add('correta');
        feedback.className = 'quiz-feedback visivel ok';
        feedback.textContent = '✅ Correto! ' + p.explicacao;
    } else {
        botoes[idx].classList.add('errada');
        botoes[p.correta].classList.add('correta');
        feedback.className = 'quiz-feedback visivel nao';
        feedback.textContent = '❌ Incorreto. ' + p.explicacao;
    }

    document.getElementById('btn-proximo').classList.add('visivel');
}

function proximaPergunta() {
    quizAtual++;
    if (quizAtual < perguntas.length) {
        renderPergunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    document.getElementById('quiz-progress').style.width = '100%';
    document.getElementById('quiz-area').style.display = 'none';

    const pct = Math.round((pontuacao / perguntas.length) * 100);
    let msg, emoji;
    if (pct >= 90)      { msg = "Especialista em monitoramento climático! 🚀"; emoji = "🏆"; }
    else if (pct >= 70) { msg = "Ótimo conhecimento sobre o tema!";            emoji = "🌟"; }
    else if (pct >= 50) { msg = "Bom começo! Explore mais o OrbitWatch.";      emoji = "📡"; }
    else                { msg = "Continue aprendendo sobre o clima do planeta!"; emoji = "🌍"; }

    let html = '<div class="resultado-pontos">' + emoji + ' ' + pontuacao + '</div>';
    html += '<div class="resultado-de">de ' + perguntas.length + ' perguntas certas</div>';
    html += '<div class="resultado-barra"><div class="resultado-fill" id="res-fill" style="width:0%"></div></div>';
    html += '<div class="resultado-msg">' + msg + '</div>';
    html += '<button class="btn-reiniciar" onclick="reiniciarQuiz()">↺ Tentar novamente</button>';

    const res = document.getElementById('quiz-resultado');
    res.innerHTML = html;
    res.classList.add('visivel');

    setTimeout(function() {
        document.getElementById('res-fill').style.width = pct + '%';
    }, 100);
}

function reiniciarQuiz() {
    quizAtual = 0;
    pontuacao = 0;
    document.getElementById('quiz-resultado').classList.remove('visivel');
    document.getElementById('quiz-resultado').innerHTML = '';
    document.getElementById('quiz-area').style.display = '';
    renderPergunta();
}

renderPergunta();