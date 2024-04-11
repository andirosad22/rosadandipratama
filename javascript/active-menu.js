window.addEventListener('scroll', function() {
  var sections = document.querySelectorAll('.section');
  var navLinks = document.querySelectorAll('.nav li a');

  sections.forEach(function(section, index) {
    var rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.top <= window.innerHeight) {
      navLinks.forEach(function(navLink) {
        navLink.classList.remove('active');
      });
      navLinks[index].classList.add('active');
    }
  });

  // Handle the case when the first section is visible
  if (window.scrollY === 0) {
    navLinks.forEach(function(navLink) {
      navLink.classList.remove('active');
    });
    navLinks[0].classList.add('active');
  }
});
