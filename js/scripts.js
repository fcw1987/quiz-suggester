// Back-End logic
$(document).ready(function() {

  $("#submitForm").click(function(){
      var firstName = $("input#firstName").val();
      var email = $("input#emailAddress").val();
      var result = parseInt($("select#result").val());
      $("#javaScript").hide();
      $("#cSharp").hide();
      $("#go").hide();
      $("#python").hide();
      $("#swifthide").hide();



      if (result == 1 || result == 2) {
        $("#javaScript").show();
      }
      else if (result == 3 || result == 4) {
        $("#cSharp").show();
      }
      else if (result == 5 || result == 6) {
        $("#go").show();
      }
      else if (result == 7 || result == 8) {
        $("#python").show();
      }
      else if (result == 9 || result == 10) {
        $("#swift").show();
      }
      else {
        alert("Error has been detected! Be sure that you select a value for between 1-10 on the last question.");
      }
      document.getElementById('emailResult').innerHTML = email;
      document.getElementById('nameResult').innerHTML = firstName;


    event.preventDefault();




});


    });



// Front-End logic
