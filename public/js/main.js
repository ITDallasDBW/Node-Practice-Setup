$('.form').on('submit', event => {
  event.preventDefault()

  let input = $('.input').val()

  $.ajax({
    url: '/api/review',
    method: 'POST',
    data: JSON.stringify({ name: input }),
   contentType: 'application/json',
   dataType: 'json',
   success: response => {
     console.log(response);
   },
   error: error => {
     console.log(error);
   }
  })
})
