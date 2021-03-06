class Carte {
    constructor() {
        this.lattitudeMap = 47.46459548453795;
        this.longitudeMap = -0.5197535425381884;
        this.conteneurMap = document.getElementById("map");
        this.initMap();
    }

    initMap() {

        this.map = L.map('map', {
            zoomControl: false
        }).setView([this.lattitudeMap, this.longitudeMap], 14);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

        /* CREATION DU MARKER SUR LA MAP */
        const marker = L.marker([this.lattitudeMap, this.longitudeMap]);
        this.map.addLayer(marker);
    }
}

new Carte();