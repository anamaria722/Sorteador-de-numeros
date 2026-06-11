// Função para sortear números
function sortear () {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    // 🛡️ validação para quando a quantidade é maior que os números disponíveis
    let totalDisponiveis = ate - de + 1;
    if (quantidade > totalDisponiveis) {
        alert(`Impossível sortear ${quantidade} números entre ${de} e ${ate}. Existem apenas ${totalDisponiveis} números disponíveis!`);
        return; 
    }
     // Sorteia os números
    let sorteados = [];
    let numeroSorteado;
// Sorteia números até atingir a quantidade desejada
    for (let i = 0; i < quantidade; i++) {
        numeroSorteado = obterNumeroAleatorio(de, ate);
// Verifica se o número já foi sorteado, se sim, sorteia novamente
        while (sorteados.includes(numeroSorteado)) {
            numeroSorteado = obterNumeroAleatorio(de, ate);
        }
        // Adiciona o número sorteado à lista de sorteados
        sorteados.push(numeroSorteado);
    }
    // Exibe os números sorteados
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados.join(', ')}</label>`;
    alterarStatusDoBotao();
}

// Função para obter um número aleatório entre min e max (inclusive)
function obterNumeroAleatorio (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusDoBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }
    else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusDoBotao();
}