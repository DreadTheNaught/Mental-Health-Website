window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.main-page-navbar');
    var threshold = 100; // Adjust this value to your desired scroll threshold
  
    if (window.scrollY > threshold) {
      navbar.classList.add('fixed');
    } else {
      navbar.classList.remove('fixed');
    }
  });
  
