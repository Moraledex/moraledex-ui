class Map {
    constructor() {
        this.map = new google.maps.Map(document.getElementById('sentimentMap'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8
        });
    }
}