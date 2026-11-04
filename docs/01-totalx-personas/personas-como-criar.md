---
hide:
  - toc
---

<span class="prisma-pill-tag">📖 Guia Metodológico • Modelagem de Perfis</span>

# Personas Inclusivas: Como Criar e Perfis de Referência

Personas inclusivas sintetizam comportamentos, objetivos, contextos e tecnologias assistivas a partir de pesquisa empírica com usuários reais, evitando *proto-personas* baseadas em suposições ou estereótipos capacitistas [[1]](#ref-1) [[2]](#ref-2) [[3]](#ref-3). Além das diretrizes de criação, esta página apresenta os **perfis funcionais de referência** usados nos filtros dos checklists do PrismaIHC.

## Regras Essenciais de Construção e Uso

<div class="prisma-guide-grid prisma-guide-grid--3" markdown>

<div class="prisma-guide-card" markdown>
<h3 class="prisma-card-heading--teal">1 • Dados Reais &amp; Anti-Viés</h3>
<span class="prisma-card-subtitle">Sem achismos nem capacitismo</span>

* Fundamentar dores e objetivos em entrevistas, questionários e matriz CSD com rastreabilidade clara aos dados coletados [[3]](#ref-3).
* Redigir perfis sem vitimização (*"sofre de..."*) nem estereótipos etaristas ou socioeconômicos, focando nas barreiras da interface e nas adaptações técnicas [[2]](#ref-2).
</div>

<div class="prisma-guide-card" markdown>
<h3 class="prisma-card-heading--purple">2 • Diversidade Humana</h3>
<span class="prisma-card-subtitle">Representatividade funcional</span>

* Incluir explicitamente perfis visuais, motores, auditivos/fala, neurodivergentes, idosos e pessoas com diferentes níveis de letramento digital e qualidade de conexão [[1]](#ref-1) [[2]](#ref-2).
* Documentar quais tecnologias assistivas cada perfil utiliza na prática (NVDA, TalkBack/VoiceOver, zoom 200%+, teclado, controle por voz).
</div>

<div class="prisma-guide-card" markdown>
<h3 class="prisma-card-heading--amber">3 • Validação Ativa</h3>
<span class="prisma-card-subtitle">Âncora nas decisões de UI</span>

* Usar as personas nominalmente em *Walkthroughs Cognitivos*, revisões de UX Writing, protótipos no Figma e relatórios de auditoria para justificar alterações de fluxo e interface [[3]](#ref-3).
</div>

</div>

## Catálogo dos 11 Perfis Funcionais (Filtros `👤 Persona` do PrismaIHC)

Todos os checklists do PrismaIHC exibem os mesmos **11 perfis funcionais** no seletor **👤 Persona**, permitindo isolar em qualquer aba os critérios que afetam cada grupo (alinhado ao Anexo B da ABNT NBR 17225:2025 e ao Guia Gov.br [[2]](#ref-2)):

| Perfil nos Filtros | Tecnologias Assistivas / Contexto de Uso | Principais Barreiras a Eliminar no Site |
| :--- | :--- | :--- |
| **`👤 Leitor de Tela`** | NVDA, JAWS, VoiceOver, TalkBack e linha braille (cegueira ou baixa visão severa). | Imagens sem `alt`, botões `<div>` sem nome/papel, falta de cabeçalhos `H1–H6` ou marcos e mudanças de status mudas. |
| **`👤 Baixa Visão` / `👤 Daltonismo`** | Zoom de 200% a 400%, fontes ampliadas do sistema, alto contraste e filtros de cor. | Baixo contraste (< 4,5:1 ou < 3:1), rolagem horizontal no zoom, textos cortados e erros/gráficos baseados só em cor. |
| **`👤 Surdez / Libras`** | Português escrito como segunda língua (L2), legendas descritivas, transcrição e Libras. | Vídeos/áudios sem legenda sincronizada ou transcrição, suporte exclusivo por telefone e textos burocráticos complexos. |
| **`👤 Motora / Teclado` / `👤 Controle por Voz`** | Navegação exclusiva por `Tab`/`Enter`/`Esc`, acionadores, teclados adaptados e comando de voz. | Armadilhas de teclado, foco invisível ou encoberto, alvos minúsculos (< 24×24 px), gestos de arrastar sem alternativa e rótulos ocultos divergentes. |
| **`👤 Cognitiva / TDAH` / `👤 TEA / Autismo` / `👤 Dislexia`** | Necessidade de previsibilidade, baixo ruído visual, apoio à memória e leitura escaneável. | Animações automáticas sem pausa, ícones ambíguos sem texto, perda de dados em formulários, bloqueio ao colar senha e paredes de texto. |
| **`👤 Idoso / Baixo Letramento`** | Presbiopia, menor precisão de toque, conexão limitada ou menor familiaridade digital. | Jargões técnicos/inglês desnecessário, fluxos sem botão claro de voltar/cancelar, falta de comprovante e sessões que expiram sem aviso. |
| **`👤 Epilepsia / Vestibular`** | Fotossensibilidade e distúrbios vestibulares/labirínticos sensíveis a flashes e movimento (`prefers-reduced-motion`). | Flashes > 3×/s, carrosséis/vídeos em movimento contínuo sem botão de pausa e efeitos de paralaxe forçados na rolagem. |

---

## Referências Bibliográficas e Documentais

1. <a id="ref-1"></a> UNIVERSIDADE DE BRASÍLIA (UnB). Notas de Aula FGA0173 — Interação Humano-Computador: **Personas e Como Criá-las**. 2026.2.
2. <a id="ref-2"></a> DINIZ, V. et al. **Guia de Boas Práticas para Acessibilidade Digital**. Brasília: Governo Digital (Gov.br), 2023. Disponível em: <https://www.gov.br/governodigital>.
3. <a id="ref-3"></a> BARBOSA, S. D. J.; SILVA, B. S.; SILVEIRA, M. S.; GASPARINI, I.; DARIN, T.; BARBOSA, G. D. J. **Interação Humano-Computador e Experiência do Usuário**. Autopublicação, 2021.
