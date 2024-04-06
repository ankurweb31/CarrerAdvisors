$(document).ready(function() {
  $('#hamburger').click(function() {
      $('#hamburgerMenu').toggleClass('open');
  });

  $('.hamburger-menu a').click(function() {
      $('#hamburgerMenu').removeClass('open');
  });
});
