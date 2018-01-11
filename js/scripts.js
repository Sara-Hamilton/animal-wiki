$(document).ready(function() {
  $("#animalType").click(function(event){

  var animalChoice = $("input:radio[name=animal]:checked").val();

  if (animalChoice === "alpaca") {
    $('#catsInfo').hide();
    $('#frogInfo').hide();
    $('#alpacaInfo').show();
  } else if (animalChoice === "cats") {
    $('#frogInfo').hide();
    $('#alpacaInfo').hide();
    $('#catsInfo').show();
  } else {
    $('#alpacaInfo').hide();
    $('#catsInfo').hide();
    $('#frogInfo').show();
  }

  event.preventDefault();
  });
});
