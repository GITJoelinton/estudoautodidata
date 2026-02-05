const precoInput = document.getElementById("preco");
const quantidadeInput = document.getElementById("quantidade");
const calcularTotalButton = document.getElementById("calcularTotal");
const limparButton = document.getElementById("limpar");
const totalDisplay = document.getElementById("total");

calcularTotalButton.addEventListener("click", function() {
    const preco = parseFloat(precoInput.value);
    const quantidade = parseInt(quantidadeInput.value);
    if (isNaN(preco) || isNaN(quantidade) || preco < 0 || quantidade < 0) {
        totalDisplay.innerText = "Total: Entrada inválida";
        return;
    }
    const total = preco * quantidade;
    totalDisplay.innerText = "Total: R$ " + total.toFixed(2);
});

limparButton.addEventListener("click", function() {
    precoInput.value = "";
    quantidadeInput.value = "";
    totalDisplay.innerText = "Total: ";
});
const avista=total
const
