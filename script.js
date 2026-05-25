// ======================================================
// PROJETO AGRINHO 2026 - FUTURO SUSTENTÁVEL
// Calculadora Ecológica Escolar
// ======================================================

// Seleciona os elementos do HTML
const formulario = document.getElementById("form-ecologico");
const resultado = document.getElementById("resultado-diagnostico");

// ======================================================
// EVENTO DE ENVIO DO FORMULÁRIO
// ======================================================

formulario.addEventListener("submit", function (event) {

    // Impede o recarregamento da página
    event.preventDefault();

    // ==================================================
    // CAPTURA DOS VALORES DOS SELECTS
    // ==================================================

    const energia = parseInt(document.getElementById("energia").value);
    const agua = parseInt(document.getElementById("agua").value);
    const reciclagem = parseInt(document.getElementById("reciclagem").value);

    // ==================================================
    // VALIDAÇÃO
    // ==================================================

    // Verifica se todos os campos foram preenchidos
    if (isNaN(energia) || isNaN(agua) || isNaN(reciclagem)) {

        resultado.innerHTML = `
            <div class="resultado alerta">
                <h3>⚠️ Atenção!</h3>
                <p>Por favor, responda todas as perguntas da calculadora ecológica.</p>
            </div>
        `;

        return;
    }

    // ==================================================
    // CÁLCULO DA PONTUAÇÃO
    // ==================================================

    const pontuacaoTotal = energia + agua + reciclagem;

    // Variáveis para armazenar o diagnóstico
    let titulo = "";
    let mensagem = "";
    let cor = "";
    let icone = "";

    // ==================================================
    // LÓGICA DO DIAGNÓSTICO
    // ==================================================

    // Pontuação máxima possível = 9
    // Pontuação mínima possível = 3

    if (pontuacaoTotal >= 8) {

        titulo = "🌿 Escola Sustentável de Elite";
        mensagem = `
            Parabéns! Sua escola demonstra excelentes práticas ambientais.
            O uso consciente da água, energia e reciclagem mostra compromisso
            com um futuro mais sustentável para todos.
        `;
        cor = "#2e8b57";
        icone = "🏆";

    } else if (pontuacaoTotal >= 5) {

        titulo = "🌱 Caminho Certo";
        mensagem = `
            Sua escola já possui boas iniciativas sustentáveis,
            mas ainda pode melhorar! Pequenas ações diárias podem
            gerar um grande impacto ambiental positivo.
        `;
        cor = "#f4a300";
        icone = "💡";

    } else {

        titulo = "🚨 Alerta Ecológico";
        mensagem = `
            Sua escola precisa adotar práticas sustentáveis com urgência.
            Algumas dicas importantes:
            <br><br>
            • Economizar água nas torneiras e banheiros.<br>
            • Apagar luzes e equipamentos sem uso.<br>
            • Criar coleta seletiva e incentivar reciclagem.<br>
            • Desenvolver campanhas ecológicas com os alunos.
        `;
        cor = "#d62828";
        icone = "⚠️";
    }

    // ==================================================
    // EXIBE O RESULTADO NA TELA
    // ==================================================

    resultado.innerHTML = `
        <div class="resultado-final" 
             style="
                border-left: 8px solid ${cor};
                padding: 20px;
                border-radius: 12px;
                background-color: #ffffff;
                box-shadow: 0 4px 15px rgba(0,0,0,0.08);
             ">

            <h3 style="color: ${cor}; margin-bottom: 10px;">
                ${icone} ${titulo}
            </h3>

            <p style="margin-bottom: 15px; line-height: 1.6;">
                ${mensagem}
            </p>

            <strong style="color: ${cor};">
                Pontuação Total: ${pontuacaoTotal} pontos
            </strong>

        </div>
    `;

    // ==================================================
    // ROLAGEM SUAVE ATÉ O RESULTADO
    // ======================================================

    resultado.scrollIntoView({
        behavior: "smooth"
    });

});

// ======================================================
// MENSAGEM INICIAL OPCIONAL
// ======================================================

resultado.innerHTML = `
    <p>
        🌎 Responda as perguntas acima para descobrir
        o nível de sustentabilidade da sua escola!
    </p>
`;