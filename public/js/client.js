var triggerBtn = document.getElementById('trigger');
triggerBtn.addEventListener('click', function(event){
  event.preventDefault();

  var userInput = document.getElementById('userInput');

  var dataRequest = new XMLHttpRequest();
  dataRequest.addEventListener('load', requestListener);
  dataRequest.open('GET', "http://api.openweathermap.org/data/2.5/forecast?q=" + userInput.value + ",us&mode=json&APPID=2b87a40c6a1ed2a5c9d2683ce6641c3d")
  dataRequest.send();
});

function requestListener(){

  var dataOverload = JSON.parse(this.responseText);
  console.log('dataOverload',dataOverload);

  var container = document.getElementById('container');
  var city = document.getElementById('cityName');
  city.innerHTML = dataOverload.city.name + " Forecast";

  for (var i = 0; i < dataOverload.list.length; i++){
    var cardObj = document.createElement('div');
    cardObj.className = "cardObj";
    cardObj.id = dataOverload.list[i].dt_txt;
    cardObj.innerHTML = dataOverload.list[i].dt_txt + i;
    container.appendChild(cardObj);

    var description = document.createElement('div');
    description.className = "desc";
    description.id = dataOverload.list[i].dt_txt + i + "d";
    description.innerHTML = dataOverload.list[i].weather[0].description;
    cardObj.appendChild(description);

    var temp = document.createElement('div');
    temp.className = "temp";
    temp.id = dataOverload.list[i].dt_txt + i + "t";
    temp.innerHTML = Math.round(((dataOverload.list[i].main.temp - 273.15)*1.8) +32) + " degrees Fahrenheit";
    cardObj.appendChild(temp);

    var humidity = document.createElement('div');
    humidity.className = "hum";
    humidity.id = dataOverload.list[i].dt_txt + i + "h";
    humidity.innerHTML = "Humidity: " + dataOverload.list[i].main.humidity + "%";
    cardObj.appendChild(humidity);
  }

}; //End of Request Listener