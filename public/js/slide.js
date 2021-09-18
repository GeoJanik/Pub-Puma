class Slide {
    constructor() {
        this.slide = document.getElementById('slide');
        this.container = document.getElementById("container");
        this.video = document.getElementById('testVideo');
        this.blockStyle();
        this.timer();
        this.son();

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
        setTimeout(this.blockStyleTimer, 20000)
    }

    son() {
        this.video.addEventListener('click', ()=> {
            this.video.muted = false;
                })
    }


}

new Slide();