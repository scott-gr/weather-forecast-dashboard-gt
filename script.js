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
      //today's date, to be displayed at top of Today element
    var dateToday = moment().format('(M/D/YYYY'); //id is #today-date
  $.ajax({
    url: queryURL,
    method: 'GET',
  }).then(function (response) {
    // console.log(response);
    //Weather data points from api - to be assigned to text in 'Today' element
    var tempToday = response.main.temp;
    var humToday = response.main.humidity;
    var windsToday = response.main.wind.speed;
    var iconToday = response.weather[0].icon;
    var iconTodayUrl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    var latToday = response.coord.lat;
    var lonToday = response.coord.lon;



    

  });
});

// 5 day forecast queury and key
    // var queryfiveURL =
    //   "https://api.openweathermap.org/data/2.5/forecast?q=" +
    //   searchCity +
    //   "&units=imperial&appid=" +
    //   apiKey;