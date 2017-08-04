var fs = require('fs');
var fillTemplate = require('./fillTemplate');
var getGreeting = require('./getGreeting');
module.exports = function(templateID, guestID, hotelID) {

  var greeting = getGreeting(); //Pick a greeting
  var hotel = JSON.parse(fs.readFileSync('./data/Companies.json'))[hotelID - 1].company;  //Get Hotel Name from ID
  var guest = JSON.parse(fs.readFileSync('./data/Guests.json'))[guestID - 1].firstName;  //Get Guest Name from ID
  var template = JSON.parse(fs.readFileSync('./data/templates.json'))[templateID - 1].body;  //Get Template from ID
  var room = JSON.parse(fs.readFileSync('./data/Guests.json'))[guestID - 1].reservation.roomNumber;  //Get Room number from Guest details
  var timeZone = JSON.parse(fs.readFileSync('./data/Guests.json')) [hotelID - 1].timeZone; //Get TimeZone from Hotel details

  return fillTemplate(template, greeting, hotel, guest, room);

}
