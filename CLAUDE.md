# CLAUDE.md — Projeto Aryman Reis

Instruções permanentes para o Claude Code neste projeto. Leia este arquivo antes de qualquer tarefa.

---

## CONTEXTO DO NEGÓCIO

Site institucional + landing pages de vendas para **Aryman Reis** — educador digital que ensina líderes operacionais a usar dados para se tornarem líderes estratégicos.

Posicionamento: **"Transformo líderes operacionais em líderes estratégicos."**

Produto principal: curso **"Você sabe quem realmente produz na sua equipe?"** — ensina o aluno a construir um dashboard operacional no Excel e usar dados para liderar.

Avatar principal: líder de equipe (qualquer setor — vendas, operações, RH, atendimento, financeiro) que quer ser promovido e tomar decisões com dados, não achismo.

---

## ESTRUTURA DO PROJETO

```
/
├── index.html                          → página de captura (Lista VIP) — NÃO MEXER sem autorização explícita
├── medir-a-produtividade-da-equipe.html → NOVA landing page de vendas (projeto atual)
├── /css/
│   ├── variables.css                   → variáveis de cor, fonte, espaçamento
│   ├── base.css                        → reset e estilos globais
│   ├── header.css
│   ├── hero.css
│   ├── story.css
│   ├── faq.css
│   ├── cta.css
│   ├── footer.css
│   └── responsive.css                  → media queries
├── /js/
│   ├── main.js
│   ├── faq.js                          → acordeão do FAQ
│   └── analytics.js                    → tracking de eventos
├── /assets/
│   ├── /icons/                         → SVGs de ícones e logo
│   └── /images/                        → fotos e avatares
├── /referencias-design/                → prints do protótipo Figma — SÓ CONSULTA, nunca copiar HTML bruto de lá
└── /copy-aprovado/                     → textos finais validados — fonte da verdade para todo copy
```

**Regra:** cada seção da landing page tem seu próprio arquivo CSS (mesma convenção do projeto atual: `hero.css`, `story.css`, etc). Não criar um CSS monolítico gigante.

---

## IDENTIDADE VISUAL

- **Fundo principal:** `#0E0E15` (escuro)
- **Cor primária:** `#4D4DFF` (azul)
- **Texto:** `#FBF8FC` (quase branco)
- **Destaque pontual:** `#F5E93C` (amarelo) — usar com moderação
- **Tipografia:** Montserrat (títulos e corpo), Source Code Pro (trechos de código/fórmulas)

Seguir **rigorosamente** o protótipo em `/referencias-design/`. Não inventar variações de cor, espaçamento ou componente que não estejam no protótipo. Se algo não estiver claro no protótipo, perguntar antes de assumir.

---

## PADRÕES DE CÓDIGO (CLEAN CODE)

### Nomenclatura
- Arquivos: `kebab-case` (ex: `medir-a-produtividade-da-equipe.html`)
- Classes CSS: **BEM** (Block__Element--Modifier) — já é o padrão usado no projeto atual (ex: `hero__title`, `story__card`, `btn__icon`). Manter consistência.
- IDs: usar apenas quando necessário para JS ou âncoras, `kebab-case`
- Variáveis JS: `camelCase`
- Funções JS: `camelCase`, nome descreve a ação (`trackWhatsApp`, `toggleFaqItem`)

### Organização
- Um arquivo CSS por seção/componente — nunca misturar estilos de seções diferentes no mesmo arquivo
- HTML semântico sempre: `<section>`, `<article>`, `<header>`, `<footer>`, `<nav>` — nunca `<div>` para tudo
- Comentários de seção no HTML seguindo o padrão já usado no projeto:
```html
<!-- ==========================================
     NOME DA SEÇÃO
========================================== -->
```
- Indentação consistente, sem linhas de código desnecessárias, sem CSS não utilizado

### Performance
- Imagens otimizadas (WebP quando possível, sempre com `alt` descritivo)
- CSS e JS sem dependências desnecessárias
- Lazy loading em imagens abaixo da dobra

---

## RESPONSIVIDADE

- **Mobile-first.** A maioria do tráfego vem do LinkedIn via celular — projetar para mobile primeiro, depois expandir para desktop.
- Breakpoints a seguir o padrão já definido em `responsive.css` do projeto atual — consultar antes de criar novos.
- Testar sempre em 3 larguras mínimas: 375px (mobile), 768px (tablet), 1280px+ (desktop).

---

## SEO

- `<title>` único e descritivo por página, incluindo palavra-chave principal
- `<meta name="description">` específico por página (até 160 caracteres)
- Hierarquia de headings correta: um único `<h1>` por página, `<h2>` para seções, `<h3>` para subseções — nunca pular níveis
- URLs amigáveis, em português, com hífen (já definido: `/medir-a-produtividade-da-equipe`)
- Atributo `alt` em todas as imagens, descrevendo o conteúdo real
- Dados estruturados (Schema.org) para curso/produto quando aplicável

---

## TRACKING E ANALYTICS

- Google Analytics (gtag.js) já configurado no `index.html` — replicar na nova página
- Cada CTA/botão precisa de evento de tracking customizado, seguindo o padrão já usado:
```js
onclick="trackWhatsApp('nome_da_secao')"
```
- Para a nova landing page de vendas, o CTA não vai para WhatsApp — vai para o **checkout da Kiwify**. Criar função de tracking equivalente, ex: `trackCheckout('nome_da_secao')`
- Preparar estrutura para receber Google Ads Pixel e Facebook Pixel (configuração futura, mas já deixar os hooks no código)
- Vou usar UTMs nos links de tráfego pago — o código deve estar preparado para não quebrar com parâmetros de URL extras

---

## REGRAS DE TRABALHO COM O CLAUDE CODE

1. **Nunca editar `index.html` ou seus arquivos CSS/JS associados** sem autorização explícita — é a página de captura ativa, em produção.
2. Antes de criar uma seção nova, **mostrar o plano** (estrutura HTML + lógica) antes de escrever o código completo, para validação.
3. Seguir o copy **exatamente como está** em `/copy-aprovado/` — não reescrever ou "melhorar" o texto sem perguntar.
4. Seguir o layout do protótipo Figma **fielmente** — não tomar decisões de design não solicitadas.
5. Explicar decisões técnicas de forma simples ao longo do processo — o objetivo é o Aryman aprender arquitetura junto, não só receber código pronto.
6. Sempre que possível, reaproveitar componentes/padrões já existentes no projeto (botões, cards, badges) em vez de criar do zero.

---

## SOBRE O AUTOR

Aryman Reis está aprendendo desenvolvimento web e arquitetura de agentes IA. Prefere entender o "porquê" das decisões técnicas, mas no ritmo do projeto — aprendizado aplicado, não teoria solta. Já tem experiência com programação (autor de livro sobre SQL, conhece Python).
