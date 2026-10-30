# Comparativo de Ferramentas — Qual Usar e Para Quê?

Nenhuma ferramenta automatizada cobre sozinha todos os aspectos de UX, IHC e Acessibilidade. Esta página orienta **qual ferramenta escolher em cada etapa do projeto** (descoberta, prototipação no Figma, desenvolvimento e validação assistiva).

!!! note "Arquivo-molde da Sprint 07 (Issue de Comparativo)"
    Amplie a matriz comparativa abaixo adicionando novas ferramentas de UX, Figma e Acessibilidade, indicando público-alvo, pontos fortes e limitações.

---

## Matriz Rápida de Seleção por Etapa

| Ferramenta | Etapa Ideal | Mais Adequada Para | Limitação Principal |
| :--- | :--- | :--- | :--- |
| **Miro / FigJam** | Descoberta & Mapeamento | Personas Ecossistêmicas, Jornadas e Service Blueprints colaborativos | Requer facilitação ativa para manter acessibilidade dos quadros |
| **Stark / A11y Focus Order** | Prototipação (Figma) | Simular baixa visão/daltonismo, contraste e ordem de Tab antes do código | Não substitui validação real do DOM renderizado |
| **WAVE (WebAIM)** | Revisão Visual & Conteúdo | Visualizar hierarquia de títulos (H1–H6), regiões e textos alternativos | Análise página a página |
| **Axe DevTools** | Desenvolvimento Web | Detectar erros técnicos de HTML/ARIA e critérios objetivos da WCAG 2.2 | Cobre apenas ~30–40% das barreiras sem teste humano |
| **NVDA / VoiceOver** | Homologação Assistiva | Testar experiência real de leitura linear, modais e anúncios dinâmicos | Exige aprendizado básico dos atalhos de navegação |

---

## Checklist de Cobertura da Bateria de Testes

- [ ] **A auditoria combinou varredura automatizada (Axe/WAVE/Lighthouse) com navegação manual por teclado e leitor de tela** [[1]](#ref-1)
    - `👤 Persona: Múltiplas Deficiências` `⚖️ Norma/Base: W3C Evaluation Methodology` `🛠️ Ferramenta: Axe DevTools + NVDA`
    ??? info "Como auditar / Passo a passo"
        1. Execute ao menos um validador automático no código e em seguida realize o percurso principal usando apenas teclado + leitor de tela.

---

## Referências Bibliográficas e Documentais

1. <a id="ref-1"></a> W3C WAI. **Selecting Web Accessibility Evaluation Tools**. Disponível em: <https://www.w3.org/WAI/test-evaluate/tools/selecting/>.
