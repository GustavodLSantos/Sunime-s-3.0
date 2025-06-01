// Lista de itens no carrinho
let carrinho = [];

// Função para adicionar item
function adicionarAoCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  alert(`${nome} adicionado ao carrinho!`);
  atualizarResumo();
}

// Atualiza o resumo do carrinho (exibição opcional)
function atualizarResumo() {
  const resumo = document.getElementById("resumo-carrinho");
  if (resumo) {
    resumo.innerHTML = "";
    let total = 0;
    carrinho.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
      resumo.appendChild(li);
      total += item.preco;
    });
    const totalElement = document.createElement("p");
    totalElement.innerHTML = `<strong>Total: R$ ${total.toFixed(2)}</strong>`;
    resumo.appendChild(totalElement);
  }
}
