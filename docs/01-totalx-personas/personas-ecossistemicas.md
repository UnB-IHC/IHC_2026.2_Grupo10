---
hide:
  - toc
---

<span class="prisma-pill-tag">Guia Metodológico • Rede Sociotécnica</span>

# Personas Ecossistêmicas

Enquanto as personas clássicas modelam o usuário direto, as **Personas Ecossistêmicas** ampliam o olhar de IHC para toda a rede sociotécnica ao redor do serviço: familiares mediadores, cuidadores, operadores de atendimento e a comunidade impactada pelas decisões automatizadas do sistema [[1]](#ref-1) [[4]](#ref-4).

## Matriz de Atores Indiretos no Ecossistema

| Papel no Ecossistema | Relação com o Serviço Digital | Requisitos de Design e Segurança |
| :--- | :--- | :--- |
| **Mediadores, Familiares e Cuidadores** [[1]](#ref-1) [[2]](#ref-2) | Auxiliam pessoas com autonomia reduzida, idosos ou usuários em situação de dependência parcial em cadastros, agendamentos e suporte. | Oferecer **permissões delegadas seguras** (sem exigir compartilhamento de senha pessoal) e canais alternativos de recuperação de conta e suporte [[2]](#ref-2). |
| **Titular Assistido** [[1]](#ref-1) | Pessoa em nome de quem a ação é realizada com apoio parcial ou eventual de terceiros. | Preservar privacidade e autonomia com **notificações claras e histórico transparente** indicando quais ações foram feitas pelo titular ou pelo mediador. |
| **Operadores de Retaguarda (EX)** [[1]](#ref-1) | Funcionários de triagem, suporte e operação que dependem de sistemas internos (*backoffice*) para resolver exceções. | Evitar interfaces punitivas, excesso de alertas e falta de contexto prévio que gerem sobrecarga cognitiva no atendente e retrabalho ao cidadão. |
| **Comunidade e Atores Excluídos** [[3]](#ref-3) [[4]](#ref-4) | Pessoas com baixo acesso à internet (3G/pacote restrito), sem smartphone próprio ou afetadas indiretamente quando um serviço vira 100% digital. | Analisar consequências negativas no mapa de *stakeholders*, manter interfaces leves e preservar rotas presenciais ou assistidas contra a exclusão digital. |

## Diretrizes para Modelar o Ecossistema no Projeto

<div class="prisma-guide-grid prisma-guide-grid--3" markdown>

<div class="prisma-guide-card" markdown>
<h3 class="prisma-card-heading--teal">1 • Delegação Segura</h3>
<span class="prisma-card-subtitle">Acompanhamento transparente sem violar autonomia</span>

Ao projetar contas gov, bancárias, educacionais ou de saúde, diferencie o perfil do representante/mediador do perfil do titular, mantendo registro auditável em linguagem clara de quem executou cada solicitação [[1]](#ref-1).
</div>

<div class="prisma-guide-card" markdown>
<h3 class="prisma-card-heading--blue">2 • Recuperação Assistida</h3>
<span class="prisma-card-subtitle">Alternativas ao bloqueio digital</span>

Garanta que fluxos críticos como recuperação de acesso, contestação e agendamento não dependam de um único dispositivo pessoal inacessível, permitindo intermediação assistida documentada [[2]](#ref-2).
</div>

<div class="prisma-guide-card" markdown>
<h3 class="prisma-card-heading--amber">3 • Impacto Sistêmico &amp; Ética</h3>
<span class="prisma-card-subtitle">Prevenção da exclusão sociotécnica</span>

Mapeie no Miro/FigJam quem sofre impacto caso uma regra automatizada falhe ou bloqueie um perfil legítimo, estabelecendo canais humanos de revisão e contingência [[3]](#ref-3) [[4]](#ref-4).
</div>

</div>

---

## Referências Bibliográficas e Documentais

1. <a id="ref-1"></a> UNIVERSIDADE DE BRASÍLIA (UnB). Notas de Aula FGA0173 — Interação Humano-Computador: **Personas Ecossistêmicas**. 2026.2.
2. <a id="ref-2"></a> DINIZ, V. et al. **Guia de Boas Práticas para Acessibilidade Digital**. Brasília: Governo Digital (Gov.br), 2023.
3. <a id="ref-3"></a> BARBOSA, S. D. J.; SILVA, B. S.; SILVEIRA, M. S.; GASPARINI, I.; DARIN, T.; BARBOSA, G. D. J. **Interação Humano-Computador e Experiência do Usuário**. Autopublicação, 2021.
4. <a id="ref-4"></a> KALBACH, Jim. **Mapeamento de Experiências: um guia para criar valor por meio de jornadas, blueprints e diagramas**. Rio de Janeiro: Alta Books, 2017.
