$(document).ready(function () {
  // Chaining allows us to link together various jQuery methods in one statement
  $('#contact-methods')
    .css({ border: '3px solid blue' })
    .next()
    .css({ border: '5px solid pink' })
    .closest('section')
    .css({ border: '3px solid yellow' });
});
