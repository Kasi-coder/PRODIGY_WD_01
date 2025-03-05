window.addEventListener('scroll', function() {
    let navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled'); // Turns red
    } else {
        navbar.classList.remove('scrolled'); // Transparent again
    }
});
