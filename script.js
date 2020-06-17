$(document).ready(function () {
  var searchCity = 'atlanta'
  var queryURL =
    'https://api.openweathermap.org/data/2.5/weather?q=' + searchCity + '&appid=736a813945a5dede2518eacfa29fd0b4';
  
    $.ajax({
    url: queryURL,
    method: 'GET',
  }).then(function (response) {
    console.log(response);




  });
});
