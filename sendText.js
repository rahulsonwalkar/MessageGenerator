// Twilio Credentials
var accountSid = 'AC3a3f24027892dff7b5a15769f6028eb6';
var authToken = 'a0a65115f197000b6f9bb5d33af64c03';

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);

module.exports = function(message, phoneNumber){

  //Send text with following details:
  client.messages.create({
      to: phoneNumber,
      from: "+12144999437",
      body: message,
  }, function(err, errorText) {
    if(err) {
        console.log(errorText.sid);  //Log Error, if any.
    }
  });
}
