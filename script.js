<!DOCTYPE html>
<html lang="pt-PT">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>VagaCerta · Guia de Estudo — IPM 3.1 e 3.2</title>
<meta name="description" content="Guia de estudo dos pontos 3.1 (baixa fidelidade) e 3.2 (média fidelidade) do relatório VagaCerta, com foco nos princípios de Norman, regras de Shneiderman e heurísticas de Nielsen.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Hanken+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='7' fill='%230E5AE6'/%3E%3Ctext x='16' y='23' font-family='Arial,sans-serif' font-size='22' font-weight='700' fill='white' text-anchor='middle'%3EP%3C/text%3E%3C/svg%3E">
<link rel="stylesheet" href="styles.css">
</head>
<body>

<div id="progress-bar"></div>

<button class="nav-toggle" id="nav-toggle" aria-label="Abrir menu"><span></span></button>

<!-- ============ SIDEBAR / WAYFINDING ============ -->
<aside class="sidebar" id="sidebar">
  <div class="brand">
    <div class="brand__p">P</div>
    <div>
      <div class="brand__name">Vaga<span>Certa</span></div>
      <div class="brand__sub">Guia de estudo</div>
    </div>
  </div>
  <hr class="sidebar__rule">
  <p class="nav-eyebrow">Direções</p>
  <nav class="nav">
    <a class="nav-link" href="#inicio"><span class="nav-link__num">00</span> Início</a>
    <a class="nav-link" href="#contexto"><span class="nav-link__num">01</span> Contexto</a>
    <a class="nav-link" href="#baixa"><span class="nav-link__num">3.1</span> Baixa fidelidade</a>
    <a class="nav-link" href="#media"><span class="nav-link__num">3.2</span> Média fidelidade</a>
    <a class="nav-link" href="#principios"><span class="nav-link__num">★</span> Princípios e heurísticas</a>
    <a class="nav-link" href="#avaliacao-media"><span class="nav-link__num">3.2</span> Avaliação</a>
    <a class="nav-link" href="#estudo"><span class="nav-link__num">✎</span> Ferramentas de estudo</a>
  </nav>
  <div class="sidebar__foot">
    Equipa 5 · IPM 2025/2026<br>
    VagaCerta — gestão de estacionamento
  </div>
</aside>

<main class="main">

  <!-- ============ HERO ============ -->
  <header class="hero" id="inicio">
    <div class="hero__inner">
      <div class="hero__sign">
        <span class="hero__sign-p">P</span>
        <span class="hero__sign-text">Interação Pessoa-Máquina<br>Pontos 3.1 &amp; 3.2</span>
      </div>
      <h1>Estuda o <em>VagaCerta</em><br>sem te perderes.</h1>
      <p class="hero__lead">Guia interativo dos protótipos de <strong>baixa</strong> e <strong>média fidelidade</strong>, com destaque para os princípios de Norman, as Regras de Ouro de Shneiderman e as Heurísticas de Nielsen aplicadas a cada ecrã.</p>
      <div class="hero__route">
        <span class="hero__stop"><b>3.1</b> Baixa fidelidade</span>
        <span class="hero__arrow">→</span>
        <span class="hero__stop"><b>3.2</b> Média fidelidade</span>
        <span class="hero__arrow">→</span>
        <span class="hero__stop"><b>★</b> Princípios &amp; heurísticas</span>
        <span class="hero__arrow">→</span>
        <span class="hero__stop"><b>✎</b> Fichas &amp; quiz</span>
      </div>
    </div>
  </header>

  <!-- ============ CONTEXTO ============ -->
  <section class="section" id="contexto">
    <span class="section__tag">Enquadramento</span>
    <h2 class="section__title">O que é o VagaCerta</h2>
    <p class="section__intro reveal">O VagaCerta é um sistema de gestão inteligente de estacionamento, concebido como aplicação móvel para apoiar os condutores a procurar, reservar, gerir e pagar lugares de estacionamento. Enquadra-se na área das cidades inteligentes.</p>
    <div class="grid grid--3" style="margin-top:28px">
      <div class="card reveal">
        <h3 class="sub" style="margin-top:0;font-size:17px">Problema</h3>
        <p style="font-size:14px;color:var(--mute);margin:0">Estacionar é um problema frequente em meio urbano, onde o tempo e a rapidez de decisão são críticos.</p>
      </div>
      <div class="card reveal">
        <h3 class="sub" style="margin-top:0;font-size:17px">Âmbito</h3>
        <p style="font-size:14px;color:var(--mute);margin:0">O foco está no planeamento, desenho e avaliação da interface — não na implementação técnica nem em sensores reais.</p>
      </div>
      <div class="card reveal">
        <h3 class="sub" style="margin-top:0;font-size:17px">Objetivos</h3>
        <p style="font-size:14px;color:var(--mute);margin:0">Localizar lugares livres, pagar, guardar a posição do veículo, receber alertas e consultar histórico.</p>
      </div>
    </div>
    <div class="note reveal" style="margin-top:24px">
      <strong>Como usar este guia:</strong> percorre o ponto 3.1 e 3.2 pela ordem do relatório. A secção <strong>Princípios &amp; heurísticas</strong> é o coração do ponto 3.2 — usa as <strong>fichas e o quiz</strong> no fim para fixar a matéria.
    </div>
  </section>

  <!-- ============================================================
       3.1 — BAIXA FIDELIDADE
       ============================================================ -->
  <section class="section" id="baixa">
    <span class="section__tag">Ponto 3.1</span>
    <h2 class="section__title">Protótipos de baixa fidelidade</h2>
    <p class="section__intro reveal">Nesta fase os desenhos não são interfaces finais, mas a representação do <strong>fluxo das tarefas</strong>. O objetivo é perceber se a sequência de ecrãs permite completar as tarefas principais de forma lógica, com poucos momentos de incerteza.</p>

    <h3 class="sub"><span>Interfaces</span> <span class="sub__code">12 ecrãs em papel</span></h3>
    <div class="grid grid--2" style="margin-top:8px">
      <div class="screen reveal"><div class="screen__head"><span class="screen__no">01</span><span class="screen__name">Login</span></div><p class="screen__desc">Autenticação por email/username e palavra-passe. Inclui recuperar password, criar conta e acesso por redes externas. Primeiro passo do fluxo.</p></div>
      <div class="screen reveal"><div class="screen__head"><span class="screen__no">02</span><span class="screen__name">Registo</span></div><p class="screen__desc">Criação de conta com nome completo, username, email, telemóvel e palavra-passe. Prepara o acesso a serviços personalizados.</p></div>
      <div class="screen reveal"><div class="screen__head"><span class="screen__no">03</span><span class="screen__name">Mapa e pesquisa</span></div><p class="screen__desc">Mapa com lugares/parques marcados por pins e barra de pesquisa “Para onde?”. Inicia a tarefa de encontrar estacionamento.</p></div>
      <div class="screen reveal"><div class="screen__head"><span class="screen__no">04</span><span class="screen__name">Detalhe do parque/lugar</span></div><p class="screen__desc">Nome, tempo estimado, horário, acessibilidade, pagamento, fotografias e descrição. Apoia a decisão entre reservar ou iniciar sessão.</p></div>
      <div class="screen reveal"><div class="screen__head"><span class="screen__no">05</span><span class="screen__name">Menu lateral</span></div><p class="screen__desc">Acesso rápido a perfil, sessões, definições, histórico e logout, sem sobrecarregar o mapa principal.</p></div>
      <div class="screen reveal"><div class="screen__head"><span class="screen__no">06</span><span class="screen__name">Lista de sessões</span></div><p class="screen__desc">Sessões anteriores ou recentes com estado (pago/concluído ou cancelado/não concluído). Consulta rápida do histórico.</p></div>
      <div class="screen reveal"><div class="screen__head"><span class="screen__no">07</span><span class="screen__name">Sessão concluída</span></div><p class="screen__desc">Data de reserva e pagamento, total, carro usado e comprovativo em PDF. Para auditoria e exportação do recibo.</p></div>
      <div class="screen reveal"><div class="screen__head"><span class="screen__no">08</span><span class="screen__name">Sessão não concluída</span></div><p class="screen__desc">Sessão pendente ou não concluída, com datas de reserva, pagamento e cancelamento. Explica o estado e o motivo.</p></div>
      <div class="screen reveal"><div class="screen__head"><span class="screen__no">09</span><span class="screen__name">Pagamento com reserva</span></div><p class="screen__desc">Estacionamento selecionado, matrícula, tipo de lugar, duração e valor. Confirma os dados antes de pagar ou iniciar.</p></div>
      <div class="screen reveal"><div class="screen__head"><span class="screen__no">10</span><span class="screen__name">Pagamento sem reserva</span></div><p class="screen__desc">Inicia ou paga uma sessão normal, escolhendo tipo de lugar e duração. O botão “Pagar” é a ação principal.</p></div>
      <div class="screen reveal"><div class="screen__head"><span class="screen__no">11</span><span class="screen__name">Lugar reservado (QR Code)</span></div><p class="screen__desc">Mostra o lugar reservado e o QR Code da sessão, com dados de reserva e pagamento para validação no parque.</p></div>
      <div class="screen reveal"><div class="screen__head"><span class="screen__no">12</span><span class="screen__name">Iniciar sessão (QR Code)</span></div><p class="screen__desc">Inicia a sessão por leitura de QR Code no local. Reduz passos manuais e confirma a presença no lugar correto.</p></div>
    </div>

    <h3 class="sub"><span>Storyboard e user flow</span></h3>
    <p class="reveal">O fluxo começa no acesso (login ou registo); depois o utilizador chega ao mapa, pesquisa uma zona, analisa os parques e abre o detalhe. A partir daí pode reservar, iniciar sessão, pagar e, mais tarde, consultar o histórico e o comprovativo.</p>
    <ol class="flow reveal">
      <li><b>Login ou criação de conta</b> <span class="flow__task">T1 — Autenticar-se</span></li>
      <li><b>Mapa e pesquisa “Para onde?”</b> <span class="flow__task">T2 — Encontrar lugar</span></li>
      <li><b>Detalhe do parque/lugar</b> <span class="flow__task">T2 / T3 — Decidir e reservar</span></li>
      <li><b>Dados da sessão e pagamento</b> <span class="flow__task">T4 / T6 — Iniciar e pagar</span></li>
      <li><b>QR Code / validação no lugar</b> <span class="flow__task">T4 — Confirmar sessão</span></li>
      <li><b>Sessões e histórico</b> <span class="flow__task">T5 / T7 — Gerir, consultar e obter comprovativo</span></li>
    </ol>

    <h3 class="sub"><span>Instrumentos e software</span></h3>
    <p class="reveal">Os protótipos foram produzidos à mão, em <strong>esboços em papel</strong>, e depois digitalizados para PDF. É a opção adequada à baixa fidelidade: permite experimentar rapidamente alternativas de layout e fluxos, sem o esforço de construir interfaces visuais detalhadas.</p>

    <h3 class="sub"><span>Métodos de avaliação</span></h3>
    <div class="grid grid--2 reveal" style="margin-top:8px">
      <div class="card">
        <h3 class="sub" style="margin-top:0;font-size:17px">Avaliação heurística</h3>
        <p style="font-size:14px;color:var(--mute);margin:0">Método principal. Baseia-se em princípios gerais: visibilidade do estado do sistema, correspondência com o mundo real, consistência, prevenção de erros, reconhecimento em vez de memorização e simplicidade.</p>
      </div>
      <div class="card">
        <h3 class="sub" style="margin-top:0;font-size:17px">Percurso cognitivo</h3>
        <p style="font-size:14px;color:var(--mute);margin:0">Complementar. Verifica se um utilizador compreende os passos para pesquisar, selecionar, iniciar sessão, pagar e consultar o histórico — ou seja, se a sequência de ecrãs é lógica.</p>
      </div>
    </div>
    <p class="reveal" style="margin-top:12px">As ferramentas foram os próprios <strong>protótipos em papel</strong> e <strong>grelhas de observação</strong> para registar dificuldades, pontos de confusão e oportunidades de melhoria.</p>

    <h3 class="sub"><span>Perfil dos avaliadores</span> <span class="sub__code">5 condutores</span></h3>
    <div class="grid grid--2" style="margin-top:8px">
      <div class="evaluator reveal">
        <div class="evaluator__name">José Costa</div>
        <div class="evaluator__role">Utilizador comum / condutor regular</div>
        <p class="evaluator__desc">Conhecimentos normais de tecnologia; valoriza navegação simples e direta.</p>
        <div class="tasktags"><span class="tasktag">T1</span><span class="tasktag">T2</span><span class="tasktag">T4</span><span class="tasktag">T6</span></div>
      </div>
      <div class="evaluator reveal">
        <div class="evaluator__name">Bernardo Siqueira</div>
        <div class="evaluator__role">Maior literacia digital / condutor regular</div>
        <p class="evaluator__desc">Facilidade com apps, pagamentos digitais e mapas; espera rapidez e consistência.</p>
        <div class="tasktags"><span class="tasktag">T2</span><span class="tasktag">T3</span><span class="tasktag">T5</span><span class="tasktag">T7</span></div>
      </div>
      <div class="evaluator reveal">
        <div class="evaluator__name">Cátia Costa</div>
        <div class="evaluator__role">Condutor urbano frequente</div>
        <p class="evaluator__desc">Conduz em zonas movimentadas; procura rapidez na pesquisa, clareza nos preços e confirmação segura.</p>
        <div class="tasktags"><span class="tasktag">T2</span><span class="tasktag">T4</span><span class="tasktag">T5</span><span class="tasktag">T6</span></div>
      </div>
      <div class="evaluator reveal">
        <div class="evaluator__name">Mariana Alves</div>
        <div class="evaluator__role">Utilizadora ocasional de apps de estacionamento</div>
        <p class="evaluator__desc">Usa poucas apps deste tipo; precisa de linguagem clara, botões evidentes e orientação passo a passo.</p>
        <div class="tasktags"><span class="tasktag">T1</span><span class="tasktag">T2</span><span class="tasktag">T3</span></div>
      </div>
      <div class="evaluator reveal">
        <div class="evaluator__name">Tiago Ferreira</div>
        <div class="evaluator__role">Condutor regular com pressão temporal</div>
        <p class="evaluator__desc">Avalia se a app permite reservar, iniciar e pagar sem perder tempo.</p>
        <div class="tasktags"><span class="tasktag">T2</span><span class="tasktag">T3</span><span class="tasktag">T4</span><span class="tasktag">T6</span></div>
      </div>
    </div>

    <h3 class="sub"><span>Resultados</span></h3>
    <p class="reveal">O fluxo geral é compreensível e as funcionalidades respondem às necessidades da população-alvo. Foram, porém, identificadas limitações: alguns ecrãs com <strong>muita informação concentrada</strong>; pouca clareza na distinção entre <strong>reservar lugar</strong>, <strong>iniciar sessão</strong> e <strong>pagar</strong>; <strong>botões</strong> com pouco destaque; <strong>estado da sessão</strong> pouco evidente; e histórico que beneficiaria de filtros mais visíveis.</p>

    <h3 class="sub"><span>Valores estimados vs. obtidos</span></h3>
    <div class="table-wrap reveal">
      <table class="data">
        <thead><tr><th>Tarefa</th><th>Eficácia (est. / obt.)</th><th>Eficiência (est. / obt.)</th></tr></thead>
        <tbody>
          <tr><td>T1 — Autenticar-se</td><td class="val">90% / <span class="val--ok">100%</span></td><td class="val">85% / <span class="val--ok">100%</span></td></tr>
          <tr><td>T2 — Encontrar lugar</td><td class="val">90% / <span class="val--ok">100%</span></td><td class="val">80% / <span class="val--ok">100%</span></td></tr>
          <tr><td>T3 — Reservar lugar</td><td class="val">90% / <span class="val--ok">100%</span></td><td class="val">80% / <span class="val--ok">100%</span></td></tr>
          <tr><td>T4 — Iniciar sessão</td><td class="val">90% / <span class="val--ok">100%</span></td><td class="val">80% / <span class="val--ok">100%</span></td></tr>
          <tr><td>T5 — Gerir sessão</td><td class="val">85% / <span class="val--ok">100%</span></td><td class="val">80% / <span class="val--ok">100%</span></td></tr>
          <tr><td>T6 — Efetuar pagamento</td><td class="val">95% / <span class="val--ok">100%</span></td><td class="val">80% / <span class="val--ok">100%</span></td></tr>
          <tr><td>T7 — Consultar histórico</td><td class="val">90% / <span class="val--ok">100%</span></td><td class="val">80% / <span class="val--ok">100%</span></td></tr>
        </tbody>
      </table>
    </div>

    <h3 class="sub"><span>Medidas corretivas</span></h3>
    <div class="measures reveal">
      <div class="measure"><h4>Hierarquia visual</h4><p>Destacar as ações principais (Reservar, Iniciar sessão, Prolongar, Pagar), com botões consistentes e posicionados de forma previsível.</p></div>
      <div class="measure"><h4>Distinguir reserva de sessão ativa</h4><p>Criar ecrãs ou mensagens intermédias que expliquem o estado: lugar reservado, sessão não iniciada, sessão ativa, pagamento pendente ou concluída.</p></div>
      <div class="measure"><h4>Simplificar a pesquisa</h4><p>Tornar visíveis os filtros mais importantes — preço, distância, acessibilidade e disponibilidade — sem obrigar a navegar por demasiados menus.</p></div>
      <div class="measure"><h4>Gestão da sessão</h4><p>Mostrar com destaque o tempo restante e o custo acumulado; permitir ação rápida (prolongar) a partir do próprio alerta.</p></div>
      <div class="measure"><h4>Histórico e comprovativos</h4><p>Organizar por data, local e valor, com filtros simples e uma opção clara para abrir, guardar ou partilhar o comprovativo.</p></div>
    </div>
  </section>

  <!-- ============================================================
       3.2 — MÉDIA FIDELIDADE
       ============================================================ -->
  <section class="section" id="media">
    <span class="section__tag">Ponto 3.2</span>
    <h2 class="section__title">Protótipos de média fidelidade</h2>
    <p class="section__intro reveal">Desenvolvidos integralmente no <strong>Figma</strong>, num único ficheiro com simulação de navegação. Aqui as escolhas de design são analisadas ao nível dos <strong>ecrãs completos</strong>: organização espacial, hierarquia visual, relação entre zonas de informação e de ação, e consistência entre ecrãs.</p>

    <h3 class="sub"><span>Interfaces</span> <span class="sub__code">20 ecrãs no Figma</span></h3>
    <div class="grid grid--2" style="margin-top:8px">
      <div class="screen reveal"><div class="screen__head"><span class="screen__no">01</span><span class="screen__name">Login</span></div><p class="screen__desc">Só os campos essenciais, com a ação “Entrar” destacada. A simplicidade reduz a carga cognitiva no primeiro contacto.</p></div>
      <div class="screen reveal"><div class="screen__head"><span class="screen__no">02</span><span class="screen__name">Registo</span></div><p class="screen__desc">Campos obrigatórios assinalados e organizados verticalmente (identificação, contacto, segurança), favorecendo a leitura sequencial.</p></div>
      <div class="screen reveal"><div class="screen__head"><span class="screen__no">03</span><span class="screen__name">Página Principal</span></div><p class="screen__desc">Mapa com marcadores e barra de pesquisa no rodapé, para iniciar rapidamente a tarefa principal.</p></div>
      <div class="screen reveal"><div class="screen__head"><span class="screen__no">04</span><span class="screen__name">Informação do Parque</span></div><p class="screen__desc">Nome, tipo de local, tempo estimado, fotografias e descrição. Os botões “Iniciar” e “Reservar” dão continuidade direta.</p></div>
      <div class="screen reveal"><div class="screen__head"><span class="screen__no">05</span><span class="screen__name">Reservar Lugar</span></div><p class="screen__desc">Escolha de data/hora e tipo de lugar. O botão “Pagar” fica no fim, como confirmação final.</p></div>
      <div class="screen reveal"><div class="screen__head"><span class="screen__no">06</span><span class="screen__name">Lugar Reservado</span></div><p class="screen__desc">Confirmação com QR Code, identificação da sessão e datas. Funciona como comprovativo operacional.</p></div>
      <div class="screen reveal"><div class="screen__head"><span class="screen__no">07</span><span class="screen__name">Iniciar Sessão</span></div><p class="screen__desc">QR Code central para leitura e validação rápida, reduzindo a introdução manual de dados.</p></div>
      <div class="screen reveal"><div class="screen__head"><span class="screen__no">08</span><span class="screen__name">Menu</span></div><p class="screen__desc">Menu lateral sobre a página principal: perfil, histórico, definições e logout, sem perder o contexto do mapa.</p></div>
      <div class="screen reveal"><div class="screen__head"><span class="screen__no">09</span><span class="screen__name">Histórico</span></div><p class="screen__desc">Calendário e lista de sessões organizadas por data e estado (concluídas, canceladas ou pendentes).</p></div>
      <div class="screen reveal"><div class="screen__head"><span class="screen__no">10</span><span class="screen__name">Sessão Concluída — Sucesso</span></div><p class="screen__desc">Estado positivo em verde, datas, total e botão para descarregar comprovativo. Feedback imediato de conclusão.</p></div>
      <div class="screen reveal"><div class="screen__head"><span class="screen__no">11</span><span class="screen__name">Sessão em Andamento</span></div><p class="screen__desc">Reserva, pagamento, total, tempo e ações. “Pagar” e “Cancelar” têm hierarquia visual distinta.</p></div>
      <div class="screen reveal"><div class="screen__head"><span class="screen__no">12</span><span class="screen__name">Sessão Concluída — Cancelada</span></div><p class="screen__desc">Estado negativo em vermelho, data de cancelamento e comprovativo. Explica o resultado da sessão.</p></div>
      <div class="screen reveal"><div class="screen__head"><span class="screen__no">13</span><span class="screen__name">Página Principal c/ Sessão Ativa</span></div><p class="screen__desc">Variante do mapa quando existe sessão ativa, mantendo o contexto espacial e o acesso à gestão.</p></div>
      <div class="screen reveal"><div class="screen__head"><span class="screen__no">14</span><span class="screen__name">Perfil</span></div><p class="screen__desc">Dados pessoais agrupados, com botão de edição. Informação visível, facilitando a revisão.</p></div>
      <div class="screen reveal"><div class="screen__head"><span class="screen__no">15</span><span class="screen__name">Editar Perfil</span></div><p class="screen__desc">Repete a estrutura do perfil, mas com campos editáveis. A repetição aumenta consistência e previsibilidade.</p></div>
      <div class="screen reveal"><div class="screen__head"><span class="screen__no">16</span><span class="screen__name">Definições</span></div><p class="screen__desc">Categorias como privacidade, aparência, carteira e sobre nós. Ícones e rótulos facilitam o reconhecimento.</p></div>
      <div class="screen reveal"><div class="screen__head"><span class="screen__no">17</span><span class="screen__name">Carteira</span></div><p class="screen__desc">Métodos de pagamento, vouchers, promoções e faturação em blocos separados; a proximidade torna clara cada área.</p></div>
      <div class="screen reveal"><div class="screen__head"><span class="screen__no">18</span><span class="screen__name">Aparência</span></div><p class="screen__desc">Modo claro, escuro ou do dispositivo. As opções em radio button comunicam escolha única e evitam ambiguidade.</p></div>
      <div class="screen reveal"><div class="screen__head"><span class="screen__no">19</span><span class="screen__name">Privacidade</span></div><p class="screen__desc">Alteração de palavra-passe, separando atual e nova. O botão “Guardar” confirma só depois da introdução dos dados.</p></div>
      <div class="screen reveal"><div class="screen__head"><span class="screen__no">20</span><span class="screen__name">Sobre Nós</span></div><p class="screen__desc">Apresenta a equipa e reforça a identidade do projeto, com o rodapé da marca VagaCerta.</p></div>
    </div>

    <h3 class="sub"><span>Fluxo principal</span></h3>
    <div class="flowline reveal" style="margin-top:8px">
      <span>Login / Registo</span><i>→</i>
      <span>Página Principal</span><i>→</i>
      <span>Informação do Parque</span><i>→</i>
      <span>Reservar Lugar</span><i>→</i>
      <span>Lugar Reservado</span><i>→</i>
      <span>Iniciar Sessão</span><i>→</i>
      <span>Sessão Ativa</span><i>→</i>
      <span>Concluída / Cancelada</span><i>→</i>
      <span>Histórico / Comprovativo</span>
    </div>
    <p class="reveal" style="margin-top:16px">Fluxos secundários: <strong>Menu → Perfil → Editar Perfil</strong>; <strong>Menu → Definições → Privacidade / Aparência / Carteira / Sobre Nós</strong>; <strong>Histórico → Sessão Concluída → Comprovativo</strong>; e gestão rápida a partir da <strong>Página Principal com Sessão Ativa</strong>.</p>
  </section>

  <!-- ============================================================
       3.2 — FOCO: PRINCÍPIOS, REGRAS E HEURÍSTICAS
       ============================================================ -->
  <section class="section" id="principios">
    <span class="section__tag">Ponto 3.2 · Foco</span>
    <h2 class="section__title">Princípios, regras e heurísticas</h2>

    <div class="focus-banner reveal">
      <span class="focus-banner__icon">★</span>
      <p>Esta é a parte central do ponto 3.2. Cada <b>princípio</b>, <b>regra</b> ou <b>heurística</b> tem um código, uma definição e os <b>ecrãs</b> onde é aplicada no protótipo. Usa os filtros para estudar por categoria.</p>
    </div>

    <div class="filters reveal">
      <button class="filter-tab is-active" data-cat="all">Todas (32)</button>
      <button class="filter-tab" data-cat="norman">Norman (6)</button>
      <button class="filter-tab" data-cat="shneiderman">Shneiderman (8)</button>
      <button class="filter-tab" data-cat="nielsen">Nielsen (10)</button>
      <button class="filter-tab" data-cat="visual">Design visual (8)</button>
    </div>
    <p id="board-count"></p>

    <div class="board" id="board"><!-- preenchido por script.js --></div>

    <h3 class="sub"><span>Síntese crítica das escolhas de design</span></h3>
    <p class="reveal">O protótipo evoluiu de forma positiva face à baixa fidelidade: estrutura mais concreta, navegação mais compreensível e maior preocupação com a hierarquia visual. A <strong>Regra dos Terços</strong> justifica a posição dos conteúdos — orientação no topo, conteúdo principal no centro e ações no fundo —, adequada a uma app móvel.</p>
    <p class="reveal">Em termos de princípios, o protótipo aplica sobretudo <strong>visibilidade, feedback, coerência, mapeamento e affordance</strong> (Norman); <strong>coerência, retorno informativo, controlo, fecho de sequências e redução de memória</strong> (Shneiderman); e <strong>visibilidade do estado, correspondência com o mundo real, controlo, consistência, prevenção de erros e reconhecimento</strong> (Nielsen).</p>
    <div class="note reveal" style="margin-top:18px">
      <strong>Ainda a corrigir antes da alta fidelidade:</strong> a Página Principal deve comunicar melhor o estado dos parques; a Informação do Parque deve destacar a reserva com mais contraste; o ecrã Reservar Lugar precisa de validação e mensagens de erro; os ecrãs de sessão devem distinguir melhor reserva, ativa, concluída e cancelada; o Histórico deve melhorar os cartões; e a Carteira deve separar melhor cada bloco.
    </div>
  </section>

  <!-- ============================================================
       3.2 — AVALIAÇÃO
       ============================================================ -->
  <section class="section" id="avaliacao-media">
    <span class="section__tag">Ponto 3.2 · Avaliação</span>
    <h2 class="section__title">Avaliação com utilizadores</h2>
    <p class="section__intro reveal">O método foi um <strong>teste de usabilidade moderado</strong>. Cada participante realizou tarefas reais enquanto o avaliador registava erros, hesitações e comentários. Sempre que possível usou-se o método <strong>think aloud</strong>, em que o participante verbaliza o que está a pensar.</p>

    <h3 class="sub"><span>Tarefas do teste</span></h3>
    <div class="table-wrap reveal">
      <table class="data">
        <thead><tr><th>Nº</th><th>Tarefa</th><th>Objetivo</th></tr></thead>
        <tbody>
          <tr><td class="val">1</td><td>Iniciar sessão</td><td>Aceder à aplicação sem dificuldade.</td></tr>
          <tr><td class="val">2</td><td>Procurar um parque</td><td>Avaliar a compreensão da página principal e do mapa.</td></tr>
          <tr><td class="val">3</td><td>Consultar a informação de um parque</td><td>Verificar se os dados são encontrados facilmente.</td></tr>
          <tr><td class="val">4</td><td>Reservar um lugar</td><td>Avaliar a clareza do fluxo de reserva.</td></tr>
          <tr><td class="val">5</td><td>Consultar o QR Code da reserva</td><td>Verificar se compreende o estado da reserva.</td></tr>
          <tr><td class="val">6</td><td>Consultar o histórico</td><td>Verificar se encontra sessões anteriores.</td></tr>
        </tbody>
      </table>
    </div>
    <p class="reveal" style="margin-top:14px">Ferramentas: <strong>guião de teste</strong>, <strong>grelha de observação</strong> (sucesso, tempo, número de erros, dificuldade percebida e comentários) e <strong>questionário pós-teste</strong> com 10 perguntas sobre a experiência.</p>

    <h3 class="sub"><span>Valores estimados vs. obtidos</span></h3>
    <div class="table-wrap reveal">
      <table class="data">
        <thead><tr><th>Critério</th><th>Estimado</th><th>Obtido</th></tr></thead>
        <tbody>
          <tr><td>Sucesso no login/registo</td><td class="val">90%</td><td class="val val--ok">100%</td></tr>
          <tr><td>Sucesso na procura de parque</td><td class="val">85%</td><td class="val val--ok">100%</td></tr>
          <tr><td>Sucesso na reserva de lugar</td><td class="val">80%</td><td class="val val--ok">100%</td></tr>
          <tr><td>Sucesso na consulta do QR Code</td><td class="val">85%</td><td class="val val--ok">100%</td></tr>
          <tr><td>Sucesso na consulta do histórico</td><td class="val">75%</td><td class="val val--ok">100%</td></tr>
          <tr><td>Tempo médio para reservar</td><td class="val">2–3 min</td><td class="val val--ok">~1 min</td></tr>
          <tr><td>Nº médio de erros por tarefa</td><td class="val">1–2</td><td class="val val--ok">0</td></tr>
          <tr><td>Satisfação geral</td><td class="val">4/5</td><td class="val val--ok">5/5</td></tr>
          <tr><td>Facilidade percebida</td><td class="val">4/5</td><td class="val val--ok">5/5</td></tr>
        </tbody>
      </table>
    </div>

    <h3 class="sub"><span>Análise crítica (baixa vs. média)</span></h3>
    <p class="reveal">A passagem de baixa para média fidelidade tornou a solução mais concreta. O fluxo de reserva segue o <strong>modelo mental</strong> esperado e há consistência visual entre ecrãs, o que reduz o esforço de aprendizagem. Como pontos a melhorar, mantêm-se a <strong>hierarquia visual</strong> (sobretudo em Histórico, Informação do Parque, Carteira e Definições) e o <strong>feedback</strong> após ações importantes (reservar, iniciar, cancelar, pagar, guardar).</p>

    <h3 class="sub"><span>Medidas corretivas</span></h3>
    <div class="measures reveal">
      <div class="measure"><h4>Ações principais sempre visíveis</h4><p>Na Página Principal e na Informação do Parque, tornar mais evidentes os marcadores, a barra de pesquisa e os botões. “Iniciar”, “Reservar” e “Pagar” devem manter posição e destaque.</p></div>
      <div class="measure"><h4>Distinguir estados da sessão</h4><p>Reforçar a diferença entre lugar reservado, sessão em andamento, pagamento pendente, concluída e cancelada, com mensagens de confirmação claras.</p></div>
      <div class="measure"><h4>Simplificar e dar legibilidade</h4><p>Histórico, Perfil e Definições com rótulos diretos e melhor espaçamento. Ajustar contraste, tamanhos de texto e alinhamentos para melhorar a acessibilidade.</p></div>
    </div>
  </section>

  <!-- ============================================================
       FERRAMENTAS DE ESTUDO
       ============================================================ -->
  <section class="section" id="estudo">
    <span class="section__tag">Praticar</span>
    <h2 class="section__title">Ferramentas de estudo</h2>
    <p class="section__intro reveal">Fixa os princípios, regras e heurísticas do ponto 3.2. As fichas e o quiz são gerados a partir das 32 entradas do quadro acima.</p>

    <div class="tools-grid" style="margin-top:28px">

      <!-- FLASHCARDS -->
      <div class="tool reveal">
        <div class="tool__label">Cartões de estudo</div>
        <h3 class="tool__title">Toca para revelar a definição</h3>
        <div class="flash" id="flashcard">
          <div class="flash__inner">
            <div class="flash__face flash__front">
              <span class="flash__cat"></span>
              <span class="flash__code cat-norman"></span>
              <span class="flash__front-title"></span>
              <span class="flash__hint">Toca para ver a definição ›</span>
            </div>
            <div class="flash__face flash__back">
              <span class="flash__cat">Definição</span>
              <span class="flash__back-def"></span>
              <span class="flash__hint">‹ Toca para voltar</span>
            </div>
          </div>
        </div>
        <div class="flash-controls">
          <button class="btn btn--ghost btn--icon" id="flash-prev" aria-label="Anterior">‹</button>
          <button class="btn btn--ghost btn--icon" id="flash-shuffle">Baralhar</button>
          <button class="btn btn--marking btn--icon" id="flash-next">Seguinte ›</button>
          <span id="flash-progress"></span>
        </div>
      </div>

      <!-- QUIZ -->
      <div class="tool reveal">
        <div class="tool__label">Quiz · 8 perguntas</div>
        <h3 class="tool__title">Identifica o conceito</h3>

        <div id="quiz-intro" class="quiz__intro">
          <p>Lê a definição e escolhe o princípio, regra ou heurística correspondente. Oito perguntas à sorte.</p>
          <button class="btn btn--marking" id="quiz-start">Começar quiz</button>
        </div>

        <div id="quiz-play" hidden>
          <div class="quiz__score">Pontuação: <span id="quiz-score">0 / 0</span></div>
          <div class="quiz__cat" id="quiz-cat"></div>
          <p class="quiz__q" id="quiz-question"></p>
          <div class="quiz__options" id="quiz-options"></div>
          <div class="quiz-feedback" id="quiz-feedback"></div>
          <button class="btn btn--marking" id="quiz-next" hidden>Seguinte ›</button>
        </div>

        <div id="quiz-result" class="quiz__result" hidden>
          <div class="tool__label" style="text-align:center">Resultado</div>
          <div class="quiz__result-score" id="quiz-result-score"></div>
          <p class="quiz__result-msg" id="quiz-result-msg"></p>
          <button class="btn btn--marking" id="quiz-restart">Jogar de novo</button>
        </div>
      </div>

    </div>
  </section>

</main>

<footer class="footer">
  <div class="footer__inner">
    <b>VagaCerta — Guia de estudo</b> · Projeto de Interação Pessoa-Máquina · Equipa 5<br>
    Conteúdo dos pontos <span class="footer__mark">3.1</span> e <span class="footer__mark">3.2</span> do relatório final · ano letivo 2025/2026<br>
    <span style="opacity:.7">Material de estudo pessoal · © <span id="year"></span></span>
  </div>
</footer>

<script src="script.js"></script>
</body>
</html>
