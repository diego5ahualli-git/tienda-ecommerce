const pages = [
    { title: "Basketball", url: "basketball.html" },
    { title: "Fútbol", url: "futbol.html" },
    { title: "Accesorios", url: "accesorios.html" },
    { title: "Logout", url: "#", id: "logoutBtn" }
  ];

  const navLinksContainer = document.getElementById("nav-links");

  pages.forEach(page => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = page.title;
    a.href = page.url;
    if (page.id) a.id = page.id;
    li.appendChild(a);
    navLinksContainer.appendChild(li);
  });

  // Maneja el evento de logout
  document.getElementById("logoutBtn").addEventListener("click", function(event) {
    event.preventDefault();
    window.localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
  });