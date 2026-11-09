---
hide:
  - toc
---

<span class="prisma-pill-tag">📋 Checklist de Auditoria Web • Cognição &amp; COGA</span>

# Acessibilidade Cognitiva, Neurodiversidade & Usabilidade (COGA)

A **acessibilidade cognitiva** favorece a atenção, a memória, a compreensão e a orientação na interface, removendo barreiras para pessoas neurodivergentes e beneficiando todos os perfis em situações de cansaço ou pressa (*Curb-Cut Effect*) [[1]](#ref-1) [[2]](#ref-2). Os critérios abaixo articulam as recomendações suplementares do **W3C COGA** aos princípios de IHC e à **WCAG 2.2** [[3]](#ref-3).

---

??? info "Consultar referência rápida — Escala de Severidade de Nielsen (0 a 4)"
    | Nível | Classificação | Critério de Impacto e Prioridade |
    | :---: | :--- | :--- |
    | **0** | **Não é problema** | Não afeta a usabilidade nem a compreensão da tarefa. |
    | **1** | **Problema Cosmético** | Detalhe estético superficial; corrigir apenas se houver tempo disponível. |
    | **2** | **Problema Simples (Menor)** | Pequeno atrito ou dúvida pontual da qual o usuário se recupera facilmente. |
    | **3** | **Problema Grave (Maior)** | Dificulta de forma importante a tarefa, gerando frustração ou risco de abandono. |
    | **4** | **Catástrofe de Usabilidade** | Bloqueia a conclusão da tarefa essencial ou causa perda de dados; correção imediata. |

## Atenção, Carga Visual e Previsibilidade

- [ ] **COG-01: A interface evita excesso de estímulos visuais simultâneos, distrações e elementos sem propósito que prejudiquem a concentração?** [[1]](#ref-1) [[2]](#ref-2)
    - `👤 Cognitiva / TDAH` `👤 TEA / Autismo` `⚖️ W3C COGA` `⚖️ Heurísticas de Nielsen` `🛠️ Inspeção Manual / Heurística`
    ??? info "Como auditar / Passo a passo"
        1. Percorra as páginas principais e observe banners concorrentes, pop-ups invasivos, cores gritantes fora de contexto e blocos irrelevantes disputando atenção com a tarefa central.
        2. Verifique se o objetivo principal e a próxima ação da tela são identificáveis sem precisar filtrar ruído visual excessivo.
        3. **✅ Critério de aprovação:** Os estímulos visuais têm propósito claro e a organização favorece o foco na tarefa, sem sobrecarga sensorial.

- [ ] **COG-02: Os elementos interativos seguem convenções visuais e comportamentais familiares, distinguindo claramente o que é clicável?** [[1]](#ref-1) [[2]](#ref-2)
    - `👤 Cognitiva / TDAH` `👤 TEA / Autismo` `👤 Idoso / Baixo Letramento` `⚖️ W3C COGA` `⚖️ Heurísticas de Nielsen` `🛠️ Inspeção Manual / Heurística`
    ??? info "Como auditar / Passo a passo"
        1. Compare botões, links, abas e campos entre páginas diferentes, verificando se mantêm aparência e comportamento previsíveis.
        2. Confirme que elementos estáticos (badges informativos, caixas de texto) não imitam aparência de botões acionáveis.
        3. **✅ Critério de aprovação:** Qualquer usuário reconhece imediatamente o que é interativo e prevê sua função pelas convenções da web.

- [ ] **COG-03: Os ícones acionáveis possuem significado intuitivo e são acompanhados de rótulos textuais claros quando podem gerar dúvida?** [[1]](#ref-1) [[2]](#ref-2)
    - `👤 Cognitiva / TDAH` `👤 TEA / Autismo` `👤 Idoso / Baixo Letramento` `⚖️ W3C COGA` `⚖️ Heurísticas de Nielsen` `🛠️ Inspeção Manual / Heurística`
    ??? info "Como auditar / Passo a passo"
        1. Liste os botões e menus representados apenas por ícones na barra superior, cards ou barras laterais.
        2. Verifique se símbolos abstratos ou pouco universais contam com rótulo textual visível adjacente (ou dica clara) e se o mesmo ícone nunca representa ações diferentes.
        3. **✅ Critério de aprovação:** A finalidade de cada ícone é compreendida sem adivinhação nem tentativa e erro.

- [ ] **COG-04: A tela apresenta hierarquia visual clara e agrupa conteúdos e controles relacionados em blocos escaneáveis?** [[1]](#ref-1) [[2]](#ref-2)
    - `👤 Cognitiva / TDAH` `👤 Dislexia` `⚖️ W3C COGA` `⚖️ Heurísticas de Nielsen` `🛠️ Inspeção Manual / Heurística` `🛠️ WAVE`
    ??? info "Como auditar / Passo a passo"
        1. Observe a página como um todo e avalie se tamanho tipográfico, espaçamento e proximidade diferenciam informações primárias de secundárias.
        2. Confira se conteúdos extensos são divididos em seções curtas, listas ou cartões lógicos em vez de blocos maciços.
        3. **✅ Critério de aprovação:** A hierarquia e os agrupamentos permitem localizar informações rapidamente pela leitura dinâmica.

## Orientação, Linguagem e Apoio à Memória

- [ ] **COG-05: Em atividades ou formulários divididos em etapas, a interface identifica com clareza em qual etapa o usuário está?** [[1]](#ref-1) [[2]](#ref-2)
    - `👤 Cognitiva / TDAH` `👤 Idoso / Baixo Letramento` `⚖️ W3C COGA` `⚖️ Heurísticas de Nielsen` `🛠️ Inspeção Manual / Heurística`
    ??? info "Como auditar / Passo a passo"
        1. Inicie uma tarefa em etapas (ou caso o site não tenha nenhum fluxo sequencial, marque **`N/A`**).
        2. Verifique se nomes compreensíveis indicam a etapa atual, o que já foi concluído e o que falta.
        3. **✅ Critério de aprovação:** O usuário sabe onde está e como avançar apenas pelas pistas visíveis na tela.

- [ ] **COG-06: O site oferece indicadores claros de localização (menu ativo, título da seção ou trilha de navegação) na sua arquitetura?** [[1]](#ref-1) [[2]](#ref-2)
    - `👤 Cognitiva / TDAH` `👤 Idoso / Baixo Letramento` `⚖️ W3C COGA` `⚖️ WCAG 2.2` `🛠️ Inspeção Manual / Heurística` `🛠️ WAVE`
    ??? info "Como auditar / Passo a passo"
        1. Acesse subpáginas internas por caminhos diferentes (menu, busca ou link direto).
        2. Verifique se o cabeçalho da página, o destaque visual no menu ou *breadcrumbs* informam em qual área do site a pessoa está.
        3. **✅ Critério de aprovação:** A localização atual e sua relação com as demais áreas são reconhecidas sem exigir memorização do caminho.

- [ ] **COG-07: Títulos, subtítulos e instruções de tarefa são objetivos e compreensíveis, evitando ambiguidades e complexidade desnecessária?** [[1]](#ref-1) [[2]](#ref-2)
    - `👤 Dislexia` `👤 TEA / Autismo` `👤 Idoso / Baixo Letramento` `⚖️ W3C COGA` `⚖️ Linguagem Simples (Lei 15.263/2025)` `🛠️ Inspeção Manual / Heurística`
    ??? info "Como auditar / Passo a passo"
        1. Analise amostras de cabeçalhos, descrições de botões e instruções de formulários.
        2. Verifique se antecipam exatamente a ação ou o conteúdo, evitando metáforas confusas, duplas negativas e termos técnicos desnecessários.
        3. **✅ Critério de aprovação:** As instruções orientam a execução da tarefa de forma literal, direta e sem ambiguidade.

- [ ] **COG-08: A interface apoia o reconhecimento em vez da memorização, sem exigir anotar ou transcrever códigos e dados entre telas?** [[1]](#ref-1) [[3]](#ref-3) [[6]](#ref-6) [[7]](#ref-7)
    - `👤 Cognitiva / TDAH` `👤 Dislexia` `👤 Idoso / Baixo Letramento` `⚖️ W3C COGA` `⚖️ WCAG 2.2` `🛠️ Inspeção Manual / Heurística` `🛠️ DevTools (Zoom, Refluxo & Visão)`
    ??? info "Como auditar / Passo a passo"
        1. Percorra fluxos em que dados de uma tela são usados na seguinte (seleção de itens, comparação, códigos de verificação, endereços).
        2. Verifique se resumos visíveis mantêm o contexto acessível na tela e se códigos/dados podem ser selecionados e colados sem bloqueio.
        3. **✅ Critério de aprovação:** O usuário nunca é forçado a decorar números, regras ou escolhas de telas anteriores para concluir uma tarefa.

## Prevenção, Retorno e Confirmação

- [ ] **COG-09: Operações críticas ou irreversíveis contam com prevenção proporcional contra erros e cliques acidentais?** [[1]](#ref-1) [[2]](#ref-2)
    - `👤 Cognitiva / TDAH` `👤 Motora / Teclado` `⚖️ W3C COGA` `⚖️ Heurísticas de Nielsen` `🛠️ Inspeção Manual / Heurística` `🛠️ Teclado (Tab / Esc)`
    ??? info "Como auditar / Passo a passo"
        1. Localize ações destrutivas ou de maior impacto (excluir item, encerrar sessão, enviar candidatura/pedido definitivo).
        2. Verifique se botões destrutivos estão visualmente separados dos primários e se exigem confirmação clara das consequências antes de efetivar.
        3. **✅ Critério de aprovação:** Ações críticas exigem intenção explícita e evitam disparos acidentais, sem poluir ações triviais com alertas excessivos.

- [ ] **COG-10: O usuário consegue desfazer, editar ou corrigir escolhas e dados enviados por engano quando tecnicamente possível?** [[1]](#ref-1) [[2]](#ref-2)
    - `👤 Cognitiva / TDAH` `👤 Motora / Teclado` `⚖️ W3C COGA` `⚖️ Heurísticas de Nielsen` `🛠️ Inspeção Manual / Heurística` `🛠️ Teclado (Tab / Esc)`
    ??? info "Como auditar / Passo a passo"
        1. Após aplicar filtros, alterar preferências, adicionar itens ou preencher etapas, procure opções visíveis de *Desfazer*, *Editar* ou *Alterar*.
        2. Verifique se corrigir uma escolha exige apenas ajuste pontual, sem obrigar a reiniciar toda a tarefa do zero.
        3. **✅ Critério de aprovação:** Ações reversíveis podem ser desfeitas ou editadas facilmente com retorno claro do novo estado.

- [ ] **COG-11: Voltar a telas anteriores é previsível e atividades concluídas exibem confirmação clara que pode ser consultada depois?** [[1]](#ref-1) [[2]](#ref-2)
    - `👤 Cognitiva / TDAH` `👤 Idoso / Baixo Letramento` `⚖️ W3C COGA` `⚖️ Heurísticas de Nielsen` `🛠️ Inspeção Manual / Heurística`
    ??? info "Como auditar / Passo a passo"
        1. Use tanto os controles internos de retorno quanto o botão *Voltar* do navegador e verifique se a página preserva contexto (filtros, posição ou dados) sem quebrar a sessão.
        2. Conclua uma ação e confira se o estado realizado permanece visível no histórico ou status da página (e não apenas em um aviso que some rápido).
        3. **✅ Critério de aprovação:** O retorno mantém o usuário orientado e o status das ações concluídas permanece reconhecível.

---

## Referências Bibliográficas e Documentais

1. <a id="ref-1"></a> W3C WAI. **Making Content Usable for People with Cognitive and Learning Disabilities (COGA)**. 2021. Disponível em: <https://www.w3.org/TR/coga-usable/>.
2. <a id="ref-2"></a> NIELSEN, Jakob. **10 Usability Heuristics for User Interface Design**. Nielsen Norman Group. Disponível em: <https://www.nngroup.com/articles/ten-usability-heuristics/>.
3. <a id="ref-3"></a> W3C. **Web Content Accessibility Guidelines (WCAG) 2.2**. Disponível em: <https://www.w3.org/TR/WCAG22/>.
4. <a id="ref-4"></a> W3C WAI. **Understanding Success Criterion 1.3.1: Info and Relationships**. Disponível em: <https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html>.
5. <a id="ref-5"></a> W3C WAI. **Understanding Success Criterion 4.1.2: Name, Role, Value**. Disponível em: <https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html>.
6. <a id="ref-6"></a> W3C WAI. **Understanding Success Criterion 3.3.7: Redundant Entry**. Disponível em: <https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html>.
7. <a id="ref-7"></a> W3C WAI. **Understanding Success Criterion 3.3.8: Accessible Authentication (Minimum)**. Disponível em: <https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html>.
