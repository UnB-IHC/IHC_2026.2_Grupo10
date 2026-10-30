# Desenvolvimento Web Semântico, Mídia & Conteúdo Claro

Aborda a construção técnica do front-end com HTML5 semântico, alternativas textuais para imagens e multimídia, formulários acessíveis e redação em **Linguagem Simples**.

!!! note "Arquivo-molde da Sprint 06"
    Expanda e personalize livremente as seções e perguntas abaixo com base nas aulas e na bibliografia da sua Issue, mantendo o formato das *Smart Badges*, do bloco *Como auditar* e das *Referências*.

---

## Semântica HTML, Formulários e Mídia

- [ ] **Imagens informativas possuem atributo alt descritivo, imagens decorativas usam alt="" e vídeos oferecem legendas sincronizadas** [[1]](#ref-1)
    - `👤 Persona: Leitor de Tela` `👤 Persona: Deficiência Auditiva` `⚖️ Norma/Base: eMAG / Gov.br` `🛠️ Ferramenta: WAVE`
    ??? info "Como auditar / Passo a passo"
        1. Execute a extensão WAVE na página e revise a aba *Structure* e os textos alternativos das mídias.

## Linguagem Simples e Clareza Textual

- [ ] **Instruções e mensagens de erro utilizam linguagem direta, voz ativa e orientam exatamente como corrigir problemas** [[2]](#ref-2)
    - `👤 Persona: Analfabetismo Funcional` `👤 Persona: Idosos` `⚖️ Norma/Base: ABNT NBR ISO 24495-1` `🛠️ Ferramenta: Axe DevTools`
    ??? info "Como auditar / Passo a passo"
        1. Submeta um formulário com campos inválidos e verifique se o erro está vinculado via `aria-describedby` e livre de jargão técnico.

---

## Referências Bibliográficas e Documentais

1. <a id="ref-1"></a> BRASIL. **Modelo de Acessibilidade em Governo Eletrônico (eMAG)**. Governo Digital.
2. <a id="ref-2"></a> ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **ABNT NBR ISO 24495-1:2024**: Linguagem simples — Parte 1: Princípios e diretrizes.
