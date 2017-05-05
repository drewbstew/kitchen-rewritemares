// SELECTORS

var chefFirstName = $('#chef-first-name')
var chefLastName = $('#chef-last-name')
var restaurantName = $('#restaurant-name')
var submitButton = $('#submit')
// DOM

var episodeTitle = $('#episode-title')

// EVENTS

submitButton.on('click', function(){
  changeEpisodeTitle();
})

//LOGIC

//METHODS

function changeEpisodeTitle(name){
  episodeTitle.text(
    'Episode: ' + restaurantName.val()
  )
}

/*
DOCUMENT READY
*/

$(document).ready(function() {

});
