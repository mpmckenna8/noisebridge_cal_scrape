// got to do some cherio scraping to get the calendar days stuff happens a nb
// The rusult is a array where each line is a html element from the repeating
// events section of the wiki.

var getrepeats = require('./repeat_events.js');

var sinevents = require('./sinevents.js')

var fs = require('fs');


var nowDate = Date.now();

var repeatfile = 'repeats/repeatevents'+ nowDate + ".json";
var sinfile = 'singles/singleevents'+ nowDate + ".json";


getrepeats.then(function(val){

  fs.writeFile(repeatfile, JSON.stringify(val), (err)=>{
    if(err) throw err;

    console.log('saved new version of repeatfile at .', repeatfile)

  })

}).catch(function(err){

  console.log('failure in the promiseing')
  "error and have", console.log(err)
})


sinevents.then(function(val){

  fs.writeFile(sinfile, JSON.stringify(val), (err)=>{
    if(err) throw err;
      console.log('saved new version of repeatfile at .', sinfile)
  })

}).catch(function(err){

  console.log('failure in the promiseing')
  "error and have", console.log(err)
})
