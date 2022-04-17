// var check = function() {
//   if (document.getElementById('password').value ==
//     document.getElementById('confirm-password').value) {
//     document.getElementById('message').style.color = 'green';
//     document.getElementById('message').innerHTML = 'matching';
//   } else {
//     document.getElementById('password-message').style.color = 'red';
//     document.getElementById('password-message').innerHTML = 'not matching';
//   }
// }

$('#password, #confirm-password').on('keyup', function () {
  if ($('#password').val() == $('#confirm-password').val()) {
    $('#password-message').html('Matching').css('color', 'green');
  } else 
    $('#password-message').html('Not Matching').css('color', 'red');
});