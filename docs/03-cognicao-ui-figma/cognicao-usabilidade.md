# Acessibilidade Cognitiva, Neurodiversidade & Usabilidade em IHC

Acessibilidade cognitiva é a qualidade de uma interface que favorece a atenção, a memória, a compreensão e o processamento de informações, reduzindo barreiras que podem dificultar a realização de tarefas. Pessoas neurodivergentes têm necessidades diversas, que não podem ser resumidas a um único perfil nem atendidas por uma solução universal. Reduzir a carga cognitiva, tornar o estado do sistema perceptível, apoiar o reconhecimento em vez da memorização e prevenir ou facilitar a recuperação de erros são objetivos de usabilidade relacionados às heurísticas de Jakob Nielsen e às recomendações suplementares do W3C COGA [[1]](#ref-1) [[2]](#ref-2). Como nenhuma interface é adequada a todas as pessoas, decisões de projeto devem ser verificadas com a participação de usuários neurodivergentes em pesquisas e testes de usabilidade, com métodos e formas de comunicação compatíveis com suas preferências e necessidades.

A acessibilidade é um direito e um instrumento de inclusão, não apenas um benefício adicional. Pelo *Curb-Cut Effect* (efeito rampa), recursos concebidos para remover barreiras específicas — como linguagem clara, navegação previsível e menor dependência da memória — também podem beneficiar pessoas neurotípicas em situações de cansaço, estresse ou dificuldade temporária de concentração. Os critérios a seguir articulam recomendações do COGA e princípios heurísticos com requisitos normativos da WCAG 2.2 quando aplicáveis; essa distinção é importante porque as orientações do COGA ampliam a acessibilidade cognitiva, mas não constituem, por si sós, requisitos de conformidade com a WCAG [[1]](#ref-1) [[3]](#ref-3).

---

## Critério 1 — Redução de estímulos visuais desnecessários

- [ ] **A interface evita o excesso de cores, informações e elementos visuais desnecessários que possam sobrecarregar cognitivamente o usuário e prejudicar sua concentração?** [[1]](#ref-1) [[2]](#ref-2)
    - `👤 Persona: Pessoas com diferentes perfis cognitivos e atencionais` `⚖️ Norma/Base: W3C COGA; Nielsen H8 — Estética e design minimalista` `🛠️ Ferramenta: Inspeção heurística e inventário visual`
    ??? info "Como auditar / Passo a passo"
        1. Percorra as telas e os estados principais da tarefa e registre cores chamativas, informações fora de contexto, elementos decorativos e estímulos simultâneos que disputem a atenção sem apoiar uma função ou prioridade informacional.
        2. Verifique se as informações essenciais são priorizadas e agrupadas de modo que o usuário consiga identificar o objetivo e a próxima ação sem precisar filtrar conteúdo irrelevante.
        3. Considere o critério atendido quando os estímulos visuais tiverem propósito identificável, não competirem indevidamente com a tarefa e a organização favorecer a concentração; não estabeleça um número máximo arbitrário de cores.

---

## Critério 2 — Padronização e familiaridade dos elementos interativos

- [ ] **Os elementos interativos seguem padrões visuais e comportamentais familiares, permitindo que os usuários reconheçam suas funções?** [[1]](#ref-1) [[2]](#ref-2)
    - `👤 Persona: Pessoas com diferentes perfis cognitivos e de aprendizagem` `⚖️ Norma/Base: W3C COGA; Nielsen H4 — Consistência e padrões` `🛠️ Ferramenta: Inspeção heurística comparativa`
    ??? info "Como auditar / Passo a passo"
        1. Compare links, botões, campos e outros controles entre telas e estados, verificando se elementos com a mesma função mantêm aparência, rótulo e comportamento consistentes e se elementos não interativos não parecem acionáveis.
        2. Confirme que links e botões são reconhecíveis por mais de uma pista visual ou textual e que a função ou o estado de um controle não depende exclusivamente da cor.
        3. Considere o critério atendido quando os controles puderem ser reconhecidos e previstos a partir de convenções familiares e da consistência interna da interface.

---

## Critério 3 — Ícones intuitivos e rótulos compreensíveis

- [ ] **Os ícones utilizados pela interface possuem significados facilmente compreensíveis e, quando necessário, são acompanhados de rótulos textuais claros?** [[1]](#ref-1) [[2]](#ref-2)
    - `👤 Persona: Pessoas com diferentes repertórios e perfis cognitivos` `⚖️ Norma/Base: W3C COGA; Nielsen H2 e H6` `🛠️ Ferramenta: Revisão de ícones e teste de compreensão`
    ??? info "Como auditar / Passo a passo"
        1. Liste os ícones acionáveis e verifique se a representação e o rótulo, a dica contextual ou o texto adjacente correspondem à ação executada, sobretudo em símbolos pouco familiares ou potencialmente ambíguos.
        2. Compare ocorrências repetidas para confirmar que o mesmo ícone representa a mesma ação e que ações diferentes não usam símbolos facilmente confundíveis.
        3. Considere o critério atendido quando a finalidade de cada ícone puder ser compreendida sem adivinhação e os casos ambíguos tiverem rótulo textual claro e consistente.

---

## Critério 4 — Identificação da etapa atual em processos

- [ ] **A interface informa claramente em qual etapa de uma atividade ou processo o usuário está?** [[1]](#ref-1) [[2]](#ref-2)
    - `👤 Persona: Pessoas com dificuldades de atenção, memória ou orientação` `⚖️ Norma/Base: W3C COGA; Nielsen H1 — Visibilidade do estado do sistema` `🛠️ Ferramenta: Teste de percurso em fluxo multietapas`
    ??? info "Como auditar / Passo a passo"
        1. Inicie cada fluxo com várias etapas e, em pontos distintos, verifique se a interface identifica com denominações compreensíveis a etapa atual, o progresso já realizado e, quando relevante, o que ainda falta concluir.
        2. Peça a avaliadores que indiquem onde estão e qual é o próximo passo usando apenas as informações visíveis, sem presumir que exista um componente específico, como um *stepper*.
        3. Considere o critério atendido quando a posição e o progresso no processo forem compreensíveis e houver orientação suficiente para continuar a atividade.

---

## Critério 5 — Orientação e localização durante a navegação

- [ ] **A interface oferece mecanismos que permitem ao usuário identificar sua localização dentro da estrutura do sistema?** [[1]](#ref-1) [[2]](#ref-2)
    - `👤 Persona: Pessoas com dificuldades de memória ou orientação espacial` `⚖️ Norma/Base: W3C COGA; Nielsen H6 — Reconhecimento em vez de memorização` `🛠️ Ferramenta: Inspeção da arquitetura de informação`
    ??? info "Como auditar / Passo a passo"
        1. Acesse páginas por diferentes caminhos e verifique se título, navegação, destaque da seção atual ou outro mecanismo equivalente identifica a página e sua relação com as demais áreas do sistema.
        2. Confirme que os nomes e agrupamentos da navegação permitem compreender a estrutura sem exigir que o usuário memorize o caminho percorrido; *breadcrumbs* podem ajudar, mas não são obrigatórios em todos os contextos.
        3. Considere o critério atendido quando a localização atual e as relações principais entre páginas e seções puderem ser reconhecidas pelas informações apresentadas.

---

## Critério 6 — Títulos, subtítulos e instruções claras

- [ ] **Os títulos, subtítulos e textos da interface apresentam informações claras, objetivas e compreensíveis, sem complexidade desnecessária?** [[1]](#ref-1) [[2]](#ref-2)
    - `👤 Persona: Pessoas com dislexia e diferentes níveis de letramento` `⚖️ Norma/Base: W3C COGA; Nielsen H2 — Correspondência entre o sistema e o mundo real` `🛠️ Ferramenta: Revisão de conteúdo e leitura orientada à tarefa`
    ??? info "Como auditar / Passo a passo"
        1. Revise amostras de títulos, subtítulos, instruções e mensagens, verificando se antecipam corretamente o conteúdo ou a ação, usam termos adequados ao público e evitam ambiguidades, jargões e complexidade desnecessária.
        2. Em conteúdos extensos, avalie se seções, resumos ou instruções separadas favorecem a localização da informação sem classificar um texto como inadequado apenas por seu comprimento.
        3. Considere o critério atendido quando o conteúdo necessário estiver claro, organizado e suficiente para realizar a tarefa, sem exigir interpretações ou conhecimentos desnecessários.

---

## Critério 7 — Hierarquia visual e agrupamento das informações

- [ ] **A interface apresenta hierarquia visual clara, permitindo identificar informações principais, secundárias e elementos relacionados?** [[1]](#ref-1) [[2]](#ref-2)
    - `👤 Persona: Pessoas com diferentes perfis de atenção e processamento visual` `⚖️ Norma/Base: W3C COGA; Nielsen H8 — Estética e design minimalista` `🛠️ Ferramenta: Inspeção visual comparativa`
    ??? info "Como auditar / Passo a passo"
        1. Observe cada tela em sua totalidade e verifique se tamanho, posição, espaçamento, contraste e títulos diferenciam níveis de informação e agrupam conteúdos e controles relacionados.
        2. Compare a ênfase visual com a relevância para a tarefa, confirmando que informações secundárias não se sobrepõem às principais e que as seções podem ser percorridas em uma ordem compreensível.
        3. Considere o critério atendido quando a hierarquia e os agrupamentos forem identificáveis sem depender de um componente específico; *cards* são apenas uma das soluções possíveis.

---

## Critério 8 — Compatibilidade com leitores de tela

- [ ] **Os elementos da interface possuem identificação semântica adequada, permitindo que leitores de tela comuniquem suas funções, estados e informações?** [[3]](#ref-3) [[4]](#ref-4) [[5]](#ref-5)
    - `👤 Persona: Pessoas usuárias de leitores de tela` `⚖️ Norma/Base: WCAG 2.2 — 1.3.1 (A) e 4.1.2 (A)` `🛠️ Ferramenta: DevTools + NVDA ou VoiceOver`
    ??? info "Como auditar / Passo a passo"
        1. Inspecione o HTML e a árvore de acessibilidade, priorizando elementos semânticos nativos; verifique títulos, listas, regiões, tabelas e a associação programática de cada campo com seu `label`.
        2. Examine controles personalizados e confirme que nome, função, valor e estados são expostos programaticamente, usando `aria-label` ou `aria-labelledby` somente quando a semântica nativa e o rótulo visível não forem suficientes.
        3. Percorra o fluxo principal com NVDA, VoiceOver ou tecnologia equivalente e confirme que informações, relações, controles e mudanças de estado são anunciados de forma compreensível e acionável.
        4. Considere o critério atendido quando não houver controles sem nome ou função, as relações relevantes forem preservadas e os estados puderem ser percebidos pela tecnologia assistiva; esta é uma dimensão ampla da acessibilidade, não exclusiva da acessibilidade cognitiva.

---

## Critério 9 — Prevenção de erros e ações equivocadas

- [ ] **A interface oferece mecanismos que ajudam o usuário a evitar erros e ações acidentais durante a interação?** [[1]](#ref-1) [[2]](#ref-2)
    - `👤 Persona: Pessoas com diferentes perfis cognitivos, atencionais e motores` `⚖️ Norma/Base: W3C COGA; Nielsen H5 — Prevenção de erros` `🛠️ Ferramenta: Inspeção heurística de fluxos críticos`
    ??? info "Como auditar / Passo a passo"
        1. Mapeie ações propensas a erro e operações críticas ou irreversíveis, verificando se rótulos e instruções antecipam consequências e se ações distintas são visual e textualmente diferenciadas.
        2. Tente acionar por engano operações de maior impacto e verifique se há restrições, validação, confirmação ou outra proteção proporcional ao risco, sem criar confirmação desnecessária para toda ação simples.
        3. Considere o critério atendido quando erros previsíveis forem evitados antes de acontecer e as operações críticas exigirem intenção clara do usuário.

---

## Critério 10 — Possibilidade de desfazer ou corrigir ações

- [ ] **O usuário consegue desfazer ou corrigir ações realizadas por engano, quando tecnicamente possível?** [[1]](#ref-1) [[2]](#ref-2)
    - `👤 Persona: Pessoas com diferentes perfis cognitivos, atencionais e motores` `⚖️ Norma/Base: W3C COGA; Nielsen H3 — Controle e liberdade do usuário` `🛠️ Ferramenta: Teste de recuperação após erro`
    ??? info "Como auditar / Passo a passo"
        1. Execute ações editáveis, envios e mudanças de estado e, depois de concluí-las, procure mecanismos visíveis para cancelar, desfazer, editar ou revisar a informação sem reiniciar desnecessariamente a tarefa.
        2. Verifique se o mecanismo de recuperação permanece disponível por tempo e em local compatíveis com a decisão e se informa claramente o resultado da correção.
        3. Considere o critério atendido quando ações equivocadas puderem ser recuperadas ou corrigidas, quando tecnicamente possível; diferentemente do Critério 9, esta avaliação ocorre depois do erro ou da ação indesejada.

---

## Critério 11 — Facilidade de retorno e orientação após a navegação

- [ ] **A interface permite retornar a páginas ou etapas anteriores de maneira clara e previsível, mantendo o usuário orientado após o retorno?** [[1]](#ref-1) [[2]](#ref-2)
    - `👤 Persona: Pessoas com dificuldades de memória, atenção ou orientação` `⚖️ Norma/Base: W3C COGA; Nielsen H3 — Controle e liberdade do usuário` `🛠️ Ferramenta: Teste de navegação de ida e volta`
    ??? info "Como auditar / Passo a passo"
        1. Navegue por páginas e etapas sucessivas e retorne usando tanto os controles oferecidos pela interface quanto o comando de voltar do navegador, quando aplicável.
        2. Verifique se o retorno leva ao destino esperado e recupera contexto relevante, como posição, seleção ou etapa, sem conduzir a um estado inesperado ou exigir que o usuário reconstrua o caminho.
        3. Considere o critério atendido quando voltar for claro, previsível e preservar orientação suficiente; diferentemente do Critério 5, o foco aqui é o comportamento durante e após o retorno.

---

## Critério 12 — Feedback de conclusão e identificação de atividades realizadas

- [ ] **O sistema informa claramente quando uma atividade foi concluída e permite que o usuário reconheça seu estado posteriormente, quando necessário?** [[1]](#ref-1) [[2]](#ref-2)
    - `👤 Persona: Pessoas com dificuldades de atenção ou memória` `⚖️ Norma/Base: W3C COGA; Nielsen H1 — Visibilidade do estado do sistema` `🛠️ Ferramenta: Teste de conclusão e consulta de status`
    ??? info "Como auditar / Passo a passo"
        1. Conclua tarefas representativas e verifique se o sistema apresenta confirmação clara, específica e coerente com o resultado, além de impedir ou desencorajar envios duplicados enquanto processa a ação.
        2. Quando o estado precisar ser consultado depois, saia da tela e retorne para confirmar que a atividade realizada permanece identificável por status, histórico ou mecanismo equivalente.
        3. Considere o critério atendido quando a conclusão e o estado posterior puderem ser reconhecidos sem depender exclusivamente de mensagens transitórias; *pop-ups* não são obrigatórios.

---

## Critério 13 — Preservação e recuperação de informações preenchidas

- [ ] **O sistema preserva informações previamente inseridas pelo usuário, evitando o preenchimento repetitivo ao retornar entre etapas ou corrigir erros?** [[1]](#ref-1) [[3]](#ref-3) [[6]](#ref-6)
    - `👤 Persona: Pessoas com dificuldades de memória, atenção ou fadiga cognitiva` `⚖️ Norma/Base: WCAG 2.2 — 3.3.7 (A); W3C COGA` `🛠️ Ferramenta: Teste de formulário multietapas`
    ??? info "Como auditar / Passo a passo"
        1. Preencha um processo com várias etapas, avance e retorne, e provoque erros de validação para verificar se dados válidos permanecem disponíveis e se informações já fornecidas no mesmo processo são preenchidas automaticamente ou oferecidas para seleção.
        2. Em atividades extensas, avalie se a preservação temporária ou a recuperação de rascunho é apropriada como recomendação complementar de usabilidade e acessibilidade cognitiva, considerando privacidade e segurança.
        3. Aplique o requisito 3.3.7 à entrada redundante no mesmo processo, respeitando as exceções de necessidade essencial, segurança e perda de validade; não exija com base nele armazenamento entre sessões, recuperação universal de rascunhos ou uso de uma API específica.
        4. Considere o critério atendido quando retornos e erros não causem perda desnecessária de dados e, no mesmo processo, informações repetidas sejam reutilizáveis conforme a WCAG 2.2.

---

## Critério 14 — Autenticação acessível e redução da dependência da memória

- [ ] **O sistema oferece mecanismos de autenticação acessíveis que reduzem a necessidade de memorização e esforço cognitivo?** [[1]](#ref-1) [[3]](#ref-3) [[7]](#ref-7)
    - `👤 Persona: Pessoas com dificuldades de memória, atenção ou transcrição` `⚖️ Norma/Base: WCAG 2.2 — 3.3.8 (AA); W3C COGA` `🛠️ Ferramenta: Navegador + gerenciador de senhas`
    ??? info "Como auditar / Passo a passo"
        1. No fluxo de autenticação, use o preenchimento automático do navegador e um gerenciador de senhas para verificar se campos, atributos e controles permitem inserir credenciais sem memorizá-las ou transcrevê-las manualmente.
        2. Copie e cole senhas e códigos de autenticação nos respectivos campos e confirme que a interface não bloqueia esses mecanismos de assistência.
        3. Verifique se há, quando apropriado ao contexto e ao risco, uma alternativa que reduza testes de função cognitiva, como passkey, autenticação pelo dispositivo ou outro método acessível; a WCAG não exige universalmente passkeys ou biometria.
        4. Acione a recuperação de acesso e confirme que instruções, etapas, mensagens e canais necessários são claros, compreensíveis e acessíveis.
        5. Considere o critério atendido quando todas as etapas de autenticação oferecem alternativa ou assistência compatível com o SC 3.3.8, incluindo gerenciadores de senhas e copiar e colar; métodos adicionais e recuperação clara devem ser tratados como recomendações complementares quando não forem requisitos diretos da norma.

---

## Referências Bibliográficas e Documentais

1. <a id="ref-1"></a> W3C WAI. **Making Content Usable for People with Cognitive and Learning Disabilities (COGA)**. 2021. Disponível em: <https://www.w3.org/TR/coga-usable/>.
2. <a id="ref-2"></a> NIELSEN, Jakob. **10 Usability Heuristics for User Interface Design**. Nielsen Norman Group. Disponível em: <https://www.nngroup.com/articles/ten-usability-heuristics/>.
3. <a id="ref-3"></a> W3C. **Web Content Accessibility Guidelines (WCAG) 2.2**. Disponível em: <https://www.w3.org/TR/WCAG22/>.
4. <a id="ref-4"></a> W3C WAI. **Understanding Success Criterion 1.3.1: Info and Relationships**. Disponível em: <https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html>.
5. <a id="ref-5"></a> W3C WAI. **Understanding Success Criterion 4.1.2: Name, Role, Value**. Disponível em: <https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html>.
6. <a id="ref-6"></a> W3C WAI. **Understanding Success Criterion 3.3.7: Redundant Entry**. Disponível em: <https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html>.
7. <a id="ref-7"></a> W3C WAI. **Understanding Success Criterion 3.3.8: Accessible Authentication (Minimum)**. Disponível em: <https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html>.
