# Marco Normativo: ABNT NBR 17225:2025, NBR 17060 & WCAG 2.2

Consolida os requisitos técnicos exigidos pela legislação brasileira (**LBI — Art. 63**) em conjunto com as normas **ABNT NBR 17225:2025** (Web), **ABNT NBR 17060:2022** (Mobile) e a **WCAG 2.2**.

!!! note "Arquivo-molde da Sprint 06"
    Expanda e personalize livremente as seções e perguntas abaixo com base nas aulas e na bibliografia da sua Issue, mantendo o formato das *Smart Badges*, do bloco *Como auditar* e das *Referências*.

---

## Conformidade com as Novas Diretrizes NBR e WCAG 2.2

- [ ] **O indicador de foco do teclado permanece sempre visível e nunca é encoberto por barras fixas, banners ou modais** [[1]](#ref-1)
    - `👤 Persona: Motora / Teclado` `👤 Persona: Baixa Visão (Zoom 200%)` `⚖️ Norma/Base: ABNT NBR 17225:2025` `🛠️ Ferramenta: Teste Manual Tab + Zoom 200%`
    ??? info "Como auditar / Passo a passo"
        1. Ajuste o zoom do navegador para 200% e percorra todos os controles interativos pressionando `Tab` e `Shift+Tab`.

- [ ] **Controles móveis respeitam área mínima de toque, orientação livre da tela e alternativas a gestos complexos de arrastar** [[2]](#ref-2)
    - `👤 Persona: Mobilidade Reduzida` `⚖️ Norma/Base: ABNT NBR 17060:2022` `🛠️ Ferramenta: Google Lighthouse`
    ??? info "Como auditar / Passo a passo"
        1. Gire o dispositivo entre retrato e paisagem e verifique se toda ação de arraste possui alternativa por toque simples.

---

## Referências Bibliográficas e Documentais

1. <a id="ref-1"></a> ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **ABNT NBR 17225:2025**: Acessibilidade em conteúdo e aplicações web — Requisitos; W3C **WCAG 2.2** (SC 2.4.11).
2. <a id="ref-2"></a> ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **ABNT NBR 17060:2022**: Acessibilidade em aplicativos de dispositivos móveis — Requisitos; BRASIL, **Lei nº 13.146/2015 (LBI)**.
