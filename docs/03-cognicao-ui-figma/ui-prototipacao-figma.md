# Design de Interface (UI) & Prototipação Acessível no Figma

O Design de Interface influencia diretamente a acessibilidade digital: decisões sobre contraste, uso da cor, tipografia, dimensões dos controles e movimento podem facilitar ou impedir a percepção, a compreensão e a operação de uma interface. Por isso, esses aspectos devem ser avaliados desde as primeiras decisões visuais, considerando os critérios da WCAG 2.2 e os requisitos e recomendações da ABNT NBR 17225:2025, inclusive suas condições de aplicação e exceções [[1]](#ref-1) [[2]](#ref-2) [[3]](#ref-3).

A prototipação permite antecipar barreiras antes da implementação. No Figma, estados, variantes, sequências de navegação e anotações de *handoff* podem comunicar aos desenvolvedores como as interações acessíveis devem funcionar [[5]](#ref-5) [[6]](#ref-6) [[7]](#ref-7). Essa documentação contribui para uma auditoria preventiva, mas um protótipo não comprova, isoladamente, conformidade com as WCAG: semântica, operação por teclado, exposição a tecnologias assistivas, redimensionamento e outros comportamentos precisam ser validados na aplicação funcional.

---

## Design de Interface (UI)

### Critério 01 — Contraste de textos

- [ ] **Os textos apresentam contraste mínimo de 4,5:1 para textos comuns e 3:1 para textos grandes, respeitando as exceções normativas?** [[1]](#ref-1) [[2]](#ref-2) [[3]](#ref-3)
    - `👤 Persona: Pessoas com baixa visão ou sensibilidade reduzida ao contraste` `⚖️ Norma/Base: WCAG 2.2 — 1.4.3 (AA); ABNT NBR 17225:2025 — 5.11.3 (requisito)` `🛠️ Ferramenta: Figma e WebAIM Contrast Checker ou medidor equivalente`
    ??? info "Como auditar / Passo a passo"
        1. Identifique todas as combinações relevantes de texto e fundo, incluindo títulos, parágrafos, botões, rótulos e mensagens.
        2. Registre as cores de primeiro plano e de fundo e meça a relação de contraste com uma ferramenta apropriada.
        3. Aplique o limite de 4,5:1 aos textos comuns e de 3:1 aos textos grandes, conforme a definição normativa de tamanho e peso.
        4. Verifique as exceções aplicáveis, como logotipos, elementos inativos, conteúdo meramente decorativo ou texto que integra imagem com conteúdo visual significativo.
        5. **Resultado esperado:** todas as combinações abrangidas pelo requisito atingem o contraste mínimo aplicável, e cada exceção utilizada está identificada e justificada.

### Critério 02 — Contraste de componentes e elementos gráficos

- [ ] **Os elementos visuais essenciais dos componentes e objetos gráficos apresentam contraste mínimo de 3:1 em relação às cores adjacentes?** [[1]](#ref-1) [[2]](#ref-2) [[3]](#ref-3)
    - `👤 Persona: Pessoas com baixa visão` `⚖️ Norma/Base: WCAG 2.2 — 1.4.11 (AA); ABNT NBR 17225:2025 — 5.11.4 e 5.11.5 (requisitos)` `🛠️ Ferramenta: Figma e medidor de contraste`
    ??? info "Como auditar / Passo a passo"
        1. Inspecione bordas de campos, ícones funcionais, controles, indicadores de estado e objetos gráficos informativos.
        2. Determine quais partes visuais são necessárias para identificar o componente, seu estado ou o significado do gráfico; não inclua automaticamente elementos meramente decorativos.
        3. Meça o contraste das partes essenciais em relação às cores adjacentes, incluindo os estados aplicáveis.
        4. Verifique as exceções normativas, como componentes inativos, aparência determinada pelo agente de usuário ou apresentação gráfica essencial.
        5. **Resultado esperado:** todas as informações visuais essenciais alcançam contraste de pelo menos 3:1, ou a exceção aplicável está identificada e justificada.

### Critério 03 — Informação não transmitida exclusivamente por cor

- [ ] **A interface comunica informações, ações e estados sem depender exclusivamente de diferenças de cor?** [[1]](#ref-1) [[2]](#ref-2) [[3]](#ref-3)
    - `👤 Persona: Pessoas com daltonismo, baixa visão ou dificuldades de diferenciação de cores` `⚖️ Norma/Base: WCAG 2.2 — 1.4.1 (A); ABNT NBR 17225:2025 — 5.11.1 (requisito)` `🛠️ Ferramenta: Figma, inspeção visual e simulador de percepção de cores`
    ??? info "Como auditar / Passo a passo"
        1. Identifique situações em que diferenças de cor comunicam informação, ação, solicitação de resposta ou distinção entre elementos.
        2. Verifique estados de erro, sucesso, seleção e alerta, além de links, campos obrigatórios, legendas e séries de gráficos.
        3. Confirme a presença de outro indicador visual suficiente, como texto, símbolo, padrão, sublinhado ou formato.
        4. Use simulações de percepção de cores e visualização em escala de cinza apenas como apoio à inspeção, não como testes conclusivos de conformidade.
        5. **Resultado esperado:** toda informação comunicada por cor também pode ser percebida por pelo menos outro meio visual adequado ao contexto.

### Critério 04 — Tipografia e adaptação textual

- [ ] **A interface prevê ampliação de textos até 200% e ajustes de espaçamento sem cortes, sobreposições ou perda de conteúdo e funcionalidade?** [[1]](#ref-1) [[2]](#ref-2) [[3]](#ref-3)
    - `👤 Persona: Pessoas com baixa visão e dificuldades de leitura` `⚖️ Norma/Base: WCAG 2.2 — 1.4.4 e 1.4.12 (AA); ABNT NBR 17225:2025 — 5.12.1 a 5.12.4 e 5.12.7 (requisitos)` `🛠️ Ferramenta: Figma, inspeção tipográfica e testes posteriores no navegador`
    ??? info "Como auditar / Passo a passo"
        1. Inspecione componentes e contêineres de texto para identificar alturas fixas, truncamentos e restrições que possam impedir a adaptação do conteúdo.
        2. Simule no design a ampliação do texto até 200% e verifique a reorganização dos componentes e fluxos.
        3. Simule, em conjunto, entrelinhas de 1,5 vez o tamanho da fonte, espaçamento após parágrafos de 2 vezes, espaçamento entre letras de 0,12 vez e entre palavras de 0,16 vez o tamanho da fonte.
        4. Procure cortes, sobreposições, ocultações, rolagem horizontal desnecessária e perda de conteúdo ou funcionalidade; os valores do passo anterior são condições de teste da WCAG 1.4.12, não uma obrigação para o espaçamento original do design.
        5. Registre no *handoff* que a ampliação e o espaçamento devem ser novamente testados no navegador, pois a simulação no Figma não reproduz integralmente o comportamento do conteúdo implementado.
        6. **Resultado esperado:** o design comporta as adaptações sem perda de informação ou funcionalidade, e as validações pendentes na aplicação estão documentadas.

### Critério 05 — Dimensões dos alvos interativos

- [ ] **Os controles possuem áreas de interação de pelo menos 24 × 24 pixels CSS ou atendem a exceções normativas, priorizando 44 × 44 pixels CSS quando viável?** [[1]](#ref-1) [[2]](#ref-2) [[3]](#ref-3)
    - `👤 Persona: Pessoas com limitações motoras, tremores ou dificuldades de precisão` `⚖️ Norma/Base: WCAG 2.2 — 2.5.8 (AA) e 2.5.5 (AAA); ABNT NBR 17225:2025 — 5.8.7 (requisito) e 5.8.6 (recomendação)` `🛠️ Ferramenta: Figma, inspeção dimensional e navegador`
    ??? info "Como auditar / Passo a passo"
        1. Identifique botões, links, ícones acionáveis e demais alvos para entrada por ponteiro.
        2. Meça a área de interação prevista, diferenciando o tamanho visual do ícone da área efetivamente acionável.
        3. Verifique se cada alvo atinge pelo menos 24 × 24 pixels CSS ou se satisfaz uma exceção normativa, inclusive a geometria específica da exceção por espaçamento.
        4. Priorize áreas de 44 × 44 pixels CSS quando viável, reconhecendo que esse valor corresponde à WCAG 2.5.5, nível AAA, e à recomendação 5.8.6 da ABNT, não a um requisito geral de nível AA.
        5. Documente dimensões e espaçamentos para validação na aplicação; unidades de design no Figma não comprovam, por si sós, as dimensões finais em pixels CSS.
        6. **Resultado esperado:** todas as áreas acionáveis atendem ao mínimo de 24 × 24 pixels CSS ou possuem exceções aplicáveis justificadas, com preferência por 44 × 44 pixels CSS registrada quando pertinente.

### Critério 06 — Redução de movimentos e animações

- [ ] **As animações de movimento não essenciais acionadas por interação podem ser desativadas, com alternativas documentadas para implementação?** [[1]](#ref-1) [[2]](#ref-2) [[3]](#ref-3) [[4]](#ref-4)
    - `👤 Persona: Pessoas com distúrbios vestibulares ou sensibilidade ao movimento` `⚖️ Norma/Base: WCAG 2.2 — 2.3.3 (AAA); ABNT NBR 17225:2025 — 5.15.2 (recomendação); W3C — Técnica C39` `🛠️ Ferramenta: Figma e navegador com preferência de movimento reduzido`
    ??? info "Como auditar / Passo a passo"
        1. Identifique animações de movimento acionadas por interação e registre seu objetivo no fluxo.
        2. Diferencie movimentos essenciais à funcionalidade ou à informação daqueles que podem ser removidos sem prejuízo.
        3. Para movimentos não essenciais, especifique uma alternativa estática ou com movimento reduzido que preserve conteúdo e funcionalidade.
        4. Documente o comportamento esperado quando a preferência de movimento reduzido estiver ativa e indique `prefers-reduced-motion: reduce` como uma técnica possível de implementação.
        5. Planeje testes no navegador, pois `prefers-reduced-motion` é uma técnica suficiente associada ao critério, não um critério WCAG independente nem a única técnica possível.
        6. **Resultado esperado:** toda animação abrangida pode ser desativada ou substituída sem perda de funcionalidade, ressalvados os movimentos essenciais devidamente justificados.

---

## Prototipação Acessível no Figma

### Critério 07 — Representação dos estados de foco

- [ ] **Os componentes interativos possuem estados de foco de teclado visualmente perceptíveis e documentados no Figma?** [[1]](#ref-1) [[2]](#ref-2) [[3]](#ref-3) [[5]](#ref-5)
    - `👤 Persona: Usuários de teclado e pessoas com baixa visão ou limitações motoras` `⚖️ Norma/Base: WCAG 2.2 — 2.4.7 e 1.4.11 (AA), 2.4.13 (AAA); ABNT NBR 17225:2025 — 5.1.1 e 5.11.6 (requisitos), 5.10.5 (recomendação)` `🛠️ Ferramenta: Figma, variantes de componentes e medidor de contraste`
    ??? info "Como auditar / Passo a passo"
        1. Liste os componentes que podem receber foco por teclado e determine os estados aplicáveis a cada um.
        2. Verifique se o estado `focus` está representado e é visualmente distinto de `hover`, `active`, `selected`, `disabled` e do estado padrão.
        3. Meça o contraste do indicador de foco em relação ao fundo e entre os estados com e sem foco.
        4. Documente a aparência e o comportamento esperados no desenvolvimento, incluindo situações em que o foco muda entre componentes ou entra em uma região sobreposta.
        5. Avalie separadamente o requisito AA de foco visível e as exigências adicionais de tamanho e aparência da WCAG 2.4.13, nível AAA.
        6. **Resultado esperado:** todos os componentes aplicáveis possuem um indicador de foco perceptível, consistente e documentado, com as verificações pendentes na aplicação identificadas.

### Critério 08 — Representação dos estados de erro

- [ ] **Os componentes de entrada de dados possuem estados de erro documentados, identificando o campo afetado e descrevendo textualmente o problema e sua correção quando aplicável?** [[1]](#ref-1) [[2]](#ref-2) [[3]](#ref-3)
    - `👤 Persona: Pessoas com baixa visão e dificuldades cognitivas ou de compreensão de formulários` `⚖️ Norma/Base: WCAG 2.2 — 3.3.1 e 1.4.1 (A), 3.3.3 (AA); ABNT NBR 17225:2025 — 5.9.9, 5.9.10 e 5.11.1 (requisitos)` `🛠️ Ferramenta: Figma e inspeção de componentes e formulários`
    ??? info "Como auditar / Passo a passo"
        1. Identifique formulários, campos e situações em que erros de entrada podem ser detectados automaticamente.
        2. Verifique se os componentes aplicáveis possuem estados de erro documentados e se o campo afetado pode ser identificado sem depender somente da cor.
        3. Confira se a mensagem descreve textualmente o problema de forma específica e compreensível.
        4. Avalie se há sugestão de correção quando ela for conhecida e puder ser fornecida sem comprometer a segurança ou o propósito do conteúdo.
        5. Documente a associação prevista entre mensagem e campo, além do comportamento de foco e anúncio; uma variante visual no Figma não comprova o anúncio adequado por leitores de tela.
        6. **Resultado esperado:** erros detectados automaticamente estão identificados e descritos em texto, com sugestões de correção quando aplicáveis e requisitos de implementação registrados.

### Critério 09 — Documentação de componentes e variantes

- [ ] **Os componentes reutilizáveis possuem nomes, propriedades, estados e variantes identificados e documentados de forma consistente?** [[5]](#ref-5)
    - `👤 Persona: Usuários beneficiados pela consistência visual e funcional dos componentes` `⚖️ Norma/Base: Documentação oficial do Figma e boas práticas de Design Systems` `🛠️ Ferramenta: Figma — Components, Variants e Component Properties`
    ??? info "Como auditar / Passo a passo"
        1. Faça um inventário dos componentes reutilizáveis e identifique quais propriedades, estados e comportamentos são aplicáveis a cada tipo.
        2. Verifique se nomes de componentes, propriedades e valores seguem um padrão descritivo e consistente.
        3. Confira a presença das variantes relevantes, como tamanho ou estado, sem exigir todas as combinações possíveis para todos os componentes.
        4. Inspecione descrições, ligações para documentação e anotações de comportamento, procurando inconsistências e duplicações.
        5. Confirme que a organização permite localizar, reutilizar e relacionar os componentes às especificações de implementação; variantes são recurso de documentação do Figma, não exigência das WCAG.
        6. **Resultado esperado:** os componentes aplicáveis possuem nomes, propriedades, estados e variantes suficientes para reutilização e implementação consistentes.

### Critério 10 — Documentação da ordem de navegação por Tab

- [ ] **A sequência prevista de navegação por teclado está documentada no Figma e preserva a lógica de utilização da interface?** [[1]](#ref-1) [[2]](#ref-2) [[3]](#ref-3) [[6]](#ref-6)
    - `👤 Persona: Pessoas que utilizam teclado ou tecnologias assistivas` `⚖️ Norma/Base: WCAG 2.2 — 2.4.3 e 2.1.1 (A); ABNT NBR 17225:2025 — 5.1.4 (requisito)` `🛠️ Ferramenta: Figma, inspeção de camadas, Auto Layout e prototipação`
    ??? info "Como auditar / Passo a passo"
        1. Identifique os elementos interativos de cada frame e defina uma sequência que preserve significado e operabilidade.
        2. Documente a sequência por números, setas ou anotações, incluindo mudanças de foco em menus, diálogos e outros componentes sobrepostos.
        3. Inspecione a ordem das camadas; nos protótipos acessíveis do Figma, a navegação por `Tab` segue essa ordem e, em frames com Auto Layout, a ordem do layout.
        4. Execute o protótipo e compare o percurso observado com a sequência documentada, registrando comportamentos que dependam da implementação.
        5. Avalie a lógica da tarefa e das relações entre conteúdos, sem impor universalmente uma ordem da esquerda para a direita e de cima para baixo.
        6. **Resultado esperado:** a sequência de navegação prevista está documentada, pode ser reproduzida no protótipo quando suportada e preserva o significado e a operabilidade da interface.

### Critério 11 — Handoff com especificações de acessibilidade

- [ ] **O handoff do Figma documenta os requisitos necessários para implementar e testar os componentes, estados e comportamentos acessíveis previstos no design?** [[1]](#ref-1) [[2]](#ref-2) [[3]](#ref-3) [[7]](#ref-7)
    - `👤 Persona: Usuários de tecnologias assistivas, beneficiados por implementação consistente` `⚖️ Norma/Base: Boas práticas de handoff; WCAG 2.2 — 4.1.2 (A) e 4.1.3 (AA); ABNT NBR 17225:2025 — 5.13.10, 5.13.12, 5.13.13 e 5.13.8 (requisitos, conforme aplicabilidade)` `🛠️ Ferramenta: Figma, anotações de design e documentação complementar`
    ??? info "Como auditar / Passo a passo"
        1. Identifique componentes e fluxos que exigem especificações acessíveis e verifique a documentação de seus estados, propriedades e comportamentos.
        2. Confira orientações sobre elementos semânticos, nomes acessíveis e exposição programática de função, estado, propriedade e valor.
        3. Verifique especificações de navegação e operação por teclado, incluindo ordem e movimentação do foco.
        4. Confira orientações sobre identificação de erros, associação das mensagens aos campos e comunicação de mensagens de status.
        5. Verifique se alternativas para movimentos não essenciais e outras preferências do usuário estão comunicadas quando aplicáveis.
        6. Confirme que desenvolvedores conseguem consultar as especificações por anotações convencionais, documentação complementar ou Dev Mode, sem tornar este último obrigatório.
        7. Liste os testes que deverão ocorrer na aplicação funcional, especialmente com teclado, navegador e tecnologias assistivas.
        8. **Resultado esperado:** o *handoff* fornece informações suficientes para orientar a implementação acessível e explicita tudo o que ainda depende de validação funcional; as WCAG não exigem documentação no Figma em si.

---

## Referências Bibliográficas e Documentais

1. <a id="ref-1"></a> W3C. **Web Content Accessibility Guidelines (WCAG) 2.2**. 2024. Disponível em: <https://www.w3.org/TR/WCAG22/>.
2. <a id="ref-2"></a> ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **ABNT NBR 17225:2025 — Acessibilidade em conteúdo e aplicações web — Requisitos**. 2025.
3. <a id="ref-3"></a> MARQUES, Amanda; DEUS, Jeniffer; FERRAZ, Reinaldo. **Correspondência entre os critérios da WCAG 2.2 e os itens da ABNT NBR 17225**. Ceweb.br, 2025. Disponível em: <https://todosnaweb.ceweb.br/publicacoes/wcag-2-2-abnt-17225>.
4. <a id="ref-4"></a> W3C. **Technique C39: Using the CSS prefers-reduced-motion query to prevent motion**. Disponível em: <https://www.w3.org/WAI/WCAG22/Techniques/css/C39>.
5. <a id="ref-5"></a> FIGMA. **Create and use variants**. Disponível em: <https://help.figma.com/hc/en-us/articles/360056440594-Create-and-use-variants>.
6. <a id="ref-6"></a> FIGMA. **Accessible prototypes in Figma**. Disponível em: <https://help.figma.com/hc/en-us/articles/7810391964695-Accessible-prototypes-in-Figma>.
7. <a id="ref-7"></a> FIGMA. **Add measurements and annotate designs**. Disponível em: <https://help.figma.com/hc/en-us/articles/20774752502935-Add-measurements-and-annotate-designs>.
