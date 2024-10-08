// Datos de la navBar en un objeto para mayor flexibilidad
const navData = {
    logo: {
        src: "assets/bigDawgsLogo.jpeg",
        alt: "Big Dawgs Logo",
        link: "index.html"
    },
    links: [
        { href: "basketball.html", text: "Basketball" },
        { href: "futbol.html", text: "Fútbol" },
        { href: "accesorios.html", text: "Accesorios" },
        { href: "login.html", text: "Login" }
    ]
};

// Función para generar la navBar
function generateNavBar(data) {
    const navbarContainer = document.getElementById('navbar-container');
    
    // Crear el elemento nav
    const nav = document.createElement('nav');

    // Crear y añadir el logo
    const logoLink = document.createElement('a');
    logoLink.href = data.logo.link;
    logoLink.classList.add('logo');
    
    const logoImg = document.createElement('img');
    logoImg.src = data.logo.src;
    logoImg.alt = data.logo.alt;
    logoLink.appendChild(logoImg);
    
    nav.appendChild(logoLink);

    // Crear el contenedor de los enlaces
    const ul = document.createElement('ul');

    // Recorrer los enlaces y añadirlos al ul
    data.links.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.href;
        a.textContent = link.text;
        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    navbarContainer.appendChild(nav);
}

// Llamar a la función cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
    generateNavBar(navData);
});
