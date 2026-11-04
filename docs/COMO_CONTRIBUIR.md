---
hide:
  - toc
---

# Padrão Editorial da Equipe — PrismaIHC (Grupo 10)

O **PrismaIHC** separa páginas puras de **`📖 Guia Metodológico`** (sem checkboxes) de páginas de **`📋 Checklist de Auditoria Web`** (critérios verificáveis na tela de qualquer site).

## Molde de Página de Checklist (`📋`)

````markdown
---
hide:
  - toc
---

<span class="prisma-pill-tag">📋 Checklist de Auditoria Web • Subtítulo</span>

# Título da Página

Parágrafo único, direto e enxuto (2 a 3 linhas) contextualizando o foco da página.

---

## Nome da Seção

- [ ] **COD-01: Pergunta curta, direta e verificável na interface?** [[1]](#ref-1)
    - `👤 Leitor de Tela` `⚖️ ABNT NBR 17225:2025` `🛠️ NVDA / VoiceOver`
    ??? info "Como auditar / Passo a passo"
        1. Passo objetivo de verificação.
        2. **✅ Critério de aprovação:** Condição clara para marcar `✓`.

---

## Referências Bibliográficas e Documentais

1. <a id="ref-1"></a> SOBRENOME, Nome. **Título da Obra ou Norma**. Ano. Disponível em: <https://link-oficial>.
````

!!! tip "Regras essenciais para os filtros e acordeões"
    1. **Apenas um `---` no topo:** O primeiro `---` após o parágrafo introdutório é convertido automaticamente no painel de progresso e dropdowns de filtro.
    2. **Etiquetas curtas padronizadas:** Use rótulos curtos nas badges (`👤`, `⚖️`, `🛠️`) para manter os menus suspensos limpos.
    3. **Recuo de 4 e 8 espaços:** Recue as etiquetas e o `??? info` com **4 espaços** e os passos internos com **8 espaços**.
