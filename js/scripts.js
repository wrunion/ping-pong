//Business Logic

//UI Logic
$(document).ready(function() {
    //console.log('jquery is working');
    $("form#number-form").submit(function(event) {
      //console.log('form has submitted');
      $("#button-submit").hide();
      $("#button-reload").show();
  
      let inputValue = $("#number-input").val();
  
      for (let i = 1; i <= inputValue; i++) {
        if (i % 15 ===0) {
          console.log("ping-pong");
          $("#result").append("Ping Pong!<br>");
        } else if (i % 3 === 0) {
          console.log("ping");
          $("#result").append("Ping!<br>");
        } else if (i % 5 === 0) {
          console.log("pong");
          $("#result").append("Pong!<br>");
        } else {
          console.log(i);
          $("#result").append(`<span class="text-secondary">${i}</span><br>`);
        }
      }
      $("#results-div").show();
  
      //Clear the input field
      let inputArea = document.getElementById("number-input");
      inputArea.value = "";
      //Prevent the form from attempting to send data to a server
      event.preventDefault();
    });
  
    //Button to reload the page
    $("#button-reload").click(function() {
      location.reload();
    });
  
  });