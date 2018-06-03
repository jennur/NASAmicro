var apiKey = "sl1hP0MUGkJLn8tw2qXsxb6235u91ndRBDuD0O2d";

var date = new Date();
var startDate = dateFormat(date);

//var nextDate = new Date(date.getTime() + 7*24*60*60*1000);
var endDate = startDate;//dateFormat(nextDate);
console.log(startDate);

var request = new XMLHttpRequest(); //creating an HTTP request to connect to the API
request.open('GET', 'https://api.nasa.gov/neo/rest/v1/feed?start_date=' + startDate + '&end_date=' + endDate + '&detailed=true&api_key=' + apiKey, true);
//request.open('GET', 'https://api.nasa.gov/neo/rest/v1/feed/today?detailed=true&api_key=' + apiKey, true); //making asynchronous call to load JSON data
request.onload = function(){ //creating function to be called when content is loaded
  if(this.status >= 200 && this.status < 400){ //if the request was successful
    var data = JSON.parse(this.response); //assign loaded JSON content to variable
    console.log(data);
    console.log();

    var asteroidName = document.getElementById('asteroid-name');
    asteroidName.innerHTML = data["near_earth_objects"][startDate]["0"]["name"];

    //Append content to page
    var details = document.getElementById('details-list');

    var asteroid = data["near_earth_objects"][startDate]["0"];
    var diameter = document.createElement('li');
    details.appendChild(diameter);
    diameter.innerHTML = "<b>Estimated diameter (min/max):</b><br /> " + asteroid.estimated_diameter.meters.estimated_diameter_min + " m / "
    + asteroid.estimated_diameter.meters.estimated_diameter_max + " m <br />"
    + asteroid.estimated_diameter.feet.estimated_diameter_min + " ft / " + asteroid.estimated_diameter.feet.estimated_diameter_max + " ft";

    var velocity = document.createElement('li');
    details.append(velocity);
    velocity.innerHTML = "<b>Relative velocity:</b><br />" + asteroid.close_approach_data["0"].relative_velocity.kilometers_per_hour + " km/h <br />"
    + asteroid.close_approach_data["0"].relative_velocity.miles_per_hour + "miles/h";

    var distance = document.createElement('li');
    details.appendChild(distance);
  }
  else{
    console.log('error. Request status: ' + request.status); //error message to the console if request failed
  }
};
request.send();



//Function for giving the required date format
function dateFormat(date){
  var yyyy = date.getFullYear();

  var mm = date.getMonth() + 1;
  if(mm < 10){
    mm = '0' + mm;
  }

  var dd = date.getDate();
  if(dd < 10){
    dd = '0' + dd;
  }
return yyyy + '-' + mm + '-' + dd;
}
