---
hide:
  - toc
---

<span class="prisma-pill-tag">📋 Checklist de Auditoria Web • Reflexos no Palco</span>

# Palco vs. Bastidores — Service Blueprint (Morgan & Miller)

No **Service Blueprint** de Morgan & Miller, falhas de sincronia entre os **Bastidores (*Backstage*)** e o **Palco (*Frontstage*)** vazam para o usuário na forma de esperas cegas, jargões internos e falta de comprovantes [[1]](#ref-1) [[2]](#ref-2). Este checklist audita diretamente na tela do site esses reflexos visíveis da operação interna.

---

## Sincronia na Linha de Visibilidade

- [ ] **BPR-01: Processamentos assíncronos de bastidores comunicam status claro e acessível no palco, sem deixar o usuário em "espera cega"?** [[1]](#ref-1)
    - `👤 Leitor de Tela` `👤 Cognitiva / TDAH` `⚖️ Service Blueprint (Morgan & Miller)` `⚖️ WCAG 2.2` `🛠️ NVDA / VoiceOver` `🛠️ Inspeção Manual / Heurística`
    ??? info "Como auditar / Passo a passo"
        1. Execute ações que dependam de resposta do servidor, busca, filtro ou análise interna.
        2. Verifique se a interface informa claramente o estado atual (*"Enviando..."*, *"Em análise — prazo de 2 dias úteis"*) e anuncia mudanças relevantes via `aria-live` / `role="status"` sem travar a tela.
        3. **✅ Critério de aprovação:** Nenhum processamento interno deixa a interface muda, congelada ou sem estimativa compreensível do que acontecerá a seguir.

- [ ] **BPR-02: A Linha de Visibilidade blinda a interface contra códigos técnicos de banco/servidor, siglas internas e jargões burocráticos?** [[1]](#ref-1) [[2]](#ref-2)
    - `👤 Idoso / Baixo Letramento` `👤 Dislexia` `⚖️ Service Blueprint (Morgan & Miller)` `⚖️ Linguagem Simples (Lei 15.263/2025)` `🛠️ Inspeção Manual / Heurística`
    ??? info "Como auditar / Passo a passo"
        1. Revise alertas, status de solicitações, telas de erro e notificações emitidas pelo site.
        2. Procure vazamentos de nomenclatura interna de bastidores (ex.: `ERR_SQL_500`, códigos de tabelas, siglas de setores internos desconhecidas pelo cidadão/cliente).
        3. **✅ Critério de aprovação:** Toda comunicação no palco utiliza o vocabulário do usuário final, ocultando a complexidade interna da organização.

- [ ] **BPR-03: Quando serviços externos ou processos de suporte falham, o site oferece mensagem humana de contingência orientando o próximo passo?** [[1]](#ref-1)
    - `👤 Idoso / Baixo Letramento` `👤 Cognitiva / TDAH` `⚖️ Service Blueprint (Morgan & Miller)` `⚖️ Heurísticas de Nielsen` `🛠️ DevTools (Zoom, Refluxo & Visão)` `🛠️ Inspeção Manual / Heurística`
    ??? info "Como auditar / Passo a passo"
        1. Avalie telas de indisponibilidade, falha de integração externa (ex.: busca de CEP, pagamento, emissão de documento) ou páginas `404`/`500`.
        2. Verifique se o site explica o ocorrido sem culpar o usuário e oferece alternativa imediata (tentar novamente, preencher manualmente ou acessar outro canal).
        3. **✅ Critério de aprovação:** Falhas de bastidores contam com rota de contingência clara em vez de páginas quebradas ou mensagens técnicas.

## Evidências Digitais e Processos de Suporte

- [ ] **BPR-04: Cada ação crítica concluída gera imediatamente uma evidência digital clara e consultável (tela de confirmação, resumo, recibo ou e-mail)?** [[1]](#ref-1)
    - `👤 Idoso / Baixo Letramento` `👤 Cognitiva / TDAH` `⚖️ Service Blueprint (Morgan & Miller)` `⚖️ Heurísticas de Nielsen` `🛠️ Inspeção Manual / Heurística`
    ??? info "Como auditar / Passo a passo"
        1. Conclua ou inspecione o encerramento de uma ação relevante no site (envio de formulário, candidatura, agendamento, cadastro ou pedido).
        2. Confira se o usuário recebe prova imediata e permanente da operação (com data, resumo ou comprovante salvável), além de mero *toast* que desaparece em segundos.
        3. **✅ Critério de aprovação:** O usuário tem certeza imediata de que sua ação foi registrada e consegue consultar a confirmação depois.

- [ ] **BPR-05: Os processos de suporte poupam esforço do usuário automatizando buscas previsíveis (autocompletar via CEP, dados já cadastrados ou máscaras)?** [[2]](#ref-2)
    - `👤 Motora / Teclado` `👤 Cognitiva / TDAH` `⚖️ Service Blueprint (Morgan & Miller)` `⚖️ WCAG 2.2` `🛠️ Inspeção Manual / Heurística` `🛠️ Teclado (Tab / Esc)`
    ??? info "Como auditar / Passo a passo"
        1. Analise os formulários e fluxos de entrada de dados do site.
        2. Verifique se tarefas que o sistema pode resolver nos bastidores (preencher logradouro pelo CEP, puxar dados do perfil logado, formatar CPF/data automaticamente) foram automatizadas sem rigidez punitiva.
        3. **✅ Critério de aprovação:** A carga operacional repetitiva fica nos bastidores do sistema, exigindo do usuário apenas entradas realmente necessárias.

- [ ] **BPR-06: O site mitiga tempos de resposta com indicadores visuais adequados (*skeletons*/progresso) e valida regras de negócio antes do envio final?** [[1]](#ref-1) [[2]](#ref-2)
    - `👤 Cognitiva / TDAH` `👤 Baixa Visão` `⚖️ Service Blueprint (Morgan & Miller)` `⚖️ Heurísticas de Nielsen` `🛠️ DevTools (Zoom, Refluxo & Visão)` `🛠️ Inspeção Manual / Heurística`
    ??? info "Como auditar / Passo a passo"
        1. Observe o carregamento de listas/páginas pesadas (inclusive simulando rede *Fast 3G* na aba Network do DevTools) e o preenchimento de campos com regras específicas (formato de documento, senha, disponibilidade).
        2. Confira se há indicadores estruturais de carregamento e se restrições de formato são avisadas no próprio campo antes de submeter a página inteira.
        3. **✅ Critério de aprovação:** Latências são suavizadas com feedback progressivo e validações previsíveis ocorrem de forma antecipada (*inline*).

---

## Referências Bibliográficas e Documentais

1. <a id="ref-1"></a> UNIVERSIDADE DE BRASÍLIA (UnB). Notas de Aula FGA0173 — Interação Humano-Computador: **Service Blueprint (Morgan & Miller)**. 2026.2.
2. <a id="ref-2"></a> STICKDORN, Marc et al. **Isto é Design de Serviço na Prática: Como Aplicar o Design de Serviço no Mundo Real**. Porto Alegre: Bookman, 2019.
