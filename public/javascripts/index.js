window.onload = function() {

    $('#buzz3').on('click', function() {

      $(this).text('Buzzing...');
      
      $.ajax({
        url:window.location+'buzz',
        success: function(res) {
          $('#buzz3').text(res);
        }
      });

    });

};