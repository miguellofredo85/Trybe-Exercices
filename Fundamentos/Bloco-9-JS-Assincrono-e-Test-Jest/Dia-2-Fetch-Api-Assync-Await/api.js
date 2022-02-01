// apiScript.js     
const API_URL = 'https://api.coincap.io/v2/assets';
const fetch = require('node-fetch')


const cryptoMoedas = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => console.log(data.joke));
};

window.onload = () => fetchJoke();