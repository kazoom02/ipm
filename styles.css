/* ============================================================
   VagaCerta — Guia de Estudo (IPM 3.1 e 3.2)
   Dados + interatividade
   ============================================================ */

/* ---------- DADOS: Princípios, Regras e Heurísticas (ponto 3.2) ---------- */

const CATEGORIAS = {
  norman: {
    nome: "Princípios de Norman",
    sigla: "N",
    intro:
      "Princípios de design centrados na forma como as pessoas percebem e usam objetos e interfaces.",
    itens: [
      {
        cod: "N1",
        titulo: "Visibilidade",
        def: "As funções e o estado do sistema devem estar visíveis, para que o utilizador saiba o que pode fazer e o que está a acontecer. Quanto mais visível, mais fácil é saber o próximo passo.",
        ecras: ["Login","Registo","Página Principal","Informação do Parque","Reservar Lugar","Lugar Reservado","Iniciar Sessão","Sessão em Andamento","Sessão Concluída - Sucesso","Sessão Concluída - Cancelada","Histórico","Perfil","Editar Perfil","Definições","Carteira","Aparência","Privacidade","Sobre nós"]
      },
      {
        cod: "N2",
        titulo: "Feedback",
        def: "O sistema deve devolver informação clara e imediata sobre o resultado de cada ação, confirmando que foi reconhecida e concluída.",
        ecras: ["Lugar Reservado","Iniciar Sessão","Página Principal com Sessão Ativa","Sessão em Andamento","Sessão Concluída - Sucesso","Sessão Concluída - Cancelada","Editar Perfil","Privacidade","Aparência","Carteira"]
      },
      {
        cod: "N3",
        titulo: "Restrições (constraints)",
        def: "Limitar as ações possíveis num dado momento ajuda a evitar erros e a guiar o utilizador, através de campos obrigatórios, opções de escolha única, formatos validados, etc.",
        ecras: ["Login","Registo","Reservar Lugar","Editar Perfil","Privacidade","Carteira"]
      },
      {
        cod: "N4",
        titulo: "Coerência",
        def: "Elementos semelhantes devem parecer e comportar-se de forma semelhante em toda a aplicação, reduzindo o esforço de aprendizagem.",
        ecras: ["Todos os ecrãs"]
      },
      {
        cod: "N5",
        titulo: "Mapeamento",
        def: "A relação entre os controlos e os seus efeitos deve ser natural e previsível — por exemplo, os marcadores no mapa correspondem a locais reais de estacionamento.",
        ecras: ["Página Principal","Página Principal com Sessão Ativa","Informação do Parque","Menu","Histórico"]
      },
      {
        cod: "N6",
        titulo: "Affordance / Signifiers",
        def: "A aparência de um elemento deve sugerir como se usa. Os signifiers são as pistas visuais que indicam onde e como agir — um botão deve parecer clicável.",
        ecras: ["Login","Registo","Informação do Parque","Reservar Lugar","Sessão em Andamento","Perfil","Editar Perfil","Definições","Carteira","Aparência","Privacidade"]
      }
    ]
  },

  shneiderman: {
    nome: "Regras de Ouro de Shneiderman",
    sigla: "S",
    intro:
      "As oito regras de ouro para o desenho de interfaces interativas.",
    itens: [
      {
        cod: "S1",
        titulo: "Manter a coerência",
        def: "Manter sequências de ações, terminologia, cores e layout consistentes em situações semelhantes.",
        ecras: ["Todos os ecrãs","Login","Registo","Perfil","Editar Perfil","Definições","Carteira","Aparência","Privacidade"]
      },
      {
        cod: "S2",
        titulo: "Oferecer usabilidade universal",
        def: "Responder a diferentes perfis de utilizador, do principiante ao experiente, com atalhos, ajudas e adaptações.",
        ecras: ["Login","Registo","Página Principal","Definições","Aparência","Carteira","Privacidade"]
      },
      {
        cod: "S3",
        titulo: "Fornecer retorno informativo",
        def: "Dar resposta a cada ação do utilizador, proporcional à importância dessa ação.",
        ecras: ["Lugar Reservado","Iniciar Sessão","Página Principal com Sessão Ativa","Sessão em Andamento","Sessão Concluída - Sucesso","Sessão Concluída - Cancelada"]
      },
      {
        cod: "S4",
        titulo: "Indicar o fecho de sequências",
        def: "Organizar as ações em grupos com início, meio e fim, dando ao utilizador uma sensação de conclusão.",
        ecras: ["Lugar Reservado","Sessão Concluída - Sucesso","Sessão Concluída - Cancelada"]
      },
      {
        cod: "S5",
        titulo: "Prevenir erros",
        def: "Conceber o sistema para que o utilizador cometa o menor número possível de erros graves e os possa corrigir facilmente.",
        ecras: ["Login","Registo","Reservar Lugar","Editar Perfil","Privacidade","Carteira"]
      },
      {
        cod: "S6",
        titulo: "Permitir reversão de ações",
        def: "Tornar as ações reversíveis reduz a ansiedade e incentiva a exploração — desfazer, cancelar, voltar atrás.",
        ecras: ["Sessão em Andamento","Sessão Concluída - Cancelada","Perfil","Editar Perfil","Definições","Aparência"]
      },
      {
        cod: "S7",
        titulo: "Controlo e iniciativa ao utilizador",
        def: "O utilizador deve sentir que controla o sistema e que este responde às suas ações, e não o contrário.",
        ecras: ["Menu","Definições","Perfil","Editar Perfil","Carteira","Aparência","Privacidade","Sessão em Andamento"]
      },
      {
        cod: "S8",
        titulo: "Reduzir carga da memória",
        def: "Manter os ecrãs simples e mostrar a informação necessária, para o utilizador não ter de memorizar dados entre ecrãs (memória de curta duração).",
        ecras: ["Menu","Histórico","Informação do Parque","Página Principal","Definições","Carteira"]
      }
    ]
  },

  nielsen: {
    nome: "Heurísticas de Nielsen",
    sigla: "H",
    intro:
      "As dez heurísticas de usabilidade de Jakob Nielsen.",
    itens: [
      {
        cod: "H2.1",
        titulo: "Visibilidade do estado do sistema",
        def: "O sistema deve manter o utilizador informado sobre o que está a acontecer, com feedback adequado e em tempo útil.",
        ecras: ["Lugar Reservado","Iniciar Sessão","Página Principal com Sessão Ativa","Sessão em Andamento","Sessão Concluída - Sucesso","Sessão Concluída - Cancelada"]
      },
      {
        cod: "H2.2",
        titulo: "Correspondência com o mundo real",
        def: "Usar linguagem, conceitos e convenções familiares ao utilizador, em vez de termos técnicos.",
        ecras: ["Página Principal","Informação do Parque","Reservar Lugar","Histórico","Carteira","Definições","Perfil"]
      },
      {
        cod: "H2.3",
        titulo: "Controlo e liberdade do utilizador",
        def: "Disponibilizar saídas de emergência claras — desfazer e refazer — quando o utilizador erra ou muda de ideias.",
        ecras: ["Menu","Definições","Perfil","Editar Perfil","Aparência","Privacidade","Sessão em Andamento"]
      },
      {
        cod: "H2.4",
        titulo: "Consistência e adesão a normas",
        def: "Seguir as convenções da plataforma e manter coerência interna, para que situações iguais signifiquem o mesmo.",
        ecras: ["Todos os ecrãs"]
      },
      {
        cod: "H2.5",
        titulo: "Prevenção de erros",
        def: "Melhor do que boas mensagens de erro é um design que evita à partida que o erro aconteça.",
        ecras: ["Login","Registo","Reservar Lugar","Editar Perfil","Privacidade","Carteira"]
      },
      {
        cod: "H2.6",
        titulo: "Reconhecimento em vez de memorização",
        def: "Tornar elementos, ações e opções visíveis, para o utilizador reconhecer em vez de ter de recordar.",
        ecras: ["Menu","Histórico","Definições","Carteira","Informação do Parque"]
      },
      {
        cod: "H2.7",
        titulo: "Flexibilidade e eficiência",
        def: "Oferecer atalhos e personalização que acelerem a interação dos utilizadores experientes sem prejudicar os principiantes.",
        ecras: ["Histórico","Sessão Concluída - Sucesso","Sessão Concluída - Cancelada","Carteira","Perfil"]
      },
      {
        cod: "H2.8",
        titulo: "Design estético e minimalista",
        def: "Mostrar apenas a informação relevante; cada elemento extra compete com o essencial.",
        ecras: ["Login","Registo","Página Principal","Informação do Parque","Reservar Lugar","Perfil","Definições","Sobre nós"]
      },
      {
        cod: "H2.9",
        titulo: "Reconhecer e recuperar de erros",
        def: "Mensagens de erro em linguagem simples, que indiquem o problema e sugiram uma solução.",
        ecras: ["Login","Registo","Editar Perfil","Privacidade","Carteira","Sessão em Andamento"]
      },
      {
        cod: "H2.10",
        titulo: "Ajuda e documentação",
        def: "Disponibilizar ajuda fácil de procurar, focada na tarefa do utilizador e com passos concretos.",
        ecras: ["Definições","Sobre nós","Privacidade","Termos e Condições"]
      }
    ]
  },

  visual: {
    nome: "Design Visual",
    sigla: "V",
    intro:
      "Princípios de desenho de ecrãs aplicados ao protótipo (proximidade, alinhamento, etc.).",
    itens: [
      {
        cod: "V1",
        titulo: "Proximidade",
        def: "Agrupar elementos relacionados aproximando-os, criando relações visuais claras.",
        ecras: ["Login","Registo","Reservar Lugar","Perfil","Editar Perfil","Definições","Carteira","Privacidade","Sobre nós"]
      },
      {
        cod: "V2",
        titulo: "Alinhamento",
        def: "Alinhar os elementos para criar ordem, ligação visual e uma leitura mais limpa.",
        ecras: ["Login","Registo","Informação do Parque","Reservar Lugar","Histórico","Sessão Concluída - Sucesso","Sessão em Andamento","Perfil","Editar Perfil","Definições","Carteira","Aparência","Privacidade"]
      },
      {
        cod: "V3",
        titulo: "Repetição",
        def: "Repetir elementos visuais (cores, tipos, botões, ícones, cabeçalhos e rodapés) para reforçar a unidade e a consistência.",
        ecras: ["Todos os ecrãs"]
      },
      {
        cod: "V4",
        titulo: "Contraste",
        def: "Diferenciar elementos com peso, cor ou tamanho para criar hierarquia e guiar o olhar.",
        ecras: ["Login","Registo","Informação do Parque","Reservar Lugar","Sessão em Andamento","Sessão Concluída - Sucesso","Sessão Concluída - Cancelada","Perfil","Editar Perfil","Carteira","Aparência"]
      },
      {
        cod: "V5",
        titulo: "Posicionamento — Regra dos Terços",
        def: "Dividir o ecrã em três zonas (topo, centro e fundo) e posicionar o conteúdo de forma equilibrada e legível. Foi a referência mais usada no protótipo.",
        ecras: ["Login","Registo","Página Principal","Página Principal com Sessão Ativa","Informação do Parque","Reservar Lugar","Lugar Reservado","Iniciar Sessão","Perfil","Editar Perfil","Definições","Carteira","Aparência","Privacidade","Sobre nós"]
      },
      {
        cod: "V6",
        titulo: "Posicionamento — Proporção Áurea",
        def: "Equilibrar uma área dominante para a tarefa principal com uma área secundária para ações ou informação complementar, sem aplicação matemática rigorosa da razão 1,618 (aproximação).",
        ecras: ["Página Principal","Página Principal com Sessão Ativa","Informação do Parque","Histórico"]
      },
      {
        cod: "V7",
        titulo: "Tipografia",
        def: "Usar títulos, subtítulos, rótulos, botões e texto com hierarquia clara para organizar a leitura.",
        ecras: ["Todos os ecrãs"]
      },
      {
        cod: "V8",
        titulo: "Cor",
        def: "Usar a cor de forma funcional, para comunicar estados (sucesso, alerta, cancelamento) e orientar a atenção.",
        ecras: ["Sessão Concluída - Sucesso","Sessão em Andamento","Sessão Concluída - Cancelada","Aparência","Carteira","Definições"]
      }
    ]
  }
};

/* ---------- RENDER: Quadro de princípios (com filtro por categoria) ---------- */

function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function renderBoard(categoriaKey) {
  const board = document.getElementById("board");
  if (!board) return;

  const chaves =
    categoriaKey === "all" ? Object.keys(CATEGORIAS) : [categoriaKey];

  let html = "";
  chaves.forEach((k) => {
    const cat = CATEGORIAS[k];
    cat.itens.forEach((item) => {
      const tags = item.ecras
        .map((e) => `<span class="ecra-tag">${escapeHtml(e)}</span>`)
        .join("");
      html += `
        <article class="bay" data-cat="${k}">
          <header class="bay__head">
            <span class="bay__code cat-${k}">${escapeHtml(item.cod)}</span>
            <span class="bay__cat">${escapeHtml(cat.nome)}</span>
          </header>
          <h4 class="bay__title">${escapeHtml(item.titulo)}</h4>
          <p class="bay__def">${escapeHtml(item.def)}</p>
          <div class="bay__ecras">
            <span class="bay__ecras-label">Ecrãs onde se aplica</span>
            <div class="bay__ecras-list">${tags}</div>
          </div>
        </article>`;
    });
  });

  board.innerHTML = html;
  // contagem
  const count = board.querySelectorAll(".bay").length;
  const counter = document.getElementById("board-count");
  if (counter) counter.textContent = count + (count === 1 ? " item" : " itens");

  // reaplicar observador de revelação
  revealObserve(board.querySelectorAll(".bay"));
}

function setupBoardFilters() {
  const tabs = document.querySelectorAll(".filter-tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("is-active"));
      tab.classList.add("is-active");
      renderBoard(tab.dataset.cat);
    });
  });
  renderBoard("all");
}

/* ---------- FLASHCARDS ---------- */

let flashDeck = [];
let flashIndex = 0;

function buildDeck() {
  flashDeck = [];
  Object.keys(CATEGORIAS).forEach((k) => {
    CATEGORIAS[k].itens.forEach((item) => {
      flashDeck.push({
        cat: CATEGORIAS[k].nome,
        catKey: k,
        cod: item.cod,
        titulo: item.titulo,
        def: item.def
      });
    });
  });
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function renderFlashcard() {
  const card = document.getElementById("flashcard");
  if (!card || flashDeck.length === 0) return;
  const item = flashDeck[flashIndex];
  card.classList.remove("is-flipped");
  card.querySelector(".flash__cat").textContent = item.cat;
  card.querySelector(".flash__code").textContent = item.cod;
  card.querySelector(".flash__code").className = "flash__code cat-" + item.catKey;
  card.querySelector(".flash__front-title").textContent = item.titulo;
  card.querySelector(".flash__back-def").textContent = item.def;
  const progress = document.getElementById("flash-progress");
  if (progress)
    progress.textContent = flashIndex + 1 + " / " + flashDeck.length;
}

function setupFlashcards() {
  buildDeck();
  const card = document.getElementById("flashcard");
  if (!card) return;
  renderFlashcard();

  card.addEventListener("click", () => card.classList.toggle("is-flipped"));

  document.getElementById("flash-next").addEventListener("click", (e) => {
    e.stopPropagation();
    flashIndex = (flashIndex + 1) % flashDeck.length;
    renderFlashcard();
  });
  document.getElementById("flash-prev").addEventListener("click", (e) => {
    e.stopPropagation();
    flashIndex = (flashIndex - 1 + flashDeck.length) % flashDeck.length;
    renderFlashcard();
  });
  document.getElementById("flash-shuffle").addEventListener("click", (e) => {
    e.stopPropagation();
    shuffle(flashDeck);
    flashIndex = 0;
    renderFlashcard();
  });
}

/* ---------- QUIZ ---------- */

let quizPool = [];
let quizCurrent = null;
let quizScore = 0;
let quizAsked = 0;
const QUIZ_TOTAL = 8;

function buildQuizPool() {
  quizPool = [];
  Object.keys(CATEGORIAS).forEach((k) => {
    CATEGORIAS[k].itens.forEach((item) => {
      quizPool.push({
        cat: CATEGORIAS[k].nome,
        titulo: item.titulo,
        def: item.def
      });
    });
  });
}

function newQuizQuestion() {
  const correct = quizPool[Math.floor(Math.random() * quizPool.length)];
  // três distratores diferentes do correto
  const opcoes = [correct];
  const usados = new Set([correct.titulo]);
  while (opcoes.length < 4) {
    const cand = quizPool[Math.floor(Math.random() * quizPool.length)];
    if (!usados.has(cand.titulo)) {
      usados.add(cand.titulo);
      opcoes.push(cand);
    }
  }
  shuffle(opcoes);
  quizCurrent = { correct, opcoes };

  const q = document.getElementById("quiz-question");
  q.textContent = "“" + correct.def + "”";
  document.getElementById("quiz-cat").textContent = correct.cat;

  const optsEl = document.getElementById("quiz-options");
  optsEl.innerHTML = "";
  opcoes.forEach((op) => {
    const btn = document.createElement("button");
    btn.className = "quiz-option";
    btn.type = "button";
    btn.textContent = op.titulo;
    btn.addEventListener("click", () => answerQuiz(btn, op));
    optsEl.appendChild(btn);
  });

  document.getElementById("quiz-feedback").textContent = "";
  document.getElementById("quiz-feedback").className = "quiz-feedback";
  document.getElementById("quiz-next").hidden = true;
}

function answerQuiz(btn, chosen) {
  const buttons = document.querySelectorAll(".quiz-option");
  buttons.forEach((b) => (b.disabled = true));
  const fb = document.getElementById("quiz-feedback");
  quizAsked++;

  if (chosen.titulo === quizCurrent.correct.titulo) {
    btn.classList.add("is-correct");
    fb.textContent = "Certo!";
    fb.classList.add("ok");
    quizScore++;
  } else {
    btn.classList.add("is-wrong");
    fb.textContent = "A resposta certa era: " + quizCurrent.correct.titulo;
    fb.classList.add("no");
    buttons.forEach((b) => {
      if (b.textContent === quizCurrent.correct.titulo)
        b.classList.add("is-correct");
    });
  }

  document.getElementById("quiz-score").textContent =
    quizScore + " / " + quizAsked;

  if (quizAsked >= QUIZ_TOTAL) {
    document.getElementById("quiz-next").textContent = "Ver resultado";
  }
  document.getElementById("quiz-next").hidden = false;
}

function setupQuiz() {
  buildQuizPool();
  const startBtn = document.getElementById("quiz-start");
  if (!startBtn) return;

  startBtn.addEventListener("click", () => {
    quizScore = 0;
    quizAsked = 0;
    document.getElementById("quiz-score").textContent = "0 / 0";
    document.getElementById("quiz-intro").hidden = true;
    document.getElementById("quiz-result").hidden = true;
    document.getElementById("quiz-play").hidden = false;
    newQuizQuestion();
  });

  document.getElementById("quiz-next").addEventListener("click", () => {
    if (quizAsked >= QUIZ_TOTAL) {
      // mostrar resultado
      document.getElementById("quiz-play").hidden = true;
      document.getElementById("quiz-result").hidden = false;
      const pct = Math.round((quizScore / QUIZ_TOTAL) * 100);
      document.getElementById("quiz-result-score").textContent =
        quizScore + " / " + QUIZ_TOTAL;
      let msg;
      if (pct >= 87) msg = "Excelente — domina a matéria.";
      else if (pct >= 62) msg = "Bom — falta afinar alguns conceitos.";
      else if (pct >= 37) msg = "Razoável — vale a pena rever as fichas.";
      else msg = "A precisar de revisão. Volta aos cartões de estudo.";
      document.getElementById("quiz-result-msg").textContent = msg;
    } else {
      newQuizQuestion();
    }
  });

  document.getElementById("quiz-restart").addEventListener("click", () => {
    document.getElementById("quiz-result").hidden = true;
    document.getElementById("quiz-intro").hidden = false;
  });
}

/* ---------- NAVEGAÇÃO: secção ativa + menu mobile ---------- */

function setupNav() {
  const links = document.querySelectorAll(".nav-link");
  const sections = Array.from(links)
    .map((l) => document.querySelector(l.getAttribute("href")))
    .filter(Boolean);

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = "#" + entry.target.id;
          links.forEach((l) =>
            l.classList.toggle("is-here", l.getAttribute("href") === id)
          );
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );
  sections.forEach((s) => obs.observe(s));

  // menu mobile
  const toggle = document.getElementById("nav-toggle");
  const sidebar = document.getElementById("sidebar");
  if (toggle && sidebar) {
    toggle.addEventListener("click", () => {
      sidebar.classList.toggle("is-open");
      toggle.classList.toggle("is-open");
    });
    sidebar.querySelectorAll(".nav-link").forEach((l) =>
      l.addEventListener("click", () => {
        sidebar.classList.remove("is-open");
        toggle.classList.remove("is-open");
      })
    );
  }

  // barra de progresso de leitura
  const bar = document.getElementById("progress-bar");
  if (bar) {
    window.addEventListener("scroll", () => {
      const h = document.documentElement;
      const scrolled =
        (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      bar.style.width = scrolled + "%";
    });
  }
}

/* ---------- REVELAÇÃO AO SCROLL ---------- */

let revealObserver = null;
function revealObserve(nodes) {
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (prefersReduced) {
    nodes.forEach((n) => n.classList.add("is-in"));
    return;
  }
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            revealObserver.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );
  }
  nodes.forEach((n) => revealObserver.observe(n));
}

/* ---------- ARRANQUE ---------- */

document.addEventListener("DOMContentLoaded", () => {
  setupNav();
  setupBoardFilters();
  setupFlashcards();
  setupQuiz();
  revealObserve(document.querySelectorAll(".reveal"));
  document.getElementById("year").textContent = new Date().getFullYear();
});
