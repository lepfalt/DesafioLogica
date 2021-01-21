function obterParAlvo(array, alvo){
  for(let i = 0; i < array.length-1; i++){
    for(let j = i+1; j < array.length; j++){
      if(array[i] + array[j] == alvo)
        return [i, i + 1];
    }
  }

  return 'O alvo não foi atingido.';
}
