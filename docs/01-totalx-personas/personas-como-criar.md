# Personas Inclusivas: Como Criar e Aplicar

Criar personas fundamentadas em dados reais de pesquisa é essencial para evitar as "proto-personas" — perfis baseados em suposições, achismos ou estereótipos da equipe de desenvolvimento. Na auditoria de IHC e Acessibilidade, uma persona bem construída atua como uma âncora de empatia, garantindo que as decisões de design reflitam os comportamentos, objetivos e barreiras de uso de pessoas reais.

Para que o design seja verdadeiramente universal, o método de criação deve contemplar a diversidade humana. Isso significa mapear ativamente perfis com deficiência visual, física/motora, auditiva e de fala, além de incluir o envelhecimento natural, a neurodivergência e as diferentes realidades de letramento digital. Personas inclusivas documentam não apenas a limitação do usuário, mas o contexto de uso e as tecnologias assistivas que ele emprega no dia a dia.

---

## Fundamentação em Dados e Prevenção de Vieses

- [ ] **As personas foram construídas a partir de dados reais de pesquisa com usuários, evitando a formulação baseada exclusivamente em suposições da equipe (proto-personas)?** [[3]](#ref-3)
    - `👤 Persona: Todos os perfis` `⚖️ Norma/Base: Design Centrado no Usuário` `🛠️ Ferramenta: Entrevistas / Survey`
    ??? info "Como auditar / Passo a passo"
        1. Solicite acesso à documentação de pesquisa de UX do projeto (matriz CSD, entrevistas, questionários).
        2. O critério é atendido se houver rastreabilidade entre as dores/objetivos da persona e os dados coletados com usuários reais.

- [ ] **A documentação das personas evita estereótipos capacitistas, etaristas ou socioeconômicos, descrevendo o contexto de uso com foco na remoção de barreiras?** [[2]](#ref-2)
    - `👤 Persona: Minorias e PCDs` `⚖️ Norma/Base: Guia de Boas Práticas (Gov.br)` `🛠️ Ferramenta: Mapa de Empatia`
    ??? info "Como auditar / Passo a passo"
        1. Leia a descrição narrativa das personas do projeto.
        2. O critério é atendido se a redação evitar tom de vitimização ("sofre de...") e focar nas adaptações e no uso de tecnologias assistivas de forma neutra e técnica.

---

## Representatividade e Diversidade Funcional

- [ ] **O projeto contempla personas com deficiência visual (cegueira, baixa visão, daltonismo) ou motora, especificando quais tecnologias assistivas interagem com o sistema?** [[2]](#ref-2)
    - `👤 Persona: PCD Visual / Motora` `⚖️ Norma/Base: LBI Art. 63 / WCAG 2.2` `🛠️ Ferramenta: Ficha de Persona Inclusiva`
    ??? info "Como auditar / Passo a passo"
        1. Inspecione as fichas de personas adotadas pela equipe.
        2. O critério é atendido se houver perfis que dependam de leitores de tela (ex: NVDA), ampliadores de tela, navegação por teclado ou mouses adaptados.

- [ ] **Existem personas que representam usuários com neurodivergências (ex: TDAH, autismo, dislexia) para avaliar o impacto da sobrecarga cognitiva e da poluição visual?** [[1]](#ref-1)
    - `👤 Persona: Neurodivergente` `⚖️ Norma/Base: Acessibilidade Cognitiva` `🛠️ Ferramenta: Avaliação Heurística`
    ??? info "Como auditar / Passo a passo"
        1. Verifique se as personas incluem barreiras relacionadas à atenção, leitura e memória.
        2. O critério é atendido se as necessidades cognitivas (como redução de distrações e linguagem clara) estiverem documentadas como requisitos do projeto.

- [ ] **O envelhecimento natural (ex: presbiopia, declínio de memória) e os diferentes níveis de letramento digital foram mapeados como variáveis da interação?** [[1]](#ref-1)
    - `👤 Persona: Idoso / Baixo Letramento` `⚖️ Norma/Base: Design Inclusivo` `🛠️ Ferramenta: Jornada do Usuário`
    ??? info "Como auditar / Passo a passo"
        1. Analise se as personas representam usuários seniores ou com pouca familiaridade tecnológica.
        2. O critério é atendido se a documentação apontar a necessidade de interfaces mais tolerantes a erros, fontes legíveis e fluxos guiados.

- [ ] **Perfis com deficiência auditiva ou de fala estão representados, garantindo a avaliação de alternativas para comunicação baseada em áudio (ex: legendas, Libras, chat via texto)?** [[2]](#ref-2)
    - `👤 Persona: PCD Auditiva / Fala` `⚖️ Norma/Base: e-MAG` `🛠️ Ferramenta: Blueprint de Serviço`
    ??? info "Como auditar / Passo a passo"
        1. Identifique se o sistema exige comunicação oral (ex: suporte telefônico) ou possui vídeos não legendados.
        2. O critério é atendido se houver uma persona surda/ensurdecida mapeada que force a equipe a projetar rotas multicanal e acessíveis.

---

## Aplicação Prática no Design

- [ ] **As personas criadas são ativamente utilizadas como ferramenta de validação para justificar decisões de interface, fluxos e redação de conteúdo (UX Writing)?** [[3]](#ref-3)
    - `👤 Persona: Todos os perfis` `⚖️ Norma/Base: Interação Humano-Computador` `🛠️ Ferramenta: Walkthrough Cognitivo`
    ??? info "Como auditar / Passo a passo"
        1. Verifique se o relatório de auditoria ou as justificativas de design mencionam as personas nominalmente.
        2. O critério é atendido se houver evidências (ex: comentários no Figma, PRs) de que a interface foi alterada para satisfazer a limitação ou o objetivo de uma persona específica.

---

## Referências Bibliográficas e Documentais

1. <a id="ref-1"></a> UNIVERSIDADE DE BRASÍLIA (UnB). Notas de Aula FGA0173 — Interação Humano-Computador: **Personas e Como Criá-las**. 2026.2.
2. <a id="ref-2"></a> DINIZ, V. et al. **Guia de Boas Práticas para Acessibilidade Digital**. Governo Digital, 2023. Disponível em: <https://www.gov.br/governodigital>.
3. <a id="ref-3"></a> BARBOSA, S. D. J.; SILVA, B. S. **Interação Humano-Computador e Experiência do Usuário**. Autopublicação.
