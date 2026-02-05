const num1=document.getElementById('num1');
const num2=document.getElementById('num2');
const somar=document.getElementById('somar');
const subtrair=document.getElementById('subtrair');
const multiplicar=document.getElementById('multiplicar');
const dividir=document.getElementById('dividir');
const limpar=document.getElementById('limpar');
const resultado=document.getElementById('resultado');
somar.addEventListener('click',function(){
    const n1=parseFloat(num1.value);
    const n2=parseFloat(num2.value);
    const res=n1+n2;
    resultado.innerText='Resultado: '+res;
});
subtrair.addEventListener('click',function(){
    const n1=parseFloat(num1.value);
    const n2=parseFloat(num2.value);
    const res=n1-n2;
    resultado.innerText='Resultado: '+res;
});
multiplicar.addEventListener('click',function(){
    const n1=parseFloat(num1.value);
    const n2=parseFloat(num2.value);
    const res=n1*n2;
    resultado.innerText='Resultado: '+res;
});
dividir.addEventListener('click',function(){
    const n1=parseFloat(num1.value);
    const n2=parseFloat(num2.value);
    if(n2===0){
        resultado.innerText='Resultado: Não é possível dividir por zero';
    }else{
        const res=n1/n2;
        resultado.innerText='Resultado: '+res;
    }
});
limpar.addEventListener('click',function(){
    num1.value='';
    num2.value='';
    resultado.innerText='Resultado: ';
});