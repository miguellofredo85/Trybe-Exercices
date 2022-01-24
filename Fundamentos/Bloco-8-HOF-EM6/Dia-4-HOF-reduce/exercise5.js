

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
    // escreva seu código aqui
    let array = names.reduce((acc, val) => acc + val).split('')
    return array.filter((elefilter) => (elefilter==='A' || elefilter==='a')).length
  }
console.log(containsA())
  //5 - Dada o array de nomes, retorne a quantidade de vezes em que 
  //aparecem a letra a maiúscula ou minúscula.
