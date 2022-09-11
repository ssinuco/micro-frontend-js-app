import data from './data.js';

class InspireRecommendations extends HTMLElement {
  connectedCallback() {    
    const productId = this.getAttribute("productId");
    const product = data.tractors[productId];
    this.innerHTML = `
    <div class="inspire_fragment">
      <h2 class="inspire_headline">Recommendations</h2>
      <div class="inspire_recommendations">
        ${product.recommendations
          .map(
            recommendation => `<a href="http://localhost:3001/product/${recommendation}">
                        <img src="https://mi-fr.org/img/${recommendation}.svg" />
                      </a>`
          )
          .join("\n")}
      </div>
    </div>
    `;
  }
}
window.customElements.define(
  "inspire-recommendations",
  InspireRecommendations
);