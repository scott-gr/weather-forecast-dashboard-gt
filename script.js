$(document).ready(function () {
  //

  var searchCity = '#search-city'; // change city to test
  var apiKey = '1935f5d7d75a269680ddfadd7b264dcb';
  // today forecast query and api key
  var queryURL =
    'https://api.openweathermap.org/data/2.5/weather?q=' +
    searchCity +
    '&units=imperial&appid=' +
    apiKey;
  //today's date, to be displayed at top of Today element
  function getForecast(searchCity) {
    var dateToday = moment().format('M/D/YYYY'); //id is #today-date
    $.ajax({
      url: queryURL,
      method: 'GET',
    }).then(function (response) {
      // console.log(response);
      //Weather data points from api - to be assigned to text in 'Today' element
      var tempToday = response.main.temp;
      var humToday = response.main.humidity;
      var windsToday = response.wind.speed;
      var iconToday = response.weather[0].icon;
      var iconTodayUrl =
        'http://openweathermap.org/img/w/' + iconToday + '.png';
      // // latitude and longitude needed for UV Index
      // var latToday = response.coord.lat;
      // var lonToday = response.coord.lon;
      // linking html ids to variables above
      $('#today-date').text(response.name + ' ' + dateToday);
      $('#temp-today').text('Temperature: ' + tempToday + ' F');
      $('#hum-today').text('Humidity: ' + humToday + '%');
      $('#winds-today').text('Wind: ' + windsToday + ' mph');
      $('#icon-today').attr('src', iconTodayUrl);


      var dayOne = moment().add(1, 'days');
      dayOne = dayOne.format("M/D/YYYY");
      $('#day-one').text(dayOne);

      var dayTwo = moment().add(2, 'days');
      dayTwo = dayTwo.format("M/D/YYYY");
      $('#day-two').text(dayTwo);

      var dayThree = moment().add(3, 'days');
      dayThree = dayThree.format("M/D/YYYY");
      $('#day-three').text(dayThree);

      var dayFour = moment().add(4, 'days');
      dayFour = dayFour.format("M/D/YYYY");
      $('#day-four').text(dayFour);

      var dayFive = moment().add(5, 'days');
      dayFive = dayFive.format("M/D/YYYY");
      $('#day-five').text(dayFive);
    });
  }
  getForecast();
});

// 5 day forecast queury and key
// var queryfiveURL =
//   "https://api.openweathermap.org/data/2.5/forecast?q=" +
//   searchCity +
//   "&units=imperial&appid=" +
//   apiKey;
