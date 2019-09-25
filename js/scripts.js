// Back-End logic
$(document).ready(function() {
  $("#submitForm").click(function(){
      var firstName = $("input#firstName").val();
      var email = $("input#emailAddress").val();
      var result = parseInt($("select#result").val());



if (result == 1 || result == 2) {
  alert(result);
}
if else (result == 3 || result == 4) {
  alert("wrong");
}
else {
  alert("nope");
}

    event.preventDefault();




});


    });



// Front-End logic
