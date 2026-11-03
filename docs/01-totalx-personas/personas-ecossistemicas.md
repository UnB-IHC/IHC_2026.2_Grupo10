# Personas Inclusivas e Ecossistêmicas

A modelagem de **Personas Inclusivas** garante que a diversidade funcional, cognitiva e socioeconômica seja representada no design, prevendo o uso de tecnologias assistivas e diferentes níveis de letramento digital. Já as **Personas Ecossistêmicas** ampliam essa modelagem centrada no indivíduo isolado para enxergar toda a rede sociotécnica ao redor do sistema: familiares mediadores, cuidadores, comunidade local, operadores de suporte (EX) e os impactos sistêmicos da tecnologia.

---

## Criação de Personas Inclusivas

- [ ] **Os perfis contemplam diversidade funcional, uso de tecnologias assistivas e limitações temporárias ou situacionais?** [[2]](#ref-2)
    - `👤 Persona: Deficiência Visual / Motora` `⚖️ Norma/Base: ABNT NBR 17225:2025` `🛠️ Ferramenta: Ficha de Persona`
    ??? info "Como auditar / Passo a passo"
        1. Revise a documentação (fichas) das personas do projeto.
        2. O critério é atendido se houver descrição de uso de tecnologias como leitores de tela (ex: NVDA), navegação apenas por teclado ou ampliação de tela (zoom 200%).

- [ ] **As personas refletem níveis distintos de letramento digital e barreiras socioeconômicas, sem cair em estereótipos?** [[3]](#ref-3)
    - `👤 Persona: Baixo Letramento Digital / Conexão Instável` `⚖️ Norma/Base: Design Empático` `🛠️ Ferramenta: Mapa de Empatia`
    ??? info "Como auditar / Passo a passo"
        1. Verifique se o contexto de uso das personas inclui limitações de pacote de dados, conexões lentas (3G) ou dificuldade de acesso.
        2. O critério é atendido se as dores reais estiverem mapeadas no Mapa de Empatia de forma objetiva, influenciando decisões de design (ex: interface de carregamento leve).

---

## Atores Indiretos e Impacto Sistêmico

- [ ] **O projeto identifica e apoia mediadores, cuidadores ou familiares que auxiliam usuários em situação de dependência parcial?** [[1]](#ref-1)
    - `👤 Persona: Mediador / Cuidador` `⚖️ Norma/Base: Personas Ecossistêmicas (IHC)` `🛠️ Ferramenta: Mapa de Ecossistema`
    ??? info "Como auditar / Passo a passo"
        1. Navegue pelos fluxos críticos de conta ou agendamento.
        2. Verifique se o sistema permite acompanhamento assistido com segurança (ex: permissões delegadas, histórico de acessos), respeitando a autonomia e privacidade do titular.

- [ ] **Consequências negativas para atores indiretos e para a comunidade foram analisadas e mitigadas no desenho da solução?** [[4]](#ref-4)
    - `👤 Persona: Comunidade Local` `⚖️ Norma/Base: Design Sistêmico / Ética` `🛠️ Ferramenta: Miro / FigJam`
    ??? info "Como auditar / Passo a passo"
        1. Avalie o mapa de stakeholders do projeto e as decisões automatizadas.
        2. O critério é atendido caso a equipe tenha documentado quem sofre impacto se o serviço falhar, garantindo caminhos alternativos para mitigar a exclusão digital.

- [ ] **Os fluxos de recuperação de senha e suporte permitem a intermediação assistida por canais alternativos?** [[2]](#ref-2)
    - `👤 Persona: Usuário Primário / Mediador` `⚖️ Norma/Base: Omnicanalidade` `🛠️ Ferramenta: Service Blueprint`
    ??? info "Como auditar / Passo a passo"
        1. Acesse o fluxo de recuperação de conta ou a central de ajuda.
        2. O critério é atendido se houver uma via documentada de suporte que não dependa exclusivamente de e-mail (ex: atendimento telefônico ou presencial), facilitando a ação do mediador.

- [ ] **O fluxo operacional e a arquitetura do sistema preservam o bem-estar cognitivo dos operadores de retaguarda (backstage), evitando sobrecarga ou interfaces punitivas?** [[1]](#ref-1)
    - `👤 Persona: Operador de Suporte (EX)` `⚖️ Norma/Base: Total Experience (TX) / Ergonomia Cognitiva` `🛠️ Ferramenta: Jornada do Colaborador`
    ??? info "Como auditar / Passo a passo"
        1. Mapeie a interface de retaguarda (backoffice) utilizada pelo funcionário/operador do sistema.
        2. O critério é atendido se a ferramenta de trabalho apoiar o funcionário, fornecendo contexto prévio (para que o cidadão não precise repetir dados no atendimento) e evitando excesso de notificações.

- [ ] **A interface apresenta notificações claras e registros de auditoria acessíveis tanto para o usuário primário quanto para o mediador?** [[1]](#ref-1)
    - `👤 Persona: Usuário com Autonomia Reduzida` `⚖️ Norma/Base: Heurística 1 de Nielsen` `🛠️ Ferramenta: Inspeção de Interface`
    ??? info "Como auditar / Passo a passo"
        1. Realize uma ação crítica utilizando a conta do mediador (ou simule a delegação).
        2. O critério é atendido se o sistema registrar claramente de onde partiu a ação no histórico do usuário primário, mantendo a transparência.

---

## Referências Bibliográficas e Documentais

1. <a id="ref-1"></a> UNIVERSIDADE DE BRASÍLIA (UnB). Notas de Aula FGA0173 — Interação Humano-Computador: **Personas Ecossistêmicas**. 2026.2.
2. <a id="ref-2"></a> DINIZ, V. et al. **Guia de Boas Práticas para Acessibilidade Digital**. Governo Digital, 2023.
3. <a id="ref-3"></a> BARBOSA, S. D. J.; SILVA, B. S. **Interação Humano-Computador e Experiência do Usuário**. Autopublicação / Campus.
4. <a id="ref-4"></a> KALBACH, Jim. **Mapeamento de Experiências: Um guia para criar valor por meio de jornadas, blueprints e diagramas**. Alta Books, 2017.
