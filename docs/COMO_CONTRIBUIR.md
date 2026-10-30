# Como Escrever os Checklists — Molde da Equipe (Grupo 10)

Você tem **total autonomia** para criar as seções e escolher as perguntas do checklist do seu tema com base nas aulas e na bibliografia.

Para que o **PrismaIHC** gere sozinho os **Donuts SVG**, as **Smart Badges filtráveis** e os botões de ação, basta usar este molde em Markdown puro no seu arquivo `.md`:

````markdown
# Título da Página

Escreva aqui 1 a 2 parágrafos contextualizando o tema estudado em aula e seu papel na auditoria de UX, IHC e Acessibilidade.

---

## Nome da Subcategoria 1

- [ ] **Escreva aqui a sua pergunta ou critério de verificação de forma direta e auditável** [[1]](#ref-1)
    - `👤 Persona: Perfil impactado` `⚖️ Norma/Base: Lei, NBR, WCAG ou Autor` `🛠️ Ferramenta: Ferramenta ou método`
    ??? info "Como auditar / Passo a passo"
        1. Explique como testar ou verificar este critério na prática.
        2. Indique o resultado esperado para marcar o item como atendido.

---

## Referências Bibliográficas e Documentais

1. <a id="ref-1"></a> SOBRENOME, Nome. **Título da Obra ou Norma**. Ano. Disponível em: <https://link-oficial>.
````

!!! tip "Regras importantes de formatação"
    1. **Prefixos das Smart Badges:** Use sempre `` `👤 ...` `` para Personas, `` `⚖️ ...` `` para Normas/Autores e `` `🛠️ ...` `` para Ferramentas/Artefatos.
    2. **Recuo de 4 espaços:** A linha das etiquetas (`    - ...`) e o bloco `    ??? info "Como auditar / Passo a passo"` precisam ter **4 espaços** antes deles, e o texto interno do passo a passo precisa ter **8 espaços**.
    3. **Referências no final:** Numere todas as fontes na seção `## Referências Bibliográficas e Documentais` usando `<a id="ref-1"></a>` para que o link `[[1]](#ref-1)` funcione.
