let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66
};

function atualizarSubTotal(){
  quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
  valorSubtotal.innerText = subtotalInfo.valor;
}

atualizarSubTotal();
let btnSubtrair = document.querySelector("#btn-subtrair-produto-01");
let btnAdicionar = document.querySelector("#btn-adicionar-produto-01");
let quantProduto = document.querySelector("#quantidade-produto-01");

function adicionarUm(){
  quantProduto.value  = Number(quantProduto.value)  +1;
  subtotalInfo.quantidade++;
  console.log(subtotalInfo.valor)
  atualizarSubTotal();
}

function removerUm(){
  quantProduto.value  = Number(quantProduto.value)  -1;
}

btnAdicionar.addEventListener("click",adicionarUm);
btnSubtrair.addEventListener("click",removerUm);

