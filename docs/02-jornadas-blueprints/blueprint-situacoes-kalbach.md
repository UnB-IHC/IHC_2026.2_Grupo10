# Blueprints em Diferentes Situações (Mapeamento de Experiências)

Com base na obra *Mapeamento de Experiências* de **Jim Kalbach**, os diagramas de alinhamento e *blueprints* devem ser adaptados ao contexto real do projeto — seja diagnosticando o serviço atual (*As-Is*) ou projetando um novo fluxo inclusivo (*To-Be*).

A adaptação situacional proposta por Kalbach orienta a estruturação dos mapeamentos em quatro frentes principais:

- **Diagnóstico As-Is vs. Visão Futura To-Be:** O mapeamento *As-Is* atua como auditoria diagnóstica para revelar gargalos, atritos e pontos de falha operacionais na experiência existente. O mapeamento *To-Be* reconfigura a jornada, eliminando redundâncias e desenhando interações futuras focadas em valor e inclusão.
- **Serviços Digitais:** Exigem detalhamento das ações de interface do usuário, fluxos de dados, arquitetura de software e respostas automáticas nas raias de bastidor (*backstage* técnico).
- **Serviços Híbridos:** Demandam alinhamento preciso na linha de interação e na linha de visibilidade para conectar pontos de contato físicos (atendimento humano, artefatos impressos) e digitais (aplicativos, quiosques), garantindo uma transição fluida (*omnichannel*).
- **Tratamento de Falhas e Recuperação (Fail Points & Recovery):** Requer a identificação preventiva de etapas vulneráveis a erros e a definição de rotas de contingência e protocolos de recuperação do serviço para restaurar a satisfação do cliente.

---

## Adaptação Situacional do Mapeamento

- [ ] **O escopo, a granularidade e as raias do Blueprint foram adaptados ao tipo de situação (serviço digital, híbrido ou crítico)** [[1]](#ref-1)
    - `👤 Persona: Usuário Final (UX)` `⚖️ Norma/Base: Kalbach — Mapeamento de Experiências` `🛠️ Ferramenta: Diagrama de Alinhamento`
    ??? info "Como auditar / Passo a passo"
        1. Verifique se o mapa destaca explicitamente momentos da verdade, gargalos operacionais e requisitos de acessibilidade por etapa.

- [ ] **Pontos de falha recorrentes do estado atual (As-Is) geraram melhorias verificáveis no desenho futuro (To-Be)** [[1]](#ref-1)
    - `👤 Persona: Baixo Letramento Digital` `⚖️ Norma/Base: Kalbach — Mapeamento de Experiências` `🛠️ Ferramenta: Workshop Colaborativo`
    ??? info "Como auditar / Passo a passo"
        1. Compare o mapa diagnóstico inicial com o protótipo final confirmando a eliminação de etapas redundantes.

## Diagnóstico As-Is vs. Projeção To-Be

- [ ] **O mapeamento diagnóstico As-Is evidencia a intensidade emocional e os pontos de dor reais do usuário antes da proposição do fluxo To-Be** [[1]](#ref-1)
    - `👤 Persona: Usuário Frustrado com Falhas de Serviço` `⚖️ Norma/Base: Kalbach — Mapeamento de Experiências` `🛠️ Ferramenta: Blueprint Diagnóstico (As-Is)`
    ??? info "Como auditar / Passo a passo"
        1. Confirme se as etapas do estado atual contêm marcações visuais de emoções e fricções relatadas em pesquisas de campo.
        2. Certifique-se de que os pontos de atrito identificados no As-Is possuem correspondência direta com propostas de solução no Blueprint To-Be.

- [ ] **A transição do estado As-Is para o To-Be estabelece um plano claro de transformação operacional e alinhamento da equipe de bastidor** [[1]](#ref-1)
    - `👤 Persona: Gestor de Serviço / Equipe de Operações` `⚖️ Norma/Base: Kalbach — Mapeamento de Experiências` `🛠️ Ferramenta: Matriz de Oportunidades e Blueprint To-Be`
    ??? info "Como auditar / Passo a passo"
        1. Verifique se foram definidos os requisitos de infraestrutura e treinamento necessários para migrar das ações atuais para o novo fluxo planejado.
        2. Valide se a equipe de bastidor (backstage) compreende as novas atribuições exigidas pelo modelo To-Be.

- [ ] **A estrutura do mapeamento adota a perspectiva** **Outside In** **, conectando os objetivos de negócio às reais necessidades e emoções dos usuários** [[1]](#ref-1)
    - `👤 Persona: Gestor de Experiência do Cliente` `⚖️ Norma/Base: Kalbach — Mapeamento de Experiências` `🛠️ Ferramenta: Diagrama de Alinhamento de Valor`
    ??? info "Como auditar / Passo a passo"
        1. Confirme se o mapa reflete a jornada a partir da ótica do cliente (de fora para dentro), em vez de se limitar à sequência de processos internos da organização.

## Contextos Digitais e Híbridos

- [ ] **Em serviços digitais, o Blueprint especifica as ações de interface, o fluxo de dados do sistema e o suporte tecnológico de bastidor** [[1]](#ref-1)
    - `👤 Persona: Desenvolvedor / Arquiteto de Informação` `⚖️ Norma/Base: Kalbach — Mapeamento de Experiências` `🛠️ Ferramenta: Service Blueprint Digital`
    ??? info "Como auditar / Passo a passo"
        1. Verifique se o mapa descreve os eventos acionados na interface pelo usuário e os respectivos equivalentes no servidor/banco de dados (backstage técnico).
        2. Confirme se os tempos de resposta do sistema e as integrações via API estão explicitados nas raias de suporte.

- [ ] **Em serviços híbridos, a linha de interação e a linha de visibilidade garantem a continuidade entre pontos de contato físicos e digitais** [[1]](#ref-1)
    - `👤 Persona: Cliente Multicanal (Omnichannel)` `⚖️ Norma/Base: Kalbach — Mapeamento de Experiências` `🛠️ Ferramenta: Diagrama de Alinhamento Híbrido`
    ??? info "Como auditar / Passo a passo"
        1. Verifique se o mapa representa a alternância fluida do usuário entre atendimentos presenciais e digitais sem perda de contexto ou retrabalho.
        2. Avalie se as evidências físicas, como tíquete impresso, e digitais, como código QR ou notificação push, estão pareadas corretamente nas etapas.

## Tratamento de Falhas e Recuperação (Fail Points & Recovery)

- [ ] **Os pontos críticos de falha (fail points) no serviço estão mapeados preventivamente com rotas de contingência** [[1]](#ref-1)
    - `👤 Persona: Agente de Suporte / Atendente de Linha de Frente` `⚖️ Norma/Base: Kalbach — Mapeamento de Experiências` `🛠️ Ferramenta: Análise de Fail Points em Blueprint`
    ??? info "Como auditar / Passo a passo"
        1. Inspecione o Blueprint em busca da identificação explícita de etapas suscetíveis a erros de usuário ou indisponibilidade de sistema.
        2. Confirme se há caminhos alternativos desenhados para contornar a falha sem interromper a conclusão da tarefa pelo usuário.

- [ ] **Os protocolos de recuperação de serviço (service recovery) definem ações imediatas para restaurar a satisfação do cliente** [[1]](#ref-1)
    - `👤 Persona: Cliente Afetado por Erro no Serviço` `⚖️ Norma/Base: Kalbach — Mapeamento de Experiências` `🛠️ Ferramenta: Plano de Recuperação Integrado ao Blueprint`
    ??? info "Como auditar / Passo a passo"
        1. Verifique se para cada falha mapeada existe uma ação de compensação ou comunicação transparente direcionada ao cliente.
        2. Valide se a equipe de linha de frente tem autonomia e procedimentos claros definidos nas raias de suporte para solucionar o incidente.

---

## Referências Bibliográficas e Documentais

1. <a id="ref-1"></a> KALBACH, Jim. **Mapeamento de Experiências**: Um guia para criar valor por meio de jornadas, blueprints e diagramas. Rio de Janeiro: Alta Books, 2017.
