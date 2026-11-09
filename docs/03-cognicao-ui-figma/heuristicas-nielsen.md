---
hide:
  - toc
---

<span class="prisma-pill-tag">Checklist de Auditoria Web • Inspeção Heurística</span>

# 10 Heurísticas de Usabilidade de Nielsen (H01–H10)

A **Avaliação Heurística** (Nielsen, 1994) inspeciona a usabilidade da interface confrontando fluxos reais com dez princípios ergonômicos fundamentais [[1]](#ref-1) [[3]](#ref-3). Ao reprovar qualquer item com **`✕`**, selecione a **Severidade (1 a 4)** de Nielsen [[2]](#ref-2) e descreva o local exato no site para gerar o relatório fundamentado.

---

??? info "Consultar referência rápida: Escala de Severidade de Nielsen (0 a 4)"
    | Nível | Classificação | Critério de Impacto e Prioridade |
    | :---: | :--- | :--- |
    | **0** | **Não é problema** | Não afeta a usabilidade nem a compreensão da tarefa. |
    | **1** | **Problema Cosmético** | Detalhe estético superficial; corrigir apenas se houver tempo disponível. |
    | **2** | **Problema Simples (Menor)** | Pequeno atrito ou dúvida pontual da qual o usuário se recupera facilmente. |
    | **3** | **Problema Grave (Maior)** | Dificulta de forma importante a tarefa, gerando frustração ou risco de abandono. |
    | **4** | **Catástrofe de Usabilidade** | Bloqueia a conclusão da tarefa essencial ou causa perda de dados; correção imediata. |

## H01 a H05: Controle, Prevenção e Consistência

- [ ] **H01: Visibilidade do status do sistema. A interface informa continuamente o que está acontecendo com feedback imediato?** [[1]](#ref-1) [[4]](#ref-4)
    - `Perfil: Baixa Visão` `Perfil: Leitor de Tela` `Base: Heurísticas de Nielsen` `Ferramenta: Inspeção Manual / Heurística` `Ferramenta: NVDA / VoiceOver`
    ??? info "Como auditar / Passo a passo"
        1. Acione buscas, filtros, envios e downloads; observe se há feedback visual imediato (mudança de estado, *spinner*, barra de progresso ou confirmação).
        2. Verifique se esperas superiores a 1 segundo exibem indicador claro de processamento.
        3. **Critério de aprovação:** Nenhuma ação do usuário fica sem resposta perceptível em tempo razoável.

- [ ] **H02: Correspondência com o mundo real. O site usa palavras, conceitos e convenções familiares ao público, sem jargões técnicos?** [[1]](#ref-1) [[3]](#ref-3)
    - `Perfil: Idoso / Baixo Letramento` `Perfil: Surdez / Libras` `Base: Heurísticas de Nielsen` `Base: Linguagem Simples (Lei 15.263/2025)` `Ferramenta: Inspeção Manual / Heurística`
    ??? info "Como auditar / Passo a passo"
        1. Inspecione menus, rótulos de botões, categorias e mensagens de retorno.
        2. Confira se termos estrangeiros desnecessários, códigos internos de sistema ou expressões técnicas foram substituídos por linguagem cotidiana do usuário.
        3. **Critério de aprovação:** Textos e metáforas seguem o modelo mental do público-alvo em ordem natural.

- [ ] **H03: Controle e liberdade do usuário. Há saídas de emergência visíveis para cancelar, fechar ou desfazer ações indesejadas?** [[1]](#ref-1)
    - `Perfil: Cognitiva / TDAH` `Perfil: Motora / Teclado` `Base: Heurísticas de Nielsen` `Ferramenta: Teclado (Tab / Esc)` `Ferramenta: Inspeção Manual / Heurística`
    ??? info "Como auditar / Passo a passo"
        1. Abra modais, menus sobrepostos, filtros e etapas de formulários.
        2. Confirme se há botão claro de *Cancelar*, *Fechar* (`Esc`) ou *Desfazer* sem obrigar recarregamento da página.
        3. **Critério de aprovação:** O usuário sai facilmente de estados indesejados sem ficar preso nem perder o controle.

- [ ] **H04: Consistência e padrões. Termos, ícones, cores de ação e posições de menus seguem um padrão coerente em todo o site?** [[1]](#ref-1) [[3]](#ref-3)
    - `Perfil: TEA / Autismo` `Perfil: Dislexia` `Base: Heurísticas de Nielsen` `Ferramenta: Inspeção Manual / Heurística`
    ??? info "Como auditar / Passo a passo"
        1. Navegue por pelo menos quatro páginas distintas do site comparando cabeçalho, botões primários/secundários e nomenclatura.
        2. Verifique se ações iguais mantêm o mesmo rótulo e se convenções consagradas da web são respeitadas.
        3. **Critério de aprovação:** Não há contradições visuais ou terminológicas entre páginas do mesmo produto.

- [ ] **H05: Prevenção de erros. O design evita falhas antes que ocorram por meio de restrições úteis, exemplos de formato e confirmação em ações destrutivas?** [[1]](#ref-1)
    - `Perfil: Motora / Teclado` `Perfil: Idoso / Baixo Letramento` `Base: Heurísticas de Nielsen` `Ferramenta: Inspeção Manual / Heurística`
    ??? info "Como auditar / Passo a passo"
        1. Teste campos de data, valores, documentos e ações críticas (exclusão, envio definitivo).
        2. Verifique se há dicas de formato visíveis antes da digitação, seletores adequados e confirmação explícita para operações irreversíveis.
        3. **Critério de aprovação:** Condições propensas a erro de digitação ou clique acidental são prevenidas proativamente.

## H06 a H10: Reconhecimento, Eficiência e Recuperação

- [ ] **H06: Reconhecimento em vez de memorização. Opções, filtros ativos e instruções permanecem visíveis no momento da decisão?** [[1]](#ref-1)
    - `Perfil: Cognitiva / TDAH` `Perfil: Idoso / Baixo Letramento` `Base: Heurísticas de Nielsen` `Ferramenta: Inspeção Manual / Heurística` `Ferramenta: WAVE`
    ??? info "Como auditar / Passo a passo"
        1. Verifique buscas recentes, filtros aplicados em listagens e resumos de escolhas ao longo de tarefas.
        2. Confirme que rótulos e instruções de preenchimento não desaparecem ao clicar no campo (como ocorre quando se usa apenas `placeholder`).
        3. **Critério de aprovação:** Todas as informações necessárias para decidir estão visíveis na própria tela.

- [ ] **H07: Flexibilidade e eficiência de uso. O site atende bem iniciantes e oferece atalhos ou aceleradores para usuários frequentes?** [[1]](#ref-1)
    - `Perfil: Motora / Teclado` `Perfil: Controle por Voz` `Base: Heurísticas de Nielsen` `Ferramenta: Teclado (Tab / Esc)` `Ferramenta: Inspeção Manual / Heurística`
    ??? info "Como auditar / Passo a passo"
        1. Avalie se há recursos que agilizam tarefas repetitivas: busca rápida acessível, filtros diretos, itens recentes/favoritos ou submissão natural com `Enter`.
        2. Verifique se esses aceleradores não atrapalham quem está usando o site pela primeira vez.
        3. **Critério de aprovação:** Tanto novatos quanto usuários experientes concluem tarefas com rapidez e conforto.

- [ ] **H08: Estética e design minimalista. As telas priorizam a informação essencial, sem blocos supérfluos competindo com a ação principal?** [[1]](#ref-1)
    - `Perfil: Baixa Visão` `Perfil: Cognitiva / TDAH` `Base: Heurísticas de Nielsen` `Ferramenta: Inspeção Manual / Heurística` `Ferramenta: DevTools (Zoom, Refluxo e Visão)`
    ??? info "Como auditar / Passo a passo"
        1. Inspecione a densidade informacional da página inicial e das páginas de tarefa principal.
        2. Verifique se elementos decorativos, avisos secundários ou textos redundantes ofuscam o botão ou conteúdo primário.
        3. **Critério de aprovação:** A relação sinal-ruído destaca imediatamente o conteúdo e as ações prioritárias.

- [ ] **H09: Recuperação de erros. As mensagens de erro explicam claramente o que houve e apontam como corrigir de forma construtiva?** [[1]](#ref-1) [[2]](#ref-2)
    - `Perfil: Dislexia` `Perfil: Idoso / Baixo Letramento` `Base: Heurísticas de Nielsen` `Ferramenta: Inspeção Manual / Heurística` `Ferramenta: NVDA / VoiceOver`
    ??? info "Como auditar / Passo a passo"
        1. Submeta formulários com dados incompletos ou formato inválido e acesse uma URL inexistente (`404`).
        2. Confira se a mensagem está próxima ao problema, evita tom punitivo ou códigos técnicos e explica exatamente como resolver.
        3. **Critério de aprovação:** Toda mensagem de erro identifica a causa em linguagem clara e oferece solução imediata.

- [ ] **H10: Ajuda e documentação. O site oferece ajuda fácil de localizar, pesquisável e focada nos passos práticos da tarefa?** [[1]](#ref-1) [[4]](#ref-4)
    - `Perfil: Idoso / Baixo Letramento` `Perfil: Cognitiva / TDAH` `Base: Heurísticas de Nielsen` `Ferramenta: Inspeção Manual / Heurística`
    ??? info "Como auditar / Passo a passo"
        1. Procure dicas contextuais ao lado de campos complexos e acesse a seção de Ajuda / Perguntas Frequentes (FAQ).
        2. Avalie se o conteúdo responde dúvidas reais em passos curtos e diretos, com busca funcional.
        3. **Critério de aprovação:** A ajuda está facilmente acessível e orienta a tarefa em passos objetivos.

---

## Referências Bibliográficas e Documentais

1. <a id="ref-1"></a> NIELSEN, Jakob. **10 Usability Heuristics for User Interface Design**. Nielsen Norman Group, 1994 (atualizado em 2024). Disponível em: <https://www.nngroup.com/articles/ten-usability-heuristics/>.
2. <a id="ref-2"></a> NIELSEN, Jakob. **Severity Ratings for Usability Problems**. Nielsen Norman Group, 1995. Disponível em: <https://www.nngroup.com/articles/how-to-rate-the-severity-of-usability-problems/>.
3. <a id="ref-3"></a> BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. **Interação Humano-Computador**. Rio de Janeiro: Elsevier / Campus, 2010.
4. <a id="ref-4"></a> NIELSEN, Jakob; MACK, Robert L. **Usability Inspection Methods**. New York: John Wiley e Sons, 1994.
