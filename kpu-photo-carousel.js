import Template from './template.js';

class PhotoCarousel extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = 
        Template.html()
        + Template.css();
    }

    // TODO
    connectedCallback(){
        this.index = 0;
        this.shadowRoot.getElementById('title').innerText = this.getAttribute('title');
        this.shadowRoot.getElementById('author').innerText = this.getAttribute('author');
        this.photos = this.getAttribute("photos").split(",");
        this.imageContainer = this.shadowRoot.querySelector('.image-container');
        this.setImage();
        this.shadowRoot.querySelector('button.back').addEventListener('click', () => {
            this.onClickBack()
        })
        this.shadowRoot.querySelector('button.forward').addEventListener('click', () => {
            this.onClickForward()
        })
    }
    setImage(){
        this.imageContainer.style.backgroundImage = `url(${this.photos[this.index]})`;
    }

    onClickBack(){
        if(this.index == 0){
            this.index = this.photos.length - 1;
        } else {
            this.index -= 1;
        }
        this.setImage()
    }

    onClickForward(){
        if(this.index == this.photos.length-1){
            this.index = 0;
        } else {
            this.index += 1;
        }
        this.setImage()
    }
    
}
if (!customElements.get('kpu-photo-carousel')) {
    customElements.define('kpu-photo-carousel', PhotoCarousel);
}