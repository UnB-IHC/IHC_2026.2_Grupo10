---
hide:
  - toc
---

<span class="prisma-pill-tag">📋 Checklist de Auditoria Web • Multicanal</span>

# Omnicanalidade & Paridade entre Canais

A **omnicanalidade** garante continuidade de contexto, consistência de vocabulário e canais equivalentes para quem transita entre computador, navegador móvel e suporte [[4]](#ref-4) [[8]](#ref-8). Quando um critério depender de canal inexistente no escopo do site avaliado (ex.: sistema sem login ou sem atendimento), marque **`N/A`**.

---

??? info "Consultar referência rápida — Escala de Severidade de Nielsen (0 a 4)"
    | Nível | Classificação | Critério de Impacto e Prioridade |
    | :---: | :--- | :--- |
    | **0** | **Não é problema** | Não afeta a usabilidade nem a compreensão da tarefa. |
    | **1** | **Problema Cosmético** | Detalhe estético superficial; corrigir apenas se houver tempo disponível. |
    | **2** | **Problema Simples (Menor)** | Pequeno atrito ou dúvida pontual da qual o usuário se recupera facilmente. |
    | **3** | **Problema Grave (Maior)** | Dificulta de forma importante a tarefa, gerando frustração ou risco de abandono. |
    | **4** | **Catástrofe de Usabilidade** | Bloqueia a conclusão da tarefa essencial ou causa perda de dados; correção imediata. |

## Continuidade e Consistência Digital

- [ ] **OMN-01: O site mantém paridade funcional entre Desktop e Mobile Web, sem suprimir recursos ou informações essenciais na tela menor?** [[1]](#ref-1) [[2]](#ref-2) [[3]](#ref-3)
    - `👤 Baixa Visão` `👤 Motora / Teclado` `⚖️ ABNT NBR 17225:2025` `⚖️ ABNT NBR 17060:2022` `🛠️ DevTools (Zoom, Refluxo & Visão)` `🛠️ TalkBack / VoiceOver Mobile` `🛠️ Google Lighthouse`
    ??? info "Como auditar / Passo a passo"
        1. Abra a mesma página e fluxo principal no navegador Desktop e em viewport móvel (`360px` no DevTools ou no celular).
        2. Verifique se links importantes, filtros, downloads ou opções de ajuda desaparecem na versão móvel sem substituto acessível.
        3. **✅ Critério de aprovação:** Todas as tarefas essenciais disponíveis no desktop também podem ser concluídas integralmente na web móvel.

- [ ] **OMN-02: Ao retomar uma sessão ou alternar entre dispositivos/canais com a mesma conta, o estado da tarefa e os dados salvos são preservados?** [[3]](#ref-3) [[8]](#ref-8) [[9]](#ref-9)
    - `👤 Cognitiva / TDAH` `👤 Motora / Teclado` `⚖️ Kalbach (Jornadas/Canais)` `⚖️ WCAG 2.2` `🛠️ Inspeção Manual / Heurística`
    ??? info "Como auditar / Passo a passo"
        1. Inicie uma ação (itens salvos, rascunho, carrinho, inscrição ou chamado) em um navegador/dispositivo e acesse em seguida pelo celular ou nova sessão.
        2. Caso o site não possua área logada nem tarefas persistentes entre canais, classifique este item como **`N/A`**.
        3. **✅ Critério de aprovação:** O progresso salvo permanece sincronizado, sem obrigar o usuário a redigitar tudo do zero.

- [ ] **OMN-03: Rótulos de ações, nomes de seções, status e regras são consistentes entre o site, a versão móvel, notificações e páginas de ajuda?** [[2]](#ref-2) [[8]](#ref-8) [[9]](#ref-9)
    - `👤 Cognitiva / TDAH` `👤 Idoso / Baixo Letramento` `⚖️ Heurísticas de Nielsen` `⚖️ ABNT NBR 17225:2025` `🛠️ Inspeção Manual / Heurística`
    ??? info "Como auditar / Passo a passo"
        1. Compare os nomes dos botões principais, categorias de menu e mensagens de confirmação/e-mail com os termos usados no FAQ ou central de ajuda.
        2. Aponte divergências em que a mesma função recebe nomes diferentes em cada ponto de contato.
        3. **✅ Critério de aprovação:** A mesma ação e o mesmo status usam vocabulário e regras coerentes em todos os canais digitais do serviço.

## Equivalência Acessível de Atendimento

- [ ] **OMN-04: O suporte e os serviços essenciais oferecem ao menos um canal textual acessível, sem obrigar exclusivamente ligação telefônica ou ida presencial?** [[4]](#ref-4) [[5]](#ref-5) [[6]](#ref-6) [[7]](#ref-7)
    - `👤 Surdez / Libras` `👤 Leitor de Tela` `⚖️ LBI (Lei 13.146/2015)` `⚖️ eMAG / Gov.br` `🛠️ Inspeção Manual / Heurística` `🛠️ NVDA / VoiceOver` `🛠️ ASES Web (Gov.br)`
    ??? info "Como auditar / Passo a passo"
        1. Inspecione as páginas de Fale Conosco, Ouvidoria, Suporte ou Cancelamento do site.
        2. Verifique se uma pessoa surda ou com deficiência de fala consegue resolver demandas por texto (formulário acessível, chat ou e-mail) ou videoatendimento em Libras, sem depender só de telefone `0800`.
        3. **✅ Critério de aprovação:** Nenhum serviço ou canal de suporte essencial exige exclusivamente comunicação oral por voz ou deslocamento físico.

- [ ] **OMN-05: Solicitações e atendimentos geram protocolo único copiável em texto real e preservam o histórico na transferência entre canais ou setores?** [[4]](#ref-4) [[8]](#ref-8) [[9]](#ref-9)
    - `👤 Leitor de Tela` `👤 Surdez / Libras` `👤 Cognitiva / TDAH` `⚖️ Kalbach (Jornadas/Canais)` `⚖️ Heurísticas de Nielsen` `🛠️ NVDA / VoiceOver` `🛠️ Inspeção Manual / Heurística`
    ??? info "Como auditar / Passo a passo"
        1. Verifique se chamados, pedidos ou atendimentos via bot/formulário exibem número de protocolo ou código de acompanhamento em texto selecionável (nunca preso em imagem).
        2. Quando houver passagem de chatbot para atendente humano, avalie se o contexto já digitado é mantido.
        3. **✅ Critério de aprovação:** O identificador é copiável e acessível por leitor de tela, e a troca de canal/atendente não apaga o contexto informado.

---

## Referências Bibliográficas e Documentais

1. <a id="ref-1"></a> ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **ABNT NBR 17060:2022 — Acessibilidade em aplicativos de dispositivos móveis — Requisitos**. Rio de Janeiro: ABNT, 2022.
2. <a id="ref-2"></a> ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **ABNT NBR 17225:2025 — Acessibilidade em conteúdo e aplicações web — Requisitos**. Rio de Janeiro: ABNT, 2025.
3. <a id="ref-3"></a> W3C. **Web Content Accessibility Guidelines (WCAG) 2.2**. 2023. Disponível em: <https://www.w3.org/TR/WCAG22/>.
4. <a id="ref-4"></a> BRASIL. **Lei nº 13.146, de 6 de julho de 2015** (Lei Brasileira de Inclusão da Pessoa com Deficiência). Disponível em: <https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm>.
5. <a id="ref-5"></a> BRASIL. **Lei nº 10.436, de 24 de abril de 2002** (Língua Brasileira de Sinais — Libras). Disponível em: <https://www.planalto.gov.br/ccivil_03/leis/2002/l10436.htm>.
6. <a id="ref-6"></a> BRASIL. **Decreto nº 5.626, de 22 de dezembro de 2005** (Regulamenta a Lei nº 10.436/2002). Disponível em: <https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2005/decreto/d5626.htm>.
7. <a id="ref-7"></a> ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **ABNT NBR 9050:2020 — Acessibilidade a edificações, mobiliário, espaços e equipamentos urbanos**. Rio de Janeiro: ABNT, 2020.
8. <a id="ref-8"></a> KALBACH, Jim. **Mapeamento de Experiências: um guia para criar valor por meio de jornadas, blueprints e diagramas**. Rio de Janeiro: Alta Books, 2017.
9. <a id="ref-9"></a> NIELSEN, Jakob. **10 Usability Heuristics for User Interface Design**. Nielsen Norman Group, 1994. Disponível em: <https://www.nngroup.com/articles/ten-usability-heuristics/>.
