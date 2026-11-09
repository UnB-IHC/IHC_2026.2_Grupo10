---
hide:
  - toc
---

<span class="prisma-pill-tag">Guia Metodológico • Diagnóstico &amp; Redesenho</span>

# Mapeamento As-Is → To-Be em Diferentes Situações (Kalbach)

Segundo **Jim Kalbach** (*Mapeamento de Experiências*), diagramas de alinhamento e *Service Blueprints* devem adotar a perspectiva **Outside-In** (da vivência do usuário para dentro da organização), diagnosticando primeiro os atritos atuais (**As-Is**) para projetar fluxos futuros inclusivos (**To-Be**) [[1]](#ref-1).

## Roteiro em 3 Etapas: Da Auditoria ao Redesenho

<div class="prisma-guide-grid prisma-guide-grid--3" markdown>

<div class="prisma-guide-card" markdown>
<h3 class="prisma-card-heading--red">1 • Diagnóstico As-Is</h3>
<span class="prisma-card-subtitle">Mapear gargalos e emoções reais</span>

* Representar o fluxo atual como ele realmente ocorre hoje, marcando a **intensidade emocional** e as barreiras encontradas na auditoria ou em testes com usuários [[1]](#ref-1).
* Rastrear, abaixo da linha de visibilidade, qual regra interna, API ou etapa manual provoca cada fricção na tela.
</div>

<div class="prisma-guide-card" markdown>
<h3 class="prisma-card-heading--amber">2 • Fail Points &amp; Recovery</h3>
<span class="prisma-card-subtitle">Prevenir falhas e recuperar o serviço</span>

* Destacar preventivamente os **pontos críticos de falha (*fail points*)** sujeitos a erro de entrada, timeout ou queda de sistema [[1]](#ref-1).
* Definir **protocolos de recuperação (*service recovery*)**: rotas alternativas, preservação de rascunho e autonomia para o suporte resolver o incidente rapidamente.
</div>

<div class="prisma-guide-card" markdown>
<h3 class="prisma-card-heading--teal">3 • Projeção To-Be</h3>
<span class="prisma-card-subtitle">Eliminar redundâncias e alinhar equipes</span>

* Converter cada problema do *As-Is* em melhoria verificável no fluxo **To-Be** (menos etapas, linguagem simples e canais acessíveis) [[1]](#ref-1).
* Alinhar requisitos técnicos e operacionais com desenvolvedores e equipe de retaguarda para viabilizar o novo desenho.
</div>

</div>

## Adaptação Situacional das Raias do Blueprint

Kalbach destaca que a granularidade e as raias do diagrama mudam conforme a natureza do serviço analisado [[1]](#ref-1):

| Contexto do Serviço | Foco Principal no Palco (*Frontstage*) | Foco Principal nos Bastidores (*Backstage* & Suporte) |
| :--- | :--- | :--- |
| **Serviço 100% Digital** (portais web, SaaS, apps) | Ações na interface, estados de carregamento/erro, navegação por teclado/leitor de tela e comprovantes digitais. | Eventos de interface → chamadas de API, validações em banco de dados, filas assíncronas e limites de tempo de sessão. |
| **Serviço Híbrido / Omnicanal** (governo, saúde, varejo, bancos) | Transição fluida entre digital (site, app, QR Code, push) e físico (balcão, totem, documento impresso) sem perda de contexto. | Sincronia na linha de interação entre sistemas digitais e atendentes humanos, protocolos únicos e rotas assistidas de contingência. |
| **Fluxo Crítico / Alta Regulação** (autenticação, pagamentos, recursos) | Clareza prévia de regras, prevenção de erro acidental e confirmação explícita sem *dark patterns*. | Registro de auditoria transparente, validação antifraude acessível (alternativa a biometria/CAPTCHA) e plano imediato de *recovery*. |

---

## Referências Bibliográficas e Documentais

1. <a id="ref-1"></a> KALBACH, Jim. **Mapeamento de Experiências: um guia para criar valor por meio de jornadas, blueprints e diagramas**. Rio de Janeiro: Alta Books, 2017.
