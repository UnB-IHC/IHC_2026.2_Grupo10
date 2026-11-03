# Comparativo de Ferramentas — Qual Usar e Para Quê?

A garantia de acessibilidade e de uma boa experiência de uso (UX) em produtos digitais exige mais do que boas intenções na hora de codificar; demanda a aplicação de métodos sistemáticos de Interação Humano-Computador (IHC). Como discutido nas aulas da disciplina, nenhuma ferramenta automatizada isolada é capaz de encontrar e interpretar todos os problemas de acessibilidade, usabilidade e carga cognitiva de um sistema. 

Para que a auditoria seja eficaz, é necessário combinar validações automatizadas rápidas (ideais para estrutura de código e contraste) com testes manuais e heurísticos (fundamentais para avaliar o fluxo de navegação e o uso prático com tecnologias assistivas). A matriz e o checklist abaixo formalizam o uso estratégico dessas ferramentas no ciclo de desenvolvimento do projeto [[5]](#ref-5).

---

## Matriz Rápida de Seleção por Etapa

| Ferramenta | Etapa Ideal | Mais Adequada Para | Limitação Principal |
| :--- | :--- | :--- | :--- |
| **Miro / FigJam** | Descoberta & Mapeamento | Personas Ecossistêmicas, Jornadas e fluxos lógicos. | Requer facilitação ativa para manter a acessibilidade dos quadros. |
| **Stark / A11y Focus Order** | Prototipação (Figma) | Simular baixa visão/daltonismo, contraste e planejar a ordem de foco (Tab). | Não substitui a validação real do código (DOM) renderizado. |
| **WAVE (WebAIM)** | Revisão Visual de UI | Visualizar a hierarquia de títulos (H1–H6), regiões semânticas e textos alternativos. | Análise feita apenas página a página; pode falhar em fundos dinâmicos. |
| **Axe DevTools** | Desenvolvimento Web | Detectar erros técnicos de HTML/ARIA e critérios objetivos da WCAG. | Cobre apenas um percentual das barreiras reais; não interpreta semântica humana. |
| **Lighthouse** | Auditoria Contínua | Gerar pontuação rápida de acessibilidade integrada direto no DevTools. | Um erro simples pode zerar a nota; nota 100 não garante usabilidade real. |
| **NVDA** | Homologação Assistiva | Testar a experiência real de leitura linear, modais, navegação por teclado e foco. | Exige aprendizado prévio dos atalhos de teclado do software. |

---

## 1. Validação de Código e Estrutura Semântica

- [ ] **O código HTML possui uma estrutura semântica válida e os atributos ARIA estão aplicados corretamente nos componentes interativos?** [[1]](#ref-1)
    - `👤 Persona: Pessoas usuárias de leitor de tela` `⚖️ Norma/Base: WCAG 2.1 - 4.1.2 Nome, Função, Valor` `🛠️ Ferramenta: Axe DevTools e Lighthouse`
    ??? info "Como auditar / Passo a passo"
        1. Abra o navegador na página em desenvolvimento e rode o Lighthouse para obter o diagnóstico geral.
        2. Acesse a aba do Axe DevTools no inspecionar (`F12`) e execute o "Scan ALL of my page".
        3. Identifique elementos reportados como "críticos" (ex: botões sem nome acessível ou formulários sem `<label>`).
        4. **Resultado esperado:** O relatório automatizado não aponta violações críticas de código estrutural e todos os elementos interativos possuem identificação clara.

---

## 2. Validação Visual e Contraste

- [ ] **A interface apresenta um índice de contraste visual adequado para facilitar a leitura de todas as informações textuais e componentes?** [[2]](#ref-2)
    - `👤 Persona: Pessoas com baixa visão ou daltonismo` `⚖️ Norma/Base: WCAG 2.1 - 1.4.3 Contraste (Mínimo)` `🛠️ Ferramenta: WAVE e Stark`
    ??? info "Como auditar / Passo a passo"
        1. Na fase de design, utilize o plugin Stark no Figma para simular a visão com daltonismo e verificar o contraste.
        2. Na página já codificada, ative a extensão WAVE e filtre pelos alertas vermelhos de "Contrast Errors".
        3. **Resultado esperado:** Textos normais devem passar na proporção mínima de 4.5:1 (Nível AA da WCAG), e a leitura deve ser viável independentemente do uso exclusivo de cores.

---

## 3. Tecnologias Assistivas e Navegação Manual

- [ ] **É possível navegar, mover o foco e interagir com todas as funcionalidades da tela utilizando exclusivamente o teclado?** [[3]](#ref-3)
    - `👤 Persona: Pessoas cegas e pessoas com deficiência motora` `⚖️ Norma/Base: WCAG 2.1 - 2.1.1 Teclado` `🛠️ Ferramenta: NVDA`
    ??? info "Como auditar / Passo a passo"
        1. Inicie a aplicação, ative o leitor de tela NVDA (com o Visualizador de Fala ativado) e solte o mouse.
        2. Percorra todo o fluxo da tarefa usando apenas as teclas `Tab`, `Shift + Tab` e `Enter`.
        3. Verifique se o foco visual não fica "preso" em nenhuma janela modal (Keyboard Trap).
        4. **Resultado esperado:** O foco deve ser sempre visível, seguir uma ordem lógica da esquerda para a direita/cima para baixo, e o leitor de tela deve anunciar corretamente a função de cada item.

---

## 4. Consistência e Prevenção de Erros

- [ ] **O sistema fornece caminhos claros de navegação e saídas de emergência imediatas caso o usuário cometa um erro?** [[4]](#ref-4)
    - `👤 Persona: Todas as pessoas usuárias do sistema` `⚖️ Norma/Base: Heurísticas 3 e 4 de Nielsen` `🛠️ Ferramenta: Figma (A11y Focus Order) e Miro`
    ??? info "Como auditar / Passo a passo"
        1. Avalie o fluxo mapeado no Miro e o protótipo desenhado no Figma.
        2. Procure por processos longos (como formulários ou modais) e verifique se existe um botão visível de "Cancelar", "Fechar" (X) ou "Voltar".
        3. **Resultado esperado:** Elementos idênticos mantêm o mesmo comportamento visual (Heurística 4) e o usuário consegue reverter ações sem a perda indesejada de dados (Heurística 3).

---

## Referências Bibliográficas e Documentais

1. <a id="ref-1"></a> DEQUE SYSTEMS. **axe DevTools Documentation**. 2026. Disponível em: <https://docs.deque.com/devtools-html/>.
2. <a id="ref-2"></a> WEBAIM. **WAVE Web Accessibility Evaluation Tool**. 2026. Disponível em: <https://wave.webaim.org/>.
3. <a id="ref-3"></a> NV ACCESS. **NVDA User Guide**. 2026. Disponível em: <https://www.nvaccess.org/help/>.
4. <a id="ref-4"></a> NIELSEN NORMAN GROUP. **10 Usability Heuristics for User Interface Design**. 2024. Disponível em: <https://www.nngroup.com/articles/ten-usability-heuristics/>.
5. <a id="ref-5"></a> W3C WAI. **Selecting Web Accessibility Evaluation Tools**. 2026. Disponível em: <https://www.w3.org/WAI/test-evaluate/tools/selecting/>.
