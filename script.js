function calcularIdade(dia, mes, ano) {
            const hoje = new Date();
            let idade = hoje.getFullYear() - ano;

            if (mes > (hoje.getMonth() + 1) || 
               (mes === (hoje.getMonth() + 1) && dia > hoje.getDate())) {
                idade--;
            }
            return idade;
}

function validarData() {
            const dia = parseInt(document.getElementById("dia").value);
            const mes = parseInt(document.getElementById("mes").value);
            const ano = parseInt(document.getElementById("ano").value);
            const hoje = new Date();
            const anoAtual = hoje.getFullYear();
            let mensagem = "";
            let classe = "";

            if (mes >= 1 && mes <= 12 && ano > 0 && ano <= anoAtual && dia > 0 && dia <= 31) {

                let dataValida = false;

                if (mes === 2) {
                    if (dia === 29) {
                        if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
                            dataValida = true;
                        }
                    } else if (dia <= 28) {
                        dataValida = true;
                    }
                }
                else if ([1, 3, 5, 7, 8, 10, 12].includes(mes)) {
                    if (dia <= 31) dataValida = true;
                }
                else if ([4, 6, 9, 11].includes(mes)) {
                    if (dia <= 30) dataValida = true;
                }

                if (dataValida) {
                    const idade = calcularIdade(dia, mes, ano);
                    mensagem = `✅ A data informada é válida. Sua idade é: ${idade} anos.`;
                    classe = "sucesso";
                } else {
                    mensagem = "❌ A data informada é inválida!";
                    classe = "erro";
                }

            } else {
                mensagem = "❌ A data informada é inválida!";
                classe = "erro";
            }

            const resultado = document.getElementById("resultado");
            resultado.innerText = mensagem;
            resultado.className = `resultado ${classe}`;
}