const express = require('express')
const twit = require('twit')
const app = express()
var randomWords = require('random-words');



var Twit = require('twit');
const { text } = require('express');

var T = new Twit({
  consumer_key:         'fIbxklr0mwAAYZhvhiGvPDR8v',
  consumer_secret:      'NGUKzRHQz7MrX7UFatMUfm5Pf7u6ByhiPbjHD1IPDd0wqBoquU',
  access_token:         '954368198-odYM3X0WUDZPsaX2xOL9Hpk8zJMOSpN7fMxazv99',
  access_token_secret:  '76k0XAS0k7qvzLR4yNKInCqFsI74gLC68z4P3GVyMlFAC',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})

var i = 1;                  

function changeName() {         
  setTimeout(function() {   
    T.get('statuses/mentions_timeline', { count: '1'}, function(err, data, response) {//get the twitter reply
      console.log(data[0].text)
          T.post('account/update_profile', { name: data[0].text.replace("@latigarxa", "") }, function(err, data, response) {//change the name of user
        console.log(data);
      }); 
    });                    
    if (i>0) {           
      changeName();             
    }                       
  }, 30000) //delay of 30 seconds
}
changeName();

var port = process.env.PORT || 8080;
var server=app.listen(port,function() {
  console.log("app running on port 8080"); });
