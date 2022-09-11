import data from './data.js';

const [productId] = window.location.pathname.split('/').slice(-1);

const product = data.tractors[productId];

const container = document.querySelector('.recommendations');

container.innerHTML = `<img src="https://mi-fr.org/img/${product.recommendations[0]}.svg" />
  <img src="https://mi-fr.org/img/${product.recommendations[1]}.svg" />`;
