class Slide {
    constructor() {
        this.slide = document.getElementById('slide');
        this.container = document.getElementById("container");
        this.video = document.getElementsByTagName('video');
        this.blockStyle();
        this.timer();

    }


    blockStyle() {
        this.slide.addEventListener('click', () => {
                this.container.style.transitionDuration = "1s";
                this.container.style.bottom = "75px";
            }) 
        }
               
    blockStyleTimer() {
        this.container.style.transitionDuration = "1s";
        this.container.style.bottom = "75px";
    }        
        
    timer() {
        setTimeout(this.blockStyleTimer, 5000)
    }



}

new Slide();