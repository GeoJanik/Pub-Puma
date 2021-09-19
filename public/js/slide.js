class Slide {
    constructor() {
        this.slide = document.getElementById('slide');
        this.container = document.getElementById("container");
        this.video = document.getElementById('testVideo');
        this.init();
    }

    init() {
        this.slide.addEventListener('click', () => this.hideVideo());
        setTimeout(() => this.hideVideo(), 20000);
        this.video.addEventListener('click', ()=> this.video.muted = false);
    }
          
    hideVideo() {
        this.container.style.transitionDuration = "1s"
        this.container.style.transform =  "translate(0px, -208px)";   
        this.video.style.visibility = "hidden";   
    }        
}

new Slide();