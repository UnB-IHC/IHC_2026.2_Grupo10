---
hide:
  - toc
---

<span class="prisma-pill-tag">📖 Guia Metodológico • Seleção de Ferramentas</span>

# Comparativo de Ferramentas — Qual Usar e Para Quê?

Nenhuma ferramenta automatizada isolada detecta mais do que uma fração das barreiras reais de acessibilidade, usabilidade e carga cognitiva [[5]](#ref-5). Por isso, os checklists do PrismaIHC unificam no filtro **`🛠️ Ferramenta`** as **11 ferramentas e métodos de auditoria web** abaixo — combinando inspeção humana, extensões técnicas e tecnologias assistivas — além de indicar recursos preventivos para a fase pré-código.

## 1. Matriz das 11 Ferramentas dos Filtros de Auditoria Web (`🛠️ Ferramenta`)

Todas as 11 opções abaixo estão disponíveis de forma padronizada no seletor **`🛠️ Ferramenta`** de todos os checklists do PrismaIHC:

| Opção no Filtro `🛠️ Ferramenta` | Camada de Auditoria | Mais Adequada Para | Limitação Crítica (O que Não Faz) |
| :--- | :--- | :--- | :--- |
| **`🛠️ Inspeção Manual / Heurística`** [[4]](#ref-4) | Avaliação Cognitiva & Fluxo | Avaliar Linguagem Simples, clareza de erros, carga cognitiva (COGA), heurísticas de Nielsen, fluxos e paridade multicanal. | Exige roteiro estruturado de tarefas e julgamento técnico do avaliador. |
| **`🛠️ Teclado (Tab / Esc)`** [[5]](#ref-5) | Operação Sem Mouse | Testar navegabilidade real por `Tab`, `Shift+Tab`, `Enter`, `Espaço`, setas e `Esc`, armadilhas de foco e *skip links*. | Não inspeciona atributos ocultos de ARIA se não for combinado ao leitor de tela. |
| **`🛠️ DevTools (Zoom, Refluxo & Visão)`** [[9]](#ref-9) | Responsividade & Percepção | Simular viewport `320px` (zoom 400%), daltonismo/visão turva, `prefers-reduced-motion`, medir alvos (`24×24 px`) e árvore A11y. | Emulação de tela no desktop complementa, mas não substitui toque real no celular. |
| **`🛠️ WAVE`** [[2]](#ref-2) | Revisão Estrutural Visual | Visualizar sobre a página a árvore `H1–H6`, regiões, `alt` de imagens, rótulos ausentes e links vagos. | Analisa uma tela por vez e não julga se o texto alternativo realmente descreve a imagem. |
| **`🛠️ Axe DevTools`** [[1]](#ref-1) | Auditoria de Código DOM/ARIA | Detectar violações objetivas de HTML semântico, papéis/estados WAI-ARIA, formulários e contraste sem falsos positivos. | Não detecta linguagem complexa, fluxos confusos nem ordem ilógica de leitura. |
| **`🛠️ Google Lighthouse`** [[9]](#ref-9) | Triagem Rápida Nativa | Gerar diagnóstico inicial integrado ao Chrome DevTools (sem extensões) para HTML, contraste, nomes acessíveis e alvos móveis. | Nota `100` cobre só regras automatizáveis (~30–40% das barreiras) e **não** garante acessibilidade real. |
| **`🛠️ Accessibility Insights`** [[6]](#ref-6) | Inspeção Guiada de Foco | Desenhar o mapa visual numerado da ordem de `Tab` (**Tab Stops**) e destacar **Landmarks** e cabeçalhos para evidências. | Requer condução manual do avaliador pelas telas, menus e modais. |
| **`🛠️ Colour Contrast Analyser (CCA)`** [[7]](#ref-7) | Percepção Cromática Exata | Medir com conta-gotas o contraste de textos sobre imagens/gradientes, ícones, bordas de inputs (`1.4.11`) e contorno de foco (`2.4.13`). | Verificação pontual amostra por amostra na tela. |
| **`🛠️ ASES Web (Gov.br)`** [[8]](#ref-8) | Conformidade eMAG 3.1 | Avaliar aderência automática às seções de marcação, comportamento, multimídia e formulários do eMAG em portais públicos. | Analisa o HTML estático inicial (sem interações SPA) e antecede a ABNT NBR 17225:2025. |
| **`🛠️ NVDA / VoiceOver`** [[3]](#ref-3) | Homologação Assistiva Desktop | Ouvir a leitura linear real, navegação por cabeçalhos/marcos, tabelas, formulários e anúncios dinâmicos (`aria-live`). | Exige domínio básico de atalhos e não substitui testes com pessoas cegas usuárias diárias. |
| **`🛠️ TalkBack / VoiceOver Mobile`** [[10]](#ref-10) | Homologação Assistiva Móvel | Validar exploração por toque (*swipe*), alvos móveis, orientação livre e gestos simples em smartphones (NBR 17060). | Requer teste em aparelho Android ou iOS para capturar atritos reais de toque. |

## 2. Ferramentas Preventivas de Concepção & Prototipação (Pré-Código)

Estas duas ferramentas apoiam os **📖 Guias Metodológicos** antes da publicação do site (por isso não aparecem nos filtros de inspeção de páginas já no ar):

| Ferramenta Pré-Código | Onde Entra no Projeto | Papel Preventivo | Limitação |
| :--- | :--- | :--- | :--- |
| **Miro / FigJam** | [Total X](../01-totalx-personas/total-experience.md), [Canvas](../01-totalx-personas/design-empatico-canvas.md) e [Kalbach](../02-jornadas-blueprints/blueprint-situacoes-kalbach.md) | Modelar Personas Ecossistêmicas, Mapas de Empatia, User Flows e Service Blueprints (*As-Is → To-Be*). | Quadro colaborativo de arquitetura; não inspeciona código nem telas publicadas. |
| **Stark / Focus Order (Figma)** | [Prototipação & Handoff no Figma](../03-cognicao-ui-figma/ui-prototipacao-figma.md) | Checar contraste nos *tokens*, simular daltonismo e numerar a ordem de `Tab` e semântica antes do desenvolvimento. | Valida apenas o arquivo `.fig`; exige homologação posterior no navegador. |

## 3. Roteiro Combinado em 4 Camadas para Auditar um Site

<div class="prisma-guide-grid" markdown>

<div class="prisma-guide-card" markdown>
<h3 class="prisma-card-heading--teal">Passo 1 • Triagem Automática</h3>
<span class="prisma-card-subtitle">Código e semântica (Axe + WAVE + Lighthouse / ASES)</span>

Rode **Axe DevTools**, **WAVE** e **Lighthouse** (e o **ASES Web** em portais públicos) nas páginas da amostra para levantar rapidamente imagens sem `alt`, campos sem `<label>`, falhas de ARIA e saltos de `H1–H6` [[1]](#ref-1) [[2]](#ref-2) [[8]](#ref-8) [[9]](#ref-9).
</div>

<div class="prisma-guide-card" markdown>
<h3 class="prisma-card-heading--blue">Passo 2 • Percepção, Zoom &amp; Mobile</h3>
<span class="prisma-card-subtitle">Contraste e refluxo (CCA + DevTools)</span>

Meça com o **CCA** bordas, ícones, foco e imagens de fundo [[7]](#ref-7); no **DevTools**, valide zoom de **200% e 400%** (`320px`), alvos ≥ `24×24 px`, simulação de daltonismo e redução de movimento (`prefers-reduced-motion`).
</div>

<div class="prisma-guide-card" markdown>
<h3 class="prisma-card-heading--purple">Passo 3 • Teclado &amp; Leitores de Tela</h3>
<span class="prisma-card-subtitle">Operação assistiva (Teclado + Insights + NVDA / TalkBack)</span>

Solte o mouse para operar tudo via **Teclado (`Tab`/`Esc`)**, gere o mapa numerado de **Tab Stops** no **Accessibility Insights** [[6]](#ref-6) e homologue a tarefa principal com **NVDA / VoiceOver** e **TalkBack** [[3]](#ref-3) [[10]](#ref-10).
</div>

<div class="prisma-guide-card" markdown>
<h3 class="prisma-card-heading--amber">Passo 4 • Inspeção Manual, COGA &amp; Laudo</h3>
<span class="prisma-card-subtitle">Fluxos, heurísticas e severidade</span>

Execute a **Inspeção Manual / Heurística** avaliando saídas de erro, Linguagem Simples, COGA e paridade entre canais [[4]](#ref-4), registrando falhas com **Severidade (1–4)** nos checklists para exportar o relatório `.md`.
</div>

</div>

---

## Referências Bibliográficas e Documentais

1. <a id="ref-1"></a> DEQUE SYSTEMS. **axe DevTools Documentation**. Disponível em: <https://docs.deque.com/devtools-html/>.
2. <a id="ref-2"></a> WEBAIM. **WAVE Web Accessibility Evaluation Tool**. Disponível em: <https://wave.webaim.org/>.
3. <a id="ref-3"></a> NV ACCESS. **NVDA User Guide**. Disponível em: <https://www.nvaccess.org/help/>.
4. <a id="ref-4"></a> NIELSEN, Jakob. **10 Usability Heuristics for User Interface Design**. Nielsen Norman Group, 1994 (atualizado em 2024). Disponível em: <https://www.nngroup.com/articles/ten-usability-heuristics/>.
5. <a id="ref-5"></a> W3C WAI. **Selecting Web Accessibility Evaluation Tools**. Disponível em: <https://www.w3.org/WAI/test-evaluate/tools/selecting/>.
6. <a id="ref-6"></a> MICROSOFT. **Accessibility Insights for Web**. Disponível em: <https://accessibilityinsights.io/docs/web/overview/>.
7. <a id="ref-7"></a> TPGi. **Colour Contrast Analyser (CCA)**. Disponível em: <https://www.tpgi.com/color-contrast-checker/>.
8. <a id="ref-8"></a> BRASIL. Governo Digital. **ASES — Avaliador e Simulador de Acessibilidade em Sítios**. Disponível em: <https://asesweb.governoeletronico.gov.br/>.
9. <a id="ref-9"></a> GOOGLE. **Chrome DevTools & Lighthouse Accessibility Reference**. Disponível em: <https://developer.chrome.com/docs/lighthouse/accessibility/>.
10. <a id="ref-10"></a> ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **ABNT NBR 17060:2022 — Acessibilidade em aplicativos de dispositivos móveis — Requisitos**. Rio de Janeiro: ABNT, 2022.
