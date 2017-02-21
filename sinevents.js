// srapes the wiki and print an array of the not recurring events coming up at
// Noisebridge.

var cheerio = require("cheerio");

var request = require("request");


var url = "https://noisebridge.net/wiki/Noisebridge"

var promout = new Promise(

function(resolve, reject){
  request(url, function(err, res, html){
    if(err){
      reject(err)
    }

    var $ = cheerio.load(html);

    var lin = $(".vevent");
    var events = [];
    //console.log(lin.toString())
    lin.each(function(i, elem) {
      events[i] = $(this).text();
    });
    resolve(events)
  })
})


module.exports =  promout;
