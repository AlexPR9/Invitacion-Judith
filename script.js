// Inicializar AOS
AOS.init();

// Función para animación de apertura de sobre y confetis en bucle continuo
document.addEventListener('DOMContentLoaded', function() {
  // Iniciar confetis en bucle continuo desde el inicio
  iniciarConfetisEnBucle();
  
  setTimeout(function() {
    // Ocultar sobre con transición
    const sobre = document.getElementById('sobre');
    sobre.style.transform += ' scale(0.8)';
    sobre.style.opacity = '0';
    setTimeout(() => sobre.style.display = 'none', 500);
    
    // Mostrar invitación con fade-in
    const invitacion = document.getElementById('invitacion');
    invitacion.style.display = 'flex';
    invitacion.style.opacity = '0';
    invitacion.style.transform = 'scale(0.9)';
    invitacion.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out';
    setTimeout(() => {
      invitacion.style.opacity = '1';
      invitacion.style.transform = 'scale(1)';
    }, 100);
  }, 2000); // 2 segundos
});

// Función para confetis en bucle cayendo continuamente
function iniciarConfetisEnBucle() {
  setInterval(() => {
    confetti({
      particleCount: 12,
      spread: 90,
      origin: { x: Math.random(), y: 0 },
      colors: ["#f7c6d0", "#d4a5b5", "#e8c1c8", "#fce4ec"],
      gravity: 0.35,
      drift: 0.2,
      scalar: 1,
      zIndex: 9999
    });
  }, 350);
}


// Botón WhatsApp
document.getElementById("btnWhatsapp").addEventListener("click", () => {
  const telefono = "522225052782";
  const mensaje = "Confirmo asistencia al cumpleaños de 80 años.";
  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
});