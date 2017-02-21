  // got to do some cherio scraping to get the calendar days stuff happens a nb
// The rusult is a array where each line is a html element from the repeating
// events section of the wiki.

var cheerio = require("cheerio");

var request = require("request");


var url = "https://noisebridge.net/wiki/Noisebridge";

var promex = new Promise(

function(resolve, reject){

  request(url, function(err, res, html){

    if(err){
      reject(err)
    }

    var $ = cheerio.load(html);
    var lin = $(".recurring-events");
  //  console.log(typeof(lin.text()))
    var eventtext = lin.text();

    var spltext = eventtext.split('\n')

    resolve(spltext)

  })

})


module.exports = promex;
