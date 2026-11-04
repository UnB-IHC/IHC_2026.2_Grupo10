---
hide:
  - toc
---

<span class="prisma-pill-tag">📋 Checklist de Auditoria Web • Código, Mídia &amp; Texto</span>

# Código Semântico, Mídia & Conteúdo Claro

A acessibilidade web nasce na árvore semântica do HTML (papel, nome e estado expostos a leitores de tela e controle por voz) aliada a mídias acessíveis e **Linguagem Simples** [[1]](#ref-1) [[3]](#ref-3) [[6]](#ref-6). Combine varredura automática, inspeção manual no DevTools e teste com tecnologia assistiva; quando o site não possuir áudio/vídeo ou formulários, marque **`N/A`**.

---

## Estrutura Semântica HTML

- [ ] **WEB-01: Cada página possui `<title>` único e descritivo e declara o idioma principal (`lang="pt-BR"`) e eventuais trechos em outro idioma?** [[1]](#ref-1) [[2]](#ref-2)
    - `👤 Leitor de Tela` `👤 Cognitiva / TDAH` `⚖️ ABNT NBR 17225:2025` `⚖️ WCAG 2.2` `🛠️ Google Lighthouse` `🛠️ ASES Web (Gov.br)` `🛠️ DevTools (Zoom, Refluxo & Visão)` `🛠️ NVDA / VoiceOver`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17225, itens `5.13.1`, `5.13.2` e `5.13.3`; WCAG 2.2, critérios `2.4.2` (A), `3.1.1` (A) e `3.1.2` (AA).

        1. Abra ao menos três páginas do site e confira se os títulos das abas são distintos e identificam o conteúdo atual.
        2. No DevTools, confirme se `<html>` declara `lang="pt-BR"` e se passagens estrangeiras relevantes possuem `lang` específico (ex.: `lang="en"`).
        3. **✅ Critério de aprovação:** Títulos de página são únicos e o leitor de tela pronuncia cada trecho com a fonética correta.

- [ ] **WEB-02: A página possui um único `<h1>` principal e os demais cabeçalhos (`<h2>`–`<h6>`) seguem hierarquia lógica sem saltos de nível?** [[1]](#ref-1) [[2]](#ref-2)
    - `👤 Leitor de Tela` `👤 Dislexia` `⚖️ ABNT NBR 17225:2025` `⚖️ WCAG 2.2` `🛠️ WAVE` `🛠️ ASES Web (Gov.br)` `🛠️ NVDA / VoiceOver`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17225, itens `5.3.1`, `5.3.2`, `5.3.3` e `5.3.5`; WCAG 2.2, critérios `1.3.1` (A), `2.4.6` (AA) e `2.4.10` (AAA).

        1. Na aba **Structure** do WAVE, confira se há exatamente um `<h1>` e se não ocorrem saltos (ex.: de `<h2>` direto para `<h4>`).
        2. Procure títulos visuais feitos apenas com negrito/`<div>` ou tags `<h*>` usadas só para aumentar fonte; navegue com a tecla `H` no NVDA.
        3. **✅ Critério de aprovação:** A árvore de cabeçalhos lida isoladamente funciona como um sumário fiel da página.

- [ ] **WEB-03: O conteúdo está organizado em regiões semânticas (`header`, `nav`, `main`, `footer`) e oferece link de salto para o conteúdo principal?** [[1]](#ref-1) [[2]](#ref-2)
    - `👤 Leitor de Tela` `👤 Motora / Teclado` `⚖️ ABNT NBR 17225:2025` `⚖️ WCAG 2.2` `🛠️ Accessibility Insights` `🛠️ Teclado (Tab / Esc)` `🛠️ ASES Web (Gov.br)` `🛠️ NVDA / VoiceOver`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17225, itens `5.4.1`, `5.4.2`, `5.4.4`, `5.4.5` e `5.7.12`; WCAG 2.2, critérios `1.3.1` (A), `2.4.1` (A) e `4.1.2` (A).

        1. Ative **Landmarks** no Accessibility Insights e verifique se há um único `<main>` e se múltiplas tags `<nav>` possuem `aria-label` distintos.
        2. Recarregue a página e pressione `Tab`: confira se surge um link *"Pular para o conteúdo principal"* que move o foco direto ao `<main>`.
        3. **✅ Critério de aprovação:** As regiões cobrem a página com nomes claros (tecla `D` no NVDA) e é possível pular blocos repetidos.

- [ ] **WEB-04: Listas e tabelas de dados usam marcação semântica correta (`ul`/`ol`, `th scope`, `caption`), sem usar tabelas apenas para leiaute?** [[1]](#ref-1) [[2]](#ref-2)
    - `👤 Leitor de Tela` `👤 Baixa Visão` `⚖️ ABNT NBR 17225:2025` `⚖️ WCAG 2.2` `🛠️ WAVE` `🛠️ ASES Web (Gov.br)` `🛠️ NVDA / VoiceOver`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17225, itens `5.5.1`, `5.5.2`, `5.6.1`–`5.6.3`, `5.6.5` e Anexo `A.1.8`; WCAG 2.2, critério `1.3.1` (A).

        1. Verifique se agrupamentos de itens usam `<ul>`, `<ol>` ou `<dl>` (e não quebras `<br>` com hífens manuais).
        2. Quando houver tabelas de dados, confirme cabeçalhos `<th scope="col|row">` e navegue com `Ctrl+Alt+Setas` no NVDA; tabelas inexistentes não reprovam o item se as listas estiverem corretas.
        3. **✅ Critério de aprovação:** O leitor anuncia a contagem de itens das listas e lê os cabeçalhos associados às células de tabelas.

- [ ] **WEB-05: Controles interativos priorizam HTML nativo e, quando customizados, expõem papel (`role`), nome e estado (`aria-*`) atualizados?** [[1]](#ref-1) [[3]](#ref-3) [[4]](#ref-4) [[11]](#ref-11)
    - `👤 Leitor de Tela` `👤 Controle por Voz` `⚖️ ABNT NBR 17225:2025` `⚖️ WCAG 2.2` `🛠️ Axe DevTools` `🛠️ Google Lighthouse` `🛠️ DevTools (Zoom, Refluxo & Visão)`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17225, itens `5.13.10`–`5.13.13` e Anexo `A.1.6`; WCAG 2.2, critério `4.1.2` (A); WAI-ARIA 1.2 / APG.

        1. Inspecione sanfonas, abas, menus suspensos, modais e carrosséis no painel **Accessibility** do DevTools e rode o **Axe DevTools**.
        2. Abra e feche os componentes confirmando que `aria-expanded`, `aria-selected` ou `aria-checked` mudam dinamicamente conforme o estado visual.
        3. **✅ Critério de aprovação:** Nenhum controle interativo fica sem papel/nome válido nem anuncia estado defasado.

- [ ] **WEB-06: Links navegam (`<a href>`), botões executam ações (`<button>`) e o nome acessível de cada controle contém o rótulo visível na tela?** [[1]](#ref-1) [[2]](#ref-2) [[11]](#ref-11)
    - `👤 Controle por Voz` `👤 Leitor de Tela` `⚖️ ABNT NBR 17225:2025` `⚖️ WCAG 2.2` `🛠️ Axe DevTools` `🛠️ Google Lighthouse` `🛠️ DevTools (Zoom, Refluxo & Visão)`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17225, itens `5.7.1`, `5.7.2`, `5.8.1`–`5.8.3` e `5.13.7`; WCAG 2.2, critérios `2.5.3` (A) e `4.1.2` (A).

        1. Procure elementos clicáveis construídos com `<div onclick>` ou `<a href="#">` usados indevidamente como botões.
        2. Confira botões apenas de ícone (lupa, fechar, menu) e verifique se controles com texto visível preservam esse texto dentro do `aria-label` (para comando por voz).
        3. **✅ Critério de aprovação:** Todos os controles têm semântica correta e podem ser acionados falando o texto visível na tela.

## Links e Formulários

- [ ] **WEB-07: O texto de cada link deixa claro seu destino (sem "clique aqui" isolado) e avisa quando abre nova aba ou baixa arquivo?** [[1]](#ref-1) [[2]](#ref-2) [[10]](#ref-10)
    - `👤 Leitor de Tela` `👤 Idoso / Baixo Letramento` `⚖️ ABNT NBR 17225:2025` `⚖️ eMAG / Gov.br` `🛠️ NVDA / VoiceOver` `🛠️ WAVE` `🛠️ ASES Web (Gov.br)`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17225, itens `5.7.3`, `5.7.4` e `5.7.6`–`5.7.8`; WCAG 2.2, critério `2.4.4` (A); eMAG 3.1.

        1. Pressione `NVDA+F7` (lista de Links) ou revise os alertas de *Suspicious link text* no WAVE.
        2. Verifique se não há links genéricos ambíguos (*"saiba mais"*, *"acesse"*) apontando para URLs diferentes e se downloads indicam formato/tamanho (ex.: `PDF, 2 MB`).
        3. **✅ Critério de aprovação:** Cada link comunica claramente seu destino e comportamento esperado.

- [ ] **WEB-08: Todo campo possui `<label>` visível associado, grupos usam `fieldset`/`legend`, obrigatórios são claros e dados aceitam `autocomplete`?** [[1]](#ref-1) [[2]](#ref-2)
    - `👤 Leitor de Tela` `👤 Motora / Teclado` `👤 Idoso / Baixo Letramento` `⚖️ ABNT NBR 17225:2025` `⚖️ WCAG 2.2` `🛠️ WAVE` `🛠️ Axe DevTools` `🛠️ Google Lighthouse` `🛠️ ASES Web (Gov.br)` `🛠️ NVDA / VoiceOver`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17225, itens `5.9.1`–`5.9.3` e `5.9.6`–`5.9.8`; WCAG 2.2, critérios `1.3.1` (A), `1.3.5` (AA) e `3.3.2` (A).

        1. Clique no rótulo de cada campo de entrada/busca (o foco deve ir ao campo) e confirme que nenhum campo depende apenas de `placeholder`.
        2. Confira `<fieldset>`/`<legend>` em botões de rádio/checkboxes, indicação explícita de obrigatoriedade e `autocomplete` em dados pessoais.
        3. **✅ Critério de aprovação:** Navegando com `F` no NVDA, todo campo anuncia rótulo, agrupamento, tipo e obrigatoriedade.

- [ ] **WEB-09: Erros de formulário identificam o campo afetado em texto explicando como corrigir, e mensagens de status são lidas via `aria-live`?** [[1]](#ref-1) [[2]](#ref-2)
    - `👤 Leitor de Tela` `👤 Cognitiva / TDAH` `👤 Daltonismo` `⚖️ ABNT NBR 17225:2025` `⚖️ WCAG 2.2` `🛠️ NVDA / VoiceOver` `🛠️ DevTools (Zoom, Refluxo & Visão)`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17225, itens `5.9.9`, `5.9.10` e `5.13.8`; WCAG 2.2, critérios `3.3.1` (A), `3.3.3` (AA) e `4.1.3` (AA).

        1. Submeta campos vazios ou inválidos e verifique se o erro é associado ao campo (`aria-describedby` / `aria-invalid`), em texto e ícone (não só borda vermelha).
        2. Dispare buscas/filtros com o leitor de tela ligado e confirme se resultados dinâmicos (*"5 itens encontrados"*) são anunciados sem mover o foco.
        3. **✅ Critério de aprovação:** Erros e retornos dinâmicos são comunicados em texto claro e anunciados às tecnologias assistivas.

## Imagens, Áudio e Vídeo

- [ ] **WEB-10: Imagens informativas e funcionais possuem `alt` coerente, decorativas usam `alt=""` e não há texto preso em imagem?** [[1]](#ref-1) [[2]](#ref-2) [[5]](#ref-5)
    - `👤 Leitor de Tela` `👤 Baixa Visão` `⚖️ ABNT NBR 17225:2025` `⚖️ WCAG 2.2` `🛠️ WAVE` `🛠️ Google Lighthouse` `🛠️ ASES Web (Gov.br)` `🛠️ DevTools (Zoom, Refluxo & Visão)`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17225, itens `5.2.1` a `5.2.5`; WCAG 2.2, critérios `1.1.1` (A) e `1.4.5` (AA).

        1. Com o WAVE e a Árvore de Decisão do W3C [[5]](#ref-5), audite imagens de conteúdo (descrição fiel), ícones clicáveis (ação realizada), decorativas (`alt=""`) e gráficos complexos (descrição adjacente).
        2. Procure banners com frases renderizadas dentro de JPG/PNG que ficam pixeladas no zoom e invisíveis ao leitor.
        3. **✅ Critério de aprovação:** Nenhuma informação visual relevante se perde ao navegar sem carregar imagens.

- [ ] **WEB-11: Vídeos e áudios oferecem legendas sincronizadas, transcrição, audiodescrição (e Libras quando aplicável), sem som automático?** [[1]](#ref-1) [[2]](#ref-2) [[8]](#ref-8) [[9]](#ref-9)
    - `👤 Surdez / Libras` `👤 Leitor de Tela` `⚖️ ABNT NBR 17225:2025` `⚖️ WCAG 2.2` `🛠️ Teclado (Tab / Esc)` `🛠️ ASES Web (Gov.br)` `🛠️ Inspeção Manual / Heurística`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17225, itens `5.14.1`–`5.14.7`; WCAG 2.2, critérios `1.2.1`–`1.2.6` e `1.4.2` (A); NBR 16452; NBR 15610-3.

        1. Caso o site não possua vídeos nem áudios em seu escopo, marque **`N/A`**.
        2. Nos vídeos existentes, confira legendas descritivas (não apenas automáticas com erros), transcrição textual, audiodescrição para cenas mudas, suporte a Libras e player operável por teclado sem autoplay sonoro > 3 s.
        3. **✅ Critério de aprovação:** Pessoas surdas e pessoas cegas obtêm integralmente o conteúdo audiovisual.

## Texto Adaptável e Linguagem Simples

- [ ] **WEB-12: A página suporta zoom de 200% a 400% (refluxo em `320px`) e ajuste de espaçamento de texto sem rolagem horizontal nem cortes?** [[1]](#ref-1) [[2]](#ref-2)
    - `👤 Baixa Visão` `👤 Dislexia` `⚖️ ABNT NBR 17225:2025` `⚖️ WCAG 2.2` `🛠️ DevTools (Zoom, Refluxo & Visão)` `🛠️ Google Lighthouse`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17225, itens `5.10.4`, `5.12.1`–`5.12.4`, `5.12.6`, `5.12.7` e `5.13.5`; WCAG 2.2, critérios `1.4.4` (AA), `1.4.10` (AA) e `1.4.12` (AA).

        1. Verifique se `<meta name="viewport">` não bloqueia o zoom (`user-scalable=no`) e aplique zoom de 200% e 400% em tela de `1280px` (ou largura `320px` no DevTools).
        2. Teste aumento de espaçamento (`line-height: 1.5`, letras `0.12em`, palavras `0.16em`) observando se textos somem ou sobrepõem caixas vizinhas.
        3. **✅ Critério de aprovação:** Todo o conteúdo reflui em coluna única sem perda de funcionalidade nem sobreposição.

- [ ] **WEB-13: Os textos principais seguem Linguagem Simples — frases curtas em ordem direta, palavras comuns, ideia principal no início e siglas explicadas?** [[1]](#ref-1) [[2]](#ref-2) [[6]](#ref-6) [[7]](#ref-7)
    - `👤 Idoso / Baixo Letramento` `👤 Surdez / Libras` `👤 Dislexia` `⚖️ Linguagem Simples (Lei 15.263/2025)` `⚖️ ABNT NBR 17225:2025` `🛠️ Inspeção Manual / Heurística`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** Lei nº 15.263/2025; ABNT NBR ISO 24495-1:2024; NBR 17225, itens `3.34` e `5.12.10`–`5.12.12`; WCAG 2.2 `3.1.3`–`3.1.5` (AAA).

        1. Avalie três textos centrais do site (capa, instruções de serviço e aviso/erro) quanto às diretrizes da Lei 15.263/2025: voz ativa, frases curtas, uma ideia por parágrafo e listas escaneáveis.
        2. Verifique se siglas trazem significado expandido na primeira ocorrência (importante também para surdos sinalizantes de Libras que têm o português como L2).
        3. **✅ Critério de aprovação:** O leitor localiza, compreende e utiliza a informação na primeira leitura sem ajuda externa.

---

## Referências Bibliográficas e Documentais

1. <a id="ref-1"></a> ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **ABNT NBR 17225:2025**: Acessibilidade em conteúdo e aplicações web: Requisitos. Rio de Janeiro: ABNT, 2025.
2. <a id="ref-2"></a> W3C. **Web Content Accessibility Guidelines (WCAG) 2.2**. W3C Recommendation, 2023. Disponível em: <https://www.w3.org/TR/WCAG22/>.
3. <a id="ref-3"></a> W3C. **Accessible Rich Internet Applications (WAI-ARIA) 1.2**. W3C Recommendation, 2023. Disponível em: <https://www.w3.org/TR/wai-aria-1.2/>.
4. <a id="ref-4"></a> W3C WAI. **ARIA Authoring Practices Guide (APG)**. Disponível em: <https://www.w3.org/WAI/ARIA/apg/>.
5. <a id="ref-5"></a> W3C WAI. **Images Tutorial**: inclui a árvore de decisão do atributo alt. Disponível em: <https://www.w3.org/WAI/tutorials/images/>.
6. <a id="ref-6"></a> BRASIL. **Lei nº 15.263, de 14 de novembro de 2025**. Institui a Política Nacional de Linguagem Simples. Diário Oficial da União, Brasília, 17 nov. 2025.
7. <a id="ref-7"></a> ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **ABNT NBR ISO 24495-1:2024**: Linguagem simples: Parte 1: Princípios e diretrizes norteadores. Rio de Janeiro: ABNT, 2024.
8. <a id="ref-8"></a> ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **ABNT NBR 16452:2016**: Acessibilidade na comunicação: Audiodescrição. Rio de Janeiro: ABNT, 2016.
9. <a id="ref-9"></a> ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **ABNT NBR 15610-3:2016**: Televisão digital terrestre: Acessibilidade: Parte 3: Língua de Sinais (LIBRAS). Rio de Janeiro: ABNT, 2016.
10. <a id="ref-10"></a> BRASIL. Ministério do Planejamento, Orçamento e Gestão. **eMAG: Modelo de Acessibilidade em Governo Eletrônico**. Versão 3.1. Brasília, 2014. Disponível em: <https://emag.governoeletronico.gov.br/>.
11. <a id="ref-11"></a> MOZILLA. **MDN Web Docs: Acessibilidade**. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/Accessibility>.
12. <a id="ref-12"></a> BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021.
13. <a id="ref-13"></a> FIGUEIREDO, Rejane Maria da Costa. **Material de aula da disciplina FGA0173: Interação Humano-Computador**. Brasília: Universidade de Brasília, 2026.
