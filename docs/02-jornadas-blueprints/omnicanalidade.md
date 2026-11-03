# Omnicanalidade e Acessibilidade Multicanal

**Omnicanalidade** é a capacidade de uma organização oferecer uma experiência contínua e integrada entre todos os seus pontos de contato (aplicativo mobile, site desktop, chat, totem de autoatendimento, telefone e atendimento humano presencial), preservando o contexto da pessoa a cada troca de canal. Diferente da abordagem *multicanal*, em que cada canal funciona como um silo, na omnicanalidade o usuário pode começar uma tarefa em um canal e concluí-la em outro sem repetir informações, sem perder o histórico e sem reaprender regras ou termos.

Na auditoria de UX, IHC e Acessibilidade, a omnicanalidade exige olhar para duas dimensões ao mesmo tempo: **consistência** (mesma linguagem, mesmas regras e mesmos estados entre canais) e **equivalência acessível** (todo serviço essencial deve estar disponível por canais que funcionem para quem depende de texto, voz, Libras, leitor de tela ou outras tecnologias assistivas). Um canal inacessível ou uma troca de canal que apaga o contexto transformam-se em barreiras, e para muitas pessoas com deficiência o canal "alternativo" é o único possível.

---

## Continuidade e Preservação de Contexto

- [ ] **Ao trocar de canal (ex.: app para site, site para chat), a pessoa retoma a tarefa do ponto em que parou, sem precisar preencher novamente dados já informados?** [[3]](#ref-3) [[9]](#ref-9)
    - `👤 Persona: Pessoa com deficiência motora, cognitiva ou de memória, para quem repetir dados é custoso` `⚖️ Norma/Base: WCAG 2.2 - Critério 3.3.7 (Entrada Redundante); Nielsen (heurística 3)` `🛠️ Ferramenta: Teste de cenário entre canais com a mesma conta`
    ??? info "Como auditar / Passo a passo"
        1. Inicie uma tarefa (ex.: cadastro, compra, abertura de chamado) em um canal e interrompa no meio.
        2. Acesse o mesmo serviço por outro canal com a mesma identidade.
        3. Critério atendido: os dados e o estado da tarefa foram preservados e a pessoa continua do ponto em que parou.

- [ ] **Na passagem para o atendimento humano ou para outro setor, o histórico da interação e as necessidades de acessibilidade já informadas são transferidos, sem exigir que a pessoa recomece?** [[8]](#ref-8) [[4]](#ref-4)
    - `👤 Persona: Pessoa surda, com deficiência de fala ou com deficiência cognitiva, que precisa explicar sua necessidade de comunicação` `⚖️ Norma/Base: Kalbach (2017); Lei nº 13.146/2015 (LBI)` `🛠️ Ferramenta: Cliente oculto (mystery shopping) e mapa de transferência entre canais`
    ??? info "Como auditar / Passo a passo"
        1. Inicie o atendimento por um canal automatizado (chat ou bot) informando uma necessidade de acessibilidade (ex.: "prefiro texto" ou "preciso de intérprete de Libras").
        2. Solicite transferência para um atendente humano.
        3. Critério atendido: o atendente recebe o histórico e a preferência, não pede novamente as informações e continua pelo meio acessível escolhido.

- [ ] **Existe um identificador único (protocolo, número de pedido) apresentado em texto, copiável e válido em todos os canais, com o status da solicitação consistente em qualquer um deles?** [[9]](#ref-9) [[8]](#ref-8)
    - `👤 Persona: Todos os usuários, em especial quem usa leitor de tela ou tem baixa memória de trabalho` `⚖️ Norma/Base: Nielsen (heurísticas 1 e 6); Kalbach (2017)` `🛠️ Ferramenta: Teste cruzado de consulta de status em cada canal`
    ??? info "Como auditar / Passo a passo"
        1. Gere um protocolo em um canal e consulte o mesmo protocolo nos demais.
        2. Compare o status exibido em cada canal e verifique se o número é legível por leitor de tela (texto real, não imagem).
        3. Critério atendido: o protocolo funciona em todos os canais e o status é idêntico e atualizado em todos.

---

## Consistência entre Canais

- [ ] **Terminologia, rótulos, ordem das etapas e regras de negócio são consistentes entre os canais, e componentes equivalentes são identificados da mesma forma?** [[2]](#ref-2) [[3]](#ref-3) [[9]](#ref-9)
    - `👤 Persona: Pessoa idosa, com deficiência cognitiva ou baixa familiaridade digital` `⚖️ Norma/Base: WCAG 2.2 - Critérios 3.2.3 (Navegação Consistente) e 3.2.4 (Identificação Consistente); ABNT NBR 17225:2025; Nielsen (heurística 4)` `🛠️ Ferramenta: Matriz comparativa de canais (rótulos, etapas, mensagens, regras)`
    ??? info "Como auditar / Passo a passo"
        1. Escolha 3 a 5 tarefas centrais e monte uma tabela com o nome de cada ação, a ordem das etapas e as regras (prazos, valores, requisitos) em cada canal.
        2. Aponte divergências de termos, ordem ou regras.
        3. Critério atendido: a mesma ação tem o mesmo nome e comportamento em todos os canais, ou a diferença é justificada e explicada ao usuário.

- [ ] **As preferências de acessibilidade do usuário (tamanho de texto, contraste, idioma, redução de movimento) são respeitadas em cada canal digital, seguindo as configurações do sistema ou da conta?** [[3]](#ref-3) [[1]](#ref-1)
    - `👤 Persona: Pessoa com baixa visão, daltonismo, sensibilidade a movimento ou dislexia` `⚖️ Norma/Base: WCAG 2.2 - Critérios 1.4.3 (Contraste), 1.4.4 (Redimensionar Texto) e 2.3.3 (Animação por Interações); ABNT NBR 17060:2022` `🛠️ Ferramenta: Teste com ampliação de fonte do sistema, modo escuro/alto contraste e zoom de 200%`
    ??? info "Como auditar / Passo a passo"
        1. Ative no dispositivo texto maior, alto contraste e redução de movimento.
        2. Abra o app e o site e confira se o conteúdo se adapta sem perda de informação ou funcionalidade.
        3. Critério atendido: nenhuma tela corta texto, sobrepõe elementos ou ignora as preferências do sistema.

---

## Canais Acessíveis Equivalentes

- [ ] **Todo serviço essencial pode ser concluído por pelo menos um canal em texto e um canal por voz ou vídeo, de modo que a pessoa escolha o meio que atende sua necessidade?** [[4]](#ref-4) [[3]](#ref-3)
    - `👤 Persona: Pessoa surda ou com deficiência de fala (precisa de texto/vídeo), pessoa cega ou com baixa visão (pode preferir voz)` `⚖️ Norma/Base: Lei nº 13.146/2015 (LBI); WCAG 2.2 - Critério 1.1.1 (Conteúdo Não Textual)` `🛠️ Ferramenta: Inventário de canais x tarefas essenciais`
    ??? info "Como auditar / Passo a passo"
        1. Liste os serviços essenciais (ex.: consulta, contratação, cancelamento, reclamação).
        2. Marque em quais canais textuais e quais canais por voz/vídeo cada serviço está disponível.
        3. Critério atendido: nenhum serviço essencial depende exclusivamente de ligação telefônica ou de atendimento presencial.

- [ ] **Conteúdos e atendimentos em vídeo ou áudio oferecem legendas, transcrição, audiodescrição e interpretação em Libras quando aplicável?** [[3]](#ref-3) [[5]](#ref-5) [[6]](#ref-6)
    - `👤 Persona: Pessoa surda sinalizante de Libras, pessoa com deficiência auditiva, pessoa cega` `⚖️ Norma/Base: Lei nº 10.436/2002 (Libras); Decreto nº 5.626/2005; WCAG 2.2 - Critérios 1.2.2 (Legendas), 1.2.5 (Audiodescrição) e 1.2.6 (Língua de Sinais)` `🛠️ Ferramenta: Revisão manual de vídeos e do atendimento por videochamada em Libras`
    ??? info "Como auditar / Passo a passo"
        1. Reproduza os principais vídeos, tutoriais e áudios dos canais e verifique a presença de legendas sincronizadas e transcrição.
        2. Verifique se há audiodescrição ou alternativa equivalente e se existe janela de Libras ou canal de videoatendimento em Libras.
        3. Critério atendido: a informação do vídeo ou áudio é obtida integralmente por quem não vê ou não ouve.

- [ ] **Totens e terminais de autoatendimento presenciais podem ser usados por pessoas com diferentes necessidades (altura de alcance, área de manobra, áudio por fone, teclado físico, alternativa em Libras)?** [[7]](#ref-7) [[4]](#ref-4)
    - `👤 Persona: Pessoa usuária de cadeira de rodas, pessoa de baixa estatura, pessoa cega ou com baixa visão, pessoa surda` `⚖️ Norma/Base: ABNT NBR 9050:2020; Lei nº 13.146/2015 (LBI)` `🛠️ Ferramenta: Inspeção presencial com checklist e trena, e teste com leitor de tela/áudio no terminal`
    ??? info "Como auditar / Passo a passo"
        1. Meça altura da tela e dos comandos, área de manobra frontal e espaço para aproximação.
        2. Teste se há saída de áudio privada (fone) com navegação por teclado ou comandos táteis e se há alternativa para quem usa Libras (ex.: vídeo, QR code para atendimento remoto).
        3. Critério atendido: a tarefa é concluída de forma autônoma por perfis diversos, sem depender de terceiros.

- [ ] **No aplicativo mobile, os alvos de toque têm tamanho adequado, os gestos complexos possuem alternativa simples e a interface funciona nas duas orientações e com leitor de tela?** [[1]](#ref-1) [[3]](#ref-3)
    - `👤 Persona: Pessoa com deficiência motora ou tremores, pessoa cega usuária de TalkBack/VoiceOver` `⚖️ Norma/Base: ABNT NBR 17060:2022; WCAG 2.2 - Critérios 1.3.4 (Orientação), 2.5.1 (Gestos do Ponteiro) e 2.5.8 (Tamanho do Alvo)` `🛠️ Ferramenta: TalkBack (Android), VoiceOver (iOS) e Accessibility Scanner`
    ??? info "Como auditar / Passo a passo"
        1. Navegue pelas telas principais com leitor de tela ativado, verificando rótulos, ordem e anúncios.
        2. Confira se botões e links têm área de toque suficiente e se ações de arrastar, pinçar ou deslizar têm alternativa de toque simples.
        3. Critério atendido: todas as funções são operáveis com toque simples e com leitor de tela, em retrato e paisagem.

---

## Ausência de Barreiras e Becos sem Saída entre Canais

- [ ] **Nenhum canal é a única via para um serviço essencial nem impõe barreira sem alternativa (CAPTCHA visual, validação apenas por voz, código com tempo curto)?** [[3]](#ref-3) [[4]](#ref-4)
    - `👤 Persona: Pessoa cega, surda, com deficiência cognitiva ou motora` `⚖️ Norma/Base: WCAG 2.2 - Critérios 1.1.1 (CAPTCHA), 2.2.1 (Tempo Ajustável) e 3.3.8 (Autenticação Acessível); Lei nº 13.146/2015 (LBI)` `🛠️ Ferramenta: Percurso de autenticação e cadastro com leitor de tela e apenas teclado`
    ??? info "Como auditar / Passo a passo"
        1. Percorra login, recuperação de senha e verificação de identidade em cada canal usando tecnologias assistivas.
        2. Registre onde a pessoa depende de ver uma imagem, ouvir um código, resolver um enigma ou agir dentro de um tempo curto.
        3. Critério atendido: existe sempre uma alternativa acessível e a falha em um canal remete explicitamente a outro canal equivalente.

---

## Referências Bibliográficas e Documentais

1. <a id="ref-1"></a> ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **ABNT NBR 17060:2022 - Acessibilidade em aplicativos de dispositivos móveis - Requisitos**. Rio de Janeiro: ABNT, 2022. Disponível em: <https://www.abnt.org.br>.
2. <a id="ref-2"></a> ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **ABNT NBR 17225:2025 - Acessibilidade em conteúdo e aplicações web - Requisitos**. Rio de Janeiro: ABNT, 2025. Disponível em: <https://www.abnt.org.br>.
3. <a id="ref-3"></a> W3C. **Web Content Accessibility Guidelines (WCAG) 2.2**. 2023. Disponível em: <https://www.w3.org/TR/WCAG22/>.
4. <a id="ref-4"></a> BRASIL. **Lei nº 13.146, de 6 de julho de 2015** (Lei Brasileira de Inclusão da Pessoa com Deficiência). Disponível em: <https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm>.
5. <a id="ref-5"></a> BRASIL. **Lei nº 10.436, de 24 de abril de 2002** (Dispõe sobre a Língua Brasileira de Sinais - Libras). Disponível em: <https://www.planalto.gov.br/ccivil_03/leis/2002/l10436.htm>.
6. <a id="ref-6"></a> BRASIL. **Decreto nº 5.626, de 22 de dezembro de 2005** (Regulamenta a Lei nº 10.436/2002). Disponível em: <https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2005/decreto/d5626.htm>.
7. <a id="ref-7"></a> ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **ABNT NBR 9050:2020 - Acessibilidade a edificações, mobiliário, espaços e equipamentos urbanos**. Rio de Janeiro: ABNT, 2020. Disponível em: <https://www.abnt.org.br>.
8. <a id="ref-8"></a> KALBACH, Jim. **Mapeamento de Experiências**: um guia para criar valor por meio de jornadas, blueprints e diagramas. Rio de Janeiro: Alta Books, 2017.
9. <a id="ref-9"></a> NIELSEN, Jakob. **10 Usability Heuristics for User Interface Design**. Nielsen Norman Group, 1994. Disponível em: <https://www.nngroup.com/articles/ten-usability-heuristics/>.