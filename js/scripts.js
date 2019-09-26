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
        alert("Error has been detected");
      }

    event.preventDefault();




});


    });



// Front-End logic
