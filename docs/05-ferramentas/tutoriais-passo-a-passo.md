---
hide:
  - toc
---

<span class="prisma-pill-tag">📖 Guia Metodológico • Bancada Prática</span>

# Testes Práticos de Ferramentas & Passo a Passo

Esta página apresenta o guia completo e os comentários críticos das **11 ferramentas e métodos de auditoria web** integrados ao filtro **`🛠️ Ferramenta`** dos checklists — além do plugin preventivo **Stark no Figma** — cobrindo de ponta a ponta os testes da WCAG 2.2 [[1]](#ref-1), ABNT NBR 17225:2025 [[2]](#ref-2), ABNT NBR 17060:2022 [[13]](#ref-13), LBI [[3]](#ref-3) e Governo Digital [[4]](#ref-4).

---

## Parte A — As 11 Ferramentas dos Filtros de Auditoria Web (`🛠️ Ferramenta`)

### 1. Inspeção Manual / Heurística — `🛠️ Inspeção Manual / Heurística` [[4]](#ref-4) [[14]](#ref-14)

* **🎯 Adequação principal:** Avaliar aspectos que nenhum robô compreende: clareza de fluxos, Heurísticas de Nielsen, carga cognitiva (W3C COGA), Linguagem Simples (Lei 15.263/2025), prevenção/recuperação de erros e paridade omnicanal.
* **🧪 Comentário crítico:** É onde surgem as barreiras mais graves de abandono de tarefa (jargões, perda de dados em formulário, falta de botão voltar ou suporte inacessível), devendo sempre ser guiada por tarefas reais e perfis de personas.

??? info "Passo a passo para a Inspeção Manual / Heurística"
    1. Escolha de **2 a 3 tarefas críticas** do site (ex.: buscar informação/serviço, preencher cadastro ou formulário com erro intencional, acionar ajuda/suporte).
    2. Percorra cada tarefa observando visibilidade de etapa, vocabulário simples, saídas de emergência (voltar/cancelar/desfazer) e clareza das mensagens.
    3. Ao encontrar violação nos checklists, clique em **✕**, classifique a **Severidade de Nielsen (1 a 4)** e anote a URL/componente exato.

### 2. Navegação por Teclado — `🛠️ Teclado (Tab / Esc)` [[1]](#ref-1) [[2]](#ref-2)

* **🎯 Adequação principal:** Homologar operabilidade sem mouse (`2.1.1`), ausência de armadilhas (`2.1.2`), link de pular para o conteúdo (`2.4.1`), ordem lógica (`2.4.3`) e foco visível não encoberto (`2.4.7`, `2.4.11`, `2.4.13`).
* **🧪 Comentário crítico:** É o teste manual mais rápido e revelador de acessibilidade técnica: em menos de 3 minutos expõe menus inacessíveis, `<div>` clicáveis que não recebem foco e modais que prendem o usuário.

??? info "Passo a passo para auditar via Teclado (Tab / Esc)"
    1. Recarregue a página, solte o mouse e pressione `Tab` logo no início para verificar se surge o atalho **"Pular para o conteúdo principal"**.
    2. Avance com `Tab` e retroceda com `Shift + Tab` por toda a tela: confira se o contorno de foco é sempre visível e nunca fica escondido atrás de cabeçalhos ou banners fixos.
    3. Acione botões com `Enter`/`Espaço`, navegue por abas/menus com setas e abra modais conferindo se `Esc` fecha a janela devolvendo o foco ao botão de origem.

### 3. Navegador DevTools — `🛠️ DevTools (Zoom, Refluxo & Visão)` [[7]](#ref-7) [[15]](#ref-15)

* **🎯 Adequação principal:** Testar refluxo responsivo a 400% (`320px` CSS), zoom de 200%, dimensões de alvos clicáveis (`24×24 px`), preferência `prefers-reduced-motion`, árvore de acessibilidade e simulação de deficiências visuais.
* **🧪 Comentário crítico:** Nativo no Chrome, Edge e Firefox, permite validar critérios visuais, motores e vestibulares da WCAG 2.2 sem instalar nada externo.

??? info "Passo a passo para usar o DevTools (Zoom, Refluxo & Visão)"
    1. Pressione `F12` e ative a barra de dispositivos (`Ctrl + Shift + M`), ajustando a largura para **`320px` × `640px`** (equivalente a 400% de zoom em `1280px`) para verificar se não há rolagem horizontal nem texto cortado.
    2. Use o seletor de inspeção (`Ctrl + Shift + C`) sobre botões e ícones para confirmar área computada mínima de **`24 × 24 px`** (ideal `44 × 44 px`).
    3. Abra o menu ` Ctrl + Shift + P ` → digite **Rendering**: teste **Emulate prefers-reduced-motion: reduce** e **Emulate vision deficiencies** (protanopia, deuteranopia, tritanopia, acromatopsia e visão turva).

### 4. WAVE — Web Accessibility Evaluation Tool — `🛠️ WAVE` [[6]](#ref-6)

* **🎯 Adequação principal:** Inspeção visual didática da árvore de cabeçalhos (`H1–H6`), regiões semânticas, textos alternativos (`alt`), rótulos de formulário e links ambíguos.
* **🧪 Comentário crítico:** Excelente para alinhar designers, redatores e desenvolvedores pelos ícones aplicados diretamente sobre a página; porém exige revisão humana para julgar se o texto do `alt` realmente descreve a imagem.

??? info "Passo a passo para usar o WAVE"
    1. Clique no ícone da extensão **WAVE** no navegador (ou informe a URL em `wave.webaim.org` para páginas públicas).
    2. Na aba **Details**, revise todos os ícones vermelhos (erros críticos) e amarelos (alertas de links redundantes, PDFs ou textos suspeitos).
    3. Abra a aba **Structure** para conferir se `<header>`, `<nav>`, `<main>`, `<footer>` e a sequência `H1 → H2 → H3` estão corretos e sem saltos.

### 5. Axe DevTools (Deque) — `🛠️ Axe DevTools` [[5]](#ref-5)

* **🎯 Adequação principal:** Triagem técnica rigorosa de HTML semântico, papéis/estados/propriedades WAI-ARIA (`4.1.2`), associação de `<label>`, idioma `lang` e contraste automático direto no DOM renderizado.
* **🧪 Comentário crítico:** Referência de mercado pela política de baixíssimo índice de falsos positivos (funciona inclusive em SPAs dinâmicas após abrir modais ou estados de erro), mas cobre apenas regras verificáveis por código.

??? info "Passo a passo para usar o Axe DevTools"
    1. Instale a extensão gratuita **axe DevTools** no Chrome ou Edge.
    2. Abra a página (inclusive após abrir um modal ou disparar validação de formulário), pressione `F12` e selecione a aba **axe DevTools**.
    3. Clique em **Scan ALL of my page**, use **Highlight** para localizar o elemento na tela e leia a recomendação técnica do nó no DOM.

### 6. Google Lighthouse — `🛠️ Google Lighthouse` [[7]](#ref-7)

* **🎯 Adequação principal:** Diagnóstico automatizado rápido (nota 0 a 100) já embutido no Chrome/Edge para checar metadados (`<title>`, `lang`, `meta viewport` sem trava de zoom), nomes acessíveis, contraste básico e alvos móveis.
* **🧪 Comentário crítico:** Ótimo como termômetro inicial e comparativo entre versões, mas **tirar nota 100 não significa site acessível**: ele testa apenas uma fração automatizável dos critérios e sempre exige os testes manuais ao lado.

??? info "Passo a passo para usar o Google Lighthouse"
    1. Abra a página em uma janela anônima do Chrome ou Edge (para extensões não alterarem o DOM) e pressione `F12`.
    2. Na aba **Lighthouse**, marque a categoria **Accessibility**, escolha **Mobile** (mais rigoroso para alvos de toque e viewport) ou **Desktop** e clique em **Analyze page load**.
    3. Expanda **Additional items to manually check** abaixo da nota para não ignorar os pontos pendentes de revisão humana.

### 7. Accessibility Insights for Web — `🛠️ Accessibility Insights` [[8]](#ref-8)

* **🎯 Adequação principal:** Desenhar visualmente a rota numerada da tecla `Tab` (**Tab Stops**) e destacar marcos de região (**Landmarks**) e cabeçalhos na tela.
* **🧪 Comentário crítico:** É a melhor ferramenta para gerar capturas de tela comprobatórias em relatórios de auditoria, deixando visível para qualquer leitor quando o foco pula áreas, some ou fica preso.

??? info "Passo a passo para usar o Accessibility Insights"
    1. Instale a extensão **Accessibility Insights for Web** (Microsoft) e clique no ícone sobre a página avaliada.
    2. Selecione **Ad hoc tools → Tab stops**, ative a chave e pressione `Tab` pela página: círculos e linhas numeradas desenharão o caminho exato do foco.
    3. No mesmo painel, ative **Landmarks** e **Headings** para inspecionar visualmente as regiões e níveis de título.

### 8. Colour Contrast Analyser (CCA — TPGi) — `🛠️ Colour Contrast Analyser (CCA)` [[9]](#ref-9)

* **🎯 Adequação principal:** Medir com conta-gotas o contraste exato de elementos que varredores automáticos deixam passar: ícones funcionais, bordas de inputs, estados `:hover`/`:focus` e texto sobre fotos ou gradientes.
* **🧪 Comentário crítico:** Indispensável para comprovar conformidade nos critérios `1.4.3` (**4,5:1** texto normal / **3:1** texto grande), `1.4.11` (**3:1** componentes e gráficos) e `2.4.13` (**3:1** indicador de foco).

??? info "Passo a passo para usar o CCA"
    1. Instale o aplicativo gratuito **Colour Contrast Analyser (CCA)** no Windows ou macOS.
    2. Clique no conta-gotas de **Cor do primeiro plano** sobre o pixel mais claro/crítico da letra, ícone, borda ou anel de foco, e no de **Cor do fundo** na área adjacente.
    3. Verifique se a razão calculada aprova os indicadores **1.4.3 (AA)** e **1.4.11 (AA)**.

### 9. ASES Web (Gov.br / eMAG) — `🛠️ ASES Web (Gov.br)` [[10]](#ref-10)

* **🎯 Adequação principal:** Avaliar páginas públicas quanto às recomendações brasileiras do **eMAG 3.1** (atalhos e estrutura de marcação, links, tabelas, formulários, multimídia e página/declaração de acessibilidade).
* **🧪 Comentário crítico:** Essencial em auditorias de órgãos governamentais e portais institucionais no Brasil, mas avalia apenas o HTML estático entregue pelo servidor (não executa fluxos SPA em React/Vue) nem substitui a nova ABNT NBR 17225:2025.

??? info "Passo a passo para usar o ASES Web"
    1. Acesse <https://asesweb.governoeletronico.gov.br/> e informe a URL pública (ou cole o código-fonte HTML renderizado na aba **Código Fonte**).
    2. Clique em **Executar** e inspecione os erros e avisos agrupados por seção (*Marcação, Comportamento, Conteúdo/Informação, Apresentação, Multimídia e Formulários*).

### 10. Leitores de Tela Desktop — `🛠️ NVDA / VoiceOver` [[11]](#ref-11)

* **🎯 Adequação principal:** Homologar na prática a experiência não visual: anúncio de nome/papel/estado (`4.1.2`), navegação rápida por cabeçalhos e regiões, leitura de tabelas, erros de formulário e mensagens dinâmicas (`4.1.3` / `aria-live`).
* **🧪 Comentário crítico:** O **Visualizador de Fala** do NVDA (ou legenda do VoiceOver) permite documentar literalmente o que é lido (ex.: *"botão sem rótulo"*); complementa, mas nunca substitui testes com pessoas cegas experientes.

??? info "Passo a passo para auditar com NVDA / VoiceOver"
    1. No Windows, abra o **NVDA** gratuito (`Ctrl + Alt + N`) e ative *Menu NVDA (`Insert + N`) → Ferramentas → Visualizador de fala*; no macOS, ative o **VoiceOver** (`Cmd + F5`).
    2. Navegue pela página usando os atalhos reais de varredura: `H` (cabeçalhos), `D` (marcos/regiões), `F` (campos de formulário), `B` (botões) e `Insert + F7` (lista de links fora de contexto).
    3. Submeta um formulário com erro e filtre uma busca para confirmar se os avisos são anunciados sem precisar caçá-los pela tela.

### 11. Tecnologias Assistivas Móveis — `🛠️ TalkBack / VoiceOver Mobile` [[13]](#ref-13)

* **🎯 Adequação principal:** Validar o site ou web-app diretamente no celular conforme a **ABNT NBR 17060:2022**: gestos de deslizar (*swipe*), alvos de toque confortáveis, rotação retrato/paisagem, teclados virtuais (`inputmode`) e ausência de gestos multiponto obrigatórios.
* **🧪 Comentário crítico:** Muitas falhas graves de menus *hambúrguer*, modais móveis e carrosséis só aparecem ao testar no navegador móvel real com TalkBack (Android) ou VoiceOver (iOS).

??? info "Passo a passo para auditar com TalkBack / VoiceOver Mobile"
    1. Ative o **TalkBack** (Android: *Configurações → Acessibilidade → TalkBack*) ou o **VoiceOver** (iOS: *Ajustes → Acessibilidade → VoiceOver*) no smartphone.
    2. Abra o site no navegador móvel e deslize um dedo para a direita/esquerda para percorrer todos os elementos na ordem lógica, dando **toque duplo** para acionar botões e menus.
    3. Gire o aparelho para a horizontal (paisagem) e amplie a fonte do sistema para verificar se o layout permanece íntegro e operável.

---

## Parte B — Ferramenta Preventiva de Protótipo (Pré-Código)

### 12. Stark no Figma (Apoio ao Guia de Prototipação) [[12]](#ref-12)

* **🎯 Adequação principal:** Prevenir falhas de contraste, tipografia mínima e dependência exclusiva de cor ainda no arquivo `.fig`, antes do handoff para o desenvolvimento.
* **🧪 Comentário crítico:** Reduz drasticamente o custo de correção ao barrar combinações inacessíveis na fase de UI, devendo ser combinado às anotações de foco e ordem de `Tab` do [Guia de Prototipação no Figma](../03-cognicao-ui-figma/ui-prototipacao-figma.md).

??? info "Passo a passo para usar o Stark no Figma"
    1. No arquivo do projeto no Figma, abra **Plugins → Stark**.
    2. Selecione textos, botões, ícones ou *Frames* e utilize **Contrast** (validando `4,5:1` e `3:1`) e **Vision Simulator** (testando protanopia, deuteranopia e acromatopsia).

---

## Referências Bibliográficas e Documentais

1. <a id="ref-1"></a> W3C WAI. **Web Content Accessibility Guidelines (WCAG) 2.2**. 2023. Disponível em: <https://www.w3.org/TR/WCAG22/>.
2. <a id="ref-2"></a> ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **ABNT NBR 17225:2025 — Acessibilidade em conteúdo e aplicações web — Requisitos**. Rio de Janeiro: ABNT, 2025.
3. <a id="ref-3"></a> BRASIL. **Lei nº 13.146, de 6 de julho de 2015** (Lei Brasileira de Inclusão da Pessoa com Deficiência).
4. <a id="ref-4"></a> BRASIL. Governo Digital. **Guia de Boas Práticas para Acessibilidade Digital**. 2023. Disponível em: <https://www.gov.br/governodigital/>.
5. <a id="ref-5"></a> DEQUE SYSTEMS. **axe DevTools Documentation**. Disponível em: <https://docs.deque.com/devtools-html/>.
6. <a id="ref-6"></a> WEBAIM. **WAVE Web Accessibility Evaluation Tool**. Disponível em: <https://wave.webaim.org/>.
7. <a id="ref-7"></a> GOOGLE. **Lighthouse Accessibility Audits**. Disponível em: <https://developer.chrome.com/docs/lighthouse/accessibility/>.
8. <a id="ref-8"></a> MICROSOFT. **Accessibility Insights for Web**. Disponível em: <https://accessibilityinsights.io/docs/web/overview/>.
9. <a id="ref-9"></a> TPGi. **Colour Contrast Analyser (CCA)**. Disponível em: <https://www.tpgi.com/color-contrast-checker/>.
10. <a id="ref-10"></a> BRASIL. Governo Digital. **ASES — Avaliador e Simulador de Acessibilidade em Sítios**. Disponível em: <https://asesweb.governoeletronico.gov.br/>.
11. <a id="ref-11"></a> NV ACCESS. **NVDA User Guide**. Disponível em: <https://www.nvaccess.org/help/>.
12. <a id="ref-12"></a> STARK. **Stark Accessibility Tools for Figma**. Disponível em: <https://www.getstark.co/>.
13. <a id="ref-13"></a> ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **ABNT NBR 17060:2022 — Acessibilidade em aplicativos de dispositivos móveis — Requisitos**. Rio de Janeiro: ABNT, 2022.
14. <a id="ref-14"></a> NIELSEN, Jakob. **Severity Ratings for Usability Problems**. Nielsen Norman Group, 1994. Disponível em: <https://www.nngroup.com/articles/how-to-rate-the-severity-of-usability-problems/>.
15. <a id="ref-15"></a> CHROME FOR DEVELOPERS. **Accessibility features Reference — Chrome DevTools**. Disponível em: <https://developer.chrome.com/docs/devtools/accessibility/reference/>.
