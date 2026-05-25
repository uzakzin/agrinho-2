# 🌾 Projeto Agrinho 2026: Futuro Sustentável

Este tranalho tem uma junção de prompts feita para o projeto Agrinho 2026. O projeto foi concebido como uma **Single Page Application (SPA)** voltada para a conscientização ecológica em ambientes com matas, plantios e florestas.

---

## 🛠️ Engenharia de Prompts

O projeto foi dividido em três camadas fundamentais para garantir um código limpo, modular e de fácil manutenção.
Confira oque eu fiz:
### 1️⃣ Estrutura Semântica (HTML5)
**Objetivo:** Construir a base estrutural do site.
> **Contexto:** Definição de Header (Hero), Seção de Pilares Educativos, Seção de Gamificação (Calculadora) e Footer.

### 2️⃣ Design System & UI (CSS3 Moderno)
**Objetivo:** Transformar a estrutura em uma interface moderna, minimalista e responsiva.
> **Contexto:** Aplicação de paleta de cores, uso de **CSS Grid** e **Flexbox** para responsividade, além de efeitos visuais como sombras suaves e transições nos elementos.

### 3️⃣ Lógica de Gamificação (JavaScript ES6)
**Objetivo:** Implementar a inteligência com a "Calculadora Ecológica Escolar".
> **Contexto:** Captura de dados do DOM, sistema de pontuação ponderada (Peso 3, 2 e 1), lógica de diagnóstico dinâmico e manipulação de eventos para evitar o refresh da página, de acordo com sua auto-avaliação sobre seu plantio o site avalia a saúde do seu terreno. 
> * **Diagnósticos:** "Elite", "Caminho Certo" e "Alerta Ecológico".

---

## 🚀 Como Executar o Projeto

Para visualizar o projeto funcionando, siga estes passos:

1.  **Arquivos:** Crie três arquivos na mesma pasta:
    * `index.html` (Atue como um desenvolvedor web especialista em Front-End. Preciso do código estrutural para o arquivo "index.html" de um site do Projeto Agrinho com o tema "Futuro Sustentável". 

O site deve ser uma página única (Single Page) bem estruturada e moderna. No <head>, faça a chamada para o arquivo de estilização externo "style.css". Antes do fechamento do <body>, faça a chamada para o script externo "script.js". Além disso, inclua o link do FontAwesome via CDN para podermos usar ícones de sustentabilidade.

O HTML deve conter as seguintes seções com IDs e classes claras para podermos estilizar e manipular depois:
1. HEADER: Com uma navbar simples (Logotipo do Agrinho/Sustentabilidade e links de ancoragem) e uma Hero Section de impacto (Título chamativo, subtítulo sobre a feira escolar e um botão de ação).
2. SECTION (Pilares): Uma área para exibir 3 cards educativos (Água, Energia Limpa e Consumo Consciente). Cada card deve ter espaço para um ícone, um título e um parágrafo descritivo.
3. SECTION (Gamificação): Uma área com uma "Calculadora Ecológica da Escola". Deve conter um formulário simples com 3 perguntas de múltipla escolha (select ou radio buttons) sobre os hábitos da escola e um botão "Calcular Pegada Verde". Abaixo do botão, deixe uma div vazia com um ID específico onde o JavaScript irá injetar o resultado do diagnóstico.
4. FOOTER: Rodapé com os créditos do projeto (Ano de 2026, Escola, Turma).

Forneça apenas o código HTML limpo, sem estilos embutidos e sem funções javascript dentro dele.)
    * `style.css` (Atue como um designer UX/UI e desenvolvedor Front-End. Com base na estrutura de um site para o Projeto Agrinho sobre "Futuro Sustentável" (com Hero, 3 Cards de Pilares e uma Calculadora Ecológica), crie o arquivo "style.css".

Quero um design moderno, limpo e profissional (estilo Minimalista/Sustentável). Utilize as seguintes diretrizes de CSS Moderno:
- Paleta de cores: Tons de verde ecológico (como verde-esmeralda, menta e verde-escuro para textos), fundo do site em um cinza ou azul bem claro/of-white para contrastar, e branco para os cards.
- Tipografia: Use uma fonte moderna (como Inter ou Roboto via Google Fonts) com boa legibilidade e hierarquia de tamanhos clara para títulos e parágrafos.
- Layout: Use CSS Flexbox e CSS Grid para tornar o site totalmente responsivo (especialmente para os 3 cards ficarem em linha no PC e em coluna no celular).
- Detalhes visuais: Adicione bordas arredondadas (border-radius), sombras suaves (box-shadow) nos cards e formulários para dar profundidade, e transições suaves (transition: all 0.3s ease) nos botões ao passar o mouse (hover effect).

Forneça o código CSS completo e organizado por seções.)
    * `script.js` (Atue como um desenvolvedor JavaScript. Preciso do código para o arquivo "script.js" que controlará a interatividade da "Calculadora Ecológica Escolar" do site do Projeto Agrinho (Tema: Futuro Sustentável).

O script deve fazer o seguinte:
1. Escutar o evento de 'submit' ou 'click' do formulário/botão de calcular da calculadora ecológica.
2. Capturar os valores selecionados pelo usuário nas 3 perguntas de múltipla escolha.
3. Criar uma lógica de pontuação baseada nas respostas (Ex: Resposta A vale 3 pontos, B vale 2 pontos, C vale 1 ponto).
4. Calcular o total de pontos e definir um diagnóstico com base em faixas de pontuação:
   - Pontuação Alta: "Escola Sustentável de Elite" (Mensagem de parabéns e selo verde).
   - Pontuação Média: "Caminho Certo" (Mensagem de incentivo e sugestão de melhorias).
   - Pontuação Baixa: "Alerta Ecológico" (Dicas práticas de como começar a economizar água/energia e reciclar na escola urgentemente).
5. Injetar dinamicamente esse resultado (com manipulação do DOM) de forma estilizada e visível dentro da div de resultado que está no HTML.
6. Impedir o recarregamento padrão da página ao enviar o formulário (preventDefault).

Escreva um código limpo, comentado e fácil de entender para estudantes de robótica/programação do ambiente escolar.)
2.  **Ícones:** O projeto utiliza o **FontAwesome**. 
3.  **Abrir:** Clique duas vezes no arquivo `index.html` ou use a extensão *Live Server* do VS Code.

---

## 💡 Recursos Utilizados
* **HTML5** Semântico.
* **CSS3** (Grid, Flexbox e Variáveis). **feito por gemini**
* **JS Vanilla** (Manipulação de DOM e Eventos). **feito por gemini**

---

## 👤 Créditos e Finalidade
Este projeto foi desenvolvido para o **Projeto Agrinho 2026**.

---