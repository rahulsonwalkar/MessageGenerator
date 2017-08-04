var dateTime = require('node-datetime');  //Need for Greeting

module.exports = function (){

  var dt = dateTime.create();
  //Generate Current time
  var currentHour = dt.format('H');

  //Generate greeting according to current time
  if((currentHour >= 0 && currentHour <= 3) || (currentHour >= 18)) {
    greeting = "Good evening";
  }
  else if(currentHour >= 4 && currentHour <= 11) {
    greeting = "Good morning";
  }
  else if(currentHour >=12 && currentHour <= 17) {
    greeting = "Good afteroon";
  }

  return greeting;
}
