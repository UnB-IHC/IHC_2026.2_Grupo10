/* ==========================================================================
   PrismaIHC — Motor de Checklists em Acordeão, Filtros Dropdown e Donuts SVG
   ========================================================================== */
(function () {
  const STORAGE_PREFIX = "prismaihc_v2::";
  const LEGACY_PREFIX = "prismaihc_v1::";

  const AXES = [
    {
      id: "jornadas",
      label: "Jornadas, Fluxos e Canais",
      subtitle: "User Flows • Omnicanalidade • Palco vs. Bastidores",
      color: "#0284c7",
      firstHref: "02-jornadas-blueprints/user-journey-vs-flows.html",
      pages: [
        "02-jornadas-blueprints/user-journey-vs-flows.html",
        "02-jornadas-blueprints/omnicanalidade.html",
        "02-jornadas-blueprints/blueprint-morgan-miller.html",
      ],
    },
    {
      id: "cognicao",
      label: "Cognição, Heurísticas e UI",
      subtitle: "Acessibilidade Cognitiva (COGA) • Nielsen • Design Visual UI",
      color: "#0d9488",
      firstHref: "03-cognicao-ui-figma/cognicao-usabilidade.html",
      pages: [
        "03-cognicao-ui-figma/cognicao-usabilidade.html",
        "03-cognicao-ui-figma/heuristicas-nielsen.html",
        "03-cognicao-ui-figma/design-ui.html",
      ],
    },
    {
      id: "webnormas",
      label: "Web, NBR 17225 e WCAG 2.2",
      subtitle: "HTML Semântico • Mídia e Texto • NBR 17225 • NBR 17060",
      color: "#d97706",
      firstHref: "04-web-normas/web-semantica-conteudo.html",
      pages: [
        "04-web-normas/web-semantica-conteudo.html",
        "04-web-normas/normas-nbr-wcag.html",
      ],
    },
  ];

  const SEVERITY_LABELS = {
    "1": "1 — Problema Cosmético",
    "2": "2 — Problema Simples (Menor)",
    "3": "3 — Problema Grave (Maior)",
    "4": "4 — Catástrofe de Usabilidade",
  };

  // Catálogo unificado exibido em TODOS os checklists para consistência total dos filtros
  const MASTER_FILTERS = {
    persona: [
      "Leitor de Tela",
      "Baixa Visão",
      "Daltonismo",
      "Surdez / Libras",
      "Motora / Teclado",
      "Controle por Voz",
      "Cognitiva / TDAH",
      "TEA / Autismo",
      "Dislexia",
      "Idoso / Baixo Letramento",
      "Epilepsia / Vestibular",
    ],
    norma: [
      "ABNT NBR 17225:2025",
      "ABNT NBR 17060:2022",
      "WCAG 2.2",
      "eMAG / Gov.br",
      "LBI (Lei 13.146/2015)",
      "Linguagem Simples (Lei 15.263/2025)",
      "W3C COGA",
      "Heurísticas de Nielsen",
      "Kalbach (Jornadas/Canais)",
      "Service Blueprint (Morgan e Miller)",
    ],
    ferramenta: [
      "Inspeção Manual / Heurística",
      "Teclado (Tab / Esc)",
      "DevTools (Zoom, Refluxo e Visão)",
      "WAVE",
      "Axe DevTools",
      "Google Lighthouse",
      "Accessibility Insights",
      "Colour Contrast Analyser (CCA)",
      "ASES Web (Gov.br)",
      "NVDA / VoiceOver",
      "TalkBack / VoiceOver Mobile",
    ],
  };

  function hashText(str) {
    let h = 5381;
    for (let i = 0; i < str.length; i++) {
      h = (h * 33) ^ str.charCodeAt(i);
    }
    return (h >>> 0).toString(36);
  }

  function getSiteBaseUrl() {
    const logo = document.querySelector(".md-header__button.md-logo");
    if (logo && logo.getAttribute("href")) {
      const resolved = new URL(logo.getAttribute("href"), window.location.href).href;
      return resolved.replace(/index\.html(\?.*|#.*)?$/, "").replace(/\/?$/, "/");
    }
    return new URL("./", window.location.href).href;
  }

  function getCurrentRelPath() {
    const base = getSiteBaseUrl();
    const current = window.location.href.split("#")[0].split("?")[0];
    if (current.startsWith(base)) {
      const rel = current.slice(base.length);
      return rel === "" ? "index.html" : rel;
    }
    return "index.html";
  }

  function extractItemTitle(li) {
    if (li.dataset && li.dataset.rawTitle) return li.dataset.rawTitle;
    const strong = li.querySelector("strong");
    if (strong && strong.textContent.trim()) {
      return strong.textContent.trim();
    }
    const clone = li.cloneNode(true);
    clone.querySelectorAll("ul, details, .admonition").forEach((n) => n.remove());
    return clone.textContent.replace(/\s+/g, " ").trim().slice(0, 160);
  }

  function extractItemCode(title) {
    const m = title.match(/^([A-Z]{1,4}-?\d{1,2})\s*[—:-]/);
    return m ? m[1] : null;
  }

  function computeItemKey(relPath, li, idx) {
    const title = extractItemTitle(li);
    const code = extractItemCode(title);
    const idPart = code ? code.toLowerCase() : hashText(title.toLowerCase() || String(idx));
    return `${STORAGE_PREFIX}${relPath}::${idPart}`;
  }

  function getItemState(key, relPath, title, idx) {
    try {
      const raw = localStorage.getItem(key);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object" && parsed.status) {
          return {
            status: parsed.status,
            severity: parsed.severity || "3",
            note: parsed.note || "",
          };
        }
      }
      if (relPath && title !== undefined) {
        const legacyKey = `${LEGACY_PREFIX}${relPath}::${hashText(title.toLowerCase() || String(idx))}`;
        if (localStorage.getItem(legacyKey) === "1") {
          return { status: "pass", severity: "3", note: "" };
        }
      }
    } catch (_) {}
    return { status: "pending", severity: "3", note: "" };
  }

  function saveItemState(key, state) {
    if (!state || (state.status === "pending" && !state.note)) {
      localStorage.removeItem(key);
      return;
    }
    localStorage.setItem(
      key,
      JSON.stringify({
        status: state.status || "pending",
        severity: state.severity || "3",
        note: state.note || "",
      })
    );
  }

  function cleanBadgeLabel(txt) {
    return txt
      .replace(/^(?:👤\s*)?(?:Persona:|Perfil:)\s*/i, "")
      .replace(/^👤\s*/i, "")
      .replace(/^(?:⚖️\s*)?(?:Norma\/Base:|Norma:|Base:)\s*/i, "")
      .replace(/^⚖️\s*/i, "")
      .replace(/^(?:🛠️\s*)?(?:Ferramenta:|Método:)\s*/i, "")
      .replace(/^🛠️\s*/i, "")
      .replace(/\s*&\s*/g, " e ")
      .trim();
  }

  function detectBadgeKind(txt) {
    if (/^(?:👤|Persona:|Perfil:)/i.test(txt)) return "persona";
    if (/^(?:⚖️|Norma\/Base:|Norma:|Base:)/i.test(txt)) return "norma";
    if (/^(?:🛠️|Ferramenta:|Método:)/i.test(txt)) return "ferramenta";
    return null;
  }

  function extractDocBadges(li) {
    const persona = [];
    const norma = [];
    const ferramenta = [];
    li.querySelectorAll("code").forEach((codeEl) => {
      if (codeEl.closest("pre") || codeEl.closest("details")) return;
      const txt = codeEl.textContent.trim();
      const kind = detectBadgeKind(txt);
      if (kind === "persona") persona.push(cleanBadgeLabel(txt));
      else if (kind === "norma") norma.push(cleanBadgeLabel(txt));
      else if (kind === "ferramenta") ferramenta.push(cleanBadgeLabel(txt));
    });
    return { persona, norma, ferramenta };
  }

  function computeStats(entries) {
    let pass = 0;
    let fail = 0;
    let na = 0;
    let pending = 0;
    entries.forEach((e) => {
      if (e.status === "pass") pass++;
      else if (e.status === "fail") fail++;
      else if (e.status === "na") na++;
      else pending++;
    });
    const total = entries.length;
    const applicable = Math.max(0, total - na);
    const pct = applicable > 0 ? Math.round((pass / applicable) * 100) : 0;
    return { total, applicable, pass, fail, na, pending, pct };
  }

  // =========================================================================
  // 1. PÁGINA INICIAL: CÁLCULO DINÂMICO DOS DONUTS SVG E EXPORTAÇÃO GLOBAL
  // =========================================================================
  async function countPageItems(baseUrl, relPath) {
    try {
      const res = await fetch(baseUrl + relPath, { cache: "no-cache" });
      if (!res.ok) return [];
      const html = await res.text();
      const doc = new DOMParser().parseFromString(html, "text/html");
      const pageTitle = (doc.querySelector("h1")?.textContent || relPath).trim();
      const items = Array.from(doc.querySelectorAll(".md-content li.task-list-item"));
      return items.map((li, idx) => {
        const title = extractItemTitle(li);
        const key = computeItemKey(relPath, li, idx);
        const st = getItemState(key, relPath, title, idx);
        const badges = extractDocBadges(li);
        return {
          pageTitle,
          relPath,
          title,
          code: extractItemCode(title) || `ITEM-${idx + 1}`,
          status: st.status,
          severity: st.severity,
          note: st.note,
          normas: badges.norma,
        };
      });
    } catch (_) {
      return [];
    }
  }

  async function initHomeDashboard() {
    const root = document.getElementById("prisma-home-dashboard");
    if (!root) return;

    const baseUrl = getSiteBaseUrl();
    const axisResults = [];
    const allEntries = [];

    for (const axis of AXES) {
      const lists = await Promise.all(axis.pages.map((p) => countPageItems(baseUrl, p)));
      const axEntries = lists.flat();
      allEntries.push(...axEntries);
      const stats = computeStats(axEntries);
      axisResults.push({ ...axis, ...stats, entries: axEntries });
    }

    const globalStats = computeStats(allEntries);
    const mainCirc = 301.59;
    const mainOff = mainCirc - (globalStats.pct / 100) * mainCirc;
    const mainStroke =
      globalStats.pct >= 80 ? "#10b981" : globalStats.pct >= 40 ? "#0d9488" : "#f59e0b";

    const mainCircle = document.getElementById("prisma-main-donut-ring");
    if (mainCircle) {
      mainCircle.style.strokeDashoffset = String(mainOff);
      mainCircle.style.stroke = mainStroke;
    }

    const setTxt = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = String(val);
    };
    setTxt("prisma-main-pct", `${globalStats.pct}%`);
    setTxt(
      "prisma-main-count",
      `${globalStats.pass} / ${globalStats.applicable} aplicáveis`
    );
    setTxt("prisma-main-done", globalStats.pass);
    setTxt("prisma-main-fail", globalStats.fail);
    setTxt("prisma-main-na", globalStats.na);
    setTxt("prisma-main-pend", globalStats.pending);

    const sectorGrid = document.getElementById("prisma-sector-grid");
    if (sectorGrid) {
      const r = 25;
      const circ = 2 * Math.PI * r;
      sectorGrid.innerHTML = axisResults
        .map((ax) => {
          const off = circ - (ax.pct / 100) * circ;
          return `
            <div class="prisma-sector-card">
              <div class="prisma-mini-donut">
                <svg width="64" height="64" viewBox="0 0 64 64" aria-hidden="true">
                  <circle cx="32" cy="32" r="${r}" fill="none" stroke="rgba(148,163,184,0.22)" stroke-width="6"></circle>
                  <circle cx="32" cy="32" r="${r}" fill="none" stroke="${ax.color}" stroke-width="6" stroke-linecap="round"
                    stroke-dasharray="${circ.toFixed(2)}" stroke-dashoffset="${off.toFixed(2)}" class="prisma-donut-ring"></circle>
                </svg>
                <span>${ax.pct}%</span>
              </div>
              <div style="min-width:0; flex:1;">
                <div class="prisma-sector-card__title">${ax.label}</div>
                <div class="prisma-sector-card__sub">${ax.subtitle}</div>
                <div class="prisma-sector-card__meta">
                  <span><strong style="color:#10b981;">${ax.pass}</strong> Atendidos</span>
                  <span><strong style="color:#ef4444;">${ax.fail}</strong> Falhas</span>
                  <span><strong>${ax.na}</strong> N/A</span>
                  <span>• ${ax.pending} pendentes</span>
                </div>
                <a href="${baseUrl + ax.firstHref}" class="prisma-sector-card__link">Abrir checklists →</a>
              </div>
            </div>
          `;
        })
        .join("");
    }

    const resetBtn = document.getElementById("prisma-reset-all");
    if (resetBtn && !resetBtn.dataset.bound) {
      resetBtn.dataset.bound = "1";
      let confirmStep = false;
      resetBtn.addEventListener("click", () => {
        if (!confirmStep) {
          confirmStep = true;
          resetBtn.textContent = "Confirmar zerar tudo?";
          setTimeout(() => {
            confirmStep = false;
            resetBtn.textContent = "Zerar progresso";
          }, 3200);
          return;
        }
        Object.keys(localStorage).forEach((k) => {
          if (k.startsWith(STORAGE_PREFIX) || k.startsWith(LEGACY_PREFIX)) {
            localStorage.removeItem(k);
          }
        });
        confirmStep = false;
        resetBtn.textContent = "Zerar progresso";
        initHomeDashboard();
      });
    }

    const exportBtn = document.getElementById("prisma-export-global");
    if (exportBtn) {
      exportBtn.onclick = () => {
        const md = buildMarkdownReport(
          "Relatório Consolidado de Auditoria Web — PrismaIHC",
          globalStats,
          axisResults
        );
        openReportModal(md);
      };
    }
  }

  function buildMarkdownReport(reportTitle, stats, groups) {
    const lines = [
      `# ${reportTitle}`,
      "",
      `- **Índice de Conformidade (sobre itens aplicáveis):** ${stats.pct}% (${stats.pass}/${stats.applicable})`,
      `- **Resumo:** ${stats.pass} Atendidos • ${stats.fail} Falhas • ${stats.na} Não Aplicáveis (N/A) • ${stats.pending} Pendentes`,
      "",
    ];

    const allFailures = [];
    groups.forEach((g) => {
      g.entries.forEach((e) => {
        if (e.status === "fail") allFailures.push(e);
      });
    });

    if (allFailures.length > 0) {
      allFailures.sort((a, b) => Number(b.severity || 3) - Number(a.severity || 3));
      lines.push("## Problemas e Inadequações Identificadas (Fundamentadas)");
      lines.push("");
      lines.push("| Código | Critério Violado | Base Normativa / Referência | Severidade (Nielsen) | Local / Evidência no Site |");
      lines.push("| :---: | :--- | :--- | :---: | :--- |");
      allFailures.forEach((f) => {
        const ref = f.normas && f.normas.length ? f.normas.join("; ") : "PrismaIHC";
        const sev = SEVERITY_LABELS[f.severity] || `${f.severity} — Grave`;
        const ev = f.note ? f.note.replace(/\|/g, "/") : "_Registrar captura/URL_";
        lines.push(`| **${f.code}** | ${f.title.replace(/\|/g, "/")} | ${ref} | ${sev} | ${ev} |`);
      });
      lines.push("");
    }

    lines.push("## Detalhamento por Eixo / Seção");
    lines.push("");
    groups.forEach((g) => {
      lines.push(`### ${g.label} — ${g.pct}% (${g.pass}/${g.applicable} aplicáveis)`);
      g.entries.forEach((e) => {
        const sym =
          e.status === "pass"
            ? "Atende"
            : e.status === "fail"
            ? `Falha (Sev. ${e.severity || 3})`
            : e.status === "na"
            ? "N/A"
            : "Pendente";
        const noteSuffix = e.status === "fail" && e.note ? ` — _Evidência: ${e.note}_` : "";
        lines.push(`- **${sym}** | ${e.title}${noteSuffix}`);
      });
      lines.push("");
    });

    return lines.join("\n");
  }

  // =========================================================================
  // 2. PÁGINAS INTERNAS DE CHECKLIST: ACORDEÃO NO TÍTULO + FILTROS DROPDOWN
  // =========================================================================
  function initChecklistPage() {
    const relPath = getCurrentRelPath();
    if (relPath === "index.html") return;

    const content = document.querySelector(".md-content__inner");
    if (!content) return;

    const taskItems = Array.from(content.querySelectorAll("li.task-list-item"));
    if (!taskItems.length) return;

    const personaSet = new Set();
    const normaSet = new Set();
    const ferramentaSet = new Set();

    const filterState = {
      persona: "",
      norma: "",
      ferramenta: "",
      status: "",
    };
    let allExpanded = false;
    const revealedSections = new Set();

    // Mapear seções H2 -> listas de itens para reexibição sob demanda no filtro
    const sectionMap = new Map();
    content.querySelectorAll("ul.task-list").forEach((ul, sIdx) => {
      let prev = ul.previousElementSibling;
      while (prev && !/^H[23]$/.test(prev.tagName)) {
        prev = prev.previousElementSibling;
      }
      const secId = `sec-${sIdx}`;
      ul.dataset.sectionId = secId;
      sectionMap.set(secId, { ul, heading: prev, items: Array.from(ul.querySelectorAll(":scope > li.task-list-item")) });
    });

    // Transformar cada item em Card Acordeão Limpo
    const itemModels = taskItems.map((li, idx) => {
      const rawTitle = extractItemTitle(li);
      li.dataset.rawTitle = rawTitle;
      const key = computeItemKey(relPath, li, idx);
      const state = getItemState(key, relPath, rawTitle, idx);

      // Coletar referências bibliográficas [1], [2] do parágrafo principal
      const refLinksHtml = [];
      li.querySelectorAll(':scope > a[href^="#ref-"], :scope > p > a[href^="#ref-"]').forEach((a) => {
        refLinksHtml.push(a.outerHTML);
      });

      // Coletar Smart Badges e categorizá-las
      const itemBadges = { persona: [], norma: [], ferramenta: [] };
      const badgeElements = [];
      li.querySelectorAll("code").forEach((codeEl) => {
        if (codeEl.closest("pre") || codeEl.closest("details")) return;
        const txt = codeEl.textContent.trim();
        const kind = detectBadgeKind(txt);
        if (!kind) return;

        const clean = cleanBadgeLabel(txt);
        itemBadges[kind].push(clean);
        if (kind === "persona") personaSet.add(clean);
        if (kind === "norma") normaSet.add(clean);
        if (kind === "ferramenta") ferramentaSet.add(clean);

        const prefixLabel = kind === "persona" ? "Perfil:" : kind === "norma" ? "Base:" : "Ferramenta:";
        badgeElements.push({ kind, clean, label: `${prefixLabel} ${clean}` });
      });

      // Extrair conteúdo do bloco "Como auditar" (details)
      let stepsHtml = "";
      const detailsEl = li.querySelector("details");
      if (detailsEl) {
        const clone = detailsEl.cloneNode(true);
        const sum = clone.querySelector("summary");
        if (sum) sum.remove();
        stepsHtml = clone.innerHTML.trim();
      }

      // Limpar interior do <li> e montar estrutura de acordeão acessível
      li.innerHTML = "";
      li.className = "task-list-item prisma-audit-card";

      const model = {
        li,
        idx,
        key,
        title: rawTitle,
        code: extractItemCode(rawTitle) || `ITEM-${idx + 1}`,
        state,
        badges: itemBadges,
        expanded: false,
      };

      // Cabeçalho do Card: Botões [✅ | ❌ | N/A] + Título clicável para expandir
      const header = document.createElement("div");
      header.className = "prisma-card-header";

      const statusGroup = document.createElement("div");
      statusGroup.className = "prisma-status-group";
      statusGroup.setAttribute("role", "group");
      statusGroup.setAttribute("aria-label", "Avaliação do critério");

      const btnPass = createStatusBtn("pass", "✓", "Atende ao critério");
      const btnFail = createStatusBtn("fail", "✕", "Não atende (registrar falha)");
      const btnNa = createStatusBtn("na", "N/A", "Não aplicável a este site");
      statusGroup.append(btnPass, btnFail, btnNa);

      const titleBtn = document.createElement("button");
      titleBtn.type = "button";
      titleBtn.className = "prisma-card-title-btn";
      titleBtn.setAttribute("aria-expanded", "false");
      titleBtn.innerHTML = `
        <span class="prisma-card-title-text">${formatTitleHtml(rawTitle)}</span>
        <span class="prisma-card-chevron" aria-hidden="true">▾</span>
      `;

      header.append(statusGroup, titleBtn);

      // Corpo Expansível do Card
      const body = document.createElement("div");
      body.className = "prisma-card-body";
      body.hidden = true;

      // Gaveta de Severidade + Evidência (visível quando status === 'fail')
      const failDrawer = document.createElement("div");
      failDrawer.className = "prisma-fail-box";
      failDrawer.hidden = state.status !== "fail";
      failDrawer.innerHTML = `
        <div class="prisma-fail-box__row">
          <label class="prisma-fail-field prisma-fail-field--sev">
            <span>Severidade (Nielsen):</span>
            <select class="prisma-select prisma-sev-select">
              <option value="1">1 — Cosmético</option>
              <option value="2">2 — Simples (Menor)</option>
              <option value="3">3 — Grave (Maior)</option>
              <option value="4">4 — Catastrófico</option>
            </select>
          </label>
          <label class="prisma-fail-field prisma-fail-field--note">
            <span>Local / Evidência no site:</span>
            <input type="text" class="prisma-note-input" placeholder="Ex.: Modal de cadastro sem fechar no Esc / URL ou print..." />
          </label>
        </div>
      `;

      const sevSelect = failDrawer.querySelector(".prisma-sev-select");
      const noteInput = failDrawer.querySelector(".prisma-note-input");
      sevSelect.value = state.severity || "3";
      noteInput.value = state.note || "";

      sevSelect.addEventListener("change", () => {
        model.state.severity = sevSelect.value;
        saveItemState(key, model.state);
      });
      noteInput.addEventListener("input", () => {
        model.state.note = noteInput.value;
        saveItemState(key, model.state);
      });

      // Linha de Badges + Referências dentro do card aberto
      const metaRow = document.createElement("div");
      metaRow.className = "prisma-card-meta";
      badgeElements.forEach((b) => {
        const chip = document.createElement("button");
        chip.type = "button";
        chip.className = `smart-badge badge-${b.kind}`;
        chip.textContent = b.label;
        chip.title = `Filtrar por ${b.clean}`;
        chip.addEventListener("click", () => {
          filterState[b.kind] = filterState[b.kind] === b.clean ? "" : b.clean;
          syncDropdownSelects();
          refreshPageState();
        });
        metaRow.appendChild(chip);
      });
      if (refLinksHtml.length) {
        const refsSpan = document.createElement("span");
        refsSpan.className = "prisma-card-refs";
        refsSpan.innerHTML = `Fontes: ${refLinksHtml.join(" ")}`;
        metaRow.appendChild(refsSpan);
      }

      const stepsBox = document.createElement("div");
      stepsBox.className = "prisma-card-steps";
      stepsBox.innerHTML = stepsHtml || "<p>Siga o enunciado para inspecionar este critério na página.</p>";

      body.append(failDrawer, metaRow, stepsBox);
      li.append(header, body);

      function setExpanded(open) {
        model.expanded = open;
        body.hidden = !open;
        titleBtn.setAttribute("aria-expanded", open ? "true" : "false");
        li.classList.toggle("is-expanded", open);
      }
      model.setExpanded = setExpanded;

      titleBtn.addEventListener("click", () => {
        setExpanded(!model.expanded);
      });

      function createStatusBtn(targetStatus, label, tooltip) {
        const b = document.createElement("button");
        b.type = "button";
        b.className = `prisma-status-btn is-${targetStatus}`;
        b.textContent = label;
        b.title = tooltip;
        b.addEventListener("click", (e) => {
          e.stopPropagation();
          model.state.status = model.state.status === targetStatus ? "pending" : targetStatus;
          saveItemState(key, model.state);
          failDrawer.hidden = model.state.status !== "fail";
          if (model.state.status === "fail" && !model.expanded) {
            setExpanded(true);
          }
          syncCardVisualStatus();
          refreshPageState();
        });
        return b;
      }

      function syncCardVisualStatus() {
        li.classList.remove("status-pass", "status-fail", "status-na");
        if (model.state.status !== "pending") {
          li.classList.add(`status-${model.state.status}`);
        }
        btnPass.classList.toggle("is-active", model.state.status === "pass");
        btnFail.classList.toggle("is-active", model.state.status === "fail");
        btnNa.classList.toggle("is-active", model.state.status === "na");
        btnPass.setAttribute("aria-pressed", model.state.status === "pass" ? "true" : "false");
        btnFail.setAttribute("aria-pressed", model.state.status === "fail" ? "true" : "false");
        btnNa.setAttribute("aria-pressed", model.state.status === "na" ? "true" : "false");
        failDrawer.hidden = model.state.status !== "fail";
      }

      model.syncCardVisualStatus = syncCardVisualStatus;
      syncCardVisualStatus();
      return model;
    });

    // Construir Painel de Controle com Filtros em Dropdown
    const panel = document.createElement("div");
    panel.className = "prisma-page-panel";
    panel.innerHTML = `
      <div class="prisma-page-panel__top">
        <div style="display:flex; align-items:center; gap:0.85rem;">
          <div class="prisma-mini-donut" style="width:3.4rem; height:3.4rem;">
            <svg width="54" height="54" viewBox="0 0 54 54" aria-hidden="true">
              <circle cx="27" cy="27" r="21" fill="none" stroke="rgba(148,163,184,0.22)" stroke-width="5"></circle>
              <circle id="prisma-page-donut-ring" cx="27" cy="27" r="21" fill="none" stroke="#0d9488" stroke-width="5"
                stroke-linecap="round" stroke-dasharray="131.95" stroke-dashoffset="131.95" class="prisma-donut-ring"></circle>
            </svg>
            <span id="prisma-page-pct">0%</span>
          </div>
          <div>
            <div style="font-weight:700; font-size:0.88rem;">Conformidade desta página</div>
            <div id="prisma-page-count" style="font-size:0.76rem; color:var(--prisma-muted);">0 / 0 aplicáveis</div>
          </div>
        </div>
        <div class="prisma-page-panel__actions">
          <button type="button" id="prisma-mark-visible" class="prisma-btn prisma-btn--primary">✓ Atender visíveis</button>
          <button type="button" id="prisma-toggle-details" class="prisma-btn">▾ Expandir todos</button>
          <button type="button" id="prisma-clear-page" class="prisma-btn">↺ Limpar</button>
          <button type="button" id="prisma-export-page" class="prisma-btn">Exportar Relatório (.md)</button>
        </div>
      </div>
      <div class="prisma-filter-bar">
        <div class="prisma-filter-grid">
          <label class="prisma-filter-select-wrap">
            <span>Perfil / Persona</span>
            <select id="prisma-sel-persona" class="prisma-select">
              <option value="">Todas as personas</option>
            </select>
          </label>
          <label class="prisma-filter-select-wrap">
            <span>Norma / Base</span>
            <select id="prisma-sel-norma" class="prisma-select">
              <option value="">Todas as normas</option>
            </select>
          </label>
          <label class="prisma-filter-select-wrap">
            <span>Ferramenta</span>
            <select id="prisma-sel-ferramenta" class="prisma-select">
              <option value="">Todas as ferramentas</option>
            </select>
          </label>
          <label class="prisma-filter-select-wrap">
            <span>Status</span>
            <select id="prisma-sel-status" class="prisma-select">
              <option value="">Todos os status</option>
              <option value="pending">Pendentes</option>
              <option value="pass">Atendidos</option>
              <option value="fail">Com falha</option>
              <option value="na">Não aplicáveis (N/A)</option>
            </select>
          </label>
        </div>
        <div id="prisma-active-filter-row" class="prisma-active-filter-row" hidden>
          <span id="prisma-active-filter-summary"></span>
          <button type="button" id="prisma-reset-filters" class="prisma-link-btn">✕ Limpar filtros</button>
        </div>
      </div>
    `;

    const firstHr = content.querySelector("hr");
    const firstH2 = content.querySelector("h2");
    if (firstHr) {
      firstHr.replaceWith(panel);
    } else if (firstH2) {
      firstH2.parentNode.insertBefore(panel, firstH2);
    } else {
      content.prepend(panel);
    }

    const selPersona = panel.querySelector("#prisma-sel-persona");
    const selNorma = panel.querySelector("#prisma-sel-norma");
    const selFerramenta = panel.querySelector("#prisma-sel-ferramenta");
    const selStatus = panel.querySelector("#prisma-sel-status");

    populateUnifiedSelect(selPersona, "persona", personaSet);
    populateUnifiedSelect(selNorma, "norma", normaSet);
    populateUnifiedSelect(selFerramenta, "ferramenta", ferramentaSet);

    function populateUnifiedSelect(sel, kind, pageSet) {
      const masterList = MASTER_FILTERS[kind] || [];
      const extras = Array.from(pageSet)
        .filter((v) => !masterList.includes(v))
        .sort();
      const ordered = [...masterList, ...extras];
      ordered.forEach((v) => {
        const count = itemModels.filter((m) => m.badges[kind].includes(v)).length;
        const opt = document.createElement("option");
        opt.value = v;
        opt.textContent = count > 0 ? `${v} (${count})` : `${v} (0 nesta aba)`;
        sel.appendChild(opt);
      });
    }

    function syncDropdownSelects() {
      selPersona.value = filterState.persona;
      selNorma.value = filterState.norma;
      selFerramenta.value = filterState.ferramenta;
      selStatus.value = filterState.status;
    }

    [
      [selPersona, "persona"],
      [selNorma, "norma"],
      [selFerramenta, "ferramenta"],
      [selStatus, "status"],
    ].forEach(([sel, key]) => {
      sel.addEventListener("change", () => {
        filterState[key] = sel.value;
        revealedSections.clear();
        refreshPageState();
      });
    });

    panel.querySelector("#prisma-reset-filters").addEventListener("click", () => {
      filterState.persona = "";
      filterState.norma = "";
      filterState.ferramenta = "";
      filterState.status = "";
      revealedSections.clear();
      syncDropdownSelects();
      refreshPageState();
    });

    // Configurar cabeçalhos H2 e barras de reexibição sob demanda quando há filtro ativo
    sectionMap.forEach((sec, secId) => {
      const revealBar = document.createElement("button");
      revealBar.type = "button";
      revealBar.className = "prisma-reveal-hidden-bar";
      revealBar.hidden = true;
      sec.ul.insertAdjacentElement("afterend", revealBar);
      sec.revealBar = revealBar;

      const toggleSecReveal = () => {
        if (!hasActiveFilter()) return;
        if (revealedSections.has(secId)) revealedSections.delete(secId);
        else revealedSections.add(secId);
        refreshPageState();
      };

      revealBar.addEventListener("click", toggleSecReveal);
      if (sec.heading) {
        sec.heading.classList.add("prisma-section-heading");
        const badge = document.createElement("button");
        badge.type = "button";
        badge.className = "prisma-heading-hidden-toggle";
        badge.hidden = true;
        badge.addEventListener("click", (e) => {
          e.stopPropagation();
          toggleSecReveal();
        });
        sec.heading.appendChild(badge);
        sec.headingBadge = badge;
      }
    });

    function hasActiveFilter() {
      return Boolean(
        filterState.persona || filterState.norma || filterState.ferramenta || filterState.status
      );
    }

    function matchesFilter(m) {
      if (filterState.persona && !m.badges.persona.includes(filterState.persona)) return false;
      if (filterState.norma && !m.badges.norma.includes(filterState.norma)) return false;
      if (filterState.ferramenta && !m.badges.ferramenta.includes(filterState.ferramenta))
        return false;
      if (filterState.status && m.state.status !== filterState.status) return false;
      return true;
    }

    function refreshPageState() {
      const entries = itemModels.map((m) => ({
        code: m.code,
        title: m.title,
        status: m.state.status,
        severity: m.state.severity,
        note: m.state.note,
        normas: m.badges.norma,
      }));
      const stats = computeStats(entries);

      const circ = 131.95;
      const ring = document.getElementById("prisma-page-donut-ring");
      if (ring) {
        ring.style.strokeDashoffset = String(circ - (stats.pct / 100) * circ);
        ring.style.stroke =
          stats.pct >= 80 ? "#10b981" : stats.pct >= 40 ? "#0d9488" : "#f59e0b";
      }
      const pctSpan = document.getElementById("prisma-page-pct");
      const cntSpan = document.getElementById("prisma-page-count");
      if (pctSpan) pctSpan.textContent = `${stats.pct}%`;
      if (cntSpan) {
        cntSpan.innerHTML = `<strong>${stats.pass}</strong> atendidos • <strong>${stats.fail}</strong> falhas • <strong>${stats.na}</strong> N/A • ${stats.pending} pendentes`;
      }

      const active = hasActiveFilter();
      let matchingCount = 0;

      sectionMap.forEach((sec, secId) => {
        let hiddenInSec = 0;
        const secRevealed = revealedSections.has(secId);

        sec.items.forEach((li) => {
          const m = itemModels.find((x) => x.li === li);
          if (!m) return;
          const matched = matchesFilter(m);
          if (matched) matchingCount++;

          if (!active || matched) {
            li.style.display = "";
            li.classList.remove("is-revealed-outside-filter");
          } else if (secRevealed) {
            hiddenInSec++;
            li.style.display = "";
            li.classList.add("is-revealed-outside-filter");
          } else {
            hiddenInSec++;
            li.style.display = "none";
            li.classList.remove("is-revealed-outside-filter");
          }
        });

        if (active && hiddenInSec > 0) {
          sec.revealBar.hidden = false;
          sec.revealBar.textContent = secRevealed
            ? `▴ Ocultar novamente ${hiddenInSec} critério(s) fora do filtro nesta seção`
            : `▸ Mostrar +${hiddenInSec} outro(s) critério(s) desta seção ocultos pelo filtro`;
          if (sec.headingBadge) {
            sec.headingBadge.hidden = false;
            sec.headingBadge.textContent = secRevealed
              ? `▴ Ocultar (${hiddenInSec})`
              : `+${hiddenInSec} oculto(s) ▾`;
          }
        } else {
          sec.revealBar.hidden = true;
          if (sec.headingBadge) sec.headingBadge.hidden = true;
        }
      });

      const activeRow = panel.querySelector("#prisma-active-filter-row");
      const summaryEl = panel.querySelector("#prisma-active-filter-summary");
      if (active) {
        activeRow.hidden = false;
        summaryEl.textContent =
          matchingCount > 0
            ? `Exibindo ${matchingCount} de ${itemModels.length} critérios para o filtro selecionado.`
            : `Nenhum critério específico para este filtro nesta página (0 de ${itemModels.length}) — consulte os outros checklists do menu ou clique em "+ ocultos" abaixo.`;
      } else {
        activeRow.hidden = true;
      }
    }

    panel.querySelector("#prisma-mark-visible").addEventListener("click", () => {
      itemModels.forEach((m) => {
        if (m.li.style.display === "none") return;
        m.state.status = "pass";
        saveItemState(m.key, m.state);
        m.syncCardVisualStatus();
      });
      refreshPageState();
    });

    panel.querySelector("#prisma-clear-page").addEventListener("click", () => {
      itemModels.forEach((m) => {
        m.state = { status: "pending", severity: "3", note: "" };
        saveItemState(m.key, m.state);
        m.syncCardVisualStatus();
      });
      refreshPageState();
    });

    panel.querySelector("#prisma-toggle-details").addEventListener("click", (e) => {
      allExpanded = !allExpanded;
      itemModels.forEach((m) => {
        if (m.li.style.display !== "none") m.setExpanded(allExpanded);
      });
      e.currentTarget.textContent = allExpanded ? "▴ Recolher todos" : "▾ Expandir todos";
    });

    panel.querySelector("#prisma-export-page").addEventListener("click", () => {
      const h1 = content.querySelector("h1");
      const pageTitle = h1 ? h1.textContent.trim() : "Checklist PrismaIHC";
      const entries = itemModels.map((m) => ({
        code: m.code,
        title: m.title,
        status: m.state.status,
        severity: m.state.severity,
        note: m.state.note,
        normas: m.badges.norma,
      }));
      const stats = computeStats(entries);
      const md = buildMarkdownReport(`Relatório — ${pageTitle}`, stats, [
        { label: pageTitle, ...stats, entries },
      ]);
      openReportModal(md);
    });

    refreshPageState();
  }

  function formatTitleHtml(rawTitle) {
    const m = rawTitle.match(/^([A-Z]{1,4}-?\d{1,2})\s*([—:-])\s*(.+)$/);
    if (m) {
      return `<span class="prisma-code-tag">${escapeHtml(m[1])}</span> <span>${escapeHtml(m[3])}</span>`;
    }
    return `<span>${escapeHtml(rawTitle)}</span>`;
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // =========================================================================
  // 3. MODAL COMPARTILHADO DE EXPORTAÇÃO MARKDOWN
  // =========================================================================
  function ensureModal() {
    let backdrop = document.getElementById("prisma-report-modal");
    if (backdrop) return backdrop;
    backdrop = document.createElement("div");
    backdrop.id = "prisma-report-modal";
    backdrop.className = "prisma-modal-backdrop";
    backdrop.innerHTML = `
      <div class="prisma-modal" role="dialog" aria-modal="true" aria-label="Relatório de Auditoria em Markdown">
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.75rem;">
          <strong style="font-size:1rem;">Prévia do Relatório Fundamentado (.md)</strong>
          <button type="button" id="prisma-modal-close" class="prisma-btn">✕ Fechar</button>
        </div>
        <pre id="prisma-modal-pre"></pre>
        <div style="display:flex; justify-content:flex-end; align-items:center; gap:0.65rem; margin-top:0.85rem;">
          <span id="prisma-copy-ok" style="font-size:0.78rem; color:#10b981; display:none; font-weight:700;">✓ Copiado!</span>
          <button type="button" id="prisma-modal-copy" class="prisma-btn prisma-btn--primary">Copiar Markdown</button>
        </div>
      </div>
    `;
    document.body.appendChild(backdrop);

    backdrop.querySelector("#prisma-modal-close").addEventListener("click", () => {
      backdrop.classList.remove("is-open");
    });
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) backdrop.classList.remove("is-open");
    });
    backdrop.querySelector("#prisma-modal-copy").addEventListener("click", () => {
      const txt = backdrop.querySelector("#prisma-modal-pre").textContent;
      if (navigator.clipboard) navigator.clipboard.writeText(txt);
      backdrop.querySelector("#prisma-copy-ok").style.display = "inline";
    });
    return backdrop;
  }

  function openReportModal(markdownText) {
    const modal = ensureModal();
    modal.querySelector("#prisma-modal-pre").textContent = markdownText;
    modal.querySelector("#prisma-copy-ok").style.display = "none";
    modal.classList.add("is-open");
  }

  function boot() {
    initHomeDashboard();
    initChecklistPage();
  }

  if (typeof document$ !== "undefined" && document$.subscribe) {
    document$.subscribe(boot);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
