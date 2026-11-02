# Avaliação Heurística de Usabilidade & 10 Heurísticas de Nielsen

A **Avaliação Heurística** (Nielsen, 1994) é um método ágil de inspeção em IHC que diagnostica problemas de usabilidade confrontando a interface com princípios ergonômicos e cognitivos fundamentais.

Este guia reúne o checklist interativo das **10 Heurísticas de Nielsen** aliado à **Escala de Severidade (0 a 4)** para direcionar e priorizar melhorias de forma prática no PrismaIHC.

---

## Metodologia de Inspeção & Escala de Severidade

A inspeção heurística deve ser conduzida idealmente por 3 a 5 avaliadores de forma independente em duas passadas: uma inicial exploratória para familiarização com o fluxo da aplicação e outra minuciosa de confronto com cada heurística. Cada problema identificado deve ser classificado segundo a escala de severidade proposta por Nielsen (1995):

| Nível de Severidade | Classificação | Critério de Impacto e Encaminhamento |
| :---: | :--- | :--- |
| **0** | **Não é problema** | Não afeta a usabilidade ou conformidade da interface. Nenhuma ação necessária. |
| **1** | **Problema Cosmético** | Não impede a execução da tarefa; afeta apenas detalhes estéticos superficiais. Corrigir se houver tempo livre. |
| **2** | **Problema Simples (Menor)** | Causa pequeno incômodo ou ligeiro atraso, mas o usuário recupera-se facilmente. Baixa prioridade de correção. |
| **3** | **Problema Grave (Maior)** | Dificulta substancialmente a realização da tarefa, gerando frustração ou abandono frequente. Alta prioridade de correção. |
| **4** | **Catástrofe de Usabilidade** | Bloqueia a conclusão da tarefa essencial, impede o usuário de continuar ou provoca perda irreparável de dados. Correção obrigatória e imediata antes do release. |

---

## H1 a H5 — Fundamentos de Controle, Prevenção e Consistência

- [ ] **H1: O sistema informa continuamente o status da operação ao usuário com feedback visual e sonoro imediato em tempo razoável** [[1]](#ref-1)
    - `👤 Persona: Usuário Geral` `👤 Persona: Baixa Visão` `⚖️ Norma/Base: Heurísticas de Nielsen (H1)` `🛠️ Ferramenta: Inspeção Heurística`
    ??? info "Como auditar / Passo a passo"
        1. Submeta formulários, filtros e carregamento de listas; verifique se há *spinners*, esqueletos (*skeletons*), barras de progresso ou confirmações textuais e via `aria-live`.
        2. O sistema deve responder em até 100ms para ações imediatas e apresentar indicadores visíveis para esperas superiores a 1 segundo.

- [ ] **H2: A interface adota linguagem, termos e metáforas do mundo real familiares ao usuário, evitando jargões técnicos do sistema** [[1]](#ref-1)
    - `👤 Persona: Usuário Leigo` `👤 Persona: Idoso` `⚖️ Norma/Base: Heurísticas de Nielsen (H2)` `🛠️ Ferramenta: Análise Lexical de UI`
    ??? info "Como auditar / Passo a passo"
        1. Analise todos os rótulos de botões, cabeçalhos e mensagens de retorno, confirmando que utilizam terminologia da área de negócio e da cultura do usuário.
        2. Certifique-se de que nenhum código de exceção interna (ex.: `NullPointerException`, `ORA-00001`) ou termo de arquitetura de software é exposto diretamente na tela.

- [ ] **H3: A interface oferece saídas de emergência claramente visíveis, permitindo desfazer, refazer ou cancelar ações a qualquer momento** [[1]](#ref-1)
    - `👤 Persona: TDAH / Impulsividade` `👤 Persona: Usuário Móvel` `⚖️ Norma/Base: Heurísticas de Nielsen (H3)` `🛠️ Ferramenta: Inspeção de Fluxo e Teclado`
    ??? info "Como auditar / Passo a passo"
        1. Inicie um fluxo de etapas (wizard, modal, exclusão) e confirme a existência de botão "Cancelar" ou botão de fechar (`Esc`).
        2. Verifique se operações reversíveis contam com mecanismo rápido de "Desfazer" (*Undo* / `Ctrl+Z`) em notificação temporária (*toast/snackbar*).

- [ ] **H4: Elementos de interface mantêm consistência visual, comportamental e de nomenclatura ao longo de todas as telas** [[1]](#ref-1)
    - `👤 Persona: Autista (TEA)` `👤 Persona: Dislexia` `⚖️ Norma/Base: Heurísticas de Nielsen (H4)` `🛠️ Ferramenta: Design System / Figma Tokens`
    ??? info "Como auditar / Passo a passo"
        1. Verifique se o mesmo botão, ícone ou termo tem o mesmo significado e localização relativa em diferentes páginas do produto.
        2. Valide conformidade com as diretrizes do design system da organização ou convenções padrão de plataforma (web/iOS/Android).

- [ ] **H5: O sistema projeta mecanismos para prevenir a ocorrência de erros antes que eles aconteçam, eliminando condições de falha** [[1]](#ref-1)
    - `👤 Persona: Motora / Tremor` `👤 Persona: Idoso` `⚖️ Norma/Base: Heurísticas de Nielsen (H5)` `🛠️ Ferramenta: Teste de Limites de Entrada`
    ??? info "Como auditar / Passo a passo"
        1. Verifique se campos restritos utilizam seletores, máscaras de entrada e desativação preventiva de ações inválidas.
        2. Confirme que ações críticas ou destrutivas exigem diálogo de confirmação explícito com foco inicial na opção de cancelamento.

---

## H6 a H10 — Reconhecimento, Eficiência e Resiliência a Falhas

- [ ] **H6: A interface minimiza a carga de memória do usuário tornando objetos, ações e opções claramente visíveis na tela** [[1]](#ref-1)
    - `👤 Persona: TDAH / Memória de Trabalho` `👤 Persona: Idoso` `⚖️ Norma/Base: Heurísticas de Nielsen (H6)` `🛠️ Ferramenta: Avaliação de Carga Cognitiva`
    ??? info "Como auditar / Passo a passo"
        1. Navegue por processos de compra ou preenchimento de dados de múltiplas etapas e certifique-se de que informações anteriores permanecem visíveis como resumo.
        2. O usuário não deve ser forçado a memorizar dados ou códigos de uma tela para digitar em outra.

- [ ] **H7: A interface oferece aceleradores e atalhos que atendem tanto a usuários novatos quanto a usuários experientes** [[1]](#ref-1)
    - `👤 Persona: Power User` `👤 Persona: Deficiência Motora / Teclado` `⚖️ Norma/Base: Heurísticas de Nielsen (H7)` `🛠️ Ferramenta: Teste de Atalhos de Teclado`
    ??? info "Como auditar / Passo a passo"
        1. Teste o acionamento das principais operações por atalhos de teclado configurados e documentados (ex.: `Ctrl+S`, `Ctrl+K` para busca global).
        2. Avalie a existência de opções de personalização de interface, buscas salvas ou ações em lote para usuários frequentes.

- [ ] **H8: O layout apresenta design estético e minimalista, exibindo apenas informações essenciais para a tarefa em foco** [[1]](#ref-1)
    - `👤 Persona: Baixa Visão` `👤 Persona: Neurodivergente` `⚖️ Norma/Base: Heurísticas de Nielsen (H8)` `🛠️ Ferramenta: Análise de Ruído Visual`
    ??? info "Como auditar / Passo a passo"
        1. Avalie a hierarquia visual e espaçamento de tela, garantindo que elementos secundários não concorram com as chamadas de ação primárias.
        2. Remova ou oculte em seções secundárias dados redundantes, gráficos puramente ornamentais ou blocos de texto excessivos.

- [ ] **H9: Mensagens de erro são expressas em linguagem clara, sem códigos crípticos, diagnosticam com precisão o problema e sugerem solução** [[1]](#ref-1)
    - `👤 Persona: Usuário Leigo` `👤 Persona: Dislexia` `⚖️ Norma/Base: Heurísticas de Nielsen (H9)` `🛠️ Ferramenta: Teste de Exceções e Respostas de Erro`
    ??? info "Como auditar / Passo a passo"
        1. Provoque intencionalmente falhas de validação (campos vazios, formatos incorretos, queda de conexão).
        2. Confirme que a mensagem indica exatamente qual campo falhou, a causa humana do erro e qual ação corretiva o usuário deve tomar para prosseguir.

- [ ] **H10: O sistema disponibiliza documentação e ajuda contextual facilmente acessíveis, concisas e focadas na tarefa do usuário** [[1]](#ref-1)
    - `👤 Persona: Usuário Novato` `👤 Persona: Idoso` `⚖️ Norma/Base: Heurísticas de Nielsen (H10)` `🛠️ Ferramenta: Inspeção de Tooltips e Central de Ajuda`
    ??? info "Como auditar / Passo a passo"
        1. Localize a presença de *tooltips*, botões de ajuda contextual `(?)` ao lado de campos complexos e link para a central de documentação/FAQ.
        2. Verifique se os artigos de ajuda trazem passos numerados e objetivos para resolver tarefas cotidianas sem requerer leitura extensiva.

---

## Referências Bibliográficas e Documentais

1. <a id="ref-1"></a> NIELSEN, Jakob. **10 Usability Heuristics for User Interface Design**. Nielsen Norman Group, 1994. Disponível em: <https://www.nngroup.com/articles/ten-usability-heuristics/>.
2. <a id="ref-2"></a> NIELSEN, Jakob. **Severity Ratings for Usability Problems**. Nielsen Norman Group, 1995. Disponível em: <https://www.nngroup.com/articles/how-to-rate-the-severity-of-usability-problems/>.
3. <a id="ref-3"></a> BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. **Interação Humano-Computador**. Rio de Janeiro: Elsevier / Campus, 2010.
4. <a id="ref-4"></a> NIELSEN, Jakob; MACK, Robert L. **Usability Inspection Methods**. New York: John Wiley & Sons, 1994.
