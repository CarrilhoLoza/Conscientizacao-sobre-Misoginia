# Conscientização sobre Misoginia

Site informativo desenvolvido para o evento **Agosto Lilás do CIEE**, com o objetivo de conscientizar sobre a misoginia e apresentar o andamento do projeto de lei que equipara a misoginia ao crime de racismo no Brasil.

## Sobre o projeto

O site aborda cinco eixos principais:

1. **O que é a Misoginia e a Proposta Legal** — conceito de misoginia e a alteração proposta na Lei do Racismo.
2. **Equiparação ao Racismo** — implicações de tornar o crime inafiançável e imprescritível.
3. **Espectro de Penas e Agravantes** — reclusão de 2 a 5 anos, agravantes por violência doméstica e concurso de pessoas.
4. **Combate ao Ódio nas Redes Sociais** — o foco da lei sobre ambientes virtuais e os limites com a liberdade de expressão.
5. **Desafios de Tramitação** — o caminho do projeto entre Senado, Câmara dos Deputados e sanção presidencial.

Ao final, uma seção de **Referências e fontes** reúne matérias de veículos institucionais e jornalísticos (Câmara dos Deputados, Agência Senado, CNN Brasil, G1 e BBC News Brasil) usadas na elaboração do conteúdo.

## Tecnologias

- HTML5 semântico
- Tailwind CSS (via CDN)
- CSS customizado (`styles.css`)
- JavaScript vanilla (`script.js`)

## Funcionalidades

- **Design responsivo**, adaptado para mobile, tablet e desktop
- **Modo escuro** com botão de alternância na navbar, persistência da preferência via `localStorage` e detecção automática do tema do sistema operacional
- **Micro interações**: elevação de cards no hover, accordion na seção de redes sociais, timeline animada, fade-in dos elementos ao rolar a página, sublinhado animado nos links de navegação
- **Acessibilidade**: uso de `aria-label`, `aria-pressed`, `aria-labelledby`, foco visível e `rel="noopener noreferrer"` em links externos

## Estrutura de arquivos

```
├── index.html            # Estrutura e conteúdo do site
├── styles.css            # Estilos customizados e variantes de modo escuro
├── script.js             # Interações (menu mobile, accordion, modo escuro, animações)
├── tailwind.config.js    # Configuração de tema (cores, fontes, dark mode)
└── Img/
    └── solidarity-lace.svg  # Ícone decorativo usado nos títulos de seção
```

## Paleta de cores

Inspirada na campanha **Agosto Lilás**, com tons de lilás e roxo (`lilas-50` a `lilas-900`) combinados com rosa suave, configurados em `tailwind.config.js`.

## Como visualizar

Basta abrir o arquivo `index.html` em um navegador. Não é necessário build, instalação de dependências ou servidor local — o Tailwind é carregado via CDN.

## Contexto

Projeto desenvolvido para o **evento Agosto Lilás do CIEE**, com foco em conscientização sobre violência de gênero, discriminação contra mulheres e o debate legislativo em torno da criminalização da misoginia no Brasil.
