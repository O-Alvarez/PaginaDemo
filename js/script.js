toggleMenu = function() {
    var menu = document.getElementById("navbarNav");

    if(menu.classList.contains("show")) {
        menu.classList.remove("show");
        menu.classList.add("hide");
    }else {
        menu.classList.remove("hide");
        menu.classList.add("show");
    }
};

hideMenu = function() {
    if(window.innerWidth < 991) {
        var menu = document.getElementById("navbarNav");
        menu.classList.remove("show");
        menu.classList.add("hide");
    }
};



function ajustarMenu() {
    var menu = document.getElementById("navbarNav");
    // Verifica si la resolución es menor que 768 píxeles
    if (window.innerWidth < 768) {
        menu.classList.remove("show");
        menu.classList.add("hide");
    } else {
        menu.classList.remove("hide");
        menu.classList.add("show");
    }
}

// Ejecuta la función al cargar la página
window.onload = ajustarMenu;



