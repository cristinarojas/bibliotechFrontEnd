// Dependencies
import { LitElement, html, css } from 'lit-element';

// Images
import { logo } from './images/logo';

// Importing Components
import './book/my-book.js';

class MyApp extends LitElement {
  static get properties() {
    return {
      signUp: { type: String },
      login: { type: String },
      developer: { type: String },
    };
  }

  constructor() {
    super();
    this.signUp = 'sign up';
    this.login = 'login';
    this.developer = 'Cristina Rojas';
  }

  static get styles() {
    return [
      css`
        :host {
          font-size: calc(10px + 2vmin);
          color: #1a2b42;
        }

        header {
          height: 80px;
          width: 100%;
          display: flex; /* css flex */
          align-items: flex-end;
          justify-content: space-between;
          background-color: rgba(136, 77, 240, 1);
        }

        header .logo {
          line-height: 80px;
          margin-left: 30px;
        }

        header .logo svg {
          vertical-align: middle;
        }

        header .navigation {
          color: white;
          line-height: 80px;
        }

        header .navigation nav ul {
          margin: 0;
          padding: 0;
          list-style-type: none;
        }

        header .navigation nav ul li {
          display: inline-block;
          margin-right: 30px;
        }

        header .navigation nav ul li a {
          color: #fff;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          text-transform: none;
          padding: 0 1rem;
        }

        header .navigation nav ul li a:hover {
          color: rgb(255, 199, 64);
          cursor: pointer;
        }

        .main {
          width: 100%;
          display: grid;
          justify-items: center;
        }

        .main h1 {
          font-size: 2rem;
          font-weight: 500;
          line-height: 100%;
          opacity: 0.54;
          padding: 1.8rem 0 1rem 0;
        }

        /* Rules for responsive design */
        @media (max-width: 700px) {
          header .navigation nav ul li a {
            font-size: 0.7rem;
          }

          .main {
            width: 100%;
          }
        }
      `,
    ];
  }

  render() {
    return html`
      <header>
        <section class="logo" id="logo">
          ${logo}
        </section>
        <section class="navigation" id="navigation">
          <nav>
            <ul>
              <!-- accesskey for usability Ctrl + Alt + (1 or 2) -->
              <li>
                <a accesskey="1" href="https://bibliotech.com/#/landing/signupPage" target="_blank"
                  >${this.signUp}</a
                >
              </li>
              <li>
                <a accesskey="2" href="https://bibliotech.com/#/landing/signinPage" target="_blank"
                  >${this.login}</a
                >
              </li>
              <li>
                <a
                  accesskey="2"
                  href="https://www.linkedin.com/in/cristina-elizabeth-rojas-zamora-a7076249/"
                  target="_blank"
                  >${this.developer}</a
                >
              </li>
            </ul>
          </nav>
        </section>
      </header>
      <div class="main" id="main">
        <h1>Selected Book:</h1>
        <my-book></my-book>
      </div>
    `;
  }
}

customElements.define('my-app', MyApp);
