---
hide:
  - toc
---

<span class="prisma-pill-tag">Guia Metodológico • Prototipação &amp; Handoff</span>

# Prototipação Acessível e Handoff no Figma

A prototipação permite prevenir barreiras visuais e de interação antes de escrever código, comunicando à equipe de desenvolvimento cores, alvos, estados de foco, erros, variantes e ordem de teclado [[1]](#ref-1) [[5]](#ref-5) [[7]](#ref-7). Como um protótipo não substitui o DOM real, toda decisão documentada no Figma deve ser homologada depois na aplicação funcional [[2]](#ref-2) [[3]](#ref-3).

## Os 6 Pilares da Documentação Acessível no Figma

<div class="prisma-guide-grid" markdown>

<div class="prisma-guide-card" markdown>
<h3 class="prisma-card-heading--teal">1 • Contraste &amp; Cor Preventivos</h3>
<span class="prisma-card-subtitle">Validação cromática antes do código</span>

* Medir nos *tokens* do Figma o contraste de **4,5:1** para textos comuns e **3:1** para textos grandes, bordas de campos e ícones funcionais (`1.4.3`, `1.4.11`; NBR 17225 `5.11.3`–`5.11.5`) [[1]](#ref-1) [[2]](#ref-2) [[3]](#ref-3).
* Prever indicadores não cromáticos (ícones, sublinhados, padrões) para links, alertas e séries de gráficos (`1.4.1`).
</div>

<div class="prisma-guide-card" markdown>
<h3 class="prisma-card-heading--blue">2 • Alvos &amp; Layout Elástico</h3>
<span class="prisma-card-subtitle">Áreas de clique e adaptação a 200%</span>

* Projetar áreas clicáveis de pelo menos **24 × 24 px CSS** (`2.5.8` AA / NBR `5.8.7`), priorizando **44 × 44 px CSS** (`2.5.5` AAA / NBR `5.8.6`) [[1]](#ref-1) [[2]](#ref-2).
* Usar *Auto Layout* sem alturas fixas rígidas para comportar zoom de 200% (`1.4.4`) e espaçamento textual ampliado (`1.4.12`) sem truncamentos.
</div>

<div class="prisma-guide-card" markdown>
<h3 class="prisma-card-heading--purple">3 • Estados de Foco</h3>
<span class="prisma-card-subtitle">Indicador visível de teclado</span>

* Representar explicitamente a variante `focus` em todos os controles focáveis, distinta de `hover`, `active`, `selected` e `disabled` [[1]](#ref-1) [[5]](#ref-5).
* Garantir contraste mínimo de **3:1** no contorno de foco (`2.4.7` / `2.4.13`) e prever que barras fixas não encubram o item focado (`2.4.11`).
</div>

<div class="prisma-guide-card" markdown>
<h3 class="prisma-card-heading--red">4 • Estados de Erro</h3>
<span class="prisma-card-subtitle">Identificação e correção clara</span>

* Documentar variantes de erro em todos os campos de entrada identificando o campo e explicando textualmente o problema e como corrigir (`3.3.1`, `3.3.3`; NBR 17225 `5.9.9` e `5.9.10`) [[2]](#ref-2).
* Especificar a associação prevista (`aria-describedby`) entre mensagem de erro e campo.
</div>

<div class="prisma-guide-card" markdown>
<h3 class="prisma-card-heading--amber">5 • Componentes &amp; Ordem de Tab</h3>
<span class="prisma-card-subtitle">Variants e sequência lógica de foco</span>

* Padronizar nomes de *Components*, *Variants* e *Component Properties* para manter consistência funcional no Design System [[5]](#ref-5).
* Numerar a sequência de `Tab` em cada frame — inclusive entrada e retorno de foco em modais e menus sobrepostos (`2.4.3`, `2.1.1`; NBR `5.1.4`) [[6]](#ref-6).
</div>

<div class="prisma-guide-card" markdown>
<h3 class="prisma-card-heading--teal">6 • Especificação de Handoff</h3>
<span class="prisma-card-subtitle">Ponte para o código HTML/ARIA</span>

* Anotar elementos semânticos esperados (`<button>`, `<nav>`, `<h1>–<h6>`), nomes acessíveis de botões de ícone e anúncios de status (`4.1.2` e `4.1.3`) [[7]](#ref-7).
* Documentar alternativas estáticas para animações não essenciais (`prefers-reduced-motion: reduce`, Técnica C39) [[4]](#ref-4).
</div>

</div>

## Tabela de Verificação Preventiva Antes do Desenvolvimento

| Item no Arquivo `.fig` | Parâmetro Técnico de Referência | O que Homologar Depois no Navegador |
| :--- | :--- | :--- |
| **Contraste de texto e gráficos** | ≥ **4,5:1** (texto comum) e ≥ **3:1** (texto grande, bordas de campos e ícones funcionais) — NBR 17225 `5.11.3`–`5.11.5` [[2]](#ref-2) [[3]](#ref-3). | Estados reais de CSS (`:hover`, `:focus-visible`, `:disabled`) e textos sobre imagens responsivas. |
| **Área mínima de clique/toque** | Mínimo obrigatório de **24 × 24 px CSS** (`2.5.8` AA / NBR `5.8.7`), priorizando **44 × 44 px CSS** (`2.5.5` AAA / NBR `5.8.6`) [[1]](#ref-1) [[2]](#ref-2). | Área clicável efetiva (`padding`) renderizada em diferentes densidades de tela. |
| **Adaptação tipográfica** | Layout elástico prevendo zoom de 200% e espaçamento `1.4.12` (entrelinha `1.5×`, parágrafo `2×`, letras `0.12×`, palavras `0.16×`). | Refluxo em `320px` CSS (`1.4.10`) sem rolagem horizontal nem cortes (`overflow: hidden`). |
| **Anotações semânticas e ARIA** | Nomes acessíveis contendo o rótulo visível (`2.5.3`) e marcos de região (`<header>`, `<main>`, `<nav>`, `<footer>`) [[7]](#ref-7). | Árvore de acessibilidade no DevTools e leitura real com NVDA / VoiceOver. |

---

## Referências Bibliográficas e Documentais

1. <a id="ref-1"></a> W3C. **Web Content Accessibility Guidelines (WCAG) 2.2**. 2023. Disponível em: <https://www.w3.org/TR/WCAG22/>.
2. <a id="ref-2"></a> ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **ABNT NBR 17225:2025 — Acessibilidade em conteúdo e aplicações web — Requisitos**. Rio de Janeiro: ABNT, 2025.
3. <a id="ref-3"></a> MARQUES, Amanda; DEUS, Jeniffer; FERRAZ, Reinaldo. **Correspondência entre os critérios da WCAG 2.2 e os itens da ABNT NBR 17225**. Ceweb.br, 2025. Disponível em: <https://todosnaweb.ceweb.br/publicacoes/wcag-2-2-abnt-17225>.
4. <a id="ref-4"></a> W3C. **Technique C39: Using the CSS prefers-reduced-motion query to prevent motion**. Disponível em: <https://www.w3.org/WAI/WCAG22/Techniques/css/C39>.
5. <a id="ref-5"></a> FIGMA. **Create and use variants**. Disponível em: <https://help.figma.com/hc/en-us/articles/360056440594-Create-and-use-variants>.
6. <a id="ref-6"></a> FIGMA. **Accessible prototypes in Figma**. Disponível em: <https://help.figma.com/hc/en-us/articles/7810391964695-Accessible-prototypes-in-Figma>.
7. <a id="ref-7"></a> FIGMA. **Add measurements and annotate designs**. Disponível em: <https://help.figma.com/hc/en-us/articles/20774752502935-Add-measurements-and-annotate-designs>.
