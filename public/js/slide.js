class Slide {
    constructor() {
        this.slide = document.getElementById('slide');
        this.container = document.getElementById("container");
        this.video = document.getElementById('testVideo');
        this.slide = document.getElementById('slide');
        this.init();
    }

    init() {
        this.slide.addEventListener('click', () => this.hideVideo());
        this.video.addEventListener('click', ()=> this.video.muted = false);
        setTimeout(() => this.hideVideo(), 20000);

    }
          
    hideVideo() {
        this.container.style.transitionDuration = "1s";
        this.container.style.transform =  "translate(0px, -208px)";   
        this.video.style.transform = "scale(0)";   
        this.video.style.transition = "transform 0.6s ease-in-out";
        this.slide.style.visibility = "hidden";
        
    }        
}

new Slide();