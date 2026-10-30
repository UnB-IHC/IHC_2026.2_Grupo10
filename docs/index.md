---
title: Início — PrismaIHC
hide:
  - navigation
  - toc
---

<div class="prisma-home-wrap" id="prisma-home-dashboard">

  <section class="prisma-hero">
    <img src="imagens/logo-prismaihc.svg" alt="Logo PrismaIHC" class="prisma-hero__logo" />
    <div class="prisma-hero__body">
      <span class="prisma-pill-tag">UnB • FGA0173 IHC 2026.2 • Grupo 10</span>
      <h1>PrismaIHC — Guia Prático de Auditoria em UX, IHC &amp; Acessibilidade</h1>
      <p>
        Um guia interativo completo para projetar e auditar produtos digitais: integrando
        <strong>Total Experience (CX, UX, EX, TX)</strong>, <strong>Design Empático</strong>,
        <strong>Personas &amp; Personas Ecossistêmicas</strong>, <strong>User Journeys × Flows</strong>,
        <strong>Service Blueprints</strong> e <strong>Omnicanalidade</strong> com
        <strong>Acessibilidade Cognitiva</strong>, <strong>Heurísticas</strong>,
        <strong>Prototipação no Figma</strong>, <strong>WCAG 2.2</strong> e as normas
        <strong>ABNT NBR 17225:2025</strong> e <strong>NBR 17060</strong>.
      </p>
      <div class="prisma-cta-row">
        <a href="01-totalx-personas/total-experience.html" class="prisma-btn prisma-btn--primary">▶ Iniciar Auditoria</a>
        <a href="05-ferramentas/comparativo-ferramentas.html" class="prisma-btn">🛠️ Guia de Ferramentas</a>
        <button type="button" id="prisma-export-global" class="prisma-btn">📥 Exportar Relatório Geral (.md)</button>
      </div>
    </div>
  </section>

  <section>
    <div class="prisma-dash-header">
      <div>
        <h2>Painel Geral de Progresso (Donuts SVG)</h2>
        <span style="font-size: 0.8rem; color: var(--prisma-muted);">
          Calculado automaticamente a partir dos critérios marcados em cada eixo temático (salvo no navegador).
        </span>
      </div>
      <button type="button" id="prisma-reset-all" class="prisma-btn">↺ Zerar progresso</button>
    </div>

    <div class="prisma-dash-grid">
      <div class="prisma-main-donut-card">
        <span style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--prisma-muted);">
          Índice Geral da Auditoria
        </span>
        <div class="prisma-donut-svg-wrap">
          <svg width="160" height="160" viewBox="0 0 120 120" role="img" aria-label="Gráfico Donut de Progresso Geral">
            <circle cx="60" cy="60" r="48" fill="none" stroke="rgba(148,163,184,0.22)" stroke-width="11"></circle>
            <circle id="prisma-main-donut-ring" cx="60" cy="60" r="48" fill="none" stroke="#0d9488" stroke-width="11"
              stroke-linecap="round" stroke-dasharray="301.59" stroke-dashoffset="301.59" class="prisma-donut-ring"></circle>
          </svg>
          <div class="prisma-donut-center">
            <span id="prisma-main-pct" class="prisma-donut-pct">0%</span>
            <span id="prisma-main-count" class="prisma-donut-sub">0 / 0 critérios</span>
          </div>
        </div>
        <div style="font-size: 0.8rem; display: flex; gap: 1rem;">
          <span><strong id="prisma-main-done" style="color: #0d9488;">0</strong> Atendidos</span>
          <span>•</span>
          <span><strong id="prisma-main-pend" style="color: #d97706;">0</strong> Pendentes</span>
        </div>
      </div>

      <div id="prisma-sector-grid" class="prisma-sector-grid"></div>
    </div>
  </section>

  <section class="prisma-steps-grid">
    <div class="prisma-step-card">
      <span style="font-size: 0.72rem; font-weight: 800; color: #0d9488;">1 • EIXOS TEMÁTICOS DE IHC</span>
      <h3>Navegue por etapa do projeto</h3>
      <p>Da descoberta com Total X, Personas e Blueprints até a prototipação no Figma e validação com NBR 17225 e WCAG 2.2.</p>
    </div>
    <div class="prisma-step-card">
      <span style="font-size: 0.72rem; font-weight: 800; color: #8b5cf6;">2 • SMART BADGES &amp; COMO AUDITAR</span>
      <h3>Filtre por Persona, Norma ou Ferramenta</h3>
      <p>Cada critério traz etiquetas clicáveis e um passo a passo recolhido explicando exatamente como inspecionar o item.</p>
    </div>
    <div class="prisma-step-card">
      <span style="font-size: 0.72rem; font-weight: 800; color: #d97706;">3 • FERRAMENTAS &amp; RELATÓRIO</span>
      <h3>Consulte tutoriais e exporte o resumo</h3>
      <p>Veja comentários críticos de testes práticos das ferramentas e gere o diagnóstico em Markdown com 1 clique.</p>
    </div>
  </section>

</div>
