$(document).ready(function () {
// 

  var searchCity = 'atlanta';// change city to test
  var apiKey = "1935f5d7d75a269680ddfadd7b264dcb";
// today forecast query and api key
    var queryURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      searchCity +
      "&units=imperial&appid=" +
      apiKey;
// 5 day forecast queury and key
    // var queryfiveURL =
    //   "https://api.openweathermap.org/data/2.5/forecast?q=" +
    //   searchCity +
    //   "&units=imperial&appid=" +
    //   apiKey;
  $.ajax({
    url: queryURL,
    method: 'GET',
  }).then(function (response) {


    
    console.log(response);
  });
});
