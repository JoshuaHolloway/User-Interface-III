const template = document.createElement('template');
template.innerHTML = `
  <link rel="stylesheet" href="./css/popupNotify_dev.css">
  <style> /* TODO: Paste dev CSS here */ </style>

  <div class="tooltip-container">

    <svg class="alert" width="24" height="24" viewBox="0 0 24 24">
      <defs>
        <clipPath id="clip-path">
          <path id="_Color" data-name=" ↳Color" d="M10,20A10,10,0,1,1,20,10,10.011,10.011,0,0,1,10,20ZM9,13v2h2V13ZM9,5v6h2V5Z" transform="translate(2 2)"/>
        </clipPath>
      </defs>
      <g id="Group_210" data-name="Group 210">
        <path id="_Color-2" data-name=" ↳Color" d="M10,20A10,10,0,1,1,20,10,10.011,10.011,0,0,1,10,20ZM9,13v2h2V13ZM9,5v6h2V5Z" transform="translate(2 2)"/>
      </g>
    </svg>

    <svg class="cancel" width="24" height="24" viewBox="0 0 24 24">
      <defs>
        <clipPath id="clip-path">
          <path id="_Color" data-name=" ↳Color" d="M10,20A10,10,0,0,1,2.926,2.926,10,10,0,0,1,17.074,17.074,9.936,9.936,0,0,1,10,20Zm0-8.59h0L13.59,15,15,13.59,11.41,10,15,6.41,13.59,5,10,8.59,6.41,5,5,6.41,8.59,10,5,13.59,6.41,15,10,11.411Z" transform="translate(2 2)"/>
        </clipPath>
      </defs>
      <g id="Group_191" data-name="Group 191">
        <path id="_Color-2" data-name=" ↳Color" d="M10,20A10,10,0,0,1,2.926,2.926,10,10,0,0,1,17.074,17.074,9.936,9.936,0,0,1,10,20Zm0-8.59h0L13.59,15,15,13.59,11.41,10,15,6.41,13.59,5,10,8.59,6.41,5,5,6.41,8.59,10,5,13.59,6.41,15,10,11.411Z" transform="translate(2 2)"/>
      </g>
    </svg>

    <div class="notify-container">
      <slot name="message" />
    </div>

  </div>
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
window.customElements.define('popup-notify', PopupNotify);