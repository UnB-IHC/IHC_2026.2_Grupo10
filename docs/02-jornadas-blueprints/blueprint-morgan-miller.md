# Service Blueprint — Modelo Estrutural (Morgan & Miller)

O **Service Blueprint**, conforme a estrutura clássica de Morgan & Miller, é uma ferramenta de orquestração essencial para mapear a jornada do usuário em profunda conexão com os ecossistemas internos da organização. Ele é estruturado em camadas fundamentais: as Evidências Físicas/Digitais (o que o usuário toca, vê e percebe como prova do serviço) e as Ações do Usuário, que ocorrem no **Palco (Frontstage)**. As interações diretas entre clientes e a interface ou funcionários são divididas pela Linha de Interação, abaixo da qual operam silenciosamente os **Bastidores (Backstage)**. A Linha de Visibilidade demarca tudo aquilo que o usuário não pode (e muitas vezes não deve) ver, mas que sustenta sua experiência por meio de sistemas estruturais, tecnologias e Processos de Suporte.

Compreender e auditar essa estrutura em projetos de **UX, IHC e Acessibilidade** é crucial para garantir que as operações de retaguarda funcionem em harmonia com o palco. Quando há falhas de sincronia entre essas camadas, o usuário frequentemente se depara com "esperas cegas", loops de incerteza, jargões operacionais vazados e sobrecarga cognitiva. O blueprint permite identificar gargalos na integração desses fluxos, garantindo uma prestação de serviço transparente e fluida, certificando-se de que a complexidade da máquina do negócio não se torne um obstáculo na jornada de quem o utiliza.

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

- [ ] **A Linha de Visibilidade blinda o palco (Frontstage) contra jargões operacionais e burocráticos exclusivos dos bastidores** [[2]](#ref-2)
    - `👤 Persona: Usuário Final (CX)` `⚖️ Norma/Base: Isto é Design de Serviço na Prática` `🛠️ Ferramenta: UX Writing / Leitura Crítica`
    ??? info "Como auditar / Passo a passo"
        1. Revise notificações de status, alertas e e-mails automáticos enviados ao usuário.
        2. Verifique se os textos utilizam o modelo mental do usuário final, eliminando códigos de banco de dados, siglas de departamentos internos ou processos logísticos não essenciais.

## Evidências Físicas/Digitais e Ações do Usuário

- [ ] **Cada ação crítica do usuário resulta na emissão imediata de uma evidência tangível ou digital comprobatória** [[1]](#ref-1)
    - `👤 Persona: Idosos / Baixa Literacia Digital` `⚖️ Norma/Base: Service Blueprint (Morgan & Miller)` `🛠️ Ferramenta: Mapa de Jornada`
    ??? info "Como auditar / Passo a passo"
        1. Complete uma jornada de alto valor, como finalização de compra, agendamento ou cadastro.
        2. Valide se o sistema entrega uma evidência clara, como e-mail de confirmação, número de protocolo visível ou tela de sucesso, fornecendo segurança imediata sobre a ação.

- [ ] **O esforço cognitivo exigido na Ação do Usuário é compatível com o valor percebido no serviço** [[2]](#ref-2)
    - `👤 Persona: TDAH / Deficiência Cognitiva` `⚖️ Norma/Base: Design Empático` `🛠️ Ferramenta: Auditoria Heurística`
    ??? info "Como auditar / Passo a passo"
        1. Analise a quantidade de passos e informações exigidas do usuário na linha de ação, como no preenchimento de formulários.
        2. Verifique se é possível automatizar ou transferir parte dessa carga para os Processos de Suporte, como autocompletar via CEP ou buscar dados pré-existentes.

## Processos de Suporte e Conexão Sistêmica

- [ ] **Sistemas de terceiros e bancos de dados estão mapeados e não causam gargalos de tempo de resposta sem mitigação na interface** [[2]](#ref-2)
    - `👤 Persona: Usuário Final (CX)` `⚖️ Norma/Base: Heurísticas de Nielsen (Visibilidade do Status)` `🛠️ Ferramenta: Diagrama de Sequência / DevTools`
    ??? info "Como auditar / Passo a passo"
        1. Identifique tarefas que exigem carregamento de dados pesados ou respostas de APIs externas.
        2. Confirme se a interface lida bem com a latência usando indicadores reais de progresso ou *skeleton screens*, evitando carregadores infinitos.

- [ ] **Regras de negócio e validações do sistema de suporte ocorrem de forma antecipada para o usuário no palco** [[1]](#ref-1)
    - `👤 Persona: Usuário Iniciante` `⚖️ Norma/Base: Prevenção de Erros (H5)` `🛠️ Ferramenta: Inspeção de Interface`
    ??? info "Como auditar / Passo a passo"
        1. Interaja com campos que dependem de validação no banco de dados, como disponibilidade de estoque ou verificação de formato de documento.
        2. Certifique-se de que a validação sistêmica ocorre em tempo real (*inline*), antes que o usuário submeta o formulário.

---

## Referências Bibliográficas e Documentais

1. <a id="ref-1"></a> Notas de Aula FGA0173 — Interação Humano-Computador (UnB, 2026.2): **Service Blueprint (Morgan & Miller)**.
2. <a id="ref-2"></a> STICKDORN, Marc et al. **Isto é Design de Serviço na Prática: Como Aplicar o Design de Serviço no Mundo Real**. 2019.
