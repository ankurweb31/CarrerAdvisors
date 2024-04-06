$(document).ready(function() {
  $('.hamburger').click(function() {
      $('.hamburger-menu').toggleClass('active');
  });

  // Close hamburger menu when a nav item is clicked
  $('.hamburger-menu a').click(function() {
      $('.hamburger-menu').removeClass('active');
  });
});
