$(document).ready(function(){
  var cardSuits = ["clubs", "diamonds", "spades", "hearts"];
  var cardRanks = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];

  cardSuits.forEach(function(suit){
    cardRanks.forEach(function(rank){
      $("#deck").append("<li>" +  rank + " of " + suit + "</li>")
    });
  });











});
