# Acessibilidade Cognitiva, Neurodiversidade & Usabilidade em IHC

Esta seção une diretrizes voltadas a pessoas neurodivergentes (TDAH, TEA/Autismo, Dislexia) e redução de carga cognitiva às **Heurísticas de Usabilidade** de IHC.

!!! note "Arquivo-molde da Sprint 05"
    Expanda e personalize livremente as seções e perguntas abaixo com base nas aulas e na bibliografia da sua Issue, mantendo o formato das *Smart Badges*, do bloco *Como auditar* e das *Referências*.

---

## Neurodiversidade e Carga Cognitiva

- [ ] **A interface evita distrações automáticas, respeita prefers-reduced-motion e não exige testes cognitivos/memorização no login** [[1]](#ref-1)
    - `👤 Persona: TEA / TDAH` `👤 Persona: Dislexia` `⚖️ Norma/Base: WCAG 2.2 — 3.3.8 (AA)` `🛠️ Ferramenta: Chrome Rendering Emulator`
    ??? info "Como auditar / Passo a passo"
        1. Ative a emulação `prefers-reduced-motion: reduce` no navegador e confirme que animações não essenciais param.
        2. Teste o campo de senha verificando se é permitido colar credenciais (`Ctrl+V`) e usar gerenciadores de senha.

## Usabilidade e Heurísticas

- [ ] **Ações destrutivas contam com prevenção de erros explícita ou opção imediata de Desfazer** [[2]](#ref-2)
    - `👤 Persona: Neurodivergente` `👤 Persona: Motora / Tremor` `⚖️ Norma/Base: Heurísticas de Nielsen (H5)` `🛠️ Ferramenta: Inspeção por Teclado`
    ??? info "Como auditar / Passo a passo"
        1. Acione botões de exclusão ou descarte apenas com `Tab + Enter` e confirme se há diálogo claro com saída via tecla `Esc`.

---

## Referências Bibliográficas e Documentais

1. <a id="ref-1"></a> W3C WAI. **Making Content Usable for People with Cognitive and Learning Disabilities (COGA)** & **WCAG 2.2** (2023).
2. <a id="ref-2"></a> NIELSEN, Jakob. **10 Usability Heuristics for User Interface Design**. Nielsen Norman Group.
