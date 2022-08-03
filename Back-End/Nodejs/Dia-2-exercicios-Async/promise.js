const numeros = (num1, num2, num3) => {
  return new Promise ((resolve, reject) => {
    if(typeof num1!=='number'||typeof num2!=='number'||typeof num3!=='number'){ 
      return reject(new Error("Informe apenas números"))
    };
      const calc =(num1+num2)*num3;
        if(calc < 50) return reject(new Error('Valor muito abaixo'));
          resolve(calc);
  });
}
numeros(1,"e",40)
  .then((resolve) => console.log(resolve))
  .catch((error) =>  console.log(error.message));