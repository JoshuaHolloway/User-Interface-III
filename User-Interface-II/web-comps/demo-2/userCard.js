const template = document.createElement('template');
template.innerHTML = `
  <link rel="stylesheet" href="./webComp-css/webComp-main.css">
  <div class="user-card">
    <img />
    <h3></h3>
    <p> <slot name="email" /> </p>
    <p> <slot name="phone" /> </p>
    <button id="toggle-info">Hide Info</button>
  </div>
`;

class UserCard extends HTMLElement {
  constructor() {
    super();

    // Create shadow DOM
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('h3').innerText = `${this.getAttribute('name')}`;
    this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');

    // This uses regular DOM - no encapsulation!
    // this.innerHTML = `<h3>${this.getAttribute('name')}</h3>`;
  }

  toggleInfo() {
    console.log('42');
  }

  // Called every time this element is inserted into the DOM
  connectedCallback() {
    this.shadowRoot.querySelector('#toggle-info');
    addEventListener('click', () => this.toggleInfo());
  }
}

window.customElements.define('user-card', UserCard);