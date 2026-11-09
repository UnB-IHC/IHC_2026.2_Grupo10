---
hide:
  - toc
---

# Padrão Editorial da Equipe — PrismaIHC (Grupo 10)

O **PrismaIHC** separa páginas de **`📖 Guia Metodológico`** (concepção, pesquisa e prototipação, sem checkboxes) de páginas de **`📋 Checklist de Auditoria Web`** (critérios verificáveis na interface de qualquer site publicado). Para o fluxo Git completo, consulte o `CONTRIBUTING.md` na raiz do repositório.

## 1. Molde de Página de Checklist (`📋`)

````markdown
---
hide:
  - toc
---

<span class="prisma-pill-tag">📋 Checklist de Auditoria Web • Subtítulo</span>

# Título da Página

Parágrafo único, direto e enxuto (2 a 3 linhas) contextualizando o foco da página [[1]](#ref-1).

---

??? info "Consultar referência rápida — Escala de Severidade de Nielsen (0 a 4)"
    | Nível | Classificação | Critério de Impacto e Prioridade |
    | :---: | :--- | :--- |
    | **0** | **Não é problema** | Não afeta a usabilidade nem a compreensão da tarefa. |
    | **1** | **Problema Cosmético** | Detalhe estético superficial; corrigir apenas se houver tempo disponível. |
    | **2** | **Problema Simples (Menor)** | Pequeno atrito ou dúvida pontual da qual o usuário se recupera facilmente. |
    | **3** | **Problema Grave (Maior)** | Dificulta de forma importante a tarefa, gerando frustração ou risco de abandono. |
    | **4** | **Catástrofe de Usabilidade** | Bloqueia a conclusão da tarefa essencial ou causa perda de dados; correção imediata. |

## Nome da Seção

- [ ] **COD-01: Pergunta curta, direta e verificável na interface?** [[1]](#ref-1)
    - `👤 Leitor de Tela` `⚖️ ABNT NBR 17225:2025` `🛠️ NVDA / VoiceOver`
    ??? info "Como auditar / Passo a passo"
        1. Passo objetivo de verificação.
        2. **✅ Critério de aprovação:** Condição clara para marcar `✓`.

---

## Referências Bibliográficas e Documentais

1. <a id="ref-1"></a> SOBRENOME, Nome. **Título da Obra ou Norma**. Ano. Disponível em: <https://link-oficial>.
````

## 2. Catálogo Oficial de Etiquetas (Filtros Unificados)

Use exatamente estes nomes para manter os menus suspensos (`<select>`) padronizados em todas as páginas:

* **`👤 Persona` (11):** `👤 Leitor de Tela`, `👤 Baixa Visão`, `👤 Daltonismo`, `👤 Surdez / Libras`, `👤 Motora / Teclado`, `👤 Controle por Voz`, `👤 Cognitiva / TDAH`, `👤 TEA / Autismo`, `👤 Dislexia`, `👤 Idoso / Baixo Letramento`, `👤 Epilepsia / Vestibular`.
* **`⚖️ Norma / Base` (10):** `⚖️ ABNT NBR 17225:2025`, `⚖️ ABNT NBR 17060:2022`, `⚖️ WCAG 2.2`, `⚖️ eMAG / Gov.br`, `⚖️ LBI (Lei 13.146/2015)`, `⚖️ Linguagem Simples (Lei 15.263/2025)`, `⚖️ W3C COGA`, `⚖️ Heurísticas de Nielsen`, `⚖️ Kalbach (Jornadas/Canais)`, `⚖️ Service Blueprint (Morgan & Miller)`.
* **`🛠️ Ferramenta` (11):** `🛠️ Inspeção Manual / Heurística`, `🛠️ Teclado (Tab / Esc)`, `🛠️ DevTools (Zoom, Refluxo & Visão)`, `🛠️ WAVE`, `🛠️ Axe DevTools`, `🛠️ Google Lighthouse`, `🛠️ Accessibility Insights`, `🛠️ Colour Contrast Analyser (CCA)`, `🛠️ ASES Web (Gov.br)`, `🛠️ NVDA / VoiceOver`, `🛠️ TalkBack / VoiceOver Mobile`.

!!! tip "Regras essenciais para os filtros e acordeões"
    1. **Sempre inclua `hide: - toc`** no topo do arquivo.
    2. **Apenas um `---` após a introdução:** O primeiro `---` é convertido automaticamente no painel de progresso e dropdowns de filtro.
    3. **Recuo de 4 e 8 espaços:** Recue as etiquetas e o `??? info` com **4 espaços** e os passos internos com **8 espaços**.
