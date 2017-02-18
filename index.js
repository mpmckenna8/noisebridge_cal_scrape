// got to do some cherio scraping to get the calendar days stuff happens a nb

var cheerio = require("cheerio");

var request = require("request");


var url = "https://noisebridge.net/wiki/Noisebridge"
request(url, function(err, res, html){

  console.log(typeof html)
  var $ = cheerio.load(html);
  var lin = $(".recurring-events");

//  console.log(lin.toString())


  console.log(typeof(lin.text()))

  var eventtext = lin.text();

  var spltext = eventtext.split('\n')

  console.log(spltext)
  

})
