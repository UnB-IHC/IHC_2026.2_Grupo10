# PrismaIHC — Guia de Auditoria em UX, IHC & Acessibilidade

<div align="center">
  <img src="docs/imagens/logo-prismaihc.svg" alt="Logo PrismaIHC: prisma geométrico sobre fundo escuro com símbolo de verificação" width="108" />
  <p><strong>Guia interativo de auditoria em Experiência Total, Interação Humano-Computador e Acessibilidade Digital</strong></p>
  <p>
    <a href="https://unb-ihc.github.io/IHC_2026.2_Grupo10/">🌐 Acessar o Guia Online (GitHub Pages)</a> •
    <a href="CONTRIBUTING.md">📋 Guia de Contribuição & Fluxo Git</a> •
    <a href="LICENSE.md">⚖️ Licença MIT</a>
  </p>
</div>

---

## Sobre o Projeto

O **PrismaIHC** é um guia prático e interativo desenvolvido pelo **Grupo 10 (2026.2)** na disciplina de **Interação Humano-Computador (FGA0173)** da **Universidade de Brasília (UnB)**, ministrada pela docente **Rejane Maria da Costa Figueiredo**.

A proposta evolui e amplia o conceito de *Pockets/Guias de Acessibilidade* construídos em semestres anteriores da disciplina (como o template base *VerificAAA* e inspirações arquiteturais do *Grupo 10 / 2026.1*), integrando toda a jornada de projeto de IHC com conformidade técnica e normativa atualizada:

- **🌐 Total Experience & Personas:** Articulação entre CX, UX, EX e TX (*Total Experience*), Design Empático, Canvas de UX, criação metodológica de Personas Inclusivas e Personas Ecossistêmicas.
- **🗺️ Jornadas, Blueprints & Omnicanalidade:** Alinhamento entre *User Journey* e *User Flows*, *Service Blueprints* (modelos de Morgan & Miller e aplicações situacionais de Jim Kalbach) e continuidade omnicanal.
- **🧠 Cognição, Usabilidade, UI & Figma:** Acessibilidade Cognitiva e Neurodiversidade (TDAH, TEA, Dislexia), Heurísticas de Usabilidade, Design de Interface (UI) e Prototipação Inclusiva no Figma.
- **💻 Web, Conteúdo & Normas Técnicas:** HTML5 semântico, mídia acessível, Linguagem Simples (*Gov.br* / *ABNT NBR ISO 24495-1*), **WCAG 2.2**, **ABNT NBR 17225:2025** (Web) e **ABNT NBR 17060:2022** (Mobile).
- **🛠️ Guia Prático de Ferramentas:** Comparativo de adequação, comentários críticos de testes reais e tutoriais passo a passo.

---

## Principais Funcionalidades do Guia

- **Painel Geral com Donuts SVG Reativos:** Acompanhamento visual automático da conformidade geral e por eixo temático na página inicial, salvo localmente no navegador (`localStorage`).
- **Checklists Auditáveis com *Smart Badges*:** Filtros clicáveis em cada critério por `👤 Persona`, `⚖️ Norma/Base` e `🛠️ Ferramenta`.
- **Gavetas *"Como auditar / Passo a passo"*:** Instruções diretas de inspeção prática e exportação de relatório consolidado em Markdown (`.md`).

---

## Como Executar Localmente

```bash
# 1. Criar e ativar um ambiente virtual (opcional, mas recomendado)
python -m venv .venv
# Windows (PowerShell):
.\.venv\Scripts\Activate.ps1

# 2. Instalar dependências do MkDocs Material
pip install -r requirements.txt

# 3. Iniciar servidor local com recarregamento automático
mkdocs serve
```

Acesse `http://127.0.0.1:8000` no navegador. Para contribuir com conteúdo em sua Sprint Temática, consulte o [CONTRIBUTING.md](CONTRIBUTING.md).

---

## Contribuidores — Grupo 10 (2026.2)

<div align="center">
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/augustogmedeiros">
        <img style="border-radius: 50%;" src="https://github.com/augustogmedeiros.png" width="95px;" alt="Foto de Augusto"/><br />
        <sub><b>Augusto</b></sub>
      </a><br />
      <sub>@augustogmedeiros</sub>
    </td>
    <td align="center">
      <a href="https://github.com/CeciliaCunha">
        <img style="border-radius: 50%;" src="https://github.com/CeciliaCunha.png" width="95px;" alt="Foto de Cecília Costa"/><br />
        <sub><b>Cecília Costa</b></sub>
      </a><br />
      <sub>@CeciliaCunha</sub>
    </td>
    <td align="center">
      <a href="https://github.com/Dannyeclisson">
        <img style="border-radius: 50%;" src="https://github.com/Dannyeclisson.png" width="95px;" alt="Foto de Dannyeclisson"/><br />
        <sub><b>Dannyeclisson</b></sub>
      </a><br />
      <sub>@Dannyeclisson</sub>
    </td>
    <td align="center">
      <a href="https://github.com/dantescarpati">
        <img style="border-radius: 50%;" src="https://github.com/dantescarpati.png" width="95px;" alt="Foto de Dante Scarpati"/><br />
        <sub><b>Dante Scarpati</b></sub>
      </a><br />
      <sub>@dantescarpati</sub>
    </td>
  </tr>
</table>
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/EduOValadares">
        <img style="border-radius: 50%;" src="https://github.com/EduOValadares.png" width="95px;" alt="Foto de Eduardo Valadares"/><br />
        <sub><b>Eduardo Valadares</b></sub>
      </a><br />
      <sub>@EduOValadares</sub>
    </td>
    <td align="center">
      <a href="https://github.com/gustavolima973">
        <img style="border-radius: 50%;" src="https://github.com/gustavolima973.png" width="95px;" alt="Foto de Gustavo Lima"/><br />
        <sub><b>Gustavo Lima</b></sub>
      </a><br />
      <sub>@gustavolima973</sub>
    </td>
    <td align="center">
      <a href="https://github.com/marispmorais">
        <img style="border-radius: 50%;" src="https://github.com/marispmorais.png" width="95px;" alt="Foto de Mariana"/><br />
        <sub><b>Mariana</b></sub>
      </a><br />
      <sub>@marispmorais</sub>
    </td>
  </tr>
</table>
</div>

---

## Créditos e Licença

Projeto distribuído sob a [Licença MIT](LICENSE.md). Construído a partir da evolução colaborativa dos projetos da disciplina de IHC/UnB (incluindo o repositório base *VerificAAA* — Vitor Feijó, Carlos Eduardo, Harleny Angéllica, Erick Santos e Maykon Júnio — e referências estruturais do *Grupo 10 / 2026.1*).
