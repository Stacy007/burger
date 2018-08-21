$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var toDevour = $(this).data("todevour");
  
      var toDevourState = {
        devoured: toDevour
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: toDevourState
      }).then(
        function() {
          console.log("changed devoured to", toDevour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#ca").val().trim(),
        devoured: $("[name=sleepy]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burgers");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });