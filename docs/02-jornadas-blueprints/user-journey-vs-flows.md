---
hide:
  - toc
---

<span class="prisma-pill-tag">Checklist de Auditoria Web • Fluxos de Tela</span>

# Fluxos de Navegação: User Journey × User Flows

Enquanto o **User Journey** mapeia fases, canais e emoções da experiência macro, o **User Flow** materializa no site o encadeamento de telas, decisões, saídas e tratamentos de exceção [[1]](#ref-1). Este checklist avalia se os fluxos reais do site conduzem o usuário ao objetivo sem becos sem saída, perda de dados ou armadilhas nos momentos críticos.

---

??? info "Consultar referência rápida: Escala de Severidade de Nielsen (0 a 4)"
    | Nível | Classificação | Critério de Impacto e Prioridade |
    | :---: | :--- | :--- |
    | **0** | **Não é problema** | Não afeta a usabilidade nem a compreensão da tarefa. |
    | **1** | **Problema Cosmético** | Detalhe estético superficial; corrigir apenas se houver tempo disponível. |
    | **2** | **Problema Simples (Menor)** | Pequeno atrito ou dúvida pontual da qual o usuário se recupera facilmente. |
    | **3** | **Problema Grave (Maior)** | Dificulta de forma importante a tarefa, gerando frustração ou risco de abandono. |
    | **4** | **Catástrofe de Usabilidade** | Bloqueia a conclusão da tarefa essencial ou causa perda de dados; correção imediata. |

## Estrutura, Saídas e Exceções do Fluxo

- [ ] **FLX-01: Os fluxos com múltiplas etapas indicam claramente a etapa atual, o progresso realizado e o próximo passo?** [[1]](#ref-1) [[2]](#ref-2) [[3]](#ref-3)
    - `Perfil: Cognitiva / TDAH` `Perfil: Leitor de Tela` `Base: Kalbach (Jornadas/Canais)` `Base: Heurísticas de Nielsen` `Ferramenta: Inspeção Manual / Heurística` `Ferramenta: NVDA / VoiceOver`
    ??? info "Como auditar / Passo a passo"
        1. Inicie um fluxo principal com mais de uma tela (cadastro, agendamento, compra ou solicitação).
        2. Verifique se cada etapa informa visualmente e no título/cabeçalho onde o usuário está (ex.: *"Passo 2 de 4 — Endereço"*) e o que falta para concluir.
        3. **Critério de aprovação:** A posição atual e a próxima ação são imediatamente compreensíveis em todas as etapas do percurso.

- [ ] **FLX-02: Toda etapa, modal ou subfluxo oferece saída clara (voltar, cancelar ou fechar) sem becos sem saída?** [[2]](#ref-2) [[3]](#ref-3) [[5]](#ref-5)
    - `Perfil: Motora / Teclado` `Perfil: Idoso / Baixo Letramento` `Base: Heurísticas de Nielsen` `Base: WCAG 2.2` `Ferramenta: Teclado (Tab / Esc)` `Ferramenta: Inspeção Manual / Heurística`
    ??? info "Como auditar / Passo a passo"
        1. Percorra formulários, janelas modais, gavetas laterais e telas intermediárias usando mouse e apenas teclado (`Tab`, `Shift+Tab`, `Esc`).
        2. Procure telas "terminais" que obrigam a usar o botão do navegador por falta de opção visível para voltar, cancelar ou retomar o início.
        3. **Critério de aprovação:** Sempre há um caminho explícito e operável por teclado para voltar, fechar ou cancelar sem prender o usuário.

- [ ] **FLX-03: Cenários de exceção e buscas sem resultado (*empty states*) preservam os dados digitados e orientam como prosseguir?** [[2]](#ref-2) [[3]](#ref-3)
    - `Perfil: Cognitiva / TDAH` `Perfil: Idoso / Baixo Letramento` `Base: Heurísticas de Nielsen` `Base: WCAG 2.2` `Ferramenta: Inspeção Manual / Heurística`
    ??? info "Como auditar / Passo a passo"
        1. Provoque cenários fora do "caminho feliz": busca por termo inexistente, filtro sem itens ou envio de formulário com um campo inválido.
        2. Verifique se os demais campos preenchidos permanecem intactos e se a tela vazia oferece sugestão útil (limpar filtros, revisar termo ou ir para categoria relacionada).
        3. **Critério de aprovação:** O erro ou estado vazio nunca apaga dados válidos já informados e aponta uma rota construtiva de recuperação.

## Transparência e Momentos Críticos da Jornada

- [ ] **FLX-04: Regras, prazos, requisitos necessários ou custos aparecem de forma clara antes de exigir cadastro ou confirmação final?** [[1]](#ref-1) [[4]](#ref-4) [[6]](#ref-6)
    - `Perfil: Idoso / Baixo Letramento` `Perfil: Cognitiva / TDAH` `Base: Kalbach (Jornadas/Canais)` `Base: Linguagem Simples (Lei 15.263/2025)` `Ferramenta: Inspeção Manual / Heurística`
    ??? info "Como auditar / Passo a passo"
        1. Simule a adesão, solicitação de serviço ou compra até a etapa imediatamente anterior à confirmação.
        2. Confira se documentos exigidos, taxas, restrições e prazos são informados antecipadamente, sem surpresas apenas na última tela.
        3. **Critério de aprovação:** Todas as condições relevantes estão visíveis em linguagem clara antes da decisão final do usuário.

- [ ] **FLX-05: Fluxos de maior tensão emocional (cancelamento, contestação, suporte ou recuperação de acesso) são simples e livres de *dark patterns*?** [[1]](#ref-1) [[3]](#ref-3) [[4]](#ref-4)
    - `Perfil: Cognitiva / TDAH` `Perfil: Idoso / Baixo Letramento` `Base: Kalbach (Jornadas/Canais)` `Base: LBI (Lei 13.146/2015)` `Ferramenta: Inspeção Manual / Heurística`
    ??? info "Como auditar / Passo a passo"
        1. Localize no site os caminhos para cancelar uma ação/conta, corrigir um problema, recuperar acesso ou pedir ajuda.
        2. Avalie se o fluxo esconde botões, inverte cores para induzir clique errado ou impõe mais etapas burocráticas do que o fluxo de adesão.
        3. **Critério de aprovação:** Os fluxos críticos mantêm navegação direta, honesta e com número enxuto de passos.

---

## Referências Bibliográficas e Documentais

1. <a id="ref-1"></a> KALBACH, Jim. **Mapeamento de Experiências: um guia para criar valor por meio de jornadas, blueprints e diagramas**. Rio de Janeiro: Alta Books, 2017.
2. <a id="ref-2"></a> W3C. **Web Content Accessibility Guidelines (WCAG) 2.2**. 2023. Disponível em: <https://www.w3.org/TR/WCAG22/>.
3. <a id="ref-3"></a> NIELSEN, Jakob. **10 Usability Heuristics for User Interface Design**. Nielsen Norman Group, 1994 (atualizado em 2024). Disponível em: <https://www.nngroup.com/articles/ten-usability-heuristics/>.
4. <a id="ref-4"></a> BRASIL. **Lei nº 13.146, de 6 de julho de 2015** (Lei Brasileira de Inclusão da Pessoa com Deficiência). Disponível em: <https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm>.
5. <a id="ref-5"></a> BRASIL. Governo Digital. **eMAG — Modelo de Acessibilidade em Governo Eletrônico**. Disponível em: <https://www.gov.br/governodigital/pt-br/acessibilidade-digital>.
6. <a id="ref-6"></a> BRASIL. **Lei nº 8.078, de 11 de setembro de 1990** (Código de Defesa do Consumidor). Disponível em: <https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm>.
