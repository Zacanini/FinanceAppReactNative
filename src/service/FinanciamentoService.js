const valorParcela = ({ valorFinanciado, taxa, rendaFamiliar, 
    filhos, parcelas, ehServidorPublico, 
    idade }) => {

// Verifica se a idade é menor que 18
if (idade < 18) {
return "empréstimo negado :: menor de idade";
}

// Ajusta a taxa se for servidor público
let tx = ehServidorPublico ? taxa * 0.8 : taxa;

// Aplica a taxa ao valor financiado
let valorTotal = valorFinanciado * (1 + (tx / 100));

// Aplica desconto por filhos
valorTotal -= filhos * 50;

// Certifique-se de que o valor não fique negativo após o desconto
if (valorTotal < 0) {
return "empréstimo negado :: valor financiado insuficiente após desconto";
}

// Calcula o valor de cada parcela
let valorDaParcela = valorTotal / parcelas;

// Verifica se a parcela ultrapassa 20% da renda familiar
if (valorDaParcela > rendaFamiliar * 0.2) {
return "empréstimo negado :: parcela excede 20% da renda familiar";
}

return valorDaParcela;
}

export default valorParcela;
