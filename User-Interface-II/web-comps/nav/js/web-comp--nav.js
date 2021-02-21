const template = document.createElement('template');
template.innerHTML = `
  <link rel="stylesheet" href="./css/web-comp--nav_dev.css">
  <style> /* TODO: Paste dev CSS here */ </style>

  <nav>
    <div class="nav__left">
      <div class="top">
        <div class="left">
          <h1>Josh Holloway</h1>
        </div>
        <div class="right">
          <div class="hamburger-container">
            <div class="hamburger"></div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </div>
    </div>
    <div class="nav__right">
      <div class="hamburger-container">
        <div class="hamburger"></div>
      </div>
    </div>
  </nav>
`;

class PopupNotify extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  tooltip(expandState) {
    const tooltip = this.shadowRoot.querySelector('.notify-container');
    const alert   = this.shadowRoot.querySelector('.alert');
    const cancel  = this.shadowRoot.querySelector('.cancel');

    if(expandState == true) {
      tooltip.style.transform = 'scale(1)'; // Change scale(0) -> scale(1)
      alert.style.display = 'none';
      cancel.style.display = 'block';
      expandState = false;
    } else {
      tooltip.style.transform = 'scale(0)'; // Change scale(0) -> scale(1)
      cancel.style.display = 'none';
      alert.style.display = 'block';
    }
  }

  // Change the transform when the icon is clicked
  connectedCallback() {
    // Life-cycle hook for when component is loaded
    // -If you want things to change instantly, when the web-component
    //  is loaded into the page, place it here.
    this.shadowRoot.querySelector('.alert').addEventListener('click', () => {
      //            ^
      // -Start using standard vanilla JS at this point
      this.tooltip(true);
    });
    this.shadowRoot.querySelector('.cancel').addEventListener('click', () => {
      //            ^
      // -Start using standard vanilla JS at this point
      this.tooltip(false);
    });

    // See if an actual attribute is defined
    if (this.getAttribute('tip_background')) {
      this.shadowRoot.querySelector('.notify-container').style.background = this.getAttribute('tip_background');
    }
    if (this.getAttribute('tip_color')) {
      this.shadowRoot.querySelector('.notify-container').style.color = this.getAttribute('tip_color');
    }
  };
}

// Custom tag used in project
window.customElements.define('josh-nav', PopupNotify);