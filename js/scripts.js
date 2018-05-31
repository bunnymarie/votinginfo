$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age >= 18) {
      $('#voterEligible').show();
  } else if (age === 18) {
    alert("Congrats on being a big kid!");
    $('#voterEligible').show();
  } else {
    $('#voterIneligible').show();
  }
});
