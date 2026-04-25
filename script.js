// ==================== MENU HAMBURGUESA ====================
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("open");
  });

  // Cerrar menú al hacer clic en un enlace
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("open");
    });
  });
}

// ==================== SCROLL SUAVE ====================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      event.preventDefault();
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ==================== AÑO DINÁMICO ====================
const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// ==================== FORMULARIO DE CONTACTO ====================
const contactForm = document.getElementById("formulario");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (name === "" || email === "" || phone === "") {
      alert("Por favor ingrese todos los datos requeridos.");
      return;
    }

    // Mensaje de éxito
    const successMessage = document.createElement("p");
    successMessage.textContent =
      "¡Mensaje enviado correctamente! Gracias por contactarme.";
    successMessage.style.color = "#4ade80";
    successMessage.style.marginTop = "15px";
    successMessage.style.fontWeight = "bold";
    successMessage.style.textAlign = "center";

    contactForm.appendChild(successMessage);

    // Limpiar formulario
    contactForm.reset();

    // Eliminar mensaje después de 5 segundos
    setTimeout(() => {
      successMessage.remove();
    }, 5000);
  });
}
