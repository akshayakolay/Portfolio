<html>
<meta charset=”UTF-8″>
 
  <head>
      <title>Weather API</title>
      <script src=”https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js”></script>
  </head>
<body>
  <h1>Current Weather Conditions in San Jose, California</h2>
 
<script>
 
  var settings = {
  “async”: true,
  “crossDomain”: true,
  “url”: “https://api.openweathermap.org/data/2.5/weather?zip=95050&appid=3a155137ad9e4c7c3b5ac6abd7957c7a&units=imperial”,
  “method”: “GET”,
}
 
$.ajax(settings).done(function(response) {
console.log(response);
 
$(“#lon”).append(response.coord.lon);
$(“#lat”).append(response.coord.lat);
$(“#mainTemp”).append(response.main.temp);
$(“#windSpeed”).append(response.wind.speed);
$(“#humidity”).append(response.main.humidity);
$(“#pressure”).append(response.main.pressure);
$(“#tempMin”).append(response.main.temp_min);
$(“#tempMax”).append(response.main.temp_max);
 
var dt = eval(response.dt * 1000);
var myDate = new Date(dt);
$(“#time”).append(myDate.toLocaleString());
});
 
</script>
 
<div id = “lon”>Longitude:  </div> 
<div id = “lat”>Latitude:  </div> 
<div id = “mainTemp”>Temperature:  </div> 
<div id = “windSpeed”>Wind Speed: </div>
<div id = “humidity”>Humidity: </div>
<div id = “pressure”>Pressure: </div>
<div id = “tempMin”>Low Temperature: </div>
<div id = “tempMax”>High Temperature: </div>
 
</body>
</html>