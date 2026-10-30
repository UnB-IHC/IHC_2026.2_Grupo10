# Design de Interface (UI) & Prototipação Inclusiva no Figma

Reúne critérios visuais de contraste, tipografia, uso da cor e áreas de toque junto às boas práticas de anotação de acessibilidade no **Figma** antes da implementação em código.

!!! note "Arquivo-molde da Sprint 05"
    Expanda e personalize livremente as seções e perguntas abaixo com base nas aulas e na bibliografia da sua Issue, mantendo o formato das *Smart Badges*, do bloco *Como auditar* e das *Referências*.

---

## Design Visual (UI) e Contraste

- [ ] **Textos atingem contraste mínimo de 4.5:1, componentes visuais atingem 3:1 e nenhuma informação depende apenas da cor** [[1]](#ref-1)
    - `👤 Persona: Baixa Visão` `👤 Persona: Daltonismo` `⚖️ Norma/Base: ABNT NBR 17225:2025` `🛠️ Ferramenta: WebAIM Contrast Checker`
    ??? info "Como auditar / Passo a passo"
        1. Valide os pares de cor texto/fundo e confirme se alertas e etiquetas combinam cor + ícone + texto.

## Prototipação e Handoff no Figma

- [ ] **Os frames do Figma documentam estados de foco (:focus-visible), estados de erro e a sequência lógica de navegação por Tab** [[2]](#ref-2)
    - `👤 Persona: Leitor de Tela` `👤 Persona: Equipe Dev (EX)` `⚖️ Norma/Base: WCAG 2.2 — 2.4.7 & 2.5.8` `🛠️ Ferramenta: Figma + Plugin Stark`
    ??? info "Como auditar / Passo a passo"
        1. Inspecione a biblioteca de componentes no Figma verificando variantes de foco e anotações de ordem de leitura.

---

## Referências Bibliográficas e Documentais

1. <a id="ref-1"></a> ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **ABNT NBR 17225:2025**: Acessibilidade em conteúdo e aplicações web — Requisitos.
2. <a id="ref-2"></a> Notas de Aula FGA0173 — Interação Humano-Computador (UnB, 2026.2): **Design de Interface (UI) e Prototipação / Figma**.
