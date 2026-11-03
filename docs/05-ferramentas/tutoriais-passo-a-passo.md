# Testes Práticos de Ferramentas & Tutoriais Passo a Passo

Auditar a acessibilidade de uma interface exige combinar três tipos de evidência: verificações automáticas do código (que encontram rapidamente problemas objetivos, como imagem sem texto alternativo ou contraste insuficiente), inspeção visual e estrutural (títulos, marcos, ordem de leitura) e testes com tecnologia assistiva (leitor de tela e navegação só por teclado). Nenhuma ferramenta isolada cobre todos os critérios da WCAG 2.2 [[1]](#ref-1), base da norma brasileira ABNT NBR 17225:2025 [[2]](#ref-2); por isso, um bom parecer de auditoria cita qual ferramenta gerou cada evidência e o que ela não consegue verificar.

Esta página reúne cinco ferramentas testadas na prática pelo grupo (axe DevTools, WAVE, Lighthouse, NVDA e Stark no Figma). Para cada uma há uma visão de adequação, um comentário crítico do teste e um tutorial reproduzível de instalação e uso. A acessibilidade digital também é uma obrigação legal no Brasil, prevista na Lei Brasileira de Inclusão [[3]](#ref-3), e o Guia de Boas Práticas para Acessibilidade Digital do governo federal [[4]](#ref-4) serve de apoio para interpretar os resultados.

---

## 1. Axe DevTools (Deque)

- **🎯 Para que é mais adequada:** Triagem técnica rápida de código HTML, atributos ARIA, rótulos de formulários e contraste diretamente no DevTools do navegador.
- **🧪 Comentário crítico do teste prático:** Identifica falhas objetivas em segundos sem falsos positivos, mas não avalia se o texto de um `alt` ou mensagem de erro realmente faz sentido humano.

??? info"Passo a passo de como usar o Axe DevTools"

    1. Instale a extensão gratuita **axe DevTools** na loja do Google Chrome ou Microsoft Edge.
    2. Abra a página que deseja auditar, pressione `F12` e selecione a aba **axe DevTools**.
    3. Clique em **Scan ALL of my page**.
    4. Clique em **Highlight** em cada ocorrência para visualizar o elemento na tela e ler a recomendação de correção.

---

## 2. WAVE — Web Accessibility Evaluation Tool

- **🎯 Para que é mais adequada:** Inspeção visual didática da estrutura de cabeçalhos, regiões semânticas, links redundantes e contraste.
- **🧪 Comentário crítico do teste prático:** Excelente para alinhar designers, redatores e desenvolvedores graças aos ícones visuais aplicados direto sobre a interface avaliada.

??? info "Passo a passo de como usar o WAVE"

    1. Acesse <https://wave.webaim.org/> ou clique no ícone da extensão **WAVE** no navegador.
    2. No painel lateral, consulte a aba **Details** para localizar erros críticos (ícones vermelhos).
    3. Abra a aba **Structure** para verificar se a ordem de `H1`, `H2` e `H3` está lógica e sem saltos.

---

## 3. Google Lighthouse 

- **🎯 Para que é mais adequada:** Obter uma visão geral e uma "nota" rápida de acessibilidade, dispensando a instalação de programas externos (já vem nas DevTools do Chrome). Gera pontuações de 0 a 100 para a categoria Acessibilidade, lista de auditorias reprovadas e uma lista de itens para checagem manual. Boa para acompanhar a evolução entre versões.
- **🧪 Comentário crítico do teste prático:** O sistema de pontuação pode ser equivocado. Por ser um sistema apenas de "passou ou falhou", pode acontecer de um erro simples abaixar drasticamente os pontos. Por outro lado, obter a nota 100 não significa que o site está perfeito, já que só é validado o que dá para automatizar.

??? info "Passo a passo de como usar o Lighthouse"

    1. Abra a página no Google Chrome, de preferência em uma janela anônima (reduz a interferência de extensões nos resultados).
    2. Aperte `F12` para abrir o DevTools e procure a aba **Lighthouse**.
    3. Marque a caixinha de **Accessibility**, escolha se quer rodar simulando Mobile ou Desktop, e clique no botão **Analyze page load**.

---

## 4. NVDA (NonVisual Desktop Access)

- **🎯 Para que é mais adequada:** Simular a navegação de quem não enxerga a tela. Ajuda a testar se os nomes dos botões são lidos direito e se é possível utilizar o sistema inteiro apenas com o teclado. 
- **🧪 Comentário crítico do teste prático:** A curva de aprendizado exige um maior conhecimento prévio, pois é necessário memorizar alguns atalhos. Quem enxerga tende a usar o leitor diferente de usuários experientes, então o teste complementa, mas não substitui, a avaliação com pessoas usuárias reais.

??? info "Passo a passo de como usar o NVDA"

    1. Baixe o instalador no site oficial da NV Access (ele é gratuito, mas só roda no Windows). Assim que você abre, ele já começa a falar tudo.
    2. (Opcional, recomendado para quem não usa leitor de tela) Aperte `Insert + N` para abrir o menu, vá em *Ferramentas > Visualizador de fala*. Isso abre uma janela que mostra em texto tudo o que o NVDA está lendo, o que facilita muito a nossa vida.
    3. Solte o mouse. Tente navegar pela página inteira apertando apenas a tecla `Tab` (para ir para o próximo botão/link), `Shift + Tab` (para voltar) e `Enter`.

---

## 5. Stark no Figma

- **🎯 Para que é mais adequada:** Prevenir problemas de usabilidade visual antes mesmo de começar a codar o front-end. Usado na etapa de prototipação para checar contraste e simular daltonismo. 
- **🧪 Comentário crítico do teste prático:** A versão gratuita tem limite de uso em algumas funcionalidades, mas o verificador de contraste de texto e o simulador de visão compensam muito. Evita a perda de tempo programando uma tela que fatalmente seria reprovada depois na auditoria do WAVE. 

??? info "Passo a passo de como usar o Stark"

    1. Abra o arquivo de design do projeto no Figma, clique em Plugins e procure por **Stark**.
    2. Selecione um elemento da interface (como um botão com texto) ou um *Frame* inteiro.
    3. No painel do Stark, clique em **Contrast** para ver se as cores passam nos níveis AA e AAA, ou clique em **Vision Simulator** para trocar os filtros e ver como a interface fica para diferentes tipos de daltonismo.

---

## Referências Bibliográficas e Documentais

1. <a id="ref-1"></a> W3C WAI. **Web Content Accessibility Guidelines (WCAG) 2.2**. Disponível em: <https://www.w3.org/TR/WCAG22/>.
2. <a id="ref-2"></a> ABNT. **ABNT NBR 17225:2025 - Acessibilidade em interfaces digitais e na Web**.
3. <a id="ref-3"></a> BRASIL. **Lei nº 13.146, de 6 de julho de 2015. Institui a Lei Brasileira de Inclusão da Pessoa com Deficiência**.
4. <a id="ref-4"></a> GOVERNO FEDERAL. **Guia de Boas Práticas para Acessibilidade Digital**. Disponível em: <https://www.gov.br/governodigital/>.
5. <a id="ref-5"></a> DEQUE SYSTEMS. **axe DevTools Documentation**. Disponível em: <https://docs.deque.com/devtools-html/>.
6. <a id="ref-6"></a> WEBAIM. **WAVE Web Accessibility Evaluation Tool**. Disponível em: <https://wave.webaim.org/>.
7. <a id="ref-7"></a> GOOGLE. **Lighthouse Accessibility Audits**. Disponível em: <https://developer.chrome.com/docs/lighthouse/accessibility/>.
8. <a id="ref-8"></a> NV ACCESS. **NVDA User Guide**. Disponível em: <https://www.nvaccess.org/help/>.
9. <a id="ref-9"></a> STARK. **Stark Accessibility Tools for Figma**. Disponível em: <https://www.getstark.co/>.
