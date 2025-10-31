let pista = parseInt(document.getElementById('qtd-pista').textContent, 10);
let cadeiraSuperior = parseInt(document.getElementById('qtd-superior').textContent, 10);
let cadeiraInferior = parseInt(document.getElementById('qtd-inferior').textContent, 10);

function comprar() {
    const qtdInput = document.getElementById('qtd');
    const tipoSelect = document.getElementById('tipo-ingresso');
    const quantidade = parseInt(qtdInput.value, 10);
    const valorSelecionado = tipoSelect.value;

    // Verificando se a quantidade informada pelo usuário é válida
    if (isNaN(quantidade) || quantidade <= 0) {
        alert('Digite um número válido.');
        qtdInput.value = '';
        qtdInput.focus();
        return;
    }
    // Limitando a compra a 10 ingressos por tentativa
    if (quantidade > 10) {
        alert('Limite de compra por vez: 10 ingressos.');
        qtdInput.value = '';
        qtdInput.focus();
        return;
    }

    // Condicionais para verificar se há ingresos dísponíveis e realizar a compra.
    if (valorSelecionado === 'pista') {
        if (pista >= quantidade) {
            pista -= quantidade;
            document.getElementById('qtd-pista').textContent = pista;
            if (pista === 0) desabilitarOpcao('pista');
        } else {
            alert(`Estoque insuficiente para Pista. Restam ${pista}.`);
            return;
        }
    } else if (valorSelecionado === 'superior') {
        if (cadeiraSuperior >= quantidade) {
            cadeiraSuperior -= quantidade;
            document.getElementById('qtd-superior').textContent = cadeiraSuperior;
            if (cadeiraSuperior === 0) desabilitarOpcao('superior');
        } else {
            alert(`Estoque insuficiente para Cadeira Superior. Restam ${cadeiraSuperior}.`);
            return;
        }
    } else if (valorSelecionado === 'inferior') {
        if (cadeiraInferior >= quantidade) {
            cadeiraInferior -= quantidade;
            document.getElementById('qtd-inferior').textContent = cadeiraInferior;
            if (cadeiraInferior === 0) desabilitarOpcao('inferior');
        } else {
            alert(`Estoque insuficiente para Cadeira Inferior. Restam ${cadeiraInferior}.`);
            return;
        }
    }
    qtdInput.value = '';
    qtdInput.focus();
}

// Função utilitária para desabilitar uma opção
function desabilitarOpcao(valor) {
    const opcao = document.querySelector(`#tipo-ingresso option[value="${valor}"]`);
    opcao.disabled = true;
    alert(`Os ingressos para ${opcao.textContent} esgotaram.`);
}
