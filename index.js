
var generateMessage = require('./generateMessage'); // Parameters: templateID, guestID, hotelID
var fs = require('fs'); //Read data from files
var readline = require('readline');   //Read input from console
var sendText = require('./sendText');

//Used to read input from the console.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Get lists of Available Templates, Guests and Hotels
var templateList = JSON.parse(fs.readFileSync('./data/templates.json'));
var guestsList = JSON.parse(fs.readFileSync('./data/Guests.json'));
var hotelsList = JSON.parse(fs.readFileSync('./data/Companies.json'));
var phoneNumber = JSON.parse(fs.readFileSync('./data/phoneNumber.json')).phoneNumber;

logTemplates(templateList);
rl.question('Enter the Template ID: ', function(templateID) {
  logGuests(guestsList);
  rl.question('Enter the Guest ID: ', function(guestID){
    logHotels(hotelsList);
    rl.question('Enter the Hotel ID: ', function(hotelID){
      console.log(generateMessage(templateID, guestID, hotelID)); //Generate message
      sendText(generateMessage(templateID, guestID, hotelID), phoneNumber); //Send Text through Twilio
    });
  });
});

//Print choices of Templates to the console.
function logTemplates(list){
  console.log('TEMPLATES: ');
  for (var i = 0; i < list.length; i++) {
    console.log(list[i].id + "  " + "Example: " + list[i].sample);
  }
}

//Print choices of Hotels to the console.
function logHotels(list){
  console.log('HOTELS: ');
  for (var i = 0; i < list.length; i++) {
    console.log(list[i].id + "  " + list[i].company);
  }
}

//Print choices of Guests to the console.
function logGuests(list){
  console.log('GUESTS: ');
  for (var i = 0; i < list.length; i++) {
    console.log(list[i].id + "  " + list[i].firstName + " " + list[i].lastName);
  }
}
