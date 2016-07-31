const HussApi = {

  getData: function() {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: "https://k6xiqf7156.execute-api.us-east-1.amazonaws.com/prod/getSentiments",
        headers: { "x-api-key": "B4ncJJtsizapj44wrGbgO8k6lfApO0FIfzEicLZ6" },
        type: "GET",
        success: function(hussDB){
          dynoDB = JSON.parse(hussDB);
          promises = [];
          for (var location in dynoDB) {
            let sentiments = dynoDB[location];
            let sentSum = sentiments.reduce(function(a, b) { return a + b; });
            let sentiment = sentSum / sentiments.length;
            //console.log(`Array: ${sentiments} Average: ${sentiment}`);
            
            promises.push(HussApi.setValues(location, sentiment));
          }

          resolve(Promise.all(promises).then((results) => {
            //console.log('results', results, results.filter((data) => { return data !== null; }));

            return results.filter((data) => { return data !== null; });
          }));
        }
      });
    });
  },

  setValues: function(location, sentiment) {
    var lng = 0.0;
    var lat = 0.0;

    return new Promise((resolve, reject) => {
      $.ajax({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyC33DeR4FF-P5aMOapgvdliUIm5IK-yiVA`,
        type: "GET",
        success: function(googData){
          if(googData.status != "ZERO_RESULTS"){
            lng = googData.results[0].geometry.location.lng;
            lat = googData.results[0].geometry.location.lat;
            //console.log(`lat: ${lat}, lng: ${lng}, sentiment: ${sentiment}`);
            resolve({
              lat: lat,
              lng: lng,
              sentiment: sentiment,
              location: location
            });
          }
          else {
            resolve(null);
          }
        }
      }); 
    });
  }
}
