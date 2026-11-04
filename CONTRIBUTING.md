# Guia de Contribuição e Padrão Editorial — PrismaIHC (Grupo 10 • IHC 2026.2)

Este documento define o fluxo de trabalho oficial no GitHub, a arquitetura de páginas (`📖 Guias` vs. `📋 Checklists`) e os moldes padronizados em Markdown para todos os integrantes do **Grupo 10**.

---

## 1. Estratégia de Branches

Nosso repositório utiliza **3 níveis de branches**:
1. **`main`**: Versão final estável publicada automaticamente no GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`).
2. **`develop`**: Branch central de integração onde **todas as entregas e melhorias submetem seus Pull Requests (PRs)** antes de subir para a `main`.
3. **`sprint/XX-tema`** *(entregas temáticas)* ou **`refactor/...` / `fix/...`** *(padronização e evolução)*: Branches de trabalho criadas sempre **a partir da `develop`**.

### Histórico das Branches por Sprint

| Sprint (Milestone) | Nome da Branch | Pasta Principal |
| :--- | :--- | :--- |
| **Sprint 00** — Fundação & Repositório | `sprint/00-fundacao-github-pages` | Raiz + estrutura base `docs/` |
| **Sprint 01** — Total X & Design Empático | `sprint/01-totalx-design-empatico` | `docs/01-totalx-personas/` |
| **Sprint 02** — Personas & Ecossistêmicas | `sprint/02-personas-ecossistemicas` | `docs/01-totalx-personas/` |
| **Sprint 03** — Jornadas & Omnicanalidade | `sprint/03-jornadas-omnicanalidade` | `docs/02-jornadas-blueprints/` |
| **Sprint 04** — Service Blueprints | `sprint/04-service-blueprints` | `docs/02-jornadas-blueprints/` |
| **Sprint 05** — Cognição, UI & Figma | `sprint/05-cognicao-ui-figma` | `docs/03-cognicao-ui-figma/` |
| **Sprint 06** — Web, Conteúdo & Normas | `sprint/06-web-conteudo-normas` | `docs/04-web-normas/` |
| **Sprint 07** — Ferramentas Avaliadas | `sprint/07-ferramentas-avaliadas` | `docs/05-ferramentas/` |
| **Sprint 08** — Heurísticas de Nielsen | `sprint/08-heuristicas-nielsen` | `docs/03-cognicao-ui-figma/` |

> **Regra de ouro:** Alinhe alterações globais em `mkdocs.yml`, `docs/stylesheets/extra.css` ou `docs/javascripts/auditoria.js` com a revisão do repositório para evitar conflitos de merge.

---

## 2. Fluxo no Terminal

```bash
# 1. Atualizar a develop local e criar sua branch de trabalho
git fetch origin
git checkout develop
git pull origin develop
git checkout -b fix/nome-da-melhoria

# 2. Validar o build estrito localmente antes de subir
mkdocs build --strict

# 3. Registrar commit semântico e enviar para abrir PR na develop
git add docs/pasta/seu-arquivo.md
git commit -m "docs: atualiza criterios e referencias do tema X"
git push -u origin fix/nome-da-melhoria
```

---

## 3. Arquitetura Editorial: `📖 Guia Metodológico` vs. `📋 Checklist de Auditoria Web`

Para manter o site enxuto, visualmente limpo e 100% aplicável a **qualquer site publicado**:
- **`📖 Guia Metodológico` (sem checkboxes `- [ ]`):** Usado para processos internos da equipe, descoberta, personas, mapeamento *As-Is → To-Be*, prototipação no Figma e tutoriais de ferramentas. Estruturado com cards `.prisma-guide-card` e tabelas concisas.
- **`📋 Checklist de Auditoria Web` (com `- [ ]`):** Usado exclusivamente para critérios inspecionáveis diretamente na interface/código de um site no ar. O motor `auditoria.js` converte cada item automaticamente em **card acordeão expansível pelo título**, com botões `✓` / `✕` / `N/A`, severidade de Nielsen (1–4) e cálculo nos Donuts SVG.

### 3.1. Molde Oficial — Página de `📋 Checklist de Auditoria Web`

````markdown
---
hide:
  - toc
---

<span class="prisma-pill-tag">📋 Checklist de Auditoria Web • Subtítulo do Eixo</span>

# Título da Página

Parágrafo único, direto e enxuto (2 a 3 linhas) contextualizando o foco da página [[1]](#ref-1).

---

## Nome da Subcategoria

- [ ] **COD-01: Pergunta curta, direta e verificável na interface do site?** [[1]](#ref-1)
    - `👤 Leitor de Tela` `⚖️ ABNT NBR 17225:2025` `🛠️ NVDA / VoiceOver`
    ??? info "Como auditar / Passo a passo"
        1. Descreva de forma objetiva como inspecionar este item na prática.
        2. **✅ Critério de aprovação:** Indique claramente o que aprova o critério.

---

## Referências Bibliográficas e Documentais

1. <a id="ref-1"></a> SOBRENOME, Nome. **Título da Obra ou Norma**. Ano. Disponível em: <https://link-oficial>.
````

> **Regras técnicas obrigatórias nos checklists:**
> 1. **Sempre inclua `hide: - toc`** no topo para manter apenas o menu lateral esquerdo e não duplicar índices.
> 2. **O primeiro `---`** logo após a introdução é substituído automaticamente pelo painel de conformidade e pelos **4 seletores Dropdown**.
> 3. **Recuo exato de 4 e 8 espaços:** A linha de badges (``    - `👤 ...` ``) e o `    ??? info` devem ter **4 espaços** de recuo; os passos internos da gaveta devem ter **8 espaços**.

### 3.2. Molde Oficial — Página de `📖 Guia Metodológico`

````markdown
---
hide:
  - toc
---

<span class="prisma-pill-tag">📖 Guia Metodológico • Etapa do Processo</span>

# Título do Guia

Parágrafo introdutório enxuto (2 a 3 linhas) apresentando a aplicação prática do método [[1]](#ref-1).

## Diretrizes Principais

<div class="prisma-guide-grid" markdown>

<div class="prisma-guide-card" markdown>
<h3 class="prisma-card-heading--teal">1 • Título Principal Colorido</h3>
<span class="prisma-card-subtitle">Subtítulo curto complementar</span>

* **Ponto-chave:** Orientação direta e aplicável [[1]](#ref-1).
</div>

<div class="prisma-guide-card" markdown>
<h3 class="prisma-card-heading--blue">2 • Segundo Pilar</h3>
<span class="prisma-card-subtitle">Subtítulo curto complementar</span>

* **Ponto-chave:** Orientação direta e aplicável [[1]](#ref-1).
</div>

</div>

---

## Referências Bibliográficas e Documentais

1. <a id="ref-1"></a> SOBRENOME, Nome. **Título da Obra ou Norma**. Ano. Disponível em: <https://link-oficial>.
````

*(Cores disponíveis para o `<h3>` dos cards: `--teal`, `--blue`, `--purple`, `--amber` e `--red`. Para grades de 3 colunas, use `<div class="prisma-guide-grid prisma-guide-grid--3" markdown>`).*

---

## 4. Catálogo Unificado de Etiquetas dos Filtros (`MASTER_FILTERS`)

Para evitar opções duplicadas nos menus suspensos, use **exatamente** a grafia abaixo nas tags dos checklists:

- **`👤 Persona` (11 perfis):**
  `` `👤 Leitor de Tela` `` • `` `👤 Baixa Visão` `` • `` `👤 Daltonismo` `` • `` `👤 Surdez / Libras` `` • `` `👤 Motora / Teclado` `` • `` `👤 Controle por Voz` `` • `` `👤 Cognitiva / TDAH` `` • `` `👤 TEA / Autismo` `` • `` `👤 Dislexia` `` • `` `👤 Idoso / Baixo Letramento` `` • `` `👤 Epilepsia / Vestibular` ``
- **`⚖️ Norma / Base` (10 referenciais):**
  `` `⚖️ ABNT NBR 17225:2025` `` • `` `⚖️ ABNT NBR 17060:2022` `` • `` `⚖️ WCAG 2.2` `` • `` `⚖️ eMAG / Gov.br` `` • `` `⚖️ LBI (Lei 13.146/2015)` `` • `` `⚖️ Linguagem Simples (Lei 15.263/2025)` `` • `` `⚖️ W3C COGA` `` • `` `⚖️ Heurísticas de Nielsen` `` • `` `⚖️ Kalbach (Jornadas/Canais)` `` • `` `⚖️ Service Blueprint (Morgan & Miller)` ``
- **`🛠️ Ferramenta` (11 ferramentas/métodos de auditoria web):**
  `` `🛠️ Inspeção Manual / Heurística` `` • `` `🛠️ Teclado (Tab / Esc)` `` • `` `🛠️ DevTools (Zoom, Refluxo & Visão)` `` • `` `🛠️ WAVE` `` • `` `🛠️ Axe DevTools` `` • `` `🛠️ Google Lighthouse` `` • `` `🛠️ Accessibility Insights` `` • `` `🛠️ Colour Contrast Analyser (CCA)` `` • `` `🛠️ ASES Web (Gov.br)` `` • `` `🛠️ NVDA / VoiceOver` `` • `` `🛠️ TalkBack / VoiceOver Mobile` ``

---

## 5. Revisão e Publicação (`develop` → `main`)

1. Abra o Pull Request da sua branch apontando para **`base: develop`**.
2. Após revisão e merge na `develop`, a publicação em produção é feita via Pull Request de release **`base: main` ← `compare: develop`**, acionando automaticamente o deploy do GitHub Pages.
