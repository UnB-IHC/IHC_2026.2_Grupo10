# Testes Práticos de Ferramentas & Tutoriais Passo a Passo

Esta seção apresenta os **comentários críticos dos testes realizados na prática pelo Grupo 10** e o **passo a passo reproduzível** de como instalar e utilizar cada ferramenta.

!!! note "Arquivo-molde da Sprint 07 (Issue de Testes e Passo a Passo)"
    Documente aqui pelo menos 5 ferramentas testadas na prática pelo grupo, preenchendo adequação, relato crítico do teste e tutorial passo a passo.

---

## 1. Axe DevTools (Deque)

* **🎯 Para que é mais adequada:** Triagem técnica rápida de código HTML, atributos ARIA, rótulos de formulários e contraste diretamente no DevTools do navegador.
* **🧪 Comentário crítico do teste prático:** Identifica falhas objetivas em segundos sem falsos positivos, mas não avalia se o texto de um `alt` ou mensagem de erro realmente faz sentido humano.

??? info "Passo a passo de como usar o Axe DevTools"
    1. Instale a extensão gratuita **axe DevTools** na loja do Google Chrome ou Microsoft Edge.
    2. Abra a página que deseja auditar, pressione `F12` e selecione a aba **axe DevTools**.
    3. Clique em **Scan ALL of my page**.
    4. Clique em **Highlight** em cada ocorrência para visualizar o elemento na tela e ler a recomendação de correção.

---

## 2. WAVE — Web Accessibility Evaluation Tool

* **🎯 Para que é mais adequada:** Inspeção visual didática da estrutura de cabeçalhos, regiões semânticas, links redundantes e contraste.
* **🧪 Comentário crítico do teste prático:** Excelente para alinhar designers, redatores e desenvolvedores graças aos ícones visuais aplicados direto sobre a interface avaliada.

??? info "Passo a passo de como usar o WAVE"
    1. Acesse <https://wave.webaim.org/> ou clique no ícone da extensão **WAVE** no navegador.
    2. No painel lateral, consulte a aba **Details** para localizar erros críticos (ícones vermelhos).
    3. Abra a aba **Structure** para verificar se a ordem de `H1`, `H2` e `H3` está lógica e sem saltos.

---

## Referências Bibliográficas e Documentais

1. <a id="ref-1"></a> DEQUE SYSTEMS. **axe DevTools Documentation**. Disponível em: <https://docs.deque.com/devtools-html/>.
2. <a id="ref-2"></a> WEBAIM. **WAVE Web Accessibility Evaluation Tool**. Disponível em: <https://wave.webaim.org/>.
