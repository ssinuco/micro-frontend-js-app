import data from './data.js';

const [productId] = window.location.pathname.split('/').slice(-1);

const product = data.tractors[productId];

const container = document.querySelector('.inspire_recommendations');

container.innerHTML = `<a href="/product/${product.recommendations[0]}" target="_parent">
    <img src="https://mi-fr.org/img/${product.recommendations[0]}.svg" />
  </a>
  <a href="/product/${product.recommendations[1]}" target="_parent">
    <img src="https://mi-fr.org/img/${product.recommendations[1]}.svg" />
  </a>`;
