function lucroMaximo(valoresAcao){
  const indiceDeCompra = indiceMenorValor(valoresAcao);
  const valorDeCompra = valoresAcao[indiceDeCompra];
  let maiorValor = 0.0;

  for(let i = indiceDeCompra; i < valoresAcao.length; i++){
    if(valoresAcao[i] > maiorValor)
      maiorValor = valoresAcao[i];
  }

  let lucro = maiorValor - valorDeCompra;
  if(lucro <= valorDeCompra)
    return 0; //'NÃO TEVE LUCRO'

  return lucro;
}

function indiceMenorValor(valores){
  let indiceMenorValor = 0;
  for(let i = 0; i < valores.length; i++){
    if(valores[i] < valores[indiceMenorValor])
      indiceMenorValor = i
  }

  return indiceMenorValor;
}
