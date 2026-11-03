# User Journey x User Flow

O **User Journey** (jornada do usuário) é a visão macro da experiência: descreve as fases pelas quais uma persona passa para atingir um objetivo, junto com suas ações, emoções, canais e pontos de dor [[1]](#ref-1). Já o **User Flow** (fluxo do usuário) é a visão micro e lógica: mostra o encadeamento de telas, decisões, exceções e caminhos de recuperação de erro que materializam uma etapa da jornada. A jornada responde *"o que a pessoa vive e sente?"*; o fluxo responde *"o que o sistema faz e em que ordem?"*.

Na auditoria de UX, IHC e Acessibilidade, as duas visões precisam estar conectadas: toda fase e todo ponto de dor da jornada devem ter um fluxo que os resolva, e todo fluxo deve ser navegável por qualquer pessoa, inclusive quem usa tecnologias assistivas. Um fluxo que funciona só no "caminho feliz" ou só para quem usa mouse e enxerga a tela cria becos sem saída justamente nos momentos de maior frustração da jornada. Este checklist ajuda a verificar essa coerência.

---

## Rastreabilidade entre Jornada e Fluxo

- [ ] **Cada fase da jornada (ex.: descoberta, cadastro, uso, suporte) possui pelo menos um user flow correspondente e documentado?**  [[1]](#ref-1)
    - `👤 Persona: Todas as personas do projeto` `⚖️ Norma/Base: Kalbach (2017)` `🛠️ Ferramenta: Matriz fase da jornada x fluxo (planilha ou FigJam/Miro)`
    ??? info "Como auditar / Passo a passo"
        1. Liste as fases do mapa de jornada em colunas e os fluxos existentes em linhas.
        2. Marque em cada célula qual fluxo cobre cada fase.
        3. **Atendido** quando nenhuma fase ficar sem fluxo associado e nenhum fluxo ficar "órfão" (sem fase da jornada que o justifique).

- [ ] **Cada ponto de dor registrado na jornada tem uma decisão ou tratamento explícito no fluxo (atalho, mensagem, alternativa, ajuda)?** [[1]](#ref-1)
    - `👤 Persona: Persona principal e usuários em situação de maior vulnerabilidade` `⚖️ Norma/Base: Kalbach (2017)` `🛠️ Ferramenta: Mapa de jornada anotado + diagrama de fluxo`
    ??? info "Como auditar / Passo a passo"
        1. Destaque no mapa de jornada todos os pontos de dor (emoção negativa, abandono, dúvida).
        2. Localize no fluxo a tela ou decisão que responde a cada ponto de dor.
        3. **Atendido** quando cada ponto de dor aponta para uma solução concreta no fluxo; registre como falha os que não apontam.

---

## Exceções, Erros e Saídas

- [ ] **O fluxo prevê, além do caminho feliz, os cenários de exceção (dados inválidos, falha de rede, sessão expirada, ação cancelada) com caminho de recuperação?**  [[2]](#ref-2)[[3]](#ref-3)
    - `👤 Persona: Usuário iniciante e usuário com deficiência cognitiva ou baixa familiaridade digital` `⚖️ Norma/Base: Nielsen H9; WCAG 2.2 critérios 3.3.1 e 3.3.3` `🛠️ Ferramenta: Diagrama de fluxo + teste de cenários de erro`
    ??? info "Como auditar / Passo a passo"
        1. No diagrama, identifique cada decisão e verifique se existe ramo para o resultado negativo.
        2. Provoque na interface os erros previstos (campo vazio, formato errado, conexão off).
        3. **Atendido** quando cada erro identifica o campo ou problema em texto, sugere como corrigir e leva o usuário de volta ao ponto do fluxo sem perda de progresso.

- [ ] **Em toda etapa do fluxo o usuário tem uma saída clara (voltar, cancelar, desfazer ou pedir ajuda), sem becos sem saída e sem armadilhas de foco?** [[2]](#ref-2) [[3]](#ref-3)
    - `👤 Persona: Usuário de teclado e de leitor de tela` `⚖️ Norma/Base: Nielsen H3; WCAG 2.2 critério 2.1.2 (Sem armadilha de teclado)` `🛠️ Ferramenta: Navegação somente por teclado + revisão do diagrama de fluxo`
    ??? info "Como auditar / Passo a passo"
        1. No diagrama, procure nós que não têm seta de saída (telas "terminais" sem retorno ou próximo passo).
        2. Na interface, percorra cada etapa usando apenas Tab, Shift+Tab, Enter e Esc, inclusive em modais e menus.
        3. **Atendido** quando é possível sair de qualquer tela ou componente pelo teclado e há sempre um caminho para continuar, voltar ou cancelar.

---

## Acessibilidade ao Longo do Fluxo

- [ ] **Todas as etapas críticas do fluxo (cadastro, pagamento, envio de formulário, confirmação) podem ser concluídas apenas com o teclado, com ordem de foco lógica e foco visível?** [[2]](#ref-2) [[5]](#ref-5)
    - `👤 Persona: Pessoa com deficiência motora e usuário de teclado` `⚖️ Norma/Base: WCAG 2.2 critérios 2.1.1, 2.4.3 e 2.4.7; eMAG` `🛠️ Ferramenta: Teste manual com teclado`
    ??? info "Como auditar / Passo a passo"
        1. Percorra o fluxo completo sem usar o mouse, do início ao objetivo final.
        2. Verifique se a ordem do foco acompanha a ordem lógica do fluxo e se o elemento focado está sempre visível.
        3. **Atendido** quando nenhuma ação essencial exige mouse e o foco nunca se perde nem fica escondido.

- [ ] **As mudanças de estado do fluxo (carregando, sucesso, erro, avanço de etapa) são anunciadas a leitores de tela sem exigir que o usuário mova o foco?** [[2]](#ref-2)
    - `👤 Persona: Pessoa cega ou com baixa visão que usa leitor de tela` `⚖️ Norma/Base: WCAG 2.2 critérios 4.1.3 (Mensagens de status) e 2.4.2 (Página com título)` `🛠️ Ferramenta: NVDA, VoiceOver ou TalkBack + inspeção de roles ARIA`
    ??? info "Como auditar / Passo a passo"
        1. Ative o leitor de tela e execute uma ação que gere feedback (enviar formulário, adicionar ao carrinho).
        2. Verifique se a mensagem é lida automaticamente (ex.: `role="status"` ou `role="alert"`) e se o título da nova página/etapa muda.
        3. **Atendido** quando o usuário ouve o resultado de cada ação e sabe em qual etapa do fluxo está.

- [ ] **O fluxo respeita limites de tempo e evita pedir a mesma informação duas vezes, preservando os dados já informados quando há erro ou expiração de sessão?** [[2]](#ref-2)
    - `👤 Persona: Pessoa idosa, com deficiência cognitiva ou motora, e usuário de tecnologia assistiva` `⚖️ Norma/Base: WCAG 2.2 critérios 2.2.1 (Tempo ajustável) e 3.3.7 (Entrada redundante)` `🛠️ Ferramenta: Teste manual com expiração de sessão e revisão do fluxo`
    ??? info "Como auditar / Passo a passo"
        1. Identifique no fluxo etapas com timeout (sessão, token, tempo de preenchimento).
        2. Verifique se há aviso prévio com opção de estender o tempo e se os dados preenchidos são mantidos após erro ou retorno de etapa.
        3. **Atendido** quando o usuário consegue estender ou desativar o limite e não precisa redigitar dados já fornecidos no mesmo processo.

- [ ] **A etapa de autenticação (login, recuperação de senha, verificação) pode ser concluída sem testes cognitivos e sem bloquear tecnologias assistivas (colar senha, gerenciadores, alternativas ao CAPTCHA)?** [[2]](#ref-2) [[4]](#ref-4)
    - `👤 Persona: Pessoa com dislexia, TDAH, baixa memória ou usuário de leitor de tela` `⚖️ Norma/Base: WCAG 2.2 critério 3.3.8 (Autenticação acessível); Lei 13.146/2015 (LBI)` `🛠️ Ferramenta: Teste manual com gerenciador de senhas e leitor de tela`
    ??? info "Como auditar / Passo a passo"
        1. Tente entrar colando a senha e usando um gerenciador de senhas ou o preenchimento automático do navegador.
        2. Verifique se há alternativa acessível a CAPTCHAs de imagem ou a quebra-cabeças, e se a recuperação de acesso funciona com leitor de tela.
        3. **Atendido** quando a autenticação não exige memorizar, transcrever ou resolver desafios visuais sem alternativa.

---

## Coerência entre Canais e Emoções

- [ ] **Nos pontos da jornada com emoção mais negativa ou maior risco de abandono, o fluxo é simplificado e oferece feedback claro, linguagem simples e navegação consistente com o restante do produto?** [[1]](#ref-1) [[2]](#ref-2) [[3]](#ref-3)
    - `👤 Persona: Persona principal em momento de frustração ou urgência` `⚖️ Norma/Base: Kalbach (2017); Nielsen H4 (Consistência) e H1 (Visibilidade do status); WCAG 2.2 critério 3.2.3` `🛠️ Ferramenta: Curva emocional da jornada + teste de usabilidade moderado`
    ??? info "Como auditar / Passo a passo"
        1. Localize na curva emocional da jornada os pontos mais baixos (ex.: erro de pagamento, cancelamento, suporte).
        2. Avalie o fluxo desses pontos: número de passos, clareza das mensagens, consistência de menus e rótulos com o restante do produto.
        3. **Atendido** quando esses trechos têm menos passos que a média do fluxo, mensagens em linguagem simples e navegação igual à das demais telas.

---

## Referências Bibliográficas e Documentais


1. <a id="ref-1"></a> KALBACH, Jim. **Mapeamento de Experiências**. Rio de Janeiro: Alta Books, 2017.
2. <a id="ref-2"></a> W3C. **Web Content Accessibility Guidelines (WCAG) 2.2**. 2023. Disponível em: <https://www.w3.org/TR/WCAG22/>.
3. <a id="ref-3"></a> NIELSEN, Jakob. **10 Usability Heuristics for User Interface Design**. Nielsen Norman Group, 1994. Disponível em: <https://www.nngroup.com/articles/ten-usability-heuristics/>.
4. <a id="ref-4"></a> BRASIL. **Lei nº 13.146, de 6 de julho de 2015 (Lei Brasileira de Inclusão da Pessoa com Deficiência)**. Disponível em: <https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm>.
5. <a id="ref-5"></a> BRASIL. Governo Digital. **eMAG – Modelo de Acessibilidade em Governo Eletrônico**. Disponível em: <https://www.gov.br/governodigital/pt-br/acessibilidade-digital>.