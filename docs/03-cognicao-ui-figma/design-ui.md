---
hide:
  - toc
---

<span class="prisma-pill-tag">📋 Checklist de Auditoria Web • Interface Visual</span>

# Design Visual de Interface (UI)

As decisões visuais de tipografia, uso semântico da cor, diferenciação de estados interativos e conforto espacial determinam se uma interface pode ser percebida e operada com segurança [[1]](#ref-1) [[2]](#ref-2) [[3]](#ref-3). Este checklist avalia a camada de UI diretamente no site renderizado, em complemento às medições normativas da aba *Web & Normas*.

---

??? info "Consultar referência rápida — Escala de Severidade de Nielsen (0 a 4)"
    | Nível | Classificação | Critério de Impacto e Prioridade |
    | :---: | :--- | :--- |
    | **0** | **Não é problema** | Não afeta a usabilidade nem a compreensão da tarefa. |
    | **1** | **Problema Cosmético** | Detalhe estético superficial; corrigir apenas se houver tempo disponível. |
    | **2** | **Problema Simples (Menor)** | Pequeno atrito ou dúvida pontual da qual o usuário se recupera facilmente. |
    | **3** | **Problema Grave (Maior)** | Dificulta de forma importante a tarefa, gerando frustração ou risco de abandono. |
    | **4** | **Catástrofe de Usabilidade** | Bloqueia a conclusão da tarefa essencial ou causa perda de dados; correção imediata. |

## Tipografia, Estados Visuais e Uso da Cor

- [ ] **UI-01: A tipografia apresenta leitura confortável, escala clara entre títulos e parágrafos e alinhamento que facilita a leitura contínua?** [[1]](#ref-1) [[2]](#ref-2)
    - `👤 Baixa Visão` `👤 Dislexia` `⚖️ ABNT NBR 17225:2025` `⚖️ W3C COGA` `🛠️ DevTools (Zoom, Refluxo & Visão)` `🛠️ Inspeção Manual / Heurística`
    ??? info "Como auditar / Passo a passo"
        1. Inspecione blocos de leitura, tabelas e cards verificando tamanho base legível, entrelinhas arejadas e ausência de textos longos totalmente em caixa alta, itálico extenso ou justificado com "rios" de espaço em branco.
        2. Verifique se contêineres de texto não truncam frases essenciais com reticências (`...`) sem forma acessível de ler o conteúdo completo.
        3. **✅ Critério de aprovação:** A tipografia garante leitura fluida, sem truncamentos indevidos nem fadiga visual.

- [ ] **UI-02: Botões, links e campos distinguem visualmente seus estados interativos (`default`, `hover`, `focus`, `active` e `disabled`)?** [[1]](#ref-1) [[2]](#ref-2) [[3]](#ref-3)
    - `👤 Baixa Visão` `👤 Motora / Teclado` `⚖️ WCAG 2.2` `⚖️ ABNT NBR 17225:2025` `🛠️ Teclado (Tab / Esc)` `🛠️ DevTools (Zoom, Refluxo & Visão)` `🛠️ Colour Contrast Analyser (CCA)`
    ??? info "Como auditar / Passo a passo"
        1. Passe o cursor (`hover`) e navegue com `Tab` (`focus`) pelos principais controles da página, observando também abas selecionadas (`active`) e botões desabilitados.
        2. Verifique se a mudança de estado é nítida por borda, contorno, sublinhado ou preenchimento, sem confundir um botão ativo com um inativo.
        3. **✅ Critério de aprovação:** Todos os controles interativos sinalizam visualmente foco, seleção e disponibilidade de forma inequívoca.

- [ ] **UI-03: Links em meio ao texto, alertas, campos obrigatórios e gráficos comunicam informação sem depender exclusivamente da cor?** [[1]](#ref-1) [[2]](#ref-2) [[3]](#ref-3)
    - `👤 Daltonismo` `👤 Baixa Visão` `⚖️ WCAG 2.2` `⚖️ ABNT NBR 17225:2025` `🛠️ DevTools (Zoom, Refluxo & Visão)` `🛠️ Colour Contrast Analyser (CCA)` `🛠️ Google Lighthouse`
    ??? info "Como auditar / Passo a passo"
        1. No DevTools (`Cmd/Ctrl+Shift+P` → *Show Rendering* → *Emulate vision deficiencies*), ative **Blurred vision** e **Achromatopsia** (escala de cinza).
        2. Confira se links dentro de parágrafos têm sublinhado ou destaque não cromático e se status (sucesso/erro/pendente) e gráficos trazem ícones, rótulos ou padrões visuais além da cor.
        3. **✅ Critério de aprovação:** Nenhuma informação, erro ou link perde significado quando vista sem percepção de cores.

- [ ] **UI-04: Os componentes mantêm padrão visual consistente entre telas e oferecem respiro espacial adequado entre ações vizinhas?** [[1]](#ref-1) [[2]](#ref-2)
    - `👤 Motora / Teclado` `👤 TEA / Autismo` `⚖️ ABNT NBR 17225:2025` `⚖️ Heurísticas de Nielsen` `🛠️ DevTools (Zoom, Refluxo & Visão)` `🛠️ Inspeção Manual / Heurística`
    ??? info "Como auditar / Passo a passo"
        1. Compare cards, modais, barras de ação e formulários em diferentes áreas do site.
        2. Verifique se botões adjacentes (ex.: *Salvar* ao lado de *Excluir* ou links de paginação) possuem espaçamento suficiente e hierarquia visual clara (primário vs. secundário).
        3. **✅ Critério de aprovação:** O sistema visual é coeso e o espaçamento evita toques ou cliques acidentais em controles vizinhos.

- [ ] **UI-05: As superfícies de fundo (inclusive em modo claro/escuro, quando existente) são confortáveis e livres de transições visuais intrusivas?** [[1]](#ref-1) [[2]](#ref-2) [[4]](#ref-4)
    - `👤 Epilepsia / Vestibular` `👤 Baixa Visão` `⚖️ ABNT NBR 17225:2025` `⚖️ WCAG 2.2` `🛠️ DevTools (Zoom, Refluxo & Visão)` `🛠️ Inspeção Manual / Heurística`
    ??? info "Como auditar / Passo a passo"
        1. Caso o site ofereça alternância entre tema claro e escuro, teste ambos verificando se textos, ícones e bordas permanecem legíveis sem ofuscamento (*halation*) nem elementos "invisíveis".
        2. Role a página e acione menus/modais observando se efeitos de *parallax*, zoom brusco ou animações decorativas atrapalham a leitura.
        3. **✅ Critério de aprovação:** As camadas visuais mantêm conforto óptico em todos os temas disponíveis e evitam movimentos desnecessários.

---

## Referências Bibliográficas e Documentais

1. <a id="ref-1"></a> W3C. **Web Content Accessibility Guidelines (WCAG) 2.2**. 2023. Disponível em: <https://www.w3.org/TR/WCAG22/>.
2. <a id="ref-2"></a> ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **ABNT NBR 17225:2025 — Acessibilidade em conteúdo e aplicações web — Requisitos**. Rio de Janeiro: ABNT, 2025.
3. <a id="ref-3"></a> MARQUES, Amanda; DEUS, Jeniffer; FERRAZ, Reinaldo. **Correspondência entre os critérios da WCAG 2.2 e os itens da ABNT NBR 17225**. Ceweb.br, 2025. Disponível em: <https://todosnaweb.ceweb.br/publicacoes/wcag-2-2-abnt-17225>.
4. <a id="ref-4"></a> W3C. **Technique C39: Using the CSS prefers-reduced-motion query to prevent motion**. Disponível em: <https://www.w3.org/WAI/WCAG22/Techniques/css/C39>.
