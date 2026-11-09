---
title: Início - PrismaIHC
hide:
  - navigation
  - toc
---

<div class="prisma-home-wrap" id="prisma-home-dashboard">

  <section class="prisma-hero">
    <img src="imagens/logo-prismaihc.svg" alt="Logo PrismaIHC" class="prisma-hero__logo" />
    <div class="prisma-hero__body">
      <div class="prisma-academic-badge">Universidade de Brasília • FGA0173 Interação Humano-Computador 2026.2 • Grupo 10</div>
      <h1>PrismaIHC: Guia de Concepção e Checklist de Auditoria Web</h1>
      <p>
        Material de consulta e inspeção de <strong>Interação Humano-Computador e Acessibilidade Digital</strong> organizado em duas frentes:
        <strong>Guias Metodológicos</strong> para apoio ao projeto centrado no usuário (Total Experience, Personas, Blueprints e prototipação no Figma) e
        <strong>Checklists de Auditoria Web</strong> com <strong>69 critérios de verificação</strong> baseados nas normas
        WCAG 2.2, ABNT NBR 17225:2025, ABNT NBR 17060:2022, W3C COGA, Heurísticas de Nielsen e Política Nacional de Linguagem Simples.
      </p>

      <div class="prisma-action-group">
        <div class="prisma-cta-row">
          <a href="02-jornadas-blueprints/user-journey-vs-flows.html" class="prisma-btn prisma-btn--primary">Iniciar Auditoria Web (Checklists)</a>
          <a href="01-totalx-personas/total-experience.html" class="prisma-btn">Guias Metodológicos</a>
          <button type="button" id="prisma-export-global" class="prisma-btn prisma-btn--primary">Exportar Relatório Geral (PDF)</button>
        </div>

        <div class="prisma-sub-links-row">
          <span style="font-size: 0.76rem; font-weight: 700; color: var(--prisma-muted);">Documentos Oficiais do Projeto:</span>
          <a href="relatorios/Relatorio_Auditoria_Acessibilidade_LinkedIn_Grupo10.pdf" target="_blank" rel="noopener" class="prisma-sub-link">Relatório de Auditoria (PDF)</a>
          <span class="prisma-dot-sep">•</span>
          <a href="relatorios/Relatorio_Teste_Usabilidade_LinkedIn_Grupo10.pdf" target="_blank" rel="noopener" class="prisma-sub-link">Relatório de Teste de Usabilidade (PDF)</a>
          <span class="prisma-dot-sep">•</span>
          <a href="prototipo_filtro_vagas.html" target="_blank" rel="noopener" class="prisma-sub-link">Protótipo de Redesenho (PR-01)</a>
          <span class="prisma-dot-sep">•</span>
          <a href="sobre/declaracao-ia.md" class="prisma-sub-link" style="font-weight: 700; color: var(--prisma-active-nav);">Declaração de Uso de IA</a>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="prisma-dash-header">
      <div>
        <h2>Painel Geral da Auditoria Web (69 Critérios)</h2>
        <span style="font-size: 0.8rem; color: var(--prisma-muted);">
          Calculado automaticamente sobre os critérios aplicáveis marcados nos checklists (salvo localmente no navegador). Itens marcados como <strong>N/A</strong> não entram no cálculo percentual.
        </span>
      </div>
      <button type="button" id="prisma-reset-all" class="prisma-btn">Zerar progresso</button>
    </div>

    <div class="prisma-dash-grid">
      <div class="prisma-main-donut-card">
        <span style="font-size: 0.74rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--prisma-muted);">
          Conformidade Geral
        </span>
        <div class="prisma-donut-svg-wrap">
          <svg width="156" height="156" viewBox="0 0 120 120" role="img" aria-label="Gráfico de Conformidade Geral">
            <circle cx="60" cy="60" r="48" fill="none" stroke="rgba(148,163,184,0.22)" stroke-width="10"></circle>
            <circle id="prisma-main-donut-ring" cx="60" cy="60" r="48" fill="none" stroke="#1e40af" stroke-width="10"
              stroke-linecap="round" stroke-dasharray="301.59" stroke-dashoffset="301.59" class="prisma-donut-ring"></circle>
          </svg>
          <div class="prisma-donut-center">
            <span id="prisma-main-pct" class="prisma-donut-pct">0%</span>
            <span id="prisma-main-count" class="prisma-donut-sub">0 / 0 aplicáveis</span>
          </div>
        </div>
        <div style="font-size: 0.76rem; display: flex; flex-wrap: wrap; justify-content: center; gap: 0.65rem;">
          <span><strong id="prisma-main-done" style="color: #10b981;">0</strong> Atendidos</span>
          <span><strong id="prisma-main-fail" style="color: #ef4444;">0</strong> Falhas</span>
          <span><strong id="prisma-main-na" style="color: var(--prisma-muted);">0</strong> N/A</span>
          <span><strong id="prisma-main-pend" style="color: #d97706;">0</strong> Pendentes</span>
        </div>
      </div>

      <div id="prisma-sector-grid" class="prisma-sector-grid"></div>
    </div>
  </section>

  <section>
    <div class="prisma-dash-header">
      <div>
        <h2>Guias Metodológicos de Concepção, Projeto e Ferramentas</h2>
        <span style="font-size: 0.8rem; color: var(--prisma-muted);">
          Textos de referência para orientar a etapa de descoberta, redesenho pós-auditoria, prototipação acessível e seleção de ferramentas de inspeção.
        </span>
      </div>
    </div>
    <div class="prisma-guide-grid prisma-guide-grid--3">
      <div class="prisma-guide-card">
        <h3>1. Descoberta e Empatia</h3>
        <span class="prisma-card-subtitle">Total Experience, Canvas e Personas</span>
        <p>Articulação entre UX, CX, EX e TX, aplicação de Mapas de Empatia e Canvas com usuários reais, catálogo dos 11 perfis funcionais de filtro e Personas Ecossistêmicas.</p>
        <p style="margin-top: 0.55rem;"><a href="01-totalx-personas/total-experience.html"><strong>Acessar guias de Total X e Personas</strong></a></p>
      </div>
      <div class="prisma-guide-card">
        <h3>2. Serviço e Prototipação</h3>
        <span class="prisma-card-subtitle">Mapeamento As-Is para To-Be e Figma</span>
        <p>Como converter problemas identificados na auditoria em melhorias de serviço (Kalbach) e documentar foco, estados de erro, variantes e ordem de tabulação no Figma.</p>
        <p style="margin-top: 0.55rem;">
          <a href="02-jornadas-blueprints/blueprint-situacoes-kalbach.html"><strong>Guia As-Is para To-Be</strong></a> •
          <a href="03-cognicao-ui-figma/ui-prototipacao-figma.html"><strong>Guia de Figma</strong></a>
        </p>
      </div>
      <div class="prisma-guide-card">
        <h3>3. Bancada de Testes</h3>
        <span class="prisma-card-subtitle">Comparativo e Roteiros das Ferramentas</span>
        <p>Matriz de seleção das 11 ferramentas de auditoria web (Inspeção Manual, Teclado, DevTools, Axe, WAVE, Lighthouse, Insights, CCA, ASES, NVDA e TalkBack) e verificação no Figma.</p>
        <p style="margin-top: 0.55rem;"><a href="05-ferramentas/comparativo-ferramentas.html"><strong>Explorar ferramentas e roteiros</strong></a></p>
      </div>
    </div>
  </section>

</div>

## Evolução do Guia e Fontes Normativas

Em continuidade aos guias anteriores da disciplina FGA0173 (IHC/UnB), o **PrismaIHC** reúne o referencial normativo brasileiro e internacional atualizado e articula a inspeção técnica de acessibilidade aos conceitos de UX e Design de Serviço:

| Frente Incorporada | Escopo no PrismaIHC | Referência Normativa / Acadêmica de Origem |
| :--- | :--- | :--- |
| **Normas Brasileiras (2025 e 2022)** | Aplicação da norma técnica brasileira de acessibilidade em conteúdo web (requisitos, recomendações e Anexos A, B e C) em conjunto com a norma de aplicações móveis. | **ABNT NBR 17225:2025**; **ABNT NBR 17060:2022**; **LBI** (Lei nº 13.146/2015, art. 63); **eMAG 3.1** (Gov.br, 2014). |
| **Atualização para WCAG 2.2** | Inclusão dos 9 novos critérios introduzidos na WCAG 2.2: foco não oculto (`2.4.11` e `2.4.12`), aparência do foco (`2.4.13`), alternativa ao movimento de arrastar (`2.5.7`), dimensão mínima de alvo 24×24 px (`2.5.8`), ajuda consistente (`3.2.6`), entrada redundante (`3.3.7`) e autenticação acessível (`3.3.8` e `3.3.9`). | **W3C WCAG 2.2** (2023); Correspondência WCAG 2.2 e NBR 17225 (**Ceweb.br**, Marques, Deus e Ferraz, 2025). |
| **Linguagem Simples e Cognição** | Critérios voltados à redução de carga cognitiva, apoio à memória de trabalho, neurodivergência e clareza textual conforme a legislação brasileira vigente. | **Lei nº 15.263/2025** (Política Nacional de Linguagem Simples); **ABNT NBR ISO 24495-1:2024**; **W3C COGA** (*Making Content Usable*, 2021). |
| **Heurísticas e Relatório Técnico** | Avaliação das 10 Heurísticas de Usabilidade integrada à classificação de **Severidade (0 a 4)**, opção **N/A** e exportação de relatório técnico consolidado em PDF para documentação da auditoria. | **Nielsen** (1994, *10 Usability Heuristics*; 1995, *Severity Ratings*); **Barbosa et al.** (*IHC e UX*, 2021). |
| **Concepção IHC, Fluxos e Serviços** | Distinção entre guias de concepção (*Total X*, *Canvas*, *Personas Inclusivas e Ecossistêmicas*, *Figma*) e checklists de auditoria de fluxos, omnicanalidade e processos de suporte. | **ABNT NBR ISO 9241-210**; **Gartner** (Total X, 2020); **Kalbach** (*Mapeamento de Experiências*, 2017); **Morgan e Miller** / **Stickdorn et al.** (2019); **Guia Gov.br** (Diniz et al., 2023). |
| **Integridade e Transparência de IA** | Declaração de autoria humana (100% autoral em ideias, dados empíricos e conclusões) e delimitação do uso de ferramentas de IA restrito a suporte operacional e de código. | **UnB / FGA**; Diretrizes Éticas e Acadêmicas de IHC; [Declaração Completa](sobre/declaracao-ia.md). |
