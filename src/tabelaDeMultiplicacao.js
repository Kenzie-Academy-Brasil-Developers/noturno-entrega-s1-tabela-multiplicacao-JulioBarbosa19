function tabelaMutliplicacaoArrays(n) { 
    // Substitua "nomeDaSuaFuncao" por um nome mais apropriado
    // TODO: escrever dois loops aninhados para desenhar o array bidimensional e mostrar o restante da tabela no console.
    
    let array = [];
    
    for (let linha = 0; linha <= n; linha++) {
      array[linha] = [];
      for (let coluna = 0; coluna<=n; coluna++) {
          array[linha][coluna] = linha * coluna;
      }
     }
        console.table(array);
}

//console.log(tabelaMutliplicacaoArrays(12));