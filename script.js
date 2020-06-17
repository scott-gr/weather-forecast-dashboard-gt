$(document).ready(function () {
  var queryURL =
    'https://api.openweathermap.org/data/2.5/weather?q=atlanta&appid=736a813945a5dede2518eacfa29fd0b4';
  $.ajax({
    url: queryURL,
    method: 'GET',
  }).then(function (response) {
    console.log(response);



    
  });
});
