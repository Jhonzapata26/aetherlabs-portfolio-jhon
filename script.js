const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("open");
});

// Cerrar el menú al hacer clic en un enlace
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("open");
  });
});

document.querySelectorAll("#nav-links a").forEach((enlace) => {
  enlace.addEventListener("click", function (event) {
    event.preventDefault(); // evita el salto brusco por defecto

    const id = this.getAttribute("href").substring(1); // quita el "#"
    const destino = document.getElementById(id);

    destino.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
document.getElementById("year").innerHTML = new Date().getFullYear();

document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();

    if (name === "" || email === "" || phone === "") {
      alert("Por favor ingrese todos los datos requeridos.");
      event.preventDefault();
    } else {
      alert("Datos enviados con exito!");
    }
  });
