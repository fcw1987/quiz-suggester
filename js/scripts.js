// Back-End logic
$(document).ready(function() {
  $("#submitForm").click(function(){
      var firstName = $("input#firstName").val();
      var email = $("input#emailAddress").val();
      var result = parseInt($("select#result").val());



      if (result == 1 || result == 2) {
        alert("Python");
      }
      else if (result == 3 || result == 4) {
        alert("cSharp");
      }
      else if (result == 5 || result == 6) {
        alert("Go");
      }
      else if (result == 7 || result == 8) {
        alert("Swift");
      }
      else if (result == 9 || result == 10) {
        alert("JavaScript");
      }
      else {
        alert("Error has been detected");
      }

    event.preventDefault();




});


    });



// Front-End logic
