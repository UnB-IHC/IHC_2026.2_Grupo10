---
hide:
  - toc
---

<span class="prisma-pill-tag">Checklist de Auditoria Web • Marco Legal &amp; Técnico</span>

# Normas ABNT NBR 17225:2025, NBR 17060 e WCAG 2.2

Este checklist consolida os requisitos normativos e legais verificáveis no site segundo a **ABNT NBR 17225:2025** [[1]](#ref-1), os **9 novos critérios da WCAG 2.2** [[3]](#ref-3) [[4]](#ref-4), a **ABNT NBR 17060:2022** (web móvel/apps) [[2]](#ref-2), o **eMAG 3.1** e a **Lei Brasileira de Inclusão (art. 63)** [[6]](#ref-6) [[9]](#ref-9).

---

??? info "Consultar referência rápida — Normas e Níveis de Conformidade (NBR 17225 / WCAG 2.2)"
    | Norma / Marco | Escopo | Aplicação Prática na Auditoria |
    | :--- | :--- | :--- |
    | **ABNT NBR 17225:2025** [[1]](#ref-1) | Conteúdo e aplicações web (16 temas + Anexos A, B e C) | **Conformidade Regular** = 100% dos requisitos (WCAG AA). **Conformidade Plena** = requisitos + recomendações (ou justificativa técnica). |
    | **ABNT NBR 17060:2022** [[2]](#ref-2) | Web móvel, web apps e aplicativos nativos/híbridos | Toque, orientação de tela, fonte do sistema e leitores nativos (TalkBack / VoiceOver). |
    | **WCAG 2.2 (W3C, 2023)** [[3]](#ref-3) [[4]](#ref-4) | Padrão internacional A, AA e AAA | Acrescenta 9 critérios de foco, alvo mínimo, arrastar, entrada redundante, ajuda consistente e autenticação acessível. |
    | **LBI, LAI, Decreto 5.296 e eMAG** [[6]](#ref-6)–[[9]](#ref-9) | Obrigação legal no Brasil (empresas e órgãos públicos) | Fundamentam a exigência jurídica de acessibilidade, atalhos/barra de acessibilidade e canal de relato. |

??? info "Consultar referência rápida: Escala de Severidade de Nielsen (0 a 4)"
    | Nível | Classificação | Critério de Impacto e Prioridade |
    | :---: | :--- | :--- |
    | **0** | **Não é problema** | Não afeta a usabilidade nem a compreensão da tarefa. |
    | **1** | **Problema Cosmético** | Detalhe estético superficial; corrigir apenas se houver tempo disponível. |
    | **2** | **Problema Simples (Menor)** | Pequeno atrito ou dúvida pontual da qual o usuário se recupera facilmente. |
    | **3** | **Problema Grave (Maior)** | Dificulta de forma importante a tarefa, gerando frustração ou risco de abandono. |
    | **4** | **Catástrofe de Usabilidade** | Bloqueia a conclusão da tarefa essencial ou causa perda de dados; correção imediata. |

## Página de Acessibilidade e Itens Críticos (Anexo A)

- [ ] **NBR-01: O site disponibiliza página/declaração de acessibilidade, recursos de acesso rápido (eMAG) e canal acessível para relatar barreiras?** [[1]](#ref-1) [[5]](#ref-5) [[6]](#ref-6) [[7]](#ref-7) [[8]](#ref-8) [[9]](#ref-9)
    - `Perfil: Leitor de Tela` `Perfil: Baixa Visão` `Perfil: Surdez / Libras` `Base: ABNT NBR 17225:2025` `Base: LBI (Lei 13.146/2015)` `Base: eMAG / Gov.br` `Ferramenta: ASES Web (Gov.br)` `Ferramenta: Inspeção Manual / Heurística` `Ferramenta: Teclado (Tab / Esc)`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17225, Seção 4 e Anexo C; LBI (Lei 13.146/2015, art. 63); LAI (Lei 12.527/2011, art. 8º); Decreto 5.296/2004 (art. 47); eMAG 3.1.

        1. Procure no cabeçalho ou rodapé a página/declaração de acessibilidade informando recursos disponíveis, atalhos (em portais públicos, atalhos `Alt+1/2/3` do eMAG) e conformidade declarada.
        2. Verifique se existe canal acessível (formulário rotulado, e-mail ou ouvidoria) para que pessoas com deficiência relatem barreiras encontradas.
        3. **Critério de aprovação:** O site documenta seus recursos de acessibilidade e oferece canal direto e acessível para relato de problemas.

- [ ] **NBR-02: CAPTCHAs, biometria, conteúdos incorporados de terceiros e arquivos para download (PDF/DOCX) possuem alternativa acessível?** [[1]](#ref-1) [[3]](#ref-3)
    - `Perfil: Leitor de Tela` `Perfil: Surdez / Libras` `Perfil: Idoso / Baixo Letramento` `Base: ABNT NBR 17225:2025` `Base: WCAG 2.2` `Ferramenta: NVDA / VoiceOver` `Ferramenta: Inspeção Manual / Heurística`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17225, Anexo A (`A.1.1`, `A.1.2`, `A.1.5`, `A.1.7`) e item `5.9.18`; WCAG 2.2, critérios `1.1.1` (A) e `3.3.8` (AA).

        1. Localize CAPTCHAs, validações biométricas, *iframes* externos (mapas, widgets) e documentos PDF/DOCX para download (caso nenhum exista nas páginas auditadas, marque **`N/A`**).
        2. Confira se desafios não dependem de um único sentido (só imagem ou só áudio) e se arquivos PDF possuem texto real selecionável e estruturado.
        3. **Critério de aprovação:** Nenhum item crítico do Anexo A bloqueia o fluxo de quem usa tecnologia assistiva.

## Teclado, Foco, Popovers e Novos Critérios da WCAG 2.2

- [ ] **NBR-03: O indicador de foco é sempre visível, atinge contraste mínimo de 3:1 e nunca fica encoberto por cabeçalho fixo, banner ou chat?** [[1]](#ref-1) [[3]](#ref-3) [[4]](#ref-4)
    - `Perfil: Motora / Teclado` `Perfil: Baixa Visão` `Base: ABNT NBR 17225:2025` `Base: WCAG 2.2` `Ferramenta: Teclado (Tab / Esc)` `Ferramenta: Colour Contrast Analyser (CCA)`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17225, itens `5.1.1`–`5.1.3`, `5.10.5` e `5.11.6`; WCAG 2.2, critérios `2.4.7` (AA), `2.4.11` (AA, novo), `2.4.12` (AAA, novo) e `2.4.13` (AAA, novo).

        1. Aplique zoom de 200% e percorra toda a página com `Tab` e `Shift+Tab`, inclusive com banner de cookies ou janela de mensagens/chat flutuante aberta.
        2. Meça o contorno de foco com o Colour Contrast Analyser (≥ `3:1`) e verifique se nenhum item focado some atrás de *sticky headers* ou painéis fixos.
        3. **Critério de aprovação:** O foco de teclado é nítido em todos os controles e permanece visível durante toda a rolagem.

- [ ] **NBR-04: Todas as funções operam exclusivamente por teclado em ordem lógica, sem armadilhas de foco e sem atalhos de 1 tecla intrusivos?** [[1]](#ref-1) [[3]](#ref-3)
    - `Perfil: Motora / Teclado` `Perfil: Leitor de Tela` `Perfil: Controle por Voz` `Base: ABNT NBR 17225:2025` `Base: WCAG 2.2` `Ferramenta: Teclado (Tab / Esc)` `Ferramenta: Accessibility Insights`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17225, itens `5.1.4`, `5.1.6`, `5.1.11` e `5.1.13`; WCAG 2.2, critérios `2.1.1` (A), `2.1.2` (A), `2.1.4` (A) e `2.4.3` (A).

        1. Sem tocar no mouse, execute o fluxo principal do site usando `Tab`, `Enter`, `Espaço`, setas e `Esc`, ativando **Tab stops** no Accessibility Insights.
        2. Verifique se modais e menus fecham com `Esc` devolvendo o foco à origem e se eventuais atalhos de caractere único podem ser desativados ou remapeados.
        3. **Critério de aprovação:** 100% das ações funcionam por teclado em sequência coerente e sem prender o foco.

- [ ] **NBR-05: Menus flutuantes, *tooltips* e *hover cards* fecham com `Esc` sem sumir ao mover o cursor, e feeds infinitos não bloqueiam o rodapé?** [[1]](#ref-1) [[3]](#ref-3)
    - `Perfil: Baixa Visão` `Perfil: Motora / Teclado` `Base: ABNT NBR 17225:2025` `Base: WCAG 2.2` `Ferramenta: Teclado (Tab / Esc)` `Ferramenta: DevTools (Zoom, Refluxo e Visão)`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17225, itens `5.1.5` e `5.1.9`; WCAG 2.2, critérios `1.4.13` (AA — Conteúdo em Hover ou Foco) e `2.1.1` (A).

        1. Passe o mouse ou foque itens que abrem cartões de prévia (*hover cards*), *tooltips* ou submenus: confira se é possível fechar com `Esc`, mover o ponteiro sobre o balão sem ele fechar sozinho e ler sem tempo curto.
        2. Se a página tiver *feed* ou rolagem infinita, verifique se quem navega por `Tab` consegue alcançar links laterais/rodapé sem ficar preso carregando itens eternamente.
        3. **Critério de aprovação:** Conteúdos sobrepostos cumprem dispensabilidade, sobreposição e persistência (`1.4.13`), e listas dinâmicas não bloqueiam a navegação por teclado.

- [ ] **NBR-06: Os alvos de clique/toque respeitam o mínimo de 24×24 px CSS e toda interação de arrastar possui alternativa por clique simples?** [[1]](#ref-1) [[3]](#ref-3) [[4]](#ref-4)
    - `Perfil: Motora / Teclado` `Perfil: Idoso / Baixo Letramento` `Base: ABNT NBR 17225:2025` `Base: WCAG 2.2` `Ferramenta: DevTools (Zoom, Refluxo e Visão)` `Ferramenta: Google Lighthouse`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17225, itens `5.8.6` (44 px recomendação), `5.8.7` (24 px requisito) e `5.8.13`; WCAG 2.2, critérios `2.5.7` (AA, novo), `2.5.8` (AA, novo) e `2.5.5` (AAA).

        1. Inspecione no DevTools ícones pequenos (fechar, três pontos, reações, paginação) verificando dimensão mínima de `24 × 24 px CSS` (ou espaçamento equivalente).
        2. Caso existam sliders, mapas ou listas reordenáveis por *drag-and-drop*, confirme a presença de botões ou campos para operar por clique simples.
        3. **Critério de aprovação:** Todos os controles cumprem o alvo mínimo de 24 px (idealmente 44 px) e nada depende exclusivamente de arrastar.

- [ ] **NBR-07: O site oferece mais de uma forma de localizar páginas (busca + menus) e mantém o acesso à ajuda na mesma posição relativa?** [[1]](#ref-1) [[3]](#ref-3) [[4]](#ref-4)
    - `Perfil: Cognitiva / TDAH` `Perfil: Idoso / Baixo Letramento` `Base: ABNT NBR 17225:2025` `Base: WCAG 2.2` `Ferramenta: Inspeção Manual / Heurística`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17225, itens `5.7.15` e `5.7.16`; WCAG 2.2, critérios `2.4.5` (AA — Múltiplas Formas) e `3.2.6` (A, novo — Ajuda Consistente).

        1. Verifique se o usuário consegue chegar às páginas internas por mais de um caminho (ex.: menu principal + busca global ou mapa do site).
        2. Compare ao menos quatro páginas distintas confirmando que o link/botão de Ajuda, Suporte ou FAQ permanece na mesma posição relativa.
        3. **Critério de aprovação:** Há múltiplos caminhos de localização e o acesso à ajuda é espacialmente consistente.

- [ ] **NBR-08: Focar ou alterar campos não dispara mudanças bruscas de contexto e dados já informados não precisam ser redigitados?** [[1]](#ref-1) [[3]](#ref-3) [[4]](#ref-4)
    - `Perfil: Cognitiva / TDAH` `Perfil: Leitor de Tela` `Base: ABNT NBR 17225:2025` `Base: WCAG 2.2` `Ferramenta: Teclado (Tab / Esc)` `Ferramenta: Inspeção Manual / Heurística`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17225, itens `5.1.8`, `5.9.12` e `5.9.15`; WCAG 2.2, critérios `3.2.1` (A — Em Foco), `3.2.2` (A — Na Entrada) e `3.3.7` (A, novo — Entrada Redundante).

        1. Navegue pelos filtros, `<select>` e campos verificando se nenhum deles envia formulário ou recarrega a página de surpresa sem botão ou aviso prévio.
        2. Em processos de múltiplas etapas, confirme que dados já informados são reaproveitados automaticamente sem exigir redigitação.
        3. **Critério de aprovação:** A interface nunca muda de contexto inesperadamente nem exige entrada redundante no mesmo fluxo.

- [ ] **NBR-09: O login e a autenticação funcionam sem testes cognitivos, permitindo colar senha, usar gerenciador de senhas ou chave alternativa?** [[1]](#ref-1) [[3]](#ref-3) [[4]](#ref-4)
    - `Perfil: Dislexia` `Perfil: Cognitiva / TDAH` `Base: ABNT NBR 17225:2025` `Base: WCAG 2.2` `Ferramenta: Inspeção Manual / Heurística` `Ferramenta: DevTools (Zoom, Refluxo e Visão)`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17225, itens `5.9.17` e `5.9.18`; WCAG 2.2, critérios `3.3.8` (AA, novo) e `3.3.9` (AAA, novo).

        1. Caso o site não possua área de login/autenticação, marque **`N/A`**.
        2. Teste colar (`Ctrl+V`) senha e códigos 2FA, confira `autocomplete="current-password"` e verifique se não há quebra-cabeças visuais obrigatórios sem alternativa (link por e-mail, passkey, OAuth/Gov.br).
        3. **Critério de aprovação:** É possível autenticar-se sem memorizar, transcrever caracteres nem resolver enigmas visuais.

## Contraste, Tempo e Movimento

- [ ] **NBR-10: Textos comuns (≥ 4,5:1) e textos grandes (≥ 3:1), incluindo subtítulos, `placeholders` e textos sobre imagem, atingem o contraste mínimo?** [[1]](#ref-1) [[3]](#ref-3)
    - `Perfil: Baixa Visão` `Perfil: Daltonismo` `Base: ABNT NBR 17225:2025` `Base: WCAG 2.2` `Ferramenta: WAVE` `Ferramenta: Axe DevTools` `Ferramenta: Google Lighthouse` `Ferramenta: Colour Contrast Analyser (CCA)`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17225, itens `5.11.2` (7:1 recomendação) e `5.11.3` (requisito); WCAG 2.2, critérios `1.4.3` (AA) e `1.4.6` (AAA).

        1. Rode o WAVE e o Axe DevTools para levantar automaticamente textos secundários cinza-claros, badges e rodapés com contraste insuficiente.
        2. Meça manualmente com o **Colour Contrast Analyser** textos aplicados sobre fotos/gradientes e `placeholders` de campos.
        3. **Critério de aprovação:** Todos os textos informativos cumprem `4,5:1` (comum) e `3:1` (a partir de `18pt` ou `14pt` negrito).

- [ ] **NBR-11: Bordas de campos de formulário, ícones funcionais, controles e gráficos essenciais atingem contraste mínimo de 3:1 contra o fundo?** [[1]](#ref-1) [[3]](#ref-3)
    - `Perfil: Baixa Visão` `Perfil: Daltonismo` `Base: ABNT NBR 17225:2025` `Base: WCAG 2.2` `Ferramenta: Colour Contrast Analyser (CCA)` `Ferramenta: DevTools (Zoom, Refluxo e Visão)`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17225, itens `5.11.4` e `5.11.5`; WCAG 2.2, critério `1.4.11` (AA — Contraste Não Textual).

        1. Com o conta-gotas do **Colour Contrast Analyser**, meça a borda de campos de busca/formulário, checkboxes, *switches* e ícones sem rótulo em relação à cor adjacente.
        2. Confira também fatias/barras de gráficos e indicadores de estado selecionados.
        3. **Critério de aprovação:** Todas as partes visuais necessárias para reconhecer controles e gráficos atingem ao menos `3:1`.

- [ ] **NBR-12: Limites de tempo podem ser estendidos, carrosséis/animações (> 5s) têm pausa, nada pisca > 3x/s e respeita-se movimento reduzido?** [[1]](#ref-1) [[3]](#ref-3)
    - `Perfil: Epilepsia / Vestibular` `Perfil: Cognitiva / TDAH` `Base: ABNT NBR 17225:2025` `Base: WCAG 2.2` `Ferramenta: DevTools (Zoom, Refluxo e Visão)` `Ferramenta: Teclado (Tab / Esc)`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17225, itens `5.15.1`, `5.15.2`, `5.15.4`, `5.16.2`, `5.16.3` e `5.16.6`; WCAG 2.2, critérios `2.2.1` (A), `2.2.2` (A), `2.3.1` (A) e `2.3.3` (AAA).

        1. Verifique se sessões com expiração avisam antes de desconectar e se carrosséis, GIFs ou vídeos em loop (> 5s) possuem controle de pausa acessível por teclado.
        2. Confira ausência de flashes rápidos (> 3 por segundo) e ative `prefers-reduced-motion: reduce` na aba **Rendering** do DevTools.
        3. **Critério de aprovação:** O usuário controla tempo e movimento na tela, sem risco fotossensível nem distrações forçadas.

## Web Móvel e Aplicativos (NBR 17060)

- [ ] **NBR-13: Na versão móvel (ou app), TalkBack e VoiceOver anunciam botões, imagens e campos com nome, função e estado em ordem lógica?** [[2]](#ref-2) [[3]](#ref-3)
    - `Perfil: Leitor de Tela` `Perfil: Baixa Visão` `Base: ABNT NBR 17060:2022` `Base: WCAG 2.2` `Ferramenta: TalkBack / VoiceOver Mobile` `Ferramenta: NVDA / VoiceOver`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** ABNT NBR 17060:2022 (leitores de tela móveis); WCAG 2.2, critérios `1.1.1` (A), `1.3.2` (A) e `4.1.2` (A).

        1. Abra o site no smartphone com **TalkBack** (Android) ou **VoiceOver** (iOS) — caso a auditoria esteja restrita exclusivamente a desktop, marque **`N/A`**.
        2. Deslize elemento a elemento no menu móvel, cards e formulários, verificando se não há botões sem rótulo ou foco preso atrás do menu fechado.
        3. **Critério de aprovação:** A tarefa principal na tela móvel é concluída integralmente usando apenas o leitor de tela nativo.

- [ ] **NBR-14: No celular, áreas de toque são confortáveis, gestos complexos têm alternativa simples e a tela funciona em retrato e paisagem?** [[1]](#ref-1) [[2]](#ref-2) [[3]](#ref-3) [[10]](#ref-10) [[11]](#ref-11)
    - `Perfil: Motora / Teclado` `Perfil: Idoso / Baixo Letramento` `Base: ABNT NBR 17060:2022` `Base: ABNT NBR 17225:2025` `Ferramenta: TalkBack / VoiceOver Mobile` `Ferramenta: DevTools (Zoom, Refluxo e Visão)`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** ABNT NBR 17060:2022; NBR 17225, itens `5.8.12`, `5.8.14` e `5.10.3`; WCAG 2.2, critérios `1.3.4` (AA), `1.4.4` (AA), `2.5.1` (A) e `2.5.4` (A).

        1. Gire a tela entre **retrato** e **paisagem** (essencial para quem usa celular fixo em suporte de cadeira de rodas) e confirme que o layout não trava em uma única orientação.
        2. Verifique se ações de deslizar/pinçar contam com botões de toque simples e se os textos acompanham a ampliação de fonte do sistema.
        3. **Critério de aprovação:** O uso móvel funciona com toque simples, em ambas as orientações e sem cortar textos ampliados.

---

## Referências Bibliográficas e Documentais

1. <a id="ref-1"></a> ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **ABNT NBR 17225:2025**: Acessibilidade em conteúdo e aplicações web: Requisitos. Rio de Janeiro: ABNT, 2025.
2. <a id="ref-2"></a> ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **ABNT NBR 17060:2022**: Acessibilidade em aplicativos de dispositivos móveis: Requisitos. Rio de Janeiro: ABNT, 2022.
3. <a id="ref-3"></a> W3C. **Web Content Accessibility Guidelines (WCAG) 2.2**. W3C Recommendation, 2023. Disponível em: <https://www.w3.org/TR/WCAG22/>.
4. <a id="ref-4"></a> W3C WAI. **What's New in WCAG 2.2**. Disponível em: <https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/>.
5. <a id="ref-5"></a> W3C WAI. **Website Accessibility Conformance Evaluation Methodology (WCAG-EM) 1.0**. W3C Working Group Note, 2014. Disponível em: <https://www.w3.org/WAI/test-evaluate/conformance/wcag-em/>.
6. <a id="ref-6"></a> BRASIL. **Lei nº 13.146, de 6 de julho de 2015**. Institui a Lei Brasileira de Inclusão da Pessoa com Deficiência (Estatuto da Pessoa com Deficiência). Disponível em: <https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm>.
7. <a id="ref-7"></a> BRASIL. **Lei nº 12.527, de 18 de novembro de 2011**. Regula o acesso a informações (Lei de Acesso à Informação). Disponível em: <https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm>.
8. <a id="ref-8"></a> BRASIL. **Decreto nº 5.296, de 2 de dezembro de 2004**. Regulamenta as Leis nº 10.048/2000 e nº 10.098/2000. Disponível em: <https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2004/decreto/d5296.htm>.
9. <a id="ref-9"></a> BRASIL. Ministério do Planejamento, Orçamento e Gestão. **eMAG: Modelo de Acessibilidade em Governo Eletrônico**. Versão 3.1. Brasília, 2014. Disponível em: <https://emag.governoeletronico.gov.br/>.
10. <a id="ref-10"></a> GOOGLE. **Make apps more accessible**. Android Developers. Disponível em: <https://developer.android.com/guide/topics/ui/accessibility/accessibility-scanner>.
11. <a id="ref-11"></a> APPLE. **Human Interface Guidelines: Accessibility**. Apple Developer. Disponível em: <https://developer.apple.com/design/human-interface-guidelines/accessibility>.
12. <a id="ref-12"></a> BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021.
13. <a id="ref-13"></a> FIGUEIREDO, Rejane Maria da Costa. **Material de aula da disciplina FGA0173: Interação Humano-Computador**. Brasília: Universidade de Brasília, 2026.
