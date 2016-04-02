var triggerBtn = document.getElementById('trigger');
triggerBtn.addEventListener('click', function(event){
  event.preventDefault();

  var userInput = document.getElementById('userInput');

  var dataRequest = new XMLHttpRequest();
  dataRequest.addEventListener('load', requestListener);
  dataRequest.open('GET', "http://api.openweathermap.org/data/2.5/forecast?q=" + userInput.value + ",us&mode=json&APPID=2b87a40c6a1ed2a5c9d2683ce6641c3d")
  dataRequest.send();
});

var displayData = document.getElementById('displayData');

function requestListener(){
  // displayData.innerHTML = this.responseText;
  var dataOverload = JSON.parse(this.responseText);
  var city = dataOverload.city.name;
  var displayArr = [];
  for (var i = 0; i < dataOverload.list.length; i++){
      displayArr.push(dataOverload.list[i].dt_txt);
  };
  displayArr.map(function(set){

  });
};

