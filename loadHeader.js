document.addEventListener("DOMContentLoaded", function() {
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-container").innerHTML = data;

            const menuToggle = document.getElementById("menu-toggle");
            const menuLinks = document.getElementById("menu-links");

            if (menuToggle && menuLinks) {
                menuToggle.addEventListener("click", function () {
                    menuLinks.classList.toggle("show");  // Alterna la clase 'show' para mostrar/ocultar el menú
                });
            }
        })
        .catch(error => console.error("Error al cargar el menú:", error));
});
