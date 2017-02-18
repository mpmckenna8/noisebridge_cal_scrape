var cheerio = require("cheerio");

var request = require("request");


var url = "https://noisebridge.net/wiki/Noisebridge"

request(url, function(err, res, html){

  var $ = cheerio.load(html);

  var lin = $(".vevent");
  var fruits = [];
  //console.log(lin.toString())
  lin.each(function(i, elem) {
    fruits[i] = $(this).text();
  });

  console.log(fruits)

  var sma = cheerio.load(lin.toString())

  var starts = sma(".dtstart");

  //console.log(starts)
//  console.log(Object.keys(lin));
//  console.log(lin.children().text().split('\n'))

  for(i=0; i < starts.length; i++){
//    console.log(starts[i])
  }
})
