import data from './data.js';

class InspireRecommendations extends HTMLElement {
  connectedCallback() {    
    const productId = this.getAttribute("productId");
    const product = data.tractors[productId];
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
      :host {
        text-align: center;
      }
      h2 {
        padding-top: 1em;
        font-size: 1em;
        font-weight: normal;
        text-align: center;
        text-transform: uppercase;
        margin: 0;
      }
      a {
        display: inline-block;
        margin: 1rem;
        border: 1px solid #333;
      }
      img {
        max-width: 100%;
        width: 300px;
      }      
      </style>
      <h2>Recommendations</h2>
        ${product.recommendations
          .map(
            recommendation => `<a href="http://localhost:3001/product/${recommendation}">
                        <img src="https://mi-fr.org/img/${recommendation}.svg" />
                      </a>`
          )
          .join("\n")}
    `;
  }
}
window.customElements.define(
  "inspire-recommendations",
  InspireRecommendations
);