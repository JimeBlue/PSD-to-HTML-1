$(document).ready(function () {
  // Methoss for transversing the DOM with jQuery
  //   Next: it grabs an element and gives us the next element in line in the DOM
  //   $('#contact-methods').next().css({ border: '3px solid red' });
  //   prev: it grabs an element and gives us the previous element in line in the DOM
  //   $('#social-nav').prev().css({ border: '3px solid blue' });
  // Parent: it grabs an element and give us its parent
  //   $('.banner-title').parent().css({ border: '3px solid pink' });
  // Parents (plural): it grabs an element and give us all the parents to the element
  //   $('.banner-title').parents().css({ border: '3px solid pink' });
  // Children: it gets all the children of an element
  //   $('#social-nav').children().css({ border: '3px solid pink' });
  // Find: finds an element within the class, id, section, etc that we pass. In the example below it finds the element with the class facebook which is inside the element with the id contact
  //   $('#contact').find('.facebook').css({ border: '3px solid pink' });
  //Closest: it moves up the DOM to find the nearest parent to match whatever element we put inside it. In the example below it gives us the closest parent of #social-nav, which has the class wrapper
  //   $('#social-nav').closest('.wrapper').css({ border: '3px solid blue' });
});
