
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
rl.question('Enter a choice for Template (1, 2 or 3) : ', function(templateID) {
  console.log(" ");
  logGuests(guestsList);
  rl.question('Enter a choice for Guest (1, 2, 3, 4, 5 or 6) : ', function(guestID){
    console.log(" ");
    logHotels(hotelsList);
    rl.question('Enter a choice for Hotel (1, 2, 3, 4 or 5) : ', function(hotelID){
      console.log(" ");
      console.log("Your message: ");
      console.log(generateMessage(templateID, guestID, hotelID)); //Generate message
      sendText(generateMessage(templateID, guestID, hotelID), phoneNumber); //Send Text through Twilio
    });
  });
});

//Print choices of Templates to the console.
function logTemplates(list){
  console.log(" ");
  console.log(" ");
  console.log('Pick a Template: ');
  console.log(" ");
  for (var i = 0; i < list.length; i++) {
    console.log(list[i].id + "  " + "Example: " + list[i].sample);
  }
}

//Print choices of Hotels to the console.
function logHotels(list){
  console.log(" ");
  console.log(" ");
  console.log('Pick a Hotel: ');
  console.log(" ");
  for (var i = 0; i < list.length; i++) {
    console.log(list[i].id + "  " + list[i].company);
  }
}

//Print choices of Guests to the console.
function logGuests(list){
  console.log(" ");
  console.log(" ");
  console.log('Pick a guest: ');
  console.log(" ");
  for (var i = 0; i < list.length; i++) {
    console.log(list[i].id + "  " + list[i].firstName + " " + list[i].lastName);
  }
}
