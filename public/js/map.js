class Carte {
    constructor() {
        this.lattitudeMap = 48.89555632603661;
        this.longitudeMap = 2.2496143257227788;
        this.conteneurMap = document.getElementById("map");
        this.slide = document.getElementById("slide").addEventListener('click', ()=> {
            console.log('hello')
        });
        this.initMap();
    }

    initMap() {

        this.map = L.map('map', {
            zoomControl: false
        }).setView([this.lattitudeMap, this.longitudeMap], 12);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);

        /* CREATION DU MARKER SUR LA MAP */
        const marker = L.marker([this.lattitudeMap, this.longitudeMap]);
        this.map.addLayer(marker);
    }
}

new Carte();