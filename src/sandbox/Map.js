class Map {
    constructor() {
        this.map = new google.maps.Map(document.getElementById('sentimentMap'), {
            center: {lat: 30, lng: 30},
            zoom: 3
        });
    }

    renderData(allData) {
        for (let data of allData) {
            console.log(data);

            new google.maps.Marker({
                position: {
                    lat: data.lat,
                    lng: data.lng
                },
                map: this.map,
                icon: this.getIconBySentiment(data.sentiment)
            });
        }
    }

    getIconBySentiment(sentiment) {
        sentiment = Math.round(sentiment);

        return icons.default.getLink(sentiment);
    }
}