const total=document.getElementById('totalVenda');
const botaoCalcular=document.getElementById('calcularTotal');

botaoCalcular.addEventListener('click',function(){
    const precoUnitario=parseFloat(document.getElementById('preco').value);
    const quantidade=parseInt(document.getElementById('quantidade').value);
    const tipoPagamento=document.getElementById('tipoPagamento').value.toLowerCase();
    let totalVenda=precoUnitario*quantidade;

    if(tipoPagamento==='à vista'){
        totalVenda*=0.9;
    } else if(tipoPagamento==='prazo'){
        totalVenda*=1.10; 
    } else if(tipoPagamento==='cartão'){
        totalVenda*=1.05; 
    } else {
        alert('Tipo de pagamento inválido. Use "à vista", "prazo" ou "cartão".');
        return;
    }
    total.innerText='Total da Venda: R$ '+totalVenda.toFixed(2);
});
botaolimpar.addEventListener('click',function(){
    document.getElementById('preco').value='';
    document.getElementById('quantidade').value='';
    document.getElementById('tipoPagamento').value='';
    total.innerText='Total da Venda: ';
});