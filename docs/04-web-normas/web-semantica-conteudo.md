# Desenvolvimento Web Semântico, Mídia & Conteúdo Claro

A acessibilidade de um site nasce no código e no conteúdo, não em uma camada aplicada no fim do projeto. Quando o HTML é semântico, o navegador monta a **árvore de acessibilidade**, que informa às tecnologias assistivas (leitores de tela, ampliadores, linha braille e controle por voz) o **papel**, o **nome** e o **estado** de cada elemento. Um botão feito com `<div>` parece um botão na tela, mas não existe como botão para quem usa leitor de tela. Por isso a ABNT NBR 17225:2025 orienta o uso de elementos nativos do HTML sempre que possível e reserva o WAI-ARIA para componentes sem equivalente nativo [[1]](#ref-1) [[3]](#ref-3).

O conteúdo tem o mesmo peso que o código. Imagens precisam de texto alternativo coerente com a sua função, vídeos precisam de legendas, audiodescrição e, quando possível, janela de Libras, e o texto precisa ser compreensível. A NBR 17225 define **linguagem simples** como a técnica em que texto, estrutura e design são tão claros que o leitor encontra, entende e usa a informação com facilidade (item 3.34), e a Lei nº 15.263/2025 instituiu a Política Nacional de Linguagem Simples na administração pública [[1]](#ref-1) [[6]](#ref-6) [[7]](#ref-7). Do ponto de vista de IHC, cada critério deste checklist é ligado a personas concretas, seguindo a lógica de desempenho funcional do Anexo B da NBR 17225: uso sem visão, com visão limitada, sem percepção de cor, sem audição, com manipulação limitada e com cognição limitada [[1]](#ref-1) [[12]](#ref-12) [[13]](#ref-13).

---

## Como Aplicar Este Checklist

Nenhuma ferramenta automática julga significado: um `alt="imagem"` passa no validador, mas não descreve nada. Por isso cada item combina três camadas de verificação, e só deve ser marcado como atendido depois de passar por todas as que se aplicam a ele. Dentro de **Como auditar**, cada item traz a base normativa exata, com o número do item na NBR 17225 e o critério de sucesso do WCAG 2.2 com o seu nível (A, AA ou AAA).

| Camada de verificação | O que ela encontra | Ferramentas usadas nos itens |
| :--- | :--- | :--- |
| **Varredura automática** | Erros objetivos de código: `alt` ausente, campo sem rótulo, ARIA inválido, contraste de texto | Axe DevTools, WAVE |
| **Inspeção manual** | Qualidade do texto alternativo, ordem de leitura, propósito dos links, clareza do texto | DevTools do navegador, Accessibility Insights, Text Spacing |
| **Tecnologia assistiva** | A experiência real de quem ouve a página, navega por teclado, amplia a tela ou fala comandos | NVDA, controle por voz, zoom do navegador |

Os atalhos citados nos passos são do NVDA (Windows). No macOS, o rotor do VoiceOver (`VO+U`) oferece listas equivalentes de cabeçalhos, links, regiões e campos de formulário.

---

## Estrutura Semântica e Marcação HTML

- [ ] **WEB-01: Cada página tem um título único e descritivo e declara o idioma principal e as trocas de idioma no conteúdo?** [[1]](#ref-1) [[2]](#ref-2)
    - `👤 Persona: Leitor de Tela` `👤 Persona: Cognitiva / Intelectual` `⚖️ Norma/Base: ABNT NBR 17225:2025` `⚖️ Norma/Base: WCAG 2.2` `🛠️ Ferramenta: DevTools do Navegador` `🛠️ Ferramenta: NVDA`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17225, itens 5.13.1, 5.13.2 e 5.13.3; WCAG 2.2, critérios 2.4.2 (A), 3.1.1 (A) e 3.1.2 (AA).

        1. Abra três páginas diferentes do site e compare os títulos das abas: eles devem ser diferentes entre si e indicar o conteúdo (ex.: "Matrícula | Portal do Aluno").
        2. No DevTools, confira se a tag `<html>` tem `lang="pt-BR"`.
        3. Procure trechos em outro idioma (citações, nomes de seções, termos em inglês) e verifique se eles têm `lang` próprio, como `lang="en"`.
        4. Ouça a página com o NVDA: um `lang` errado faz o sintetizador ler o português com a pronúncia de outro idioma.
        5. **Atende se:** todos os títulos são únicos e o leitor de tela pronuncia cada trecho no idioma certo.

- [ ] **WEB-02: A página tem um único cabeçalho principal e os demais cabeçalhos seguem a hierarquia do conteúdo, sem saltos de nível e sem uso apenas estético?** [[1]](#ref-1) [[2]](#ref-2)
    - `👤 Persona: Leitor de Tela` `👤 Persona: Dislexia` `⚖️ Norma/Base: ABNT NBR 17225:2025` `⚖️ Norma/Base: WCAG 2.2` `🛠️ Ferramenta: WAVE` `🛠️ Ferramenta: NVDA`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17225, itens 5.3.1, 5.3.2, 5.3.3 (recomendação) e 5.3.5; WCAG 2.2, critérios 1.3.1 (A), 2.4.6 (AA) e 2.4.10 (AAA).

        1. Rode o WAVE e abra a aba **Structure** para ver a árvore de cabeçalhos.
        2. Verifique se existe exatamente um `h1` e se não há saltos de nível (ex.: de `h2` direto para `h4`).
        3. Procure textos que parecem títulos (negrito grande) mas não são cabeçalhos no código, e cabeçalhos usados só para deixar o texto grande.
        4. No NVDA, pressione **H** repetidamente: a sequência lida deve funcionar como um sumário da página.
        5. **Atende se:** a lista de cabeçalhos, lida isoladamente, explica a organização da página.

- [ ] **WEB-03: A página organiza o conteúdo em regiões (cabeçalho, navegação, principal e rodapé) e oferece um link para pular direto ao conteúdo principal?** [[1]](#ref-1) [[2]](#ref-2)
    - `👤 Persona: Leitor de Tela` `👤 Persona: Motora / Teclado` `⚖️ Norma/Base: ABNT NBR 17225:2025` `⚖️ Norma/Base: WCAG 2.2` `🛠️ Ferramenta: Accessibility Insights` `🛠️ Ferramenta: NVDA`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17225, itens 5.4.1, 5.4.2, 5.4.4 (recomendação), 5.4.5 e 5.7.12; WCAG 2.2, critérios 1.3.1 (A), 2.4.1 (A) e 4.1.2 (A).

        1. No Accessibility Insights for Web, ative a visualização de **Landmarks** e confira se todo o conteúdo está dentro de alguma região (`<header>`, `<nav>`, `<main>`, `<footer>`).
        2. Verifique se há apenas um `main`, um `banner` e um `contentinfo`.
        3. Se houver mais de uma `nav`, confira se cada uma tem nome próprio via `aria-label` (ex.: "Menu principal" e "Menu do rodapé").
        4. Recarregue a página e pressione **Tab** uma vez: o primeiro foco deve ser o link "Pular para o conteúdo", e ao acioná-lo o foco deve ir para o `main`.
        5. **Atende se:** com a tecla **D** do NVDA é possível saltar entre as regiões e cada uma é anunciada com nome claro.

- [ ] **WEB-04: Listas e tabelas de dados usam a marcação correta, com cabeçalhos de tabela associados às células e sem tabelas usadas para montar leiaute?** [[1]](#ref-1) [[2]](#ref-2)
    - `👤 Persona: Leitor de Tela` `👤 Persona: Baixa Visão` `⚖️ Norma/Base: ABNT NBR 17225:2025` `⚖️ Norma/Base: WCAG 2.2` `🛠️ Ferramenta: WAVE` `🛠️ Ferramenta: NVDA`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17225, itens 5.5.1, 5.5.2, 5.6.1, 5.6.2, 5.6.3 e 5.6.5, e Anexo A.1.8; WCAG 2.2, critério 1.3.1 (A).

        1. Procure listas visuais feitas com quebras de linha ou hífens digitados e confira se no código elas são `<ul>`, `<ol>` ou `<dl>`.
        2. Em cada tabela de dados, verifique se os cabeçalhos são `<th>` com `scope` (e não `<td>` em negrito) e se há `<caption>` ou outro nome associado.
        3. No NVDA, entre na tabela com **T** e navegue com **Ctrl+Alt+setas**: ao mudar de célula, o leitor deve anunciar o cabeçalho da linha e da coluna.
        4. Procure tabelas usadas só para posicionar elementos; se existirem, elas devem ter `role="presentation"`.
        5. **Atende se:** o NVDA anuncia "lista com N itens" nas listas e lê os cabeçalhos corretos em cada célula das tabelas.

- [ ] **WEB-05: Componentes interativos usam elementos nativos do HTML e, quando são customizados, expõem papel, nome e estado corretos por meio do WAI-ARIA?** [[1]](#ref-1) [[3]](#ref-3) [[4]](#ref-4) [[11]](#ref-11)
    - `👤 Persona: Leitor de Tela` `👤 Persona: Controle por Voz` `⚖️ Norma/Base: ABNT NBR 17225:2025` `⚖️ Norma/Base: WAI-ARIA 1.2` `🛠️ Ferramenta: DevTools do Navegador` `🛠️ Ferramenta: Axe DevTools`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17225, itens 5.13.10, 5.13.11 (recomendação), 5.13.12 e 5.13.13, e Anexo A.1.6; WCAG 2.2, critério 4.1.2 (A); padrões de interação do ARIA APG.

        1. Liste os componentes customizados da página (sanfona, abas, modal, menu suspenso, carrossel) e verifique se algum poderia ser um elemento nativo (`<button>`, `<a href>`, `<select>`, `<details>`).
        2. No DevTools, abra o painel **Accessibility** e selecione cada componente: confira **Role**, **Name** e os estados expostos.
        3. Abra e feche cada componente: estados como `aria-expanded` e `aria-selected` devem mudar no código junto com a tela.
        4. Compare o comportamento de teclado com o padrão do APG (ex.: abas trocam com as setas, modal fecha com **Esc** e devolve o foco ao botão que o abriu).
        5. Rode o Axe DevTools e anote erros de ARIA inválido ou de papel sem nome.
        6. **Atende se:** todo componente tem papel e nome corretos e o estado anunciado acompanha o que aparece na tela.

- [ ] **WEB-06: Links levam a outro lugar, botões executam ações e o nome acessível de cada controle contém o texto que aparece na tela?** [[1]](#ref-1) [[2]](#ref-2) [[11]](#ref-11)
    - `👤 Persona: Controle por Voz` `👤 Persona: Leitor de Tela` `⚖️ Norma/Base: ABNT NBR 17225:2025` `⚖️ Norma/Base: WCAG 2.2` `🛠️ Ferramenta: DevTools do Navegador` `🛠️ Ferramenta: Controle por Voz`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17225, itens 5.7.1, 5.7.2, 5.8.1, 5.8.2, 5.8.3 e 5.13.7; WCAG 2.2, critérios 2.5.3 (A) e 4.1.2 (A).

        1. Procure elementos clicáveis que não são `<a>` nem `<button>` (ex.: `<div onclick>` ou `<span>` com ícone).
        2. Verifique se links não são usados para ações (ex.: "Excluir" como `<a href="#">`) e se botões não são usados para navegar entre páginas.
        3. Para cada ícone sem texto (lupa, X, menu), confira no DevTools se existe nome acessível que descreve a ação.
        4. Compare o texto visível com o nome acessível: o nome deve conter o texto visível, de preferência no início (um botão "Enviar" não pode ter `aria-label="submit-btn"`).
        5. Com o Acesso por Voz (Android) ou o Controle por Voz (iOS e macOS), tente acionar três botões falando o texto que aparece neles.
        6. **Atende se:** todos os controles podem ser acionados pelo nome que o usuário enxerga.

---

## Links, Navegação e Formulários

- [ ] **WEB-07: O texto de cada link deixa claro o destino ou a função e avisa quando o link abre nova aba, baixa um arquivo ou leva a outro site?** [[1]](#ref-1) [[2]](#ref-2) [[10]](#ref-10)
    - `👤 Persona: Leitor de Tela` `👤 Persona: Idoso` `⚖️ Norma/Base: ABNT NBR 17225:2025` `⚖️ Norma/Base: WCAG 2.2` `⚖️ Norma/Base: eMAG 3.1` `🛠️ Ferramenta: NVDA` `🛠️ Ferramenta: WAVE`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17225, itens 5.7.3 (recomendação), 5.7.4, e 5.7.6 a 5.7.8 (recomendações); WCAG 2.2, critério 2.4.4 (A); eMAG 3.1.

        1. No NVDA, pressione **NVDA+F7**, escolha **Links** e leia a lista fora de contexto.
        2. Marque links vagos ou repetidos ("clique aqui", "saiba mais", "leia") que levam a destinos diferentes.
        3. Confira se links para PDF ou DOCX informam formato e tamanho (ex.: "Edital 2026 (PDF, 2 MB)").
        4. Acione os links externos e verifique se há aviso de nova aba ou de site externo no texto ou no nome acessível.
        5. **Atende se:** cada link é compreensível pelo próprio texto ou pelo contexto imediato (a frase ou o item de lista em que está).

- [ ] **WEB-08: Todo campo de formulário tem rótulo visível associado, opções relacionadas são agrupadas, campos obrigatórios são indicados em texto e dados pessoais aceitam preenchimento automático?** [[1]](#ref-1) [[2]](#ref-2)
    - `👤 Persona: Leitor de Tela` `👤 Persona: Idoso` `👤 Persona: Motora / Teclado` `⚖️ Norma/Base: ABNT NBR 17225:2025` `⚖️ Norma/Base: WCAG 2.2` `🛠️ Ferramenta: WAVE` `🛠️ Ferramenta: NVDA`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17225, itens 5.9.1, 5.9.2, 5.9.3, 5.9.6, 5.9.7 e 5.9.8; WCAG 2.2, critérios 1.3.1 (A), 1.3.5 (AA) e 3.3.2 (A).

        1. Clique no texto de cada rótulo: se o cursor for para o campo, a associação `<label for>` está correta.
        2. Confira se nenhum campo depende só de `placeholder` como rótulo, porque ele some quando a pessoa começa a digitar.
        3. Verifique se grupos de opções (turno, forma de pagamento, sim ou não) estão dentro de `<fieldset>` com `<legend>`.
        4. Confira se o asterisco de obrigatório é explicado ("* campo obrigatório") ou se o próprio rótulo diz "(obrigatório)".
        5. Nos campos de nome, e-mail, telefone e CEP, confira se há `autocomplete` com o valor adequado (`name`, `email`, `tel`, `postal-code`).
        6. **Atende se:** navegando com a tecla **F** do NVDA, cada campo é anunciado com rótulo, tipo e obrigatoriedade.

- [ ] **WEB-09: As mensagens de erro identificam o campo e explicam como corrigir, e as mensagens de status são anunciadas pelo leitor de tela sem mover o foco?** [[1]](#ref-1) [[2]](#ref-2)
    - `👤 Persona: TDAH` `👤 Persona: Leitor de Tela` `👤 Persona: Daltonismo` `⚖️ Norma/Base: ABNT NBR 17225:2025` `⚖️ Norma/Base: WCAG 2.2` `🛠️ Ferramenta: NVDA` `🛠️ Ferramenta: DevTools do Navegador`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17225, itens 5.9.9, 5.9.10 e 5.13.8; WCAG 2.2, critérios 3.3.1 (A), 3.3.3 (AA) e 4.1.3 (AA).

        1. Envie o formulário vazio e depois com dados inválidos (e-mail sem @, data impossível).
        2. Verifique se cada erro aparece em texto perto do campo, está ligado a ele por `aria-describedby` e diz como corrigir (ex.: "Digite a data no formato DD/MM/AAAA").
        3. No DevTools, abra **Rendering** e emule acromatopsia: o erro ainda deve ser identificável sem a cor vermelha, por ícone ou texto.
        4. Com o NVDA ligado, faça uma busca ou salve um dado: a mensagem de resultado ("3 resultados", "Salvo com sucesso") deve ser falada sem que você precise ir até ela, via `role="status"` ou `aria-live`.
        5. **Atende se:** a pessoa entende o que errou e como corrigir, por texto, sem depender de cor nem precisar procurar a mensagem.

---

## Imagens, Áudio e Vídeo

- [ ] **WEB-10: Cada imagem tem texto alternativo adequado à sua função (conteúdo, funcional, decorativa ou complexa) e não há texto apresentado como imagem?** [[1]](#ref-1) [[2]](#ref-2) [[5]](#ref-5)
    - `👤 Persona: Leitor de Tela` `👤 Persona: Limitação Situacional` `⚖️ Norma/Base: ABNT NBR 17225:2025` `⚖️ Norma/Base: WCAG 2.2` `🛠️ Ferramenta: WAVE` `🛠️ Ferramenta: Árvore de Decisão do alt (W3C)`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17225, itens 5.2.1 a 5.2.5; WCAG 2.2, critérios 1.1.1 (A) e 1.4.5 (AA).

        1. Rode o WAVE e revise cada imagem marcada, sem confiar só nos alertas: a ferramenta detecta `alt` ausente, mas não julga se o texto é bom.
        2. Classifique cada imagem com a árvore de decisão do W3C: de conteúdo (descreve a informação), funcional (descreve a ação), decorativa (`alt=""`), complexa (exige descrição longa) ou de texto.
        3. Confira se botões e links com ícone descrevem a ação ("Buscar") e não a figura ("lupa").
        4. Verifique se não aparecem textos como "imagem de", nomes de arquivo (`IMG_2034.jpg`) ou `alt` que repete a legenda ao lado.
        5. Para gráficos e infográficos, procure a descrição completa próxima à imagem ou em link indicado.
        6. **Atende se:** ouvindo a página sem ver as imagens (ou com as imagens bloqueadas por conexão lenta), nenhuma informação ou função é perdida.

- [ ] **WEB-11: Vídeos e áudios têm legendas, audiodescrição, transcrição e, quando possível, janela de Libras, e nenhum som toca sozinho sem controle?** [[1]](#ref-1) [[2]](#ref-2) [[8]](#ref-8) [[9]](#ref-9)
    - `👤 Persona: Surdez / Libras` `👤 Persona: Leitor de Tela` `⚖️ Norma/Base: ABNT NBR 17225:2025` `⚖️ Norma/Base: WCAG 2.2` `⚖️ Norma/Base: ABNT NBR 16452:2016` `⚖️ Norma/Base: ABNT NBR 15610-3:2016` `🛠️ Ferramenta: Inspeção do Player e Legendas` `🛠️ Ferramenta: Teste Manual de Teclado`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17225, itens 5.14.1, 5.14.2, 5.14.3 (recomendação), 5.14.4, 5.14.6 (recomendação) e 5.14.7; WCAG 2.2, critérios 1.2.1 (A), 1.2.2 (A), 1.2.5 (AA), 1.2.6 (AAA) e 1.4.2 (A); NBR 16452 (audiodescrição); NBR 15610-3 (referência para a janela de Libras).

        1. Ative as legendas de cada vídeo e confira se estão sincronizadas, completas e incluem sons relevantes ("[aplausos]", "[música tensa]").
        2. Assista a um trecho sem olhar a tela: se algo visual importante não for explicado pela fala, é preciso audiodescrição.
        3. Procure a transcrição em texto abaixo do vídeo ou em link próximo.
        4. Verifique se há janela de Libras com intérprete. Tradutores automáticos como o VLibras ajudam no texto da página, mas não substituem intérprete em conteúdo de vídeo.
        5. Confira se o player funciona só com teclado (reproduzir, pausar, volume, legendas) e se nenhum áudio começa sozinho por mais de 3 segundos sem botão para parar.
        6. **Atende se:** uma pessoa surda e uma pessoa cega conseguem obter a mesma informação que o vídeo transmite.

---

## Texto Adaptável e Linguagem Simples

- [ ] **WEB-12: A página permite zoom, se reorganiza em telas estreitas sem rolagem horizontal e suporta aumento do espaçamento do texto sem cortar conteúdo?** [[1]](#ref-1) [[2]](#ref-2)
    - `👤 Persona: Baixa Visão` `👤 Persona: Dislexia` `⚖️ Norma/Base: ABNT NBR 17225:2025` `⚖️ Norma/Base: WCAG 2.2` `🛠️ Ferramenta: DevTools do Navegador` `🛠️ Ferramenta: Text Spacing Bookmarklet`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17225, itens 5.10.4, 5.12.1 a 5.12.4, 5.12.6, 5.12.7 e 5.13.5; WCAG 2.2, critérios 1.4.4 (AA), 1.4.10 (AA) e 1.4.12 (AA).

        1. No código, procure `<meta name="viewport">` com `user-scalable=no` ou `maximum-scale=1`, que bloqueiam o zoom no celular.
        2. Aplique zoom de 200% e depois de 400% em uma janela de 1280 px: o conteúdo deve se reorganizar em uma coluna, sem rolagem horizontal para ler o texto.
        3. No modo responsivo do DevTools, teste a largura de 320 px.
        4. Aplique o bookmarklet Text Spacing (entrelinha 1,5; parágrafos 2 vezes a fonte; letras 0,12; palavras 0,16) e procure textos cortados ou sobrepostos.
        5. Como boa prática de leitura, verifique se blocos longos de texto não passam de cerca de 80 caracteres por linha.
        6. **Atende se:** nenhuma informação ou função se perde em nenhum dos testes.

- [ ] **WEB-13: Os textos principais seguem as técnicas de linguagem simples, com frases curtas em ordem direta, palavras comuns, informação principal primeiro e siglas explicadas?** [[1]](#ref-1) [[2]](#ref-2) [[6]](#ref-6) [[7]](#ref-7)
    - `👤 Persona: Baixo Letramento` `👤 Persona: Cognitiva / Intelectual` `👤 Persona: Surdez / Libras` `⚖️ Norma/Base: Lei 15.263/2025` `⚖️ Norma/Base: ABNT NBR ISO 24495-1:2024` `⚖️ Norma/Base: ABNT NBR 17225:2025` `🛠️ Ferramenta: Roteiro da Lei 15.263/2025` `🛠️ Ferramenta: Teste com Usuários`
    ??? info "Como auditar / Passo a passo"
        **Base normativa:** NBR 17225, item 3.34 (definição) e itens 5.12.10, 5.12.11 e 5.12.12 (recomendações); WCAG 2.2, critérios 3.1.3, 3.1.4 e 3.1.5 (AAA); Lei nº 15.263/2025; ABNT NBR ISO 24495-1:2024.

        1. Escolha os três textos mais importantes do site (ex.: página inicial, instruções de um serviço e uma mensagem de erro).
        2. Verifique as técnicas previstas na Lei nº 15.263/2025: frases curtas em ordem direta, uma ideia por parágrafo, palavras comuns, sigla acompanhada do nome completo, informação principal no início e listas quando couber.
        3. Confira se as siglas têm a forma expandida disponível no texto ou com `<abbr title>`.
        4. Calcule um índice de legibilidade (como o Flesch adaptado ao português) apenas como apoio, porque ele não substitui o teste com pessoas.
        5. Peça a duas pessoas de fora do curso que encontrem uma informação específica no texto e a expliquem com as próprias palavras; registre onde travaram. Lembre que, para muitas pessoas surdas, o português é a segunda língua.
        6. **Atende se:** os participantes encontram, entendem e conseguem usar a informação sem ajuda.

---

## Referências Bibliográficas e Documentais

1. <a id="ref-1"></a> ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **ABNT NBR 17225:2025**: Acessibilidade em conteúdo e aplicações web: Requisitos. Rio de Janeiro: ABNT, 2025.
2. <a id="ref-2"></a> W3C. **Web Content Accessibility Guidelines (WCAG) 2.2**. W3C Recommendation, 2023. Disponível em: <https://www.w3.org/TR/WCAG22/>.
3. <a id="ref-3"></a> W3C. **Accessible Rich Internet Applications (WAI-ARIA) 1.2**. W3C Recommendation, 2023. Disponível em: <https://www.w3.org/TR/wai-aria-1.2/>.
4. <a id="ref-4"></a> W3C WAI. **ARIA Authoring Practices Guide (APG)**. Disponível em: <https://www.w3.org/WAI/ARIA/apg/>.
5. <a id="ref-5"></a> W3C WAI. **Images Tutorial**: inclui a árvore de decisão do atributo alt. Disponível em: <https://www.w3.org/WAI/tutorials/images/>.
6. <a id="ref-6"></a> BRASIL. **Lei nº 15.263, de 14 de novembro de 2025**. Institui a Política Nacional de Linguagem Simples. Diário Oficial da União, Brasília, 17 nov. 2025.
7. <a id="ref-7"></a> ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **ABNT NBR ISO 24495-1:2024**: Linguagem simples: Parte 1: Princípios e diretrizes norteadores. Rio de Janeiro: ABNT, 2024.
8. <a id="ref-8"></a> ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **ABNT NBR 16452:2016**: Acessibilidade na comunicação: Audiodescrição. Rio de Janeiro: ABNT, 2016.
9. <a id="ref-9"></a> ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **ABNT NBR 15610-3:2016**: Televisão digital terrestre: Acessibilidade: Parte 3: Língua de Sinais (LIBRAS). Rio de Janeiro: ABNT, 2016.
10. <a id="ref-10"></a> BRASIL. Ministério do Planejamento, Orçamento e Gestão. **eMAG: Modelo de Acessibilidade em Governo Eletrônico**. Versão 3.1. Brasília, 2014. Disponível em: <https://emag.governoeletronico.gov.br/>.
11. <a id="ref-11"></a> MOZILLA. **MDN Web Docs: Acessibilidade**. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/Accessibility>.
12. <a id="ref-12"></a> BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021.
13. <a id="ref-13"></a> FIGUEIREDO, Rejane Maria da Costa. **Material de aula da disciplina FGA0173: Interação Humano-Computador**. Brasília: Universidade de Brasília, 2026.