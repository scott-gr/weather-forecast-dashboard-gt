$(document).ready(function () {
  //

  var searchCity = 'atlanta'; // change city to test
  var apiKey = '1935f5d7d75a269680ddfadd7b264dcb';
  // today forecast query and api key
  var queryURL =
    'https://api.openweathermap.org/data/2.5/weather?q=' +
    searchCity +
    '&units=imperial&appid=' +apiKey;
  
    // 5 day forecast queury and key
  var queryfiveURL =
  "https://api.openweathermap.org/data/2.5/forecast?q=" +
  searchCity +
  "&units=imperial&appid=" +apiKey;

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

// using moment script to advance calendar for 5 day forecast
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
// seperate ajax call for five day forecast query
      $.ajax({
        url: queryfiveURL,
        method: "GET",
      }).then(function (response) {
        // console.log(response);
        //variables for each piece of data
        ///Day 1
        var dayOneTemp = response.list[3].main.temp;
        var dayOneHum = response.list[3].main.humidity;
        var dayOneIcon = response.list[3].weather[0].icon;
        var dayOneIconURL = "http://openweathermap.org/img/w/" + dayOneIcon + ".png";
        /// Day 2
        var dayTwoTemp = response.list[11].main.temp;
        var dayTwoHum = response.list[11].main.humidity;
        var dayTwoIcon = response.list[11].weather[0].icon;
        var dayTwoIconURL = "http://openweathermap.org/img/w/" + dayTwoIcon + ".png";
       //// Day 3
        var dayThreeTemp = response.list[19].main.temp;
        var dayThreeHum = response.list[19].main.humidity;
        var dayThreeIcon = response.list[19].weather[0].icon;
        var dayThreeIconURL = "http://openweathermap.org/img/w/" + dayThreeIcon + ".png";
        /// Day 4
        var dayFourTemp = response.list[27].main.temp;
        var dayFourHum = response.list[27].main.humidity;
        var dayFourIcon = response.list[27].weather[0].icon;
        var dayFourIconURL = "http://openweathermap.org/img/w/" + dayFourIcon + ".png";
        //// Day 5
        var dayFiveTemp = response.list[35].main.temp;
        var dayFiveHum = response.list[35].main.humidity;
        var dayFiveIcon = response.list[35].weather[0].icon;
        var dayFiveIconURL = "http://openweathermap.org/img/w/" + dayFiveIcon + ".png";
        //Day 1 elements
        $("#temp-one").text("Temp: "+dayOneTemp);
        $("#hum-one").text("Humidity: "+dayOneHum+"%");
        $("#icon-one").attr("src", dayOneIconURL);
        //Day 2 elements
        $("#temp-two").text("Temp: "+dayTwoTemp);
        $("#hum-two").text("Humidity: "+dayTwoHum+"%");
        $("#icon-two").attr("src", dayTwoIconURL);
        // Day 3 elements
        $("#temp-three").text("Temp: "+dayThreeTemp);
        $("#hum-three").text("Humidity: "+dayThreeHum+"%");
        $("#icon-three").attr("src", dayThreeIconURL);
        // Day 4 elements
        $("#temp-four").text("Temp: "+dayFourTemp);
        $("#hum-four").text("Humidity: "+dayFourHum+"%");
        $("#icon-four").attr("src", dayFourIconURL);
        //Day 5 elements
        $("#temp-five").text("Temp: "+dayFiveTemp);
        $("#hum-five").text("Humidity: "+dayFiveHum+"%");
        $("#icon-five").attr("src", dayFiveIconURL);
      });
    });
  }
  getForecast();
});


