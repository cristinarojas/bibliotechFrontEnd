// Dependencies
import { LitElement, html, css } from 'lit-element';

class MyBook extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      buy: { type: String },
    };
  }

  constructor() {
    super();
    this.buy = 'buy now';
  }

  static get styles() {
    return [
      css`
        :host {
          font-size: 0.9rem;
        }

        .book-container {
          display: grid; /* css grid */
          grid-template-columns: 300px 400px;
          grid-auto-rows: auto;
          grid-gap: 0.5em;
          grid-template-areas: 'book description';
        }

        .book-container .book {
          width: 100%;
          height: 400px;
          grid-area: book;
          color: rgba(0, 0, 0, 0.54);
        }

        .book-container .book .book-image {
          border-radius: 5px;
          transition: box-shadow 0.3s;
        }

        .book-container .book .book-image:hover {
          cursor: pointer;
          box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
        }

        .book-container .description {
          width: 100%;
          height: 400px;
          grid-area: description;
          color: rgba(0, 0, 0, 0.54);
          border: 1px solid red;
        }

        .book-container .description .buy {
          color: rgba(0, 0, 0, 0.75);
          background-color: rgb(255, 199, 64);
          border-radius: 20px;
          width: 100px;
          height: 30px;
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="book-container">
        <section class="book">
          <h1>Computers in Chemistry</h1>
          <img src="./images/book.jpg" alt="Example book" class="book-image" />
          <p>ISBN: <span>9780198504467</span></p>
          <p>Copyright: <span>Oxford University Press</span></p>
        </section>
        <section class="description">
          <h2>Contributors:<span>Pete Biggs</span></h2>
          <h3>publisher:<span>Oxford University Press</span></h3>
          <h3>Series:<span>Oxford Chemistry Primer</span></h3>
          <button type="button" class="buy">${this.buy}</button>
        </section>
      </div>
    `;
  }
}

customElements.define('my-book', MyBook);
