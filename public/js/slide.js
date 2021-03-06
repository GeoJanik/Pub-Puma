class Slide {
    constructor() {
        this.slide = document.getElementById('slide');
        this.container = document.getElementById("container");
        this.video = document.getElementById('testVideo');
        this.slide = document.getElementById('slide');
        this.logoSon = document.getElementById('logoSon');
        this.textFooter = document.getElementById('textFooter');
        this.map = document.getElementById('map');
        this.init();
    }

    init() {
        this.slide.addEventListener('click', () => this.startTransition());
        this.logoSon.addEventListener('click', ()=> this.video.muted = false);
        setTimeout(() => this.startTransition(), 20000);
    }
          
    startTransition() {
        this.container.style.transitionDuration = "1s";
        this.container.style.transform =  "translate(0px, -208px)";   
        this.video.style.transform = "scale(0)";   
        this.video.style.transition = "transform 1s ease-in-out";
        this.slide.style.visibility = "hidden";
        this.logoSon.style.visibility = "hidden";
        this.textFooter.textContent = "J'Y VAIS";
        this.map.style.transform = "scale(1.6)";
        this.map.style.transition = "transform 2s ease-in-out";
        this.video.muted = true;
    }        
}

new Slide();