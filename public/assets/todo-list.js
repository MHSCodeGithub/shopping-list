$(document).ready(function(){

  $('#todo-table').fadeTo(0, 0.01).delay(50).fadeTo("slow", 1);

  $('form').on('submit', function(e){

      var item = $('form input');
      var todo = {item: item.val()};

      // POST request to server (Create Todo)
      $.ajax({
        type: 'POST',
        url: '/todo',
        data: todo
      });

      $('#list').append($("<li>" + item.val() + "</li>").hide().fadeIn(500));
      $('form input').val('');
      e.preventDefault();

  });

  // DELETE request to server (Delete Todo)
  $('ul').on('click', 'li', function(){
      console.log("Item clicked!");
      var item = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/todo/' + item
      });
      $(this).fadeOut(500).then().remove();
  });

});
