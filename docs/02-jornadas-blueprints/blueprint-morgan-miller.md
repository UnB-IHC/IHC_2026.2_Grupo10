# Service Blueprint — Modelo Estrutural (Morgan & Miller)

O **Service Blueprint** conecta a experiência visível ao usuário (*palco / frontstage*) com as ações internas da equipe (*bastidores / backstage*) e os sistemas de suporte separados pela **Linha de Interação** e pela **Linha de Visibilidade**.

!!! note "Arquivo-molde da Sprint 04"
    Expanda e personalize livremente as seções e perguntas abaixo com base nas aulas e na bibliografia da sua Issue, mantendo o formato das *Smart Badges*, do bloco *Como auditar* e das *Referências*.

---

## Sincronia entre Palco (Frontstage) e Bastidores (Backstage)

- [ ] **Todo processamento assíncrono nos bastidores (abaixo da linha de visibilidade) comunica status claro e acessível no palco** [[1]](#ref-1)
    - `👤 Persona: Leitor de Tela` `👤 Persona: TDAH / Ansiedade` `⚖️ Norma/Base: Service Blueprint (Morgan & Miller)` `🛠️ Ferramenta: Template Service Blueprint`
    ??? info "Como auditar / Passo a passo"
        1. Analise cada etapa em que uma ação do usuário depende de processamento interno ou validação da equipe.
        2. Confirme se há feedback compreensível e anúncio programático (`aria-live`) sem deixar a interface travada.

- [ ] **Falhas nos processos de suporte possuem plano de contingência sem expor erros técnicos criptografados ao usuário final** [[1]](#ref-1)
    - `👤 Persona: Equipe de Suporte (EX)` `⚖️ Norma/Base: Heurísticas de Nielsen (H9)` `🛠️ Ferramenta: Miro / FigJam`
    ??? info "Como auditar / Passo a passo"
        1. Simule indisponibilidade ou erro de serviço externo e verifique se a mensagem orienta o próximo passo em linguagem humana.

---

## Referências Bibliográficas e Documentais

1. <a id="ref-1"></a> Notas de Aula FGA0173 — Interação Humano-Computador (UnB, 2026.2): **Service Blueprint (Morgan & Miller)**.
