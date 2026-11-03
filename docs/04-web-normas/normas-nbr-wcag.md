# Marco Normativo: ABNT NBR 17225:2025, NBR 17060 & WCAG 2.2

O **WCAG 2.2**, publicado pelo W3C em outubro de 2023, organiza os critérios de sucesso em quatro princípios (perceptível, operável, compreensível e robusto) e três níveis de conformidade (A, AA e AAA). Em relação à versão 2.1, ele acrescentou nove critérios voltados sobretudo a pessoas com deficiência motora, baixa visão e deficiências cognitivas, e tornou obsoleto o critério 4.1.1 (Análise) [[3]](#ref-3) [[4]](#ref-4). No Brasil, a **ABNT NBR 17225:2025**, publicada em março de 2025, adota o WCAG 2.2 como referência e reorganiza os critérios em 16 temas práticos, classificando cada item como requisito (níveis A e AA) ou recomendação (nível AAA e boas práticas). Para aplicativos, a **ABNT NBR 17060:2022**, baseada no WCAG 2.1, trata de pontos próprios do celular, como toque, gestos, orientação de tela e leitores de tela nativos [[1]](#ref-1) [[2]](#ref-2).

Essas normas dão forma técnica ao marco legal brasileiro. A Lei Brasileira de Inclusão (Lei nº 13.146/2015, art. 63) obriga a acessibilidade dos sites mantidos por empresas com sede ou representação no país e por órgãos de governo, a Lei de Acesso à Informação (Lei nº 12.527/2011, art. 8º) exige acessibilidade nos portais públicos, o Decreto nº 5.296/2004 (art. 47) já previa essa obrigação para a administração pública e o eMAG 3.1 orienta os sites do governo federal [[6]](#ref-6) [[7]](#ref-7) [[8]](#ref-8) [[9]](#ref-9). Normas ABNT são de adoção voluntária, mas são o caminho técnico para demonstrar que a lei foi cumprida. Em IHC, isso significa que a auditoria não termina em uma lista de erros: ela precisa declarar escopo, norma, nível alvo e o impacto de cada barreira sobre pessoas reais [[12]](#ref-12) [[13]](#ref-13).

---

## Panorama das Normas e Níveis de Conformidade

| Documento | Escopo | Base técnica | Como usar na auditoria |
| :--- | :--- | :--- | :--- |
| **ABNT NBR 17225:2025** | Conteúdo e aplicações web | WCAG 2.2 | Checklist do Anexo C (Sim, Não ou N/A) e declaração de conformidade regular ou plena (Seção 4) |
| **ABNT NBR 17060:2022** | Aplicativos de dispositivos móveis: nativos, híbridos, web apps e sites móveis | WCAG 2.1 | Teste em aparelho real com TalkBack (Android) e VoiceOver (iOS) |
| **WCAG 2.2 (W3C)** | Conteúdo web, referência internacional | Recomendação do W3C (2023) | Critérios de sucesso com níveis A, AA e AAA, mapeados nos itens da NBR 17225 |
| **LBI, LAI, Decreto 5.296/2004 e eMAG 3.1** | Obrigação legal no Brasil | Legislação federal e modelo do governo | Fundamentam a exigência de acessibilidade e a página de acessibilidade do site |

A NBR 17225 define dois níveis de conformidade. A **conformidade regular** exige todos os requisitos e equivale ao nível AA do WCAG 2.2. A **conformidade plena** exige também as recomendações e aceita justificativa para as que não forem atendidas. A norma traz ainda o **Anexo A**, com itens problemáticos (como CAPTCHA, biometria, conteúdo de terceiros e componentes customizados), o **Anexo B**, que relaciona os itens ao desempenho funcional das pessoas usuárias, e o **Anexo C**, com o checklist de verificação [[1]](#ref-1). Dentro de **Como auditar**, cada item abaixo traz a base normativa exata: o número do item na NBR 17225 e o critério de sucesso do WCAG 2.2 com o seu nível. A NBR 17060 é citada por tema.

---

## Conformidade e Marco Legal

- [ ] **NBR-01: A auditoria declara a norma aplicável, o nível de conformidade alvo e a amostra de páginas e fluxos, e registra cada item como Sim, Não ou N/A com evidência?** [[1]](#ref-1) [[5]](#ref-5)
    - `👤 Persona: Equipe de Auditoria` `👤 Persona: Gestor do Produto` `⚖️ Norma/Base: ABNT NBR 17225:2025` `⚖️ Norma/Base: WCAG-EM 1.0` `🛠️ Ferramenta: Anexo C da NBR 17225` `🛠️ Ferramenta: WCAG-EM Report Tool`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17225, Seção 4 (conformidade) e Anexo C; W3C WCAG-EM 1.0.

        1. Identifique o produto e a norma: site responsivo (NBR 17225), aplicativo (NBR 17060) ou os dois.
        2. Defina a amostra: página inicial, uma página de cada modelo (lista, detalhe, formulário) e pelo menos um fluxo completo (ex.: do cadastro até a confirmação).
        3. Registre o nível alvo (conformidade regular ou plena) antes de começar.
        4. Use o checklist do Anexo C e marque Sim, Não ou N/A, anotando a evidência de cada resposta (captura de tela, trecho de código, URL).
        5. **Atende se:** outra pessoa consegue repetir a auditoria apenas com o que foi registrado.

- [ ] **NBR-02: As recomendações não atendidas têm justificativa registrada e o produto oferece uma página de acessibilidade com um canal para relatar barreiras?** [[1]](#ref-1) [[6]](#ref-6) [[9]](#ref-9)
    - `👤 Persona: Usuário com Deficiência` `👤 Persona: Gestor do Produto` `⚖️ Norma/Base: ABNT NBR 17225:2025` `⚖️ Norma/Base: LBI (Lei 13.146/2015)` `⚖️ Norma/Base: eMAG 3.1` `🛠️ Ferramenta: Inspeção Manual`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17225, Seção 4 (conformidade plena); LBI, art. 63; eMAG 3.1 (página sobre acessibilidade).

        1. Liste as recomendações marcadas como "Não" e confira se cada uma tem justificativa verificável (ex.: "audiodescrição estendida inviável em transmissões ao vivo").
        2. Procure no menu ou no rodapé uma página de acessibilidade com os recursos disponíveis, os atalhos e o nível de conformidade declarado.
        3. Verifique se existe um canal de contato acessível (formulário rotulado, e-mail ou telefone) para relatar problemas.
        4. **Atende se:** as justificativas podem ser conferidas e a pessoa usuária sabe onde pedir ajuda.

- [ ] **NBR-03: CAPTCHAs, biometria, conteúdos de terceiros e arquivos para download, tratados como itens problemáticos no Anexo A, têm alternativa acessível ou são sinalizados?** [[1]](#ref-1) [[3]](#ref-3)
    - `👤 Persona: Leitor de Tela` `👤 Persona: Surdez / Libras` `👤 Persona: Idoso` `⚖️ Norma/Base: ABNT NBR 17225:2025` `⚖️ Norma/Base: WCAG 2.2` `🛠️ Ferramenta: NVDA` `🛠️ Ferramenta: Inspeção Manual`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17225, Anexo A (itens A.1.1, A.1.2, A.1.5 e A.1.7) e item 5.9.18; WCAG 2.2, critérios 1.1.1 (A) e 3.3.8 (AA).

        1. Localize CAPTCHAs no login, no cadastro e nos formulários de contato.
        2. Verifique se o CAPTCHA é anunciado como tal pelo leitor de tela e se há alternativa em outra modalidade (um desafio só em áudio exclui pessoas surdas, e um só visual exclui pessoas cegas).
        3. Em fluxos com selfie ou biometria, confira se as instruções de posicionamento são lidas pelo leitor de tela e se existe outra forma de comprovar a identidade.
        4. Verifique se vídeos, mapas e publicações de redes sociais incorporados têm aviso quando não forem acessíveis, e se os arquivos para download (PDF, DOCX) têm texto real, e não imagem escaneada.
        5. **Atende se:** nenhuma pessoa fica impedida de concluir o fluxo por causa desses itens.

---

## Teclado, Foco e Novos Critérios do WCAG 2.2

- [ ] **NBR-04: O indicador de foco é sempre visível, tem contraste suficiente e nunca fica encoberto por cabeçalho fixo, banner de cookies, chat flutuante ou modal?** [[1]](#ref-1) [[3]](#ref-3) [[4]](#ref-4)
    - `👤 Persona: Motora / Teclado` `👤 Persona: Baixa Visão` `⚖️ Norma/Base: ABNT NBR 17225:2025` `⚖️ Norma/Base: WCAG 2.2` `🛠️ Ferramenta: Teste Manual de Teclado` `🛠️ Ferramenta: Colour Contrast Analyser`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17225, itens 5.1.1, 5.1.2 (recomendação), 5.1.3, 5.10.5 (recomendação) e 5.11.6; WCAG 2.2, critérios 2.4.7 (AA), 2.4.11 (AA, novo), 2.4.12 (AAA, novo) e 2.4.13 (AAA, novo).

        1. Aplique zoom de 200% no navegador.
        2. Percorra a página inteira com **Tab** e **Shift+Tab**, observando se sempre dá para ver onde o foco está.
        3. Com o banner de cookies e o chat abertos, confira se algum elemento focado fica totalmente coberto (o item 5.1.3 exige que ele fique ao menos parcialmente visível).
        4. Meça com o Colour Contrast Analyser o contraste do contorno de foco em relação ao fundo, que deve ser de pelo menos 3:1.
        5. Procure no CSS regras como `outline: none` sem um estilo de foco substituto.
        6. **Atende se:** o foco é sempre visível, tem contraste de 3:1 e nunca some atrás de componentes fixos.

- [ ] **NBR-05: Todas as funções podem ser usadas apenas com o teclado, em ordem lógica, sem armadilhas de foco e com atalhos de uma tecla que podem ser desligados?** [[1]](#ref-1) [[3]](#ref-3)
    - `👤 Persona: Motora / Teclado` `👤 Persona: Leitor de Tela` `⚖️ Norma/Base: ABNT NBR 17225:2025` `⚖️ Norma/Base: WCAG 2.2` `🛠️ Ferramenta: Teste Manual de Teclado` `🛠️ Ferramenta: Accessibility Insights`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17225, itens 5.1.4, 5.1.6, 5.1.11 e 5.1.13; WCAG 2.2, critérios 2.1.1 (A), 2.1.2 (A), 2.1.4 (A) e 2.4.3 (A).

        1. Deixe o mouse de lado e execute o fluxo principal do site do início ao fim usando **Tab**, **Enter**, **Espaço**, setas e **Esc**.
        2. Ative a visualização **Tab stops** do Accessibility Insights para ver a ordem numerada do foco e compare com a ordem visual.
        3. Abra modais, menus e players: confira se é possível sair com **Esc** ou **Tab** e se o foco volta para o botão que abriu o componente.
        4. Procure atalhos de uma tecla só (ex.: "S" para buscar) e verifique se há opção para desligá-los ou trocá-los.
        5. **Atende se:** o fluxo inteiro é concluído só com o teclado, sem saltos ilógicos e sem ficar preso em nenhum componente.

- [ ] **NBR-06: Os alvos de clique e toque têm área mínima de 24 por 24 pixels e toda ação de arrastar tem alternativa com clique ou toque simples?** [[1]](#ref-1) [[3]](#ref-3) [[4]](#ref-4)
    - `👤 Persona: Motora / Tremor` `👤 Persona: Idoso` `⚖️ Norma/Base: ABNT NBR 17225:2025` `⚖️ Norma/Base: WCAG 2.2` `🛠️ Ferramenta: DevTools do Navegador` `🛠️ Ferramenta: Teste em Aparelho Real`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17225, itens 5.8.6 (recomendação, 44 px), 5.8.7 e 5.8.13; WCAG 2.2, critérios 2.5.7 (AA, novo), 2.5.8 (AA, novo) e 2.5.5 (AAA).

        1. Inspecione no DevTools os ícones pequenos (fechar, editar, excluir, paginação) e anote largura e altura.
        2. Se forem menores que 24 px, verifique se o espaçamento até o vizinho completa os 24 px em todas as direções.
        3. Liste as interações de arrastar (controles deslizantes, quadros kanban, reordenação de lista) e procure a alternativa (botões de mover, setas, campo numérico).
        4. No celular, tente acertar cada controle com o polegar sem acionar o vizinho.
        5. **Atende se:** todos os alvos cumprem 24 px (o ideal é 44 px) e nenhuma função depende exclusivamente de arrastar.

- [ ] **NBR-07: O mecanismo de ajuda aparece sempre no mesmo lugar e os dados já informados em etapas anteriores não precisam ser digitados de novo?** [[1]](#ref-1) [[3]](#ref-3) [[4]](#ref-4)
    - `👤 Persona: Cognitiva / Intelectual` `👤 Persona: TDAH` `👤 Persona: Idoso` `⚖️ Norma/Base: ABNT NBR 17225:2025` `⚖️ Norma/Base: WCAG 2.2` `🛠️ Ferramenta: Inspeção Manual`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17225, itens 5.7.16 e 5.9.15; WCAG 2.2, critérios 3.2.6 (A, novo) e 3.3.7 (A, novo).

        1. Abra cinco páginas diferentes e anote onde fica o link ou o botão de ajuda (contato, perguntas frequentes, chat); ele deve manter a mesma posição relativa.
        2. Percorra um processo com várias etapas (ex.: inscrição com endereço de cobrança e de entrega).
        3. Verifique se as informações já dadas são reaproveitadas (ex.: caixa "usar o mesmo endereço") em vez de exigidas novamente.
        4. Aceite as exceções previstas: senha redigitada por segurança ou dado que deixou de ser válido.
        5. **Atende se:** a pessoa sempre sabe onde pedir ajuda e não precisa repetir dados.

- [ ] **NBR-08: O login funciona sem testes de função cognitiva, permitindo colar a senha, usar gerenciador de senhas ou outro método de acesso?** [[1]](#ref-1) [[3]](#ref-3) [[4]](#ref-4)
    - `👤 Persona: Dislexia` `👤 Persona: Cognitiva / Intelectual` `⚖️ Norma/Base: ABNT NBR 17225:2025` `⚖️ Norma/Base: WCAG 2.2` `🛠️ Ferramenta: Gerenciador de Senhas` `🛠️ Ferramenta: Inspeção Manual`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17225, itens 5.9.17 (recomendação) e 5.9.18; WCAG 2.2, critérios 3.3.8 (AA, novo) e 3.3.9 (AAA, novo).

        1. Copie a senha de um bloco de notas e tente colar com **Ctrl+V** no campo de senha.
        2. Verifique se o navegador oferece o preenchimento automático (campo com `autocomplete="current-password"`).
        3. Percorra a recuperação de senha e a verificação em duas etapas: o código pode ser colado ou exige digitação de memória?
        4. Se houver quebra-cabeça, cálculo ou transcrição de caracteres, confira se existe alternativa (link por e-mail, chave de acesso ou login gov.br).
        5. **Atende se:** é possível entrar sem memorizar, transcrever ou resolver nada.

---

## Percepção, Tempo e Movimento

- [ ] **NBR-09: No produto implementado, textos, bordas de campos, ícones e gráficos atingem o contraste mínimo e nenhuma informação depende apenas da cor?** [[1]](#ref-1) [[3]](#ref-3)
    - `👤 Persona: Baixa Visão` `👤 Persona: Daltonismo` `⚖️ Norma/Base: ABNT NBR 17225:2025` `⚖️ Norma/Base: WCAG 2.2` `🛠️ Ferramenta: Colour Contrast Analyser` `🛠️ Ferramenta: DevTools do Navegador`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17225, itens 5.11.1, 5.11.2 (recomendação, 7:1), 5.11.3, 5.11.4 e 5.11.5; WCAG 2.2, critérios 1.4.1 (A), 1.4.3 (AA), 1.4.6 (AAA) e 1.4.11 (AA).

        1. Rode o WAVE ou o Axe DevTools para uma primeira lista de erros de contraste de texto.
        2. Meça com o Colour Contrast Analyser o que as ferramentas não pegam: texto sobre imagem, placeholder, bordas de campos, ícones e estados (passar o mouse, desabilitado). Os mínimos são 4,5:1 para texto, 3:1 para texto grande (a partir de 18 pt, ou 14 pt em negrito) e 3:1 para componentes e gráficos.
        3. No DevTools, abra **Rendering** e emule protanopia, deuteranopia e acromatopsia; verifique gráficos, legendas e links no meio do texto.
        4. Este item avalia o produto já implementado; o contraste no protótipo é avaliado no eixo Cognição, UI & Figma.
        5. **Atende se:** todas as medições atingem os mínimos e a informação continua clara em escala de cinza.

- [ ] **NBR-10: Limites de tempo podem ser estendidos, animações e carrosséis podem ser pausados, nada pisca mais de três vezes por segundo e o site respeita a preferência por movimento reduzido?** [[1]](#ref-1) [[3]](#ref-3)
    - `👤 Persona: Epilepsia Fotossensível` `👤 Persona: TDAH` `👤 Persona: Distúrbio Vestibular` `⚖️ Norma/Base: ABNT NBR 17225:2025` `⚖️ Norma/Base: WCAG 2.2` `🛠️ Ferramenta: DevTools do Navegador` `🛠️ Ferramenta: PEAT`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17225, itens 5.15.1, 5.15.2 (recomendação), 5.15.4, 5.16.2, 5.16.3 e 5.16.6 (recomendação); WCAG 2.2, critérios 2.2.1 (A), 2.2.2 (A), 2.3.1 (A) e 2.3.3 (AAA).

        1. Identifique sessões com expiração (login, prova, reserva) e espere o tempo passar: deve haver aviso e opção de estender antes de perder dados.
        2. Procure carrosséis, banners animados e contadores com mais de 5 segundos de movimento e confira se há botão de pausar acessível por teclado.
        3. No DevTools, abra **Rendering**, ative `prefers-reduced-motion: reduce` e veja se transições grandes são removidas ou suavizadas.
        4. Para vídeos ou GIFs com luz piscando, analise o trecho com o PEAT (Photosensitive Epilepsy Analysis Tool).
        5. **Atende se:** a pessoa controla o tempo e o movimento, e nenhum conteúdo ultrapassa o limite de flashes.

---

## Aplicativos e Web Móvel (NBR 17060)

- [ ] **NBR-11: No aplicativo, o TalkBack e o VoiceOver anunciam todos os botões, imagens e campos com nome, função e estado corretos, em ordem de leitura lógica?** [[2]](#ref-2) [[3]](#ref-3)
    - `👤 Persona: Leitor de Tela` `👤 Persona: Baixa Visão` `⚖️ Norma/Base: ABNT NBR 17060:2022` `⚖️ Norma/Base: WCAG 2.2` `🛠️ Ferramenta: TalkBack` `🛠️ Ferramenta: VoiceOver` `🛠️ Ferramenta: Accessibility Scanner`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17060:2022 (leitores de tela e descrição de elementos); WCAG 2.2, critérios 1.1.1 (A), 1.3.2 (A) e 4.1.2 (A).

        1. Rode o Accessibility Scanner (Android) ou o Accessibility Inspector do Xcode (iOS) nas telas principais para uma triagem rápida.
        2. Ative o TalkBack ou o VoiceOver e navegue deslizando o dedo para a direita, elemento por elemento.
        3. Anote cada item lido como "botão" sem nome, "imagem" sem descrição ou lido fora de ordem.
        4. Ative um interruptor ou uma caixa de seleção e confira se o novo estado é anunciado ("ativado", "selecionado").
        5. **Atende se:** é possível concluir a tarefa principal do app de olhos fechados, só com o leitor de tela.

- [ ] **NBR-12: No app ou site móvel, as áreas de toque são confortáveis, gestos complexos têm alternativa simples, o conteúdo funciona em retrato e paisagem e o texto acompanha a fonte ampliada do sistema?** [[1]](#ref-1) [[2]](#ref-2) [[3]](#ref-3) [[10]](#ref-10) [[11]](#ref-11)
    - `👤 Persona: Motora / Tremor` `👤 Persona: Mobilidade Reduzida` `👤 Persona: Idoso` `⚖️ Norma/Base: ABNT NBR 17060:2022` `⚖️ Norma/Base: ABNT NBR 17225:2025` `⚖️ Norma/Base: WCAG 2.2` `🛠️ Ferramenta: Accessibility Scanner` `🛠️ Ferramenta: Teste em Aparelho Real`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17060:2022 (interação por toque, área de toque, gestos e orientação); NBR 17225, itens 5.8.12, 5.8.14 e 5.10.3; WCAG 2.2, critérios 1.3.4 (AA), 1.4.4 (AA), 2.5.1 (A) e 2.5.4 (A); referências das plataformas: 48 × 48 dp no Android e 44 × 44 pt no iOS.

        1. Rode o Accessibility Scanner e anote os alertas de área de toque pequena.
        2. Liste gestos com dois dedos, deslizar em caminho ou sacudir o aparelho, e procure a alternativa por botão.
        3. Gire o aparelho: o conteúdo não pode ficar travado em uma orientação, salvo quando ela for essencial. Pense em quem usa o celular preso à cadeira de rodas em posição fixa.
        4. Aumente a fonte do sistema ao máximo e percorra as telas: os textos não podem ser cortados nem sobrepostos.
        5. **Atende se:** todas as funções podem ser usadas com toque simples, em qualquer orientação e com fonte ampliada.

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
10. <a id="ref-10"></a> GOOGLE. **Make apps more accessible**. Android Developers. Disponível em: <https://developer.android.com/guide/topics/ui/accessibility/apps>.
11. <a id="ref-11"></a> APPLE. **Human Interface Guidelines: Accessibility**. Apple Developer. Disponível em: <https://developer.apple.com/design/human-interface-guidelines/accessibility>.
12. <a id="ref-12"></a> BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021.
13. <a id="ref-13"></a> FIGUEIREDO, Rejane Maria da Costa. **Material de aula da disciplina FGA0173: Interação Humano-Computador**. Brasília: Universidade de Brasília, 2026.