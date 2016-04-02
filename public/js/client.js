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

  var body = document.getElementById('body');
  var city = document.createElement('header');
  city.innerHTML = dataOverload.city.name;
  body.appendChild(city);

  for (var i = 0; i < dataOverload.list.length; i++){
    var cardObj = document.createElement('div');
    cardObj.classList.add = "cardObj";
    cardObj.id = dataOverload.list[i].dt_txt;
    cardObj.innerHTML = dataOverload.list[i].dt_txt + i;
    body.appendChild(cardObj);

    var description = document.createElement('div');
    description.classList.add = "desc";
    description.id = dataOverload.list[i].dt_txt + i + "d";
    description.innerHTML = dataOverload.list[i].weather[0].description;
    cardObj.appendChild(description);

    var temp = document.createElement('div');
    temp.classList.add = "temp";
    temp.id = dataOverload.list[i].dt_txt + i + "t";
    temp.innerHTML = Math.round(((dataOverload.list[i].main.temp - 273.15)*1.8) +32) + " degrees Fahrenheit";
    cardObj.appendChild(temp);

    var humidity = document.createElement('div');
    humidity.classList.add = "hum";
    humidity.id = dataOverload.list[i].dt_txt + i + "h";
    humidity.innerHTML = "Humidity: " + dataOverload.list[i].main.humidity;
    cardObj.appendChild(humidity);
  }




}; //End of Request Listener


//date
//description
//temp
//humidity


// create a city headline > append to window
// create a card object >append to window
// create a description, temp, humidity div > append to card object

// stretch, create an icon and append to card
