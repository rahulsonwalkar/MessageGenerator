module.exports = function (string, placeHolder, value) {

  var a = string.substring(0, string.indexOf(placeHolder)); //Substring before the placeHolder
  var b = string.substring(string.indexOf(placeHolder) + placeHolder.length, string.length);  //Substring after the placeHolder

  return a + value + b;
}
