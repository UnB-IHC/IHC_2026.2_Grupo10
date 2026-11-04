---
hide:
  - toc
---

<span class="prisma-pill-tag">📖 Guia Metodológico • Concepção &amp; Serviço</span>

# UX, Design UX e Total Experience — CX, UX, EX, TX

A **Total Experience (TX)** integra a interação na tela (**UX**), a relação em todos os pontos de contato (**CX**) e as ferramentas internas da equipe (**EX**), evitando que sistemas de bastidores precários ou canais desconectados gerem barreiras ao usuário final [[1]](#ref-1) [[6]](#ref-6). Este guia consolida como alinhar essas quatro dimensões na concepção ou no redesenho de serviços digitais.

## As 4 Dimensões e Suas Diretrizes Práticas

<div class="prisma-guide-grid" markdown>

<div class="prisma-guide-card" markdown>
<h3 class="prisma-card-heading--teal">1 • Experiência do Usuário (UX)</h3>
<span class="prisma-card-subtitle">Interação centrada em pessoas reais</span>

* **Contextos reais de uso:** Definir usuários, tarefas e situações adversas (pressa, uso com uma só mão, tecnologias assistivas) a partir de pesquisa com o público [[1]](#ref-1).
* **Testes iterativos:** Validar desde os primeiros protótipos com usuários reais em pelo menos duas rodadas, convertendo falhas em ajustes concretos [[1]](#ref-1).
* **Qualidade percebida:** Avaliar não só a conclusão da tarefa, mas sentimentos de confiança, frustração ou insegurança após o uso [[2]](#ref-2).
</div>

<div class="prisma-guide-card" markdown>
<h3 class="prisma-card-heading--blue">2 • Experiência do Cliente (CX)</h3>
<span class="prisma-card-subtitle">Coerência em todos os contatos</span>

* **Unidade entre canais:** Manter os mesmos rótulos, ícones, cores semânticas e comportamentos entre site, aplicativo, e-mails, notificações e suporte [[3]](#ref-3).
* **Transparência comercial e pública:** Apresentar preços, prazos, regras e condições em linguagem simples antes de qualquer confirmação, sem divergências entre canais [[4]](#ref-4).
</div>

<div class="prisma-guide-card" markdown>
<h3 class="prisma-card-heading--purple">3 • Experiência do Colaborador (EX)</h3>
<span class="prisma-card-subtitle">Retaguarda acessível e com contexto</span>

* **Backoffice inclusivo:** Garantir que sistemas internos usados por atendentes e operadores atendam à WCAG 2.2 (teclado e leitor de tela NVDA) [[5]](#ref-5).
* **Histórico visível:** Exibir ao atendente os dados já informados pelo usuário para eliminar perguntas repetitivas [[6]](#ref-6).
* **Escuta da linha de frente:** Converter dificuldades recorrentes relatadas pelo suporte em melhorias de produto [[7]](#ref-7).
</div>

<div class="prisma-guide-card" markdown>
<h3 class="prisma-card-heading--amber">4 • Total Experience (TX)</h3>
<span class="prisma-card-subtitle">Visão unificada de ponta a ponta</span>

* **Mapa integrado:** Manter jornada do usuário e *Service Blueprint* lado a lado para rastrear a causa de reclamações até o processo interno correspondente [[8]](#ref-8).
* **Indicadores conjuntos:** Analisar em um único painel a satisfação de clientes, usuários finais e equipe interna antes de priorizar evoluções [[6]](#ref-6).
</div>

</div>

## Síntese — Como Conectar o Guia à Auditoria Web

| Dimensão | Artefato Interno da Equipe | Onde Reflete na Auditoria do Site (`📋 Checklists`) |
| :--- | :--- | :--- |
| **UX** | Pesquisa de campo, UX Canvas e rodadas de teste de usabilidade [[1]](#ref-1) [[2]](#ref-2) | [Acessibilidade Cognitiva](../03-cognicao-ui-figma/cognicao-usabilidade.md) (`COG-01`–`COG-11`) e [Heurísticas de Nielsen](../03-cognicao-ui-figma/heuristicas-nielsen.md) |
| **CX** | Comparativo multicanal (FigJam/Miro) e cliente oculto [[3]](#ref-3) [[4]](#ref-4) | [Fluxos de Navegação](../02-jornadas-blueprints/user-journey-vs-flows.md) (`FLX-04`) e [Omnicanalidade](../02-jornadas-blueprints/omnicanalidade.md) (`OMN-01`–`OMN-05`) |
| **EX & TX** | *Service Blueprint* e painel conjunto de indicadores [[6]](#ref-6) [[7]](#ref-7) [[8]](#ref-8) | [Palco vs. Bastidores](../02-jornadas-blueprints/blueprint-morgan-miller.md) (`BPR-01`–`BPR-06`) e [Normas Web](../04-web-normas/normas-nbr-wcag.md) |

---

## Referências Bibliográficas e Documentais

1. <a id="ref-1"></a> ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **ABNT NBR ISO 9241-210**: Ergonomia da interação humano-sistema — Projeto centrado no ser humano para sistemas interativos. Rio de Janeiro: ABNT, 2011.
2. <a id="ref-2"></a> BARBOSA, S. D. J.; SILVA, B. S.; SILVEIRA, M. S.; GASPARINI, I.; DARIN, T.; BARBOSA, G. D. J. **Interação Humano-Computador e Experiência do Usuário**. Autopublicação, 2021. Disponível em: <https://leanpub.com/ihc-ux>.
3. <a id="ref-3"></a> NIELSEN, Jakob. **10 Usability Heuristics for User Interface Design**. Nielsen Norman Group, 1994 (atualizado em 2024). Disponível em: <https://www.nngroup.com/articles/ten-usability-heuristics/>.
4. <a id="ref-4"></a> BRASIL. **Lei nº 8.078, de 11 de setembro de 1990** (Código de Defesa do Consumidor). Disponível em: <https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm>.
5. <a id="ref-5"></a> W3C. **Web Content Accessibility Guidelines (WCAG) 2.2**. 2023. Disponível em: <https://www.w3.org/TR/WCAG22/>.
6. <a id="ref-6"></a> GARTNER. **Gartner Identifies the Top Strategic Technology Trends for 2021**. 2020. Disponível em: <https://www.gartner.com/en/newsroom/press-releases/2020-10-19-gartner-identifies-the-top-strategic-technology-trends-for-2021>.
7. <a id="ref-7"></a> MORGAN, Jacob. **The Employee Experience Advantage**. Hoboken: Wiley, 2017.
8. <a id="ref-8"></a> KALBACH, Jim. **Mapeamento de Experiências: um guia para criar valor por meio de jornadas, blueprints e diagramas**. Rio de Janeiro: Alta Books, 2017.
