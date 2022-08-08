// Filters are what we use to refine selectors so that they are more specific. They look like css pseudo classes

$(document).ready(function () {
  // Filter and get only the even <li> elements of the <nav>
  //   $('header nav li:even').css({ border: '2px solid blue' });
  // Filter and get only the odd <li> elements of the <nav>
  //   $('header nav li:odd').css({ border: '2px solid red' });
  // Go to all the <section> elements and get only the one which doesn´t have an id of contact
  //   $('section:not("#contact")').css({ border: '2px solid green' });
  //Less than:  Go to all the element with the id social-nav and get the <li> items that have an index less than 3
  // $('#social-nav li:lt(3)').css({ border: '2px solid orange' });
  //Greater than:  Go to all the element with the id social-nav and get the <li> items that have an index greater than 3
  // $('#social-nav li:gt(2)').css({ border: '2px solid limegreen' });
  //Attribute filter:  Get me all the divs that have a class. The attribute can be anything, like the alt attribute for example
  // $('div[class]').css({ border: '2px solid pink' });
  // $('img[alt]').css({ border: '2px solid pink' });
  //Attribute filter with specific value:  Get me the img that has the alt with the name of quote
  // $('img[alt=quote]').css({ border: '2px solid pink' });
});

// IMP: You can see a full list of jQuery selectors & jQuery filters on this page: https://api.jquery.com/category/selec...
