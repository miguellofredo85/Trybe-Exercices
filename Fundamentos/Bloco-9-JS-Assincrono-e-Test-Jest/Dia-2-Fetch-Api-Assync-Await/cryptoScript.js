const fetch = require('./node_modules/node-fetch')

const cryptoCoin = async () => {

  const CRYPTO_URL = 'https://api.coincap.io/v2/assets';

  try {
    const moedas = await fetch(CRYPTO_URL);
    const data = await moedas.json();
    console.log(data);
    return data
  } catch (err) {
    console.log(`Deu ruim mano, olha so.... ${err}`);
  }
}
cryptoCoin();
// const cryptoNames = async () => {
//   const ulist = document.querySelector('#lista-crypto')
//   const objCryptoCoin = await cryptoCoin();
//   console.log(objCryptoCoin);
//   objCryptoCoin
//   .filter((iter) => iter.rank <=10)
//   .forEach((iter) => {
//     const lis = document.createElement('li');
//     lis.innerText = `${iter.name} (${iter.symbol}): ${iter.priceUsd}`;
//     ulist.appendChild(lis);
// })
// }
// cryptoNames();