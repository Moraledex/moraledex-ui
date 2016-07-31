const realData = [];

const HussApi = {

  getData: function() {
    var sentiment;
    var sentSum;
    var sentiments = [];
    $.ajax({
      url: "https://k6xiqf7156.execute-api.us-east-1.amazonaws.com/prod/getSentiments",
      headers: { "x-api-key": "B4ncJJtsizapj44wrGbgO8k6lfApO0FIfzEicLZ6" },
      type: "GET",
      success: function(hussDB){
        dynoDB = JSON.parse(hussDB);
        for (var location in dynoDB) {
          sentiments = dynoDB[location];
          sentSum = sentiments.reduce(function(a, b) { return a + b; });
          sentiment = sentSum / sentiments.length;
          console.log(`Array: ${sentiments} Average: ${sentiment}`);
          HussApi.setValues(location, sentiment);
        }
      }
    });
    return realData;
  },

  setValues: function(location, sentiment) {
    var lng = 0.0;
    var lat = 0.0;
    $.ajax({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyC33DeR4FF-P5aMOapgvdliUIm5IK-yiVA`,
      type: "GET",
      success: function(googData){
        if(googData.status != "ZERO_RESULTS"){
          lng = googData.results[0].geometry.location.lng;
          lat = googData.results[0].geometry.location.lat;
          console.log(`lat: ${lat}, lng: ${lng}, sentiment: ${sentiment}`);
          realData.push({
            lat: lat,
            lng: lng,
            sentiment: sentiment
          })
        }
      }
    });
  }
}
