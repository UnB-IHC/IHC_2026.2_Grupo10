#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script de automação para criação da Sprint 08 e suas Issues no GitHub.
Repositório: UnB-IHC/IHC_2026.2_Grupo10
Responsável: @CeciliaCunha
"""

import os
import sys
import json
import argparse
import urllib.request
import urllib.error
from getpass import getpass

# Suporte a UTF-8 no terminal Windows
if sys.stdout.encoding and sys.stdout.encoding.lower() != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

REPO_OWNER = "UnB-IHC"
REPO_NAME = "IHC_2026.2_Grupo10"
ASSIGNEE = "CeciliaCunha"
DUE_DATE = "2026-11-03T00:00:00Z"

MILESTONE_TITLE = "Sprint 08 - Avaliação Heurística de Usabilidade (10 Heurísticas de Nielsen)"
MILESTONE_DESCRIPTION = (
    "Criação do guia teórico, metodologia de inspeção e checklist auditável das "
    "10 Heurísticas de Usabilidade de Jakob Nielsen com escala de severidade para o PrismaIHC."
)

ISSUES_DATA = [
    {
        "title": "Criar Guia e Checklist: Avaliação Heurística de Nielsen (H1 a H5 & Protocolo de Inspeção)",
        "labels": ["conteudo-checklist", "eixo: cognicao - ui & figma"],
        "body": """## 📄 Arquivo de Trabalho
Edite **exclusivamente** o arquivo em:
- `docs/03-cognicao-ui-figma/heuristicas-nielsen.md`

## 🌿 Fluxo Git desta Sprint
Trabalhe na branch única da sua Sprint (criada a partir da `develop`):
```bash
git fetch origin
git checkout develop
git pull origin develop
git checkout -b sprint/08-heuristicas-nielsen
```
*(Consulte o arquivo `CONTRIBUTING.md` na raiz do repositório para ver o passo a passo completo de commits, parecer obrigatório nos comentários desta Issue e abertura do Pull Request para a `develop` até **03/11/2026**.)*

---

## 🎯 O que Fazer
1. Introduzir o conceito de **Avaliação Heurística de Usabilidade** segundo Jakob Nielsen (1994) no contexto de IHC e sua relação com o design centrado no usuário.
2. Explicar o **Protocolo de Inspeção Heurística** (fase exploratória, condução individual, consolidação em grupo e atribuição de severidade).
3. Elaborar os critérios práticos de verificação das **Heurísticas H1 a H5**:
   - **H1:** Visibilidade do status do sistema (*feedback* imediato, estados de carregamento, confirmações).
   - **H2:** Correspondência entre o sistema e o mundo real (metáforas familiares, linguagem do usuário).
   - **H3:** Controle e liberdade do usuário (desfazer/refazer, saídas de emergência claramente marcadas).
   - **H4:** Consistência e padrões (vocabulário uniforme, convenções de plataforma).
   - **H5:** Prevenção de erros (eliminação de condições propensas a falha, diálogos de confirmação antes de ações destrutivas).

---

## 🧩 Como Fazer (Molde Obrigatório de Checklist, Smart Badges e Referências)
Mantenha a estrutura padronizada para alimentar os Donuts SVG e filtros reativos do PrismaIHC:

````markdown
# Título da Página

Escreva aqui 1 a 2 parágrafos introduzindo o conceito visto em aula e sua importância prática na auditoria de UX, IHC e Acessibilidade.

---

## Nome da Subcategoria (Ex: H1 — Visibilidade do Status do Sistema)

- [ ] **Escreva aqui sua pergunta ou critério de verificação em formato claro e auditável** [[1]](#ref-1)
    - `👤 Persona: Perfil impactado` `⚖️ Norma/Base: Heurísticas de Nielsen (H1)` `🛠️ Ferramenta: Método de Inspeção Heurística`
    ??? info "Como auditar / Passo a passo"
        1. Descreva como inspecionar ou testar este item na prática.
        2. Indique o resultado esperado para marcar o critério como atendido.

---

## Referências Bibliográficas e Documentais

1. <a id="ref-1"></a> NIELSEN, Jakob. **10 Usability Heuristics for User Interface Design**. Nielsen Norman Group, 1994.
````

---

## 📚 Bibliografia Base Recomendada
- NIELSEN, Jakob. *10 Usability Heuristics for User Interface Design*. Nielsen Norman Group, 1994.
- NIELSEN, Jakob; MACK, Robert L. *Usability Inspection Methods*. John Wiley & Sons, 1994.
- BARBOSA, Simone D. J.; SILVA, Bruno S. *Interação Humano-Computador*. Rio de Janeiro: Elsevier, 2010.

---

## ✅ Critérios de Aceitação (Definition of Done)
- [ ] Contextualização teórica clara de Avaliação Heurística conectada ao conteúdo de IHC.
- [ ] Protocolo de inspeção detalhado passo a passo.
- [ ] Checklists das heurísticas H1 a H5 elaborados com `👤 Persona`, `⚖️ Norma/Base` e `🛠️ Ferramenta` em todos os itens.
- [ ] Bloco recolhido `??? info "Como auditar / Passo a passo"` preenchido em todos os itens.
- [ ] Seção `## Referências Bibliográficas e Documentais` numerada com links funcionais.
- [ ] Comentário de **Parecer de Conclusão** postado nesta Issue e PR aberto para a `develop`.
"""
    },
    {
        "title": "Criar Guia e Checklist: Avaliação Heurística de Nielsen (H6 a H10 & Matriz de Severidade)",
        "labels": ["conteudo-checklist", "eixo: cognicao - ui & figma"],
        "body": """## 📄 Arquivo de Trabalho
Edite **exclusivamente** o arquivo em:
- `docs/03-cognicao-ui-figma/heuristicas-nielsen.md`

## 🌿 Fluxo Git desta Sprint
Trabalhe na branch única da sua Sprint (criada a partir da `develop`):
```bash
git fetch origin
git checkout develop
git pull origin develop
git checkout -b sprint/08-heuristicas-nielsen
```
*(Consulte o arquivo `CONTRIBUTING.md` na raiz do repositório para ver o passo a passo completo de commits, parecer obrigatório nos comentários desta Issue e abertura do Pull Request para a `develop` até **03/11/2026**.)*

---

## 🎯 O que Fazer
1. Elaborar os critérios práticos de verificação das **Heurísticas H6 a H10**:
   - **H6:** Reconhecimento em vez de memorização (elementos visíveis, pistas contextuais, menus acessíveis).
   - **H7:** Flexibilidade e eficiência de uso (atalhos de teclado, aceleradores para usuários avançados).
   - **H8:** Estética e design minimalista (hierarquia visual clara, eliminação de ruído informacional).
   - **H9:** Ajudar os usuários a reconhecer, diagnosticar e recuperar-se de erros (mensagens claras em linguagem simples, sem códigos obscuros, indicando solução).
   - **H10:** Ajuda e documentação (documentação contextual, busca eficiente e passos concisos).
2. Estruturar a **Matriz e Escala de Severidade de Nielsen (0 a 4)**:
   - Grau 0: Não é considerado problema de usabilidade.
   - Grau 1: Problema cosmético (não precisa ser corrigido a menos que haja tempo extra).
   - Grau 2: Problema pequeno (baixa prioridade de correção).
   - Grau 3: Problema grave (alta prioridade de correção, prejudica a tarefa).
   - Grau 4: Catástrofe de usabilidade (imperativo corrigir antes do lançamento).
3. Fornecer um modelo de relatório de achados heurísticos consolidado para auditorias de IHC.

---

## 🧩 Como Fazer (Molde Obrigatório de Checklist, Smart Badges e Referências)
Mantenha a estrutura padronizada para alimentar os Donuts SVG e filtros reativos do PrismaIHC:

````markdown
## Nome da Subcategoria (Ex: H6 — Reconhecimento em vez de Memorização)

- [ ] **Escreva aqui sua pergunta ou critério de verificação em formato claro e auditável** [[1]](#ref-1)
    - `👤 Persona: Perfil impactado` `⚖️ Norma/Base: Heurísticas de Nielsen (H6)` `🛠️ Ferramenta: Método de Inspeção Heurística`
    ??? info "Como auditar / Passo a passo"
        1. Descreva como inspecionar ou testar este item na prática.
        2. Indique o resultado esperado para marcar o critério como atendido.
````

---

## 📚 Bibliografia Base Recomendada
- NIELSEN, Jakob. *Severity Ratings for Usability Problems*. Nielsen Norman Group, 1995.
- NIELSEN, Jakob. *10 Usability Heuristics for User Interface Design*. Nielsen Norman Group, 1994.
- BARBOSA, Simone D. J.; SILVA, Bruno S. *Interação Humano-Computador*. Rio de Janeiro: Elsevier, 2010.

---

## ✅ Critérios de Aceitação (Definition of Done)
- [ ] Checklists das heurísticas H6 a H10 elaborados com `👤 Persona`, `⚖️ Norma/Base` e `🛠️ Ferramenta` em todos os itens.
- [ ] Escala de Severidade de Nielsen (0 a 4) documentada com orientações para priorização de backlog.
- [ ] Bloco recolhido `??? info "Como auditar / Passo a passo"` preenchido em todos os itens.
- [ ] Seção `## Referências Bibliográficas e Documentais` atualizada e numerada.
- [ ] Comentário de **Parecer de Conclusão** postado nesta Issue e PR aberto para a `develop`.
"""
    }
]

def make_request(url, data=None, token=None, method=None):
    headers = {
        "User-Agent": "PrismaIHC-SprintCreator",
        "Accept": "application/vnd.github+json",
    }
    if token:
        headers["Authorization"] = f"Bearer {token}"
    
    encoded_data = json.dumps(data).encode("utf-8") if data is not None else None
    req = urllib.request.Request(url, data=encoded_data, headers=headers, method=method)
    try:
        with urllib.request.urlopen(req) as response:
            return json.loads(response.read().decode("utf-8"))
    except urllib.error.HTTPError as e:
        error_body = e.read().decode("utf-8")
        print(f"❌ Erro HTTP {e.code} ao acessar {url}:")
        print(error_body)
        sys.exit(1)

def get_or_create_milestone(token, dry_run=False):
    print("🔍 Verificando se a Milestone já existe...")
    url = f"https://api.github.com/repos/{REPO_OWNER}/{REPO_NAME}/milestones?state=all"
    milestones = make_request(url, token=token)
    for m in milestones:
        if m["title"].strip() == MILESTONE_TITLE.strip():
            print(f"✔️ Milestone existente encontrada: #{m['number']} - {m['title']}")
            return m["number"]

    print(f"➕ Criando nova Milestone: '{MILESTONE_TITLE}'...")
    if dry_run:
        print("  [DRY-RUN] Simulação de criação de Milestone.")
        return 999

    create_url = f"https://api.github.com/repos/{REPO_OWNER}/{REPO_NAME}/milestones"
    payload = {
        "title": MILESTONE_TITLE,
        "description": MILESTONE_DESCRIPTION,
        "due_on": DUE_DATE,
        "state": "open"
    }
    created = make_request(create_url, data=payload, token=token, method="POST")
    print(f"✅ Milestone #{created['number']} criada com sucesso!")
    return created["number"]

def create_issue(token, issue_data, milestone_number, dry_run=False):
    print(f"\n➕ Criando Issue: '{issue_data['title']}'...")
    if dry_run:
        print(f"  [DRY-RUN] Atribuído a: {ASSIGNEE}")
        print(f"  [DRY-RUN] Milestone: #{milestone_number}")
        print(f"  [DRY-RUN] Labels: {issue_data['labels']}")
        return {"number": 999, "html_url": "https://github.com/dry-run"}

    create_url = f"https://api.github.com/repos/{REPO_OWNER}/{REPO_NAME}/issues"
    payload = {
        "title": issue_data["title"],
        "body": issue_data["body"],
        "assignees": [ASSIGNEE],
        "milestone": milestone_number,
        "labels": issue_data["labels"]
    }
    created = make_request(create_url, data=payload, token=token, method="POST")
    print(f"✅ Issue #{created['number']} criada com sucesso!")
    print(f"   🔗 Link: {created['html_url']}")
    return created

def main():
    parser = argparse.ArgumentParser(description="Criar Sprint 08 e Issues de Heurísticas de Nielsen.")
    parser.add_argument("--token", help="GitHub Personal Access Token (classic ou fine-grained com permissão 'issues:write')")
    parser.add_argument("--dry-run", action="store_true", help="Simula a execução sem chamar a API de gravação")
    args = parser.parse_args()

    token = args.token or os.environ.get("GITHUB_TOKEN")
    if not token and not args.dry_run:
        print("🔑 Insira seu Personal Access Token do GitHub (necessita permissão de 'issues'):")
        token = getpass("GitHub Token (oculto): ").strip()

    if not token and not args.dry_run:
        print("❌ Nenhum token fornecido. Abortando.")
        sys.exit(1)

    print(f"\n🚀 Iniciando automação para {REPO_OWNER}/{REPO_NAME}...")
    milestone_num = get_or_create_milestone(token, dry_run=args.dry_run)

    for issue_info in ISSUES_DATA:
        create_issue(token, issue_info, milestone_num, dry_run=args.dry_run)

    print("\n🎉 Todas as operações concluídas com sucesso!")
    print(f"Responsável: @{ASSIGNEE}")
    print("\nPróximos passos recomendados no Git:")
    print("  1. git checkout develop")
    print("  2. git pull origin develop")
    print("  3. git checkout -b sprint/08-heuristicas-nielsen")
    print("  4. Criar e editar docs/03-cognicao-ui-figma/heuristicas-nielsen.md")

if __name__ == "__main__":
    main()
