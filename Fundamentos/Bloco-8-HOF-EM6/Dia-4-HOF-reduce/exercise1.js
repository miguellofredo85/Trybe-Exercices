const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
     return arrays.reduce((acc, val) => acc.concat(val));
  }
  console.log(flatten())
  //1 - Dada uma matriz, transforme em um array.

