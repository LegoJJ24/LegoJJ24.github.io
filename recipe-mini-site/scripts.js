document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            // Toggle the 'active' class on the menu
            navMenu.classList.toggle('active');
            
            // Toggle the 'active' class on the hamburger button for the 'X'
            navToggle.classList.toggle('active');
        });
    }
});
