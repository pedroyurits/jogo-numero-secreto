//let titulo = document.querySelector ('h1');
//titulo.innerHTML = 'Jogo do Número Secreto';
//let paragrafo = document.querySelector ('p');
//paragrafo.innerHTML = 'Escolha um número de 1 a 10';
let listaDeNúmerosSorteados = []
let numeroLimite = 100
let numeroSecreto = gerarNumeroSecreto();
console.log (numeroSecreto);

let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector (tag)
    campo.innerHTML = texto
}

function exibirMensagemInicial () {
    exibirTextoNaTela('h1','Jogo do Número Secreto'); 
    exibirTextoNaTela('p','Escolha um número de 1 a 100');


}

exibirMensagemInicial();


function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você acertou o número secreto em ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela ('h1', 'Acertou!');
        exibirTextoNaTela ('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    
        
    }
    else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela ('h1','Errou!');
            exibirTextoNaTela ('p', `O número secreto é menor do que ${chute}!`);
        } else {
            exibirTextoNaTela ('h1', 'Errou!');
            exibirTextoNaTela ('p', `O número secreto é maior do que ${chute}!`);
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroSecreto () {
    let numeroEscolhido = parseInt (Math.random() * numeroLimite + 1);
    let qualidadeDeElementosNaLista = listaDeNúmerosSorteados.length

    if (qualidadeDeElementosNaLista == 100) {
        listaDeNúmerosSorteados = []
    }

    if (listaDeNúmerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroSecreto
    }
    else {
        listaDeNúmerosSorteados.push (numeroEscolhido)
        console.log (listaDeNúmerosSorteados)
        return numeroEscolhido

    }
}

function limparCampo() {
    chute = document.querySelector('input').value = ''
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroSecreto();
    limparCampo();
    tentativas =1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute ('disabled', true);
}