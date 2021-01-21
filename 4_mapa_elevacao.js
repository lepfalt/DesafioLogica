function blocosRetidosDeAgua(mapaElevacao) {
  const maiorNivel = Math.max(...mapaElevacao);
  let blocosDeAguaFechados = 0;

  // Lê o array por níveis
  for(let nivel = 1; nivel <= maiorNivel; nivel++){
    let abriu = false;
    let blocosDeAgua = 0;

    // Itera no array do mapa de elevação
    for(let bloco = 0; bloco < mapaElevacao.length; bloco++){
      if(!abriu && mapaElevacao[bloco] >= nivel)
          abriu = true;

      if(abriu && mapaElevacao[bloco] < nivel)
          blocosDeAgua++;

      if(abriu && mapaElevacao[bloco] >= nivel){
        blocosDeAguaFechados += blocosDeAgua;
        blocosDeAgua = 0;
      }
    }
  }

  return blocosDeAguaFechados;
}
