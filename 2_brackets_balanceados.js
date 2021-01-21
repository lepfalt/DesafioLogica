const bracketsAbertos = ['(', '[', '{'];
const bracketsFechados = [')', ']', '}'];

function ehBalanceada(sequencia) {
  if (sequencia.length % 2 !== 0) // Não ímpar
    return 'NÃO';

  let meio = (sequencia.length/2)-1;
  let iBF = 1; 
  for(let iBA = meio; iBA >= 0; iBA--){
    if(!ehAberto(sequencia[iBA]))
      return 'NÃO';

    let indice = indiceBracket(sequencia[iBA]);
    let bracketInverso = bracketsFechados[indice];
    if(sequencia[iBA + iBF] == bracketInverso)
      iBF += 2; 
    else
      return 'NÃO';
  }

  return 'SIM';
}

function ehAberto(bracket){
  if(bracketsAbertos.find(item => item == bracket))
    return true;

  return false;
}

function indiceBracket(bracket){
  return bracketsAbertos.indexOf(bracket)
}

/*
OBS: se for ímpar não é válido
OBS2: iBF = iterador Bracket Fechado 
          iBA = iterador Bracket Aberto
OBS3: o iBF incrementa 2 já que o laço de repetição diminui.
*/
