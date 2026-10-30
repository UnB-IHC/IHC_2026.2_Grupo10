# Guia de Contribuição e Fluxo Git — PrismaIHC (Grupo 10 • IHC 2026.2)

Este documento define o fluxo de trabalho oficial no GitHub e o molde de escrita em Markdown para todos os integrantes do **Grupo 10**.

---

## 1. Estratégia de Branches

Nosso repositório utiliza **3 níveis de branches**:
1. **`main`**: Versão final estável publicada no GitHub Pages (atualizada a partir da `develop`).
2. **`develop`**: Branch central de integração onde **todas as Sprints submetem seus Pull Requests (PRs)**.
3. **`sprint/XX-tema`**: Branch exclusiva de cada Sprint Temática (criada sempre **a partir da `develop`**). Você desenvolverá todas as Issues da sua Sprint gradualmente nessa mesma branch e abrirá **1 Pull Request** para a `develop`.

### Branches Oficiais por Sprint

| Sprint (Milestone) | Nome Exato da Branch | Pasta de Trabalho |
| :--- | :--- | :--- |
| **Sprint 00** — Fundação & Repositório | `sprint/00-fundacao-github-pages` | Raiz + estrutura base `docs/` |
| **Sprint 01** — Total X & Design Empático | `sprint/01-totalx-design-empatico` | `docs/01-totalx-personas/` |
| **Sprint 02** — Personas & Ecossistêmicas | `sprint/02-personas-ecossistemicas` | `docs/01-totalx-personas/` |
| **Sprint 03** — Jornadas & Omnicanalidade | `sprint/03-jornadas-omnicanalidade` | `docs/02-jornadas-blueprints/` |
| **Sprint 04** — Service Blueprints | `sprint/04-service-blueprints` | `docs/02-jornadas-blueprints/` |
| **Sprint 05** — Cognição, UI & Figma | `sprint/05-cognicao-ui-figma` | `docs/03-cognicao-ui-figma/` |
| **Sprint 06** — Web, Conteúdo & Normas | `sprint/06-web-conteudo-normas` | `docs/04-web-normas/` |
| **Sprint 07** — Ferramentas Avaliadas | `sprint/07-ferramentas-avaliadas` | `docs/05-ferramentas/` |

> **Regra de ouro:** Edite apenas os arquivos `.md` atribuídos à sua Sprint. Não altere `mkdocs.yml`, CSS ou JS sem alinhar antes com a coordenação para evitar conflitos de merge.

---

## 2. Passo a Passo no Terminal

### Passo 1 — Sincronizar com a `develop`
```bash
git clone https://github.com/UnB-IHC/IHC_2026.2_Grupo10.git
cd IHC_2026.2_Grupo10

git fetch origin
git checkout develop
git pull origin develop
```

### Passo 2 — Criar e publicar a branch da sua Sprint
```bash
git checkout -b sprint/XX-nome-da-sprint
git push -u origin sprint/XX-nome-da-sprint
```

### Passo 3 — Trabalhar gradualmente citando as Issues nos commits
```bash
git status
git add docs/pasta/seu-arquivo.md
git commit -m "docs(#NUMERO): adiciona guia e checklist do tema X"
git push
```

---

## 3. Molde Padrão dos Documentos `.md` (Checklists, Smart Badges e Referências)

Você tem **liberdade total** para elaborar as subseções e escolher as perguntas do checklist do seu tema com base nas aulas e na bibliografia. Para que o motor do site gere automaticamente os **Donuts SVG**, os **filtros de Smart Badges** e os **botões interativos**, siga exatamente esta estrutura em Markdown:

````markdown
# Título da Página

Escreva aqui 1 a 2 parágrafos introduzindo o conceito visto em aula e sua importância prática na auditoria de UX, IHC e Acessibilidade.

---

## Nome da Subcategoria 1

- [ ] **Escreva aqui sua pergunta ou critério de verificação de forma clara e objetiva** [[1]](#ref-1)
    - `👤 Persona: Perfil impactado` `⚖️ Norma/Base: NBR, WCAG, Lei ou Autor` `🛠️ Ferramenta: Ferramenta ou método`
    ??? info "Como auditar / Passo a passo"
        1. Descreva como inspecionar ou testar este item na prática.
        2. Indique o resultado esperado para aprovar o critério.

---

## Referências Bibliográficas e Documentais

1. <a id="ref-1"></a> SOBRENOME, Nome. **Título da Obra ou Norma**. Ano. Disponível em: <https://link-oficial>.
````

> **Atenção aos 4 espaços de recuo:** A sub-linha das etiquetas (``    - `👤 ...` ``) e a gaveta `    ??? info "Como auditar / Passo a passo"` devem ter **4 espaços** antes delas (e o conteúdo interno da gaveta deve ter **8 espaços**).

---

## 4. Parecer nas Issues e Abertura do Pull Request

1. **Comente o Parecer dentro de cada Issue sua:** Antes de encerrar a entrega, abra cada Issue sua no GitHub e adicione um comentário resumindo o arquivo entregue, a quantidade de itens criados, os subtemas abordados e as fontes utilizadas.
2. **Abra o Pull Request apontando para a `develop`:**
   - Selecione `base: develop` ⬅️ `compare: sprint/XX-sua-sprint`.
   - O template do PR já virá preenchido automaticamente: preencha `Closes #X` com os números das suas Issues, adicione seu parecer geral e marque a **Milestone**, as **Labels** e você em **Assignees**.
