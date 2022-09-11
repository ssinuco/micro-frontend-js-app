import data from './data.js';

const [productId] = window.location.pathname.split('/').slice(-1);

const product = data.tractors[productId];

const container = document.querySelector('.recommendations');

container.innerHTML = `<a href="http://localhost:3001/product/${product.recommendations[0]}">
    <img src="https://mi-fr.org/img/${product.recommendations[0]}.svg" />
  </a>
  <a href="http://localhost:3001/product/${product.recommendations[1]}">
    <img src="https://mi-fr.org/img/${product.recommendations[1]}.svg" />
  </a>`;
