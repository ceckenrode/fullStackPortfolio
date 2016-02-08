$(document).ready(function() {

  var clickStr = "Click Your Friends is a memory game where you must click each individual picture once to ";
  clickStr += "score the most possible points in 20 seconds. On each correct click the images are randomized. Click ";
  clickStr += "a person twice and there will be consequences! <a href='https://gentle-savannah-1518.herokuapp.com/' target='_blank'> View Demo </a>";

  var pokeStr = "Choose Your Starter is a Pokémon themed Rock, Paper, Scissors game. Choose between Squirtle, Charmander, or Bulbasaur ";
  pokeStr += "and face off with the computer. <a href='http://serene-sierra-8566.herokuapp.com/' target='_blank'> View Demo </a> ";

  var seaStr = "A website I created for the band Seahaven using Tumblr as a content management ";
  seaStr += "system. <a href='http://developtest1991.tumblr.com' target='_blank'>View Demo </a>";

  var kayStr = "A kayak travel clone. Search for Hotels or match by criteria.";
  kayStr += " <a href='https://kayakclonehotel.herokuapp.com/comparison.html' target='_blank'>View Demo </a>";

  var bitStr = "BitCurrents is a real time and historical bitcoin price tracking an analytics application, ";
  bitStr += "providing currency conversion and insights through news and social signals. ";
  bitStr += "<a href='http://bitcurrents.herokuapp.com' target='_blank'>View Demo </a>";


  $("#clickyourfriends").click(function(event) {
    bootbox.alert(clickStr);
  });


  $("#chooseyourstarter").click(function(event) {
    bootbox.alert(pokeStr);
  });

  $("#seahaven").click(function(event) {
    bootbox.alert(seaStr);
  });

  $("#seahave").click(function(event) {
    bootbox.alert(seaStr);
  });

  $("#kayakclone").click(function(event) {
    bootbox.alert(kayStr);
  });
  
  $("#bitcur").click(function(event) {
    bootbox.alert(bitStr);
  });


});
