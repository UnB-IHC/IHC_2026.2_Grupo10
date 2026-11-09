---
title: Declaração de Integridade Acadêmica e Uso de IA
description: Declaração de transparência sobre o uso de ferramentas de Inteligência Artificial no Guia PrismaIHC e relatórios técnicos da disciplina FGA0173 (IHC 2026.2).
---

# Declaração de Integridade Acadêmica e Uso de Inteligência Artificial

<div class="prisma-lead-box">
  <p>
    Esta declaração formaliza a política de transparência e integridade acadêmica adotada pelo <strong>Grupo 10</strong> da disciplina <strong>FGA0173 — Interação Humano-Computador (Semestre 2026.2)</strong>, da <strong>Universidade de Brasília (UnB / Faculdade do Gama)</strong>, delimitando com rigor a autoria humana e o papel estritamente operacional e de suporte técnico de ferramentas de Inteligência Artificial (IA) em todos os artefatos produzidos no projeto.
  </p>
</div>

---

## 1. Escopo de Aplicação

A presente declaração engloba a totalidade dos artefatos desenvolvidos pelo Grupo 10 ao longo da disciplina, compreendendo:

1. **Guia Metodológico e Plataforma de Auditoria Web (PrismaIHC)**: páginas de fundamentação teórica, catálogo de perfis funcionais, estruturação de fluxos e motor interativo de verificação com 69 critérios de acessibilidade e usabilidade;
2. **Relatório Técnico de Auditoria de Acessibilidade Digital**: inspeção analítica fundamentada sobre a plataforma LinkedIn (fluxos de busca e candidatura a vagas de emprego), com mapeamento de violações à WCAG 2.2, ABNT NBR 17225:2025 e eMAG 3.1;
3. **Relatório Técnico de Teste de Usabilidade**: planejamento, aplicação empírica observacional com participantes reais, aplicação de Termos de Consentimento Livre e Esclarecido (TCLE), coleta de métricas de eficácia, eficiência e satisfação (SUS) e análise qualitativa de problemas;
4. **Protótipo de Intervenção e Redesenho de Interface (PR-01)**: especificações de arquitetura da informação, componentes acessíveis e implementação de prova de conceito;
5. **Materiais de Apresentação e Comunicação dos Resultados**: slides de defesa, resumos executivos e sínteses para a comunidade acadêmica.

---

## 2. Autoria Intelectual, Concepção e Redação Analítica (100% Humana)

O Grupo 10 declara, para todos os efeitos acadêmicos e éticos, que:

- **Concepção Teórica e Escolhas Metodológicas**: Todas as decisões de escopo, seleção do objeto de estudo (LinkedIn), definição da abordagem metodológica (avaliação heurística, inspeção de acessibilidade e teste de usabilidade empírico) e desenho dos fluxos críticos foram idealizados, deliberados e validados com exclusividade pelos estudantes integrantes do grupo.
- **Produção e Julgamento Analítico**: A identificação de barreiras de interação, a atribuição de severidades de Nielsen (graus 0 a 4), o cruzamento com as normas técnicas brasileiras e internacionais e as proposições de redesenho representam reflexão crítica autônoma e julgamento analítico humano.
- **Atividades Empíricas**: O recrutamento de participantes, a condução presencial/remota das sessões de teste com usuários reais, a observação direta das dificuldades e o registro de depoimentos foram executados presencialmente e de forma personalizada pelos pesquisadores do grupo.
- **Não Delegação de Ideias e Escrita Criativa**: Em nenhuma etapa do trabalho foram utilizadas ferramentas de IA para gerar ideias conceituais, conceber hipóteses, fabricar dados empíricos, interpretar subjetivamente a conduta de usuários ou redigir o corpo analítico e argumentativo dos relatórios e do guia.

---

## 3. Delimitação Estrita do Uso de Ferramentas de Inteligência Artificial

Ferramentas de Inteligência Artificial Generativa (tais como modelos de linguagem de grande escala e assistentes de desenvolvimento de software) foram empregadas de maneira pontual, controlada e subordinada, atuando unicamente como **suporte técnico operacional, estruturação e refinamento de código/marcação**, conforme as frentes discriminadas a seguir:

### 3.1. Estruturação e Engenharia de Documentação Web
- **Organização de Marcação Estática**: Apoio na formatação e padronização da sintaxe Markdown e atributos HTML utilizados pelo gerador estático MkDocs e pelo tema Material for MkDocs;
- **Estruturação de Matrizes e Tabelas**: Conversão de dados brutos e notas de campo previamente redigidas pela equipe em tabelas sintéticas formatadas em Markdown para melhor escaneabilidade;
- **Hierarquização de Pastas e Arquivos**: Auxílio na organização sistemática dos diretórios de documentação e na configuração de navegação no arquivo de manifesto (`mkdocs.yml`).

### 3.2. Suporte Técnico no Código de Scripts Operacionais
- **Lógica Utilitária de Manipulação de DOM**: Suporte na escrita e refatoração de rotinas em JavaScript do arquivo `auditoria.js` responsáveis pelo gerenciamento de estado local no navegador (`localStorage`), filtragem interativa de critérios e cálculo dinâmico das taxas de conformidade;
- **Rotina de Exportação e Impressão em PDF**: Implementação técnica de script utilitário para compilar os dados do checklist e gerar visualização formatada para impressão direta em formato PDF, substituindo a antiga exportação de texto em Markdown cru;
- **Ajustes de Acessibilidade no Código**: Revisão de atributos ARIA (`aria-expanded`, `aria-label`, `role="dialog"`) e gerenciamento de foco nos botões de acordeão do checklist.

### 3.3. Revisão Textual, Padronização e Gramática
- **Consistência Terminológica e Gramatical**: Apoio na identificação de desvios ortográficos, pontuação e concordância na documentação do guia e nos relatórios técnicos;
- **Alinhamento à Política de Linguagem Simples**: Verificação de coesão textual em conformidade com as diretrizes da Lei Federal nº 15.263/2025 e da norma ABNT NBR ISO 24495-1:2024, visando tornar o texto mais claro, objetivo e inclusivo, sem alteração de conteúdo ou mérito técnico.

---

## 4. Matriz de Transparência e Atribuição de Atividades

A tabela a seguir discrimina a participação humana e o escopo de suporte de ferramentas de IA em cada produto técnico gerado pelo grupo:

| Artefato / Atividade | Atuação Intelectual dos Membros do Grupo (100% Humana) | Escopo Restrito de Suporte de Ferramentas de IA |
| :--- | :--- | :--- |
| **Planejamento e Concepção Geral** | Definição dos objetivos da pesquisa, escolha do LinkedIn como sistema-alvo, formulação de hipóteses e cronograma. | **Nenhum**. Todas as decisões e escopos foram deliberados pelo grupo. |
| **Guia PrismaIHC (Metodologia e Conteúdo)** | Redação dos textos conceituais de Total Experience, Personas, Blueprints de Serviço, Heurísticas e normas ABNT/WCAG. | Suporte na estruturação da sintaxe Markdown, tabelas sintéticas e hierarquia de navegação do MkDocs. |
| **Checklist de Auditoria Web (69 Critérios)** | Seleção, redação técnica e adaptação dos 69 critérios normativos e correlação com perfis de usuários com deficiência. | Implementação técnica do script JavaScript (`auditoria.js`) para contagem de conformidade e rotina de PDF. |
| **Relatório de Auditoria de Acessibilidade** | Execução manual dos testes com leitores de tela (NVDA), teclado, DevTools e extensões (WAVE, CCA); redação dos achados e classificação de severidade. | Revisão ortográfica, estruturação de cabeçalhos e formatação tabular no processador de texto. |
| **Teste de Usabilidade com Usuários** | Elaboração do roteiro e TCLE, recrutamento dos participantes, facilitação das sessões, medição de tempos e registro qualitativo. | **Nenhum**. Condução, transcrições empíricas e coleta de dados 100% realizadas pelos pesquisadores. |
| **Análise dos Resultados do Teste** | Cálculo das métricas de eficácia e cálculo do escore SUS; diagnóstico dos pontos de fricção e proposição das recomendações. | Apoio na padronização da diagramação visual de gráficos e tabelas de dados brutos. |
| **Protótipo de Redesenho (PR-01)** | Concepção da solução de filtros semânticos, desenho de fluxos no Figma e validação de acessibilidade. | Auxílio na sintaxe HTML/CSS semântica do arquivo de protótipo navegável. |

---

## 5. Responsabilidade Acadêmica e Validação Humana

O Grupo 10 reitera que **todo e qualquer trecho de código, formatação ou ajuste estilístico sugerido por ferramentas de IA passou por rigorosa verificação manual, análise crítica e validação humana** antes de sua incorporação final aos arquivos do repositório.

Os integrantes da equipe assumem integral, exclusiva e irrestrita responsabilidade pelo mérito, veracidade factual, consistência técnica e conduta ética de todos os materiais submetidos à avaliação do docente e dos monitores da disciplina FGA0173 (Interação Humano-Computador, Turma 2026.2).
