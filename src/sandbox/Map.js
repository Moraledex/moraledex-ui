class Map {
    constructor(iconSet) {
        this.map = new google.maps.Map(document.getElementById('sentimentMap'), {
            center: {lat: 30, lng: 30},
            zoom: 3
        });

        //get a random icon set
        //let keys = Object.keys(icons);
        //this.iconSet = icons[keys[keys.length * Math.random() << 0]];
    }

    renderData(iconKey, allData) {
        console.log(iconKey);

        this.iconSet = icons[iconKey];

        allData = allData.sort((a, b) => {
            return a.sentiment - b.sentiment;
        })

        /*
        for (let data of allData) {
            //console.log(data);

            
        }
        */

        this.renderSingleData(allData[0], allData.slice(1));
    }

    renderSingleData(data, remainingData) {
        new google.maps.Marker({
            position: {
                lat: data.lat,
                lng: data.lng
            },
            map: this.map,
            animation: google.maps.Animation.DROP,
            icon: this.getIconBySentiment(data.sentiment),
            title: 'Sentiment: ' + data.sentiment
        });

        if (remainingData.length > 0) {
            setTimeout(this.renderSingleData.bind(this, remainingData[0], remainingData.slice(1)), 10);
        }
    }

    getIconBySentiment(sentiment) {
        sentiment = Math.round(sentiment);

        return this.iconSet.getLink(sentiment);
    }
}