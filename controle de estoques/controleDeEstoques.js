let estoque
function adicionarProduto() {
    const nomeProduto = document.getElementById('nomeProduto').value
    const categoriaProduto = document.getElementById('categoriaProduto').value
    const quantidadeProduto = parseInt(document.getElementById('quantidadeProduto').value)

    if (isNaN(quantidadeProduto) || quantidadeProduto <= 0) {
        alert('Por favor, insira uma quantidade válida.')
        return
    }
    if (!estoque) {
        estoque = {}
    }
    if (!estoque[categoriaProduto]) {
        estoque[categoriaProduto] = {}
    }
    if (!estoque[categoriaProduto][nomeProduto]) {
        estoque[categoriaProduto][nomeProduto] = 0  
    }
    estoque[categoriaProduto][nomeProduto] += quantidadeProduto
    atualizarEstoque()
}

function removerProduto() {
    const nomeProduto = document.getElementById('nomeProduto').value
    const categoriaProduto = document.getElementById('categoriaProduto').value
    const quantidadeProduto = parseInt(document.getElementById('quantidadeProduto').value)
    if (isNaN(quantidadeProduto) || quantidadeProduto <= 0) {
        alert('Por favor, insira uma quantidade válida.')
        return
    }
    if (estoque && estoque[categoriaProduto] && estoque[categoriaProduto][nomeProduto]) {
        estoque[categoriaProduto][nomeProduto] -= quantidadeProduto
        if (estoque[categoriaProduto][nomeProduto] < 0) {
            estoque[categoriaProduto][nomeProduto] = 0
        }
        atualizarEstoque()
    } else {
        alert('Produto não encontrado no estoque.')
    }
}

function atualizarEstoque() {
    const estoqueAtual = document.getElementById('estoqueAtual')
    let estoqueTexto = 'Estoque Atual:\n'
    for (const categoria in estoque) {
        estoqueTexto += `Categoria: ${categoria}\n`
        for (const produto in estoque[categoria]) {
            estoqueTexto += `  - ${produto}: ${estoque[categoria][produto]}\n`
        }
    }
    estoqueAtual.textContent = estoqueTexto
}
document.getElementById('adicionarProduto').addEventListener('click', adicionarProduto)
document.getElementById('removerProduto').addEventListener('click', removerProduto)