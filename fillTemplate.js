var replacePlaceHolder = require('./replacePlaceHolder');

module.exports = function(template, greeting, hotel, guest, room) {

  //Replace each place holder
  template = replacePlaceHolder(template, '{greeting}', greeting);
  template = replacePlaceHolder(template, '{hotel}', hotel);
  template = replacePlaceHolder(template, '{guest}', guest);
  template = replacePlaceHolder(template, '{room}', room);

  return template; //Returns template with placeholders replaced by values.
}
