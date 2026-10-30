/* ==========================================================================
   PrismaIHC — Motor Automático de Checklists, Smart Badges e Donuts SVG
   ========================================================================== */
(function () {
  const STORAGE_PREFIX = "prismaihc_v1::";

  const AXES = [
    {
      id: "totalx",
      label: "🌐 Total X & Personas",
      subtitle: "CX/UX/EX/TX • Design Empático • Personas & Ecossistêmicas",
      color: "#8b5cf6",
      firstHref: "01-totalx-personas/total-experience.html",
      pages: [
        "01-totalx-personas/total-experience.html",
        "01-totalx-personas/design-empatico-canvas.html",
        "01-totalx-personas/personas-como-criar.html",
        "01-totalx-personas/personas-ecossistemicas.html",
      ],
    },
    {
      id: "jornadas",
      label: "🗺️ Jornadas, Blueprint & Omnicanal",
      subtitle: "User Journey × Flows • Service Blueprints • Omnicanalidade",
      color: "#0284c7",
      firstHref: "02-jornadas-blueprints/user-journey-vs-flows.html",
      pages: [
        "02-jornadas-blueprints/user-journey-vs-flows.html",
        "02-jornadas-blueprints/omnicanalidade.html",
        "02-jornadas-blueprints/blueprint-morgan-miller.html",
        "02-jornadas-blueprints/blueprint-situacoes-kalbach.html",
      ],
    },
    {
      id: "cognicao",
      label: "🧠 Cognição, IHC, UI & Figma",
      subtitle: "Neurodiversidade • Usabilidade • Design UI • Figma",
      color: "#0d9488",
      firstHref: "03-cognicao-ui-figma/cognicao-usabilidade.html",
      pages: [
        "03-cognicao-ui-figma/cognicao-usabilidade.html",
        "03-cognicao-ui-figma/ui-prototipacao-figma.html",
      ],
    },
    {
      id: "webnormas",
      label: "💻 Web, NBR 17225 & WCAG 2.2",
      subtitle: "HTML Semântico • Conteúdo • NBR 17225 • NBR 17060",
      color: "#d97706",
      firstHref: "04-web-normas/web-semantica-conteudo.html",
      pages: [
        "04-web-normas/web-semantica-conteudo.html",
        "04-web-normas/normas-nbr-wcag.html",
      ],
    },
  ];

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
    const strong = li.querySelector("strong");
    if (strong && strong.textContent.trim()) {
      return strong.textContent.trim();
    }
    const clone = li.cloneNode(true);
    clone.querySelectorAll("ul, details, .admonition").forEach((n) => n.remove());
    return clone.textContent.replace(/\s+/g, " ").trim().slice(0, 140);
  }

  function computeItemKey(relPath, li, idx) {
    const title = extractItemTitle(li).toLowerCase();
    return `${STORAGE_PREFIX}${relPath}::${hashText(title || String(idx))}`;
  }

  function isCheckedStored(key) {
    return localStorage.getItem(key) === "1";
  }

  function setCheckedStored(key, val) {
    if (val) {
      localStorage.setItem(key, "1");
    } else {
      localStorage.removeItem(key);
    }
  }

  // =========================================================================
  // 1. PÁGINA INICIAL: CÁLCULO DINÂMICO DOS DONUTS SVG EM TODOS OS ARQUIVOS
  // =========================================================================
  async function countPageItems(baseUrl, relPath) {
    try {
      const res = await fetch(baseUrl + relPath, { cache: "no-cache" });
      if (!res.ok) return { total: 0, done: 0, entries: [] };
      const html = await res.text();
      const doc = new DOMParser().parseFromString(html, "text/html");
      const items = Array.from(doc.querySelectorAll(".md-content li.task-list-item"));
      let done = 0;
      const entries = items.map((li, idx) => {
        const key = computeItemKey(relPath, li, idx);
        const checked = isCheckedStored(key);
        if (checked) done++;
        return { title: extractItemTitle(li), checked };
      });
      return { total: items.length, done, entries };
    } catch (_) {
      return { total: 0, done: 0, entries: [] };
    }
  }

  async function initHomeDashboard() {
    const root = document.getElementById("prisma-home-dashboard");
    if (!root) return;

    const baseUrl = getSiteBaseUrl();
    const axisResults = [];
    let globalTotal = 0;
    let globalDone = 0;

    for (const axis of AXES) {
      let axTotal = 0;
      let axDone = 0;
      const axEntries = [];
      const statsList = await Promise.all(axis.pages.map((p) => countPageItems(baseUrl, p)));
      statsList.forEach((st) => {
        axTotal += st.total;
        axDone += st.done;
        axEntries.push(...st.entries);
      });
      globalTotal += axTotal;
      globalDone += axDone;
      const pct = axTotal ? Math.round((axDone / axTotal) * 100) : 0;
      axisResults.push({ ...axis, total: axTotal, done: axDone, pct, entries: axEntries });
    }

    const globalPct = globalTotal ? Math.round((globalDone / globalTotal) * 100) : 0;
    const mainCirc = 301.59;
    const mainOff = mainCirc - (globalPct / 100) * mainCirc;
    const mainStroke = globalPct >= 80 ? "#10b981" : globalPct >= 40 ? "#0d9488" : "#f59e0b";

    const mainCircle = document.getElementById("prisma-main-donut-ring");
    if (mainCircle) {
      mainCircle.style.strokeDashoffset = String(mainOff);
      mainCircle.style.stroke = mainStroke;
    }
    const pctEl = document.getElementById("prisma-main-pct");
    const cntEl = document.getElementById("prisma-main-count");
    const doneEl = document.getElementById("prisma-main-done");
    const pendEl = document.getElementById("prisma-main-pend");
    if (pctEl) pctEl.textContent = `${globalPct}%`;
    if (cntEl) cntEl.textContent = `${globalDone} / ${globalTotal} critérios`;
    if (doneEl) doneEl.textContent = String(globalDone);
    if (pendEl) pendEl.textContent = String(globalTotal - globalDone);

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
                  <circle cx="32" cy="32" r="${r}" fill="none" stroke="rgba(148,163,184,0.25)" stroke-width="6"></circle>
                  <circle cx="32" cy="32" r="${r}" fill="none" stroke="${ax.color}" stroke-width="6" stroke-linecap="round"
                    stroke-dasharray="${circ.toFixed(2)}" stroke-dashoffset="${off.toFixed(2)}" class="prisma-donut-ring"></circle>
                </svg>
                <span>${ax.pct}%</span>
              </div>
              <div style="min-width:0; flex:1;">
                <div style="font-weight:700; font-size:0.9rem;">${ax.label}</div>
                <div style="font-size:0.75rem; color:var(--prisma-muted); margin:0.15rem 0 0.45rem;">${ax.done} de ${ax.total} verificados</div>
                <a href="${baseUrl + ax.firstHref}" style="font-size:0.78rem; font-weight:700;">Auditar eixo →</a>
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
          resetBtn.textContent = "⚠️ Confirmar zerar tudo?";
          setTimeout(() => {
            confirmStep = false;
            resetBtn.textContent = "↺ Zerar progresso";
          }, 3200);
          return;
        }
        Object.keys(localStorage).forEach((k) => {
          if (k.startsWith(STORAGE_PREFIX)) localStorage.removeItem(k);
        });
        confirmStep = false;
        resetBtn.textContent = "↺ Zerar progresso";
        initHomeDashboard();
      });
    }

    const exportBtn = document.getElementById("prisma-export-global");
    if (exportBtn && !exportBtn.dataset.bound) {
      exportBtn.dataset.bound = "1";
      exportBtn.addEventListener("click", () => {
        const lines = [
          "# Relatório Consolidado de Auditoria — PrismaIHC (Grupo 10)",
          `**Índice Geral:** ${globalPct}% (${globalDone}/${globalTotal} critérios atendidos)`,
          "",
        ];
        axisResults.forEach((ax) => {
          lines.push(`## ${ax.label} — ${ax.pct}% (${ax.done}/${ax.total})`);
          ax.entries.forEach((e) => {
            lines.push(`- [${e.checked ? "x" : " "}] ${e.title}`);
          });
          lines.push("");
        });
        openReportModal(lines.join("\n"));
      });
    }
  }

  // =========================================================================
  // 2. PÁGINAS INTERNAS DE CHECKLIST: SMART BADGES, FILTROS E MINI-DONUT
  // =========================================================================
  function initChecklistPage() {
    const relPath = getCurrentRelPath();
    if (relPath === "index.html" || relPath.includes("COMO_CONTRIBUIR")) return;

    const content = document.querySelector(".md-content__inner");
    if (!content) return;

    const taskItems = Array.from(content.querySelectorAll("li.task-list-item"));
    if (!taskItems.length) return;

    let activeBadgeFilter = null;
    let onlyPending = false;
    let allDetailsOpen = false;
    const discoveredBadges = new Map();

    taskItems.forEach((li, idx) => {
      li.classList.add("prisma-audit-card");
      const key = computeItemKey(relPath, li, idx);
      li.dataset.storageKey = key;

      const checkbox = li.querySelector('input[type="checkbox"]');
      if (checkbox) {
        checkbox.removeAttribute("disabled");
        checkbox.checked = isCheckedStored(key);
        li.classList.toggle("is-checked", checkbox.checked);

        checkbox.addEventListener("change", () => {
          setCheckedStored(key, checkbox.checked);
          li.classList.toggle("is-checked", checkbox.checked);
          refreshPageState();
        });
      }

      // Converter tags inline code (`👤 ...`, `⚖️ ...`, `🛠️ ...`) em Smart Badges
      const badgesOnItem = [];
      li.querySelectorAll("code").forEach((codeEl) => {
        if (codeEl.closest("pre")) return;
        const txt = codeEl.textContent.trim();
        let kind = null;
        if (txt.startsWith("👤")) kind = "persona";
        else if (txt.startsWith("⚖️")) kind = "norma";
        else if (txt.startsWith("🛠️")) kind = "ferramenta";
        if (!kind) return;

        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `smart-badge badge-${kind}`;
        btn.textContent = txt;
        btn.title = "Clique para filtrar por esta etiqueta";
        btn.addEventListener("click", () => {
          activeBadgeFilter = activeBadgeFilter === txt ? null : txt;
          refreshPageState();
        });

        codeEl.replaceWith(btn);
        badgesOnItem.push(txt);
        if (!discoveredBadges.has(txt)) {
          discoveredBadges.set(txt, kind);
        }
      });
      li.dataset.badges = JSON.stringify(badgesOnItem);
    });

    // Inserir painel de controle da página logo abaixo do H1 / parágrafo inicial
    const panel = document.createElement("div");
    panel.className = "prisma-page-panel";
    panel.innerHTML = `
      <div class="prisma-page-panel__top">
        <div style="display:flex; align-items:center; gap:0.85rem;">
          <div class="prisma-mini-donut" style="width:3.3rem; height:3.3rem;">
            <svg width="52" height="52" viewBox="0 0 52 52" aria-hidden="true">
              <circle cx="26" cy="26" r="20" fill="none" stroke="rgba(148,163,184,0.25)" stroke-width="5"></circle>
              <circle id="prisma-page-donut-ring" cx="26" cy="26" r="20" fill="none" stroke="#0d9488" stroke-width="5"
                stroke-linecap="round" stroke-dasharray="125.66" stroke-dashoffset="125.66" class="prisma-donut-ring"></circle>
            </svg>
            <span id="prisma-page-pct">0%</span>
          </div>
          <div>
            <div style="font-weight:700; font-size:0.85rem;">Progresso desta página</div>
            <div id="prisma-page-count" style="font-size:0.75rem; color:var(--prisma-muted);">0 de 0 itens verificados</div>
          </div>
        </div>
        <div class="prisma-page-panel__actions">
          <button type="button" id="prisma-mark-visible" class="prisma-btn prisma-btn--primary">✓ Marcar visíveis</button>
          <button type="button" id="prisma-clear-page" class="prisma-btn">↺ Limpar página</button>
          <button type="button" id="prisma-toggle-details" class="prisma-btn">▾ Expandir "Como auditar"</button>
          <button type="button" id="prisma-export-page" class="prisma-btn">📋 Copiar Relatório</button>
        </div>
      </div>
      <div class="prisma-filter-bar">
        <div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:0.5rem;">
          <span style="font-size:0.75rem; font-weight:700; color:var(--prisma-muted);">
            Filtrar por Smart Badge (ou clique em qualquer etiqueta nos cards):
          </span>
          <label style="font-size:0.75rem; cursor:pointer; display:inline-flex; align-items:center; gap:0.35rem;">
            <input type="checkbox" id="prisma-only-pending" />
            <span>Mostrar apenas pendentes</span>
          </label>
        </div>
        <div id="prisma-filter-pills" class="prisma-filter-pills"></div>
      </div>
    `;

    const h1 = content.querySelector("h1");
    const firstHr = content.querySelector("hr");
    if (firstHr) {
      firstHr.parentNode.insertBefore(panel, firstHr.nextSibling);
    } else if (h1 && h1.nextSibling) {
      h1.parentNode.insertBefore(panel, h1.nextSibling);
    } else {
      content.prepend(panel);
    }

    function itemIsVisible(li) {
      const cb = li.querySelector('input[type="checkbox"]');
      if (onlyPending && cb && cb.checked) return false;
      if (activeBadgeFilter) {
        const list = JSON.parse(li.dataset.badges || "[]");
        if (!list.includes(activeBadgeFilter)) return false;
      }
      return true;
    }

    function refreshPageState() {
      let done = 0;
      taskItems.forEach((li) => {
        const cb = li.querySelector('input[type="checkbox"]');
        if (cb && cb.checked) done++;
        li.style.display = itemIsVisible(li) ? "" : "none";
      });

      const total = taskItems.length;
      const pct = total ? Math.round((done / total) * 100) : 0;
      const circ = 125.66;
      const ring = document.getElementById("prisma-page-donut-ring");
      if (ring) ring.style.strokeDashoffset = String(circ - (pct / 100) * circ);
      const pctSpan = document.getElementById("prisma-page-pct");
      const cntSpan = document.getElementById("prisma-page-count");
      if (pctSpan) pctSpan.textContent = `${pct}%`;
      if (cntSpan) cntSpan.textContent = `${done} de ${total} itens verificados`;

      // Renderizar pílulas rápidas
      const pillsWrap = document.getElementById("prisma-filter-pills");
      if (pillsWrap) {
        const pills = [];
        pills.push(
          `<button type="button" data-filter="" class="prisma-filter-pill ${!activeBadgeFilter ? "is-active" : ""}">Todos (${total})</button>`
        );
        Array.from(discoveredBadges.keys())
          .slice(0, 8)
          .forEach((b) => {
            const active = activeBadgeFilter === b ? "is-active" : "";
            pills.push(`<button type="button" data-filter="${b.replace(/"/g, "&quot;")}" class="prisma-filter-pill ${active}">${b}</button>`);
          });
        pillsWrap.innerHTML = pills.join("");
        pillsWrap.querySelectorAll("button").forEach((b) => {
          b.addEventListener("click", () => {
            const val = b.getAttribute("data-filter");
            activeBadgeFilter = val ? (activeBadgeFilter === val ? null : val) : null;
            refreshPageState();
          });
        });
      }
    }

    document.getElementById("prisma-only-pending").addEventListener("change", (e) => {
      onlyPending = e.target.checked;
      refreshPageState();
    });

    document.getElementById("prisma-mark-visible").addEventListener("click", () => {
      taskItems.forEach((li) => {
        if (!itemIsVisible(li)) return;
        const cb = li.querySelector('input[type="checkbox"]');
        if (cb) {
          cb.checked = true;
          setCheckedStored(li.dataset.storageKey, true);
          li.classList.add("is-checked");
        }
      });
      refreshPageState();
    });

    document.getElementById("prisma-clear-page").addEventListener("click", () => {
      taskItems.forEach((li) => {
        const cb = li.querySelector('input[type="checkbox"]');
        if (cb) {
          cb.checked = false;
          setCheckedStored(li.dataset.storageKey, false);
          li.classList.remove("is-checked");
        }
      });
      refreshPageState();
    });

    document.getElementById("prisma-toggle-details").addEventListener("click", (e) => {
      allDetailsOpen = !allDetailsOpen;
      content.querySelectorAll("li.prisma-audit-card details").forEach((d) => {
        d.open = allDetailsOpen;
      });
      e.currentTarget.textContent = allDetailsOpen ? '▴ Recolher "Como auditar"' : '▾ Expandir "Como auditar"';
    });

    document.getElementById("prisma-export-page").addEventListener("click", () => {
      const pageTitle = h1 ? h1.textContent.trim() : "Checklist PrismaIHC";
      const lines = [`# Relatório — ${pageTitle}`, ""];
      taskItems.forEach((li) => {
        const cb = li.querySelector('input[type="checkbox"]');
        const badges = JSON.parse(li.dataset.badges || "[]");
        lines.push(`- [${cb && cb.checked ? "x" : " "}] **${extractItemTitle(li)}**`);
        if (badges.length) lines.push(`  _${badges.join(" • ")}_`);
      });
      openReportModal(lines.join("\n"));
    });

    refreshPageState();
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
          <strong style="font-size:1rem;">Prévia do Relatório (.md)</strong>
          <button type="button" id="prisma-modal-close" class="prisma-btn">✕ Fechar</button>
        </div>
        <pre id="prisma-modal-pre"></pre>
        <div style="display:flex; justify-content:flex-end; align-items:center; gap:0.65rem; margin-top:0.85rem;">
          <span id="prisma-copy-ok" style="font-size:0.78rem; color:#0d9488; display:none; font-weight:700;">✓ Copiado!</span>
          <button type="button" id="prisma-modal-copy" class="prisma-btn prisma-btn--primary">📋 Copiar Markdown</button>
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
