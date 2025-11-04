function toggleMenu() {
    var menu = document.getElementById("main-menu");
    menu.classList.toggle("show");
}


function toggleSubmenu(event) {
   
    if (event.target.parentElement.classList.contains('has-submenu')) {
        event.preventDefault();
        
      
        var submenu = event.target.nextElementSibling;
        
      
        var menuButton = document.getElementById("menu-button");
        var isMobile = getComputedStyle(menuButton).display !== "none";

        if (isMobile) {
            if (submenu) {
                submenu.classList.toggle("show");
            }
        }
    }
}


var menuButton = document.getElementById("menu-button");
if (menuButton) {
    menuButton.addEventListener("click", toggleMenu);
}


var menuLinks = document.querySelectorAll("#main-menu li a");
menuLinks.forEach(function(link) {
    link.addEventListener("click", toggleSubmenu);
});
