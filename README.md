# PrismaIHC — Guia de Concepção & Checklist de Auditoria em UX, IHC e Acessibilidade

<div align="center">
  <img src="docs/imagens/logo-prismaihc.svg" alt="Logo PrismaIHC: prisma geométrico sobre fundo escuro com símbolo de verificação" width="108" />
  <p><strong>Plataforma interativa de concepção centrada no humano e auditoria prática de sites em UX, IHC e Acessibilidade Digital</strong></p>
  <p>
    <a href="https://unb-ihc.github.io/IHC_2026.2_Grupo10/">🌐 Acessar o Guia Online (GitHub Pages)</a> •
    <a href="CONTRIBUTING.md">📋 Guia de Contribuição & Fluxo Git</a> •
    <a href="LICENSE.md">⚖️ Licença MIT</a>
  </p>
</div>

---

## Sobre o Projeto

O **PrismaIHC** é uma plataforma prática e interativa desenvolvida pelo **Grupo 10 (2026.2)** na disciplina de **Interação Humano-Computador (FGA0173)** da **Universidade de Brasília (UnB)**, ministrada pela Profa. **Rejane Maria da Costa Figueiredo**.

Evoluindo os guias *Pocket* construídos em semestres anteriores da disciplina (como *VerificAAA* e referências do *Grupo 10 / 2026.1*), o **PrismaIHC** organiza todo o ciclo de IHC em **duas frentes complementares** aplicáveis a qualquer sistema web:

1. **📖 Guias Metodológicos (8 páginas — Concepção, Serviço, Prototipação & Ferramentas):** Diretrizes visuais em quadros e matrizes para orientar pesquisa empática, personas, mapeamento *As-Is → To-Be*, handoff acessível no Figma e bancada de ferramentas (sem checkboxes que distorçam auditorias externas).
2. **📋 Checklists de Auditoria Web (8 páginas — 69 critérios práticos):** Critérios objetivos, diretos e verificáveis na interface de **qualquer site publicado**, cobrindo fluxos, omnicanalidade, reflexos de bastidores, acessibilidade cognitiva (**W3C COGA**), **Heurísticas de Nielsen**, **Design Visual de UI**, HTML semântico, **Linguagem Simples (Lei nº 15.263/2025)**, **WCAG 2.2**, **ABNT NBR 17225:2025** e **ABNT NBR 17060:2022**.

---

## Arquitetura das Abas no Site

| Aba Principal | Páginas e Escopo |
| :--- | :--- |
| **🏠 Início** | Painel Geral com Donuts SVG reativos (69 critérios), exportação global de relatório `.md`, atalhos para os guias e evolução normativa do PrismaIHC. |
| **🌐 Total X & Personas** | `📖 UX, CX, EX e TX` • `📖 Design Empático & Canvas` • `📖 Personas Inclusivas` (11 perfis dos filtros) • `📖 Personas Ecossistêmicas`. |
| **🗺️ Jornadas, Blueprint & Omnicanal** | `📋 Fluxos de Navegação` (`FLX-01`–`05`) • `📋 Omnicanalidade` (`OMN-01`–`05`) • `📋 Palco vs. Bastidores` (`BPR-01`–`06`) • `📖 Mapeamento As-Is → To-Be (Kalbach)`. |
| **🧠 Cognição, IHC, UI & Figma** | `📋 Acessibilidade Cognitiva & COGA` (`COG-01`–`11`) • `📋 Heurísticas de Nielsen` (`H01`–`H10`) • `📋 Design Visual de UI` (`UI-01`–`05`) • `📖 Prototipação & Handoff no Figma`. |
| **💻 Web, NBR 17225 & WCAG 2.2** | `📋 Código Semântico, Mídia & Conteúdo` (`WEB-01`–`13`) • `📋 Normas NBR 17225, 17060 & WCAG 2.2` (`NBR-01`–`14`). |
| **🛠️ Ferramentas** | `📖 Qual Ferramenta Usar (Comparativo)` • `📖 Testes Práticos & Passo a Passo` (11 ferramentas dos filtros + pré-código no Figma). |

---

## Principais Funcionalidades Interativas

- **Painel Geral com Donuts SVG e Cálculo Justo (`N/A`):** Progresso global e por eixo calculado automaticamente no navegador (`localStorage`). Critérios marcados como **`N/A`** (ex.: sites sem vídeo ou sem área logada) saem do denominador para não penalizar o índice de conformidade.
- **4 Filtros em Dropdown Unificados:** Seletores suspensos padronizados em todos os checklists para cruzar **👤 Persona (11 perfis)**, **⚖️ Norma / Base (10 referenciais)**, **🛠️ Ferramenta (11 métodos/extensões)** e **📌 Status**, com opção de reexibir itens ocultos na própria seção.
- **Critérios em Acordeão Expansíveis pelo Título:** Interface limpa de baixa carga visual — cada item exibe código, pergunta e botões `✓` / `✕` / `N/A`, revelando o passo a passo de inspeção, tags e fontes bibliográficas ao clicar no título.
- **Severidade de Nielsen (1–4) & Exportação de Laudo (`.md`):** Ao reprovar um critério (`✕`), abre-se a classificação de **Severidade (1 — Cosmético a 4 — Catastrófico)** e o campo de local/evidência para gerar automaticamente o relatório técnico fundamentado em Markdown.

---

## Como Executar Localmente

```bash
# 1. Criar e ativar um ambiente virtual (opcional, mas recomendado)
python -m venv .venv
# Windows (PowerShell):
.\.venv\Scripts\Activate.ps1
# Linux / WSL / macOS:
source .venv/bin/activate

# 2. Instalar dependências do MkDocs Material
pip install -r requirements.txt

# 3. Iniciar servidor local com recarregamento automático
mkdocs serve
```

Acesse `http://127.0.0.1:8000/IHC_2026.2_Grupo10/` no navegador. Para diretrizes editoriais, moldes `.md` e fluxo Git da equipe, consulte o [CONTRIBUTING.md](CONTRIBUTING.md).

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
  <tr>
    <td align="center">
      <a href="https://github.com/EduOValadares">
        <img style="border-radius: 50%;" src="https://github.com/EduOValadares.png" width="95px;" alt="Foto de Eduardo Valadares"/><br />
        <sub><b>Eduardo Valadares</b></sub>
      </a><br />
      <sub>@EduOValadares</sub>
    </td>
    <td align="center">
      <a href="https://github.com/Guilhermesouza21">
        <img style="border-radius: 50%;" src="https://github.com/Guilhermesouza21.png" width="95px;" alt="Foto de Guilherme Souza"/><br />
        <sub><b>Guilherme Souza</b></sub>
      </a><br />
      <sub>@Guilhermesouza21</sub>
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
