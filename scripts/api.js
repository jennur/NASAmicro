var apiKey = "sl1hP0MUGkJLn8tw2qXsxb6235u91ndRBDuD0O2d";

var date = new Date();
var startDate = dateFormat(date);

//var nextDate = new Date(date.getTime() + 7*24*60*60*1000);
var endDate = startDate;//dateFormat(nextDate);
console.log(startDate);

var request = new XMLHttpRequest(); //creating an HTTP request to connect to the API
request.open('GET', 'https://api.nasa.gov/neo/rest/v1/feed?start_date=' + startDate + '&end_date=' + endDate + '&detailed=true&api_key=' + apiKey, true); //making asynchronous call to load JSON data
request.onload = function(){ //creating function to be called when content is loaded
  if(this.status >= 200 && this.status < 400){ //if the request was successful
    var data = JSON.parse(this.response); //assign loaded JSON content to variable
    console.log(data);
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
