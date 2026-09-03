// Página de reservas: elegir horario desde la tarjeta y armar el correo
document.addEventListener("DOMContentLoaded", function () {
  var select = document.getElementById("horario");
  var form = document.getElementById("booking-form");
  if (!select || !form) return;

  // Al hacer clic en "Reservar este horario", selecciona ese horario en el
  // formulario y baja hasta él.
  document.querySelectorAll(".slot-pick").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var card = btn.closest(".slot-card");
      var time = card ? card.dataset.time : "";
      if (time) {
        select.value = time;
      }
      document.getElementById("reservar").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var horario = select.value;
    var nombre = document.getElementById("nombre").value.trim();
    var email = document.getElementById("email").value.trim();
    var telefono = document.getElementById("telefono").value.trim();
    var notas = document.getElementById("notas").value.trim();

    if (!horario || !nombre || !email || !telefono) {
      form.reportValidity();
      return;
    }

    var subject = "Reserva sesión Fine Art — " + horario;
    var body =
      "Horario: " + horario + "\n" +
      "Nombre: " + nombre + "\n" +
      "Email: " + email + "\n" +
      "Teléfono: " + telefono + "\n" +
      "Notas: " + (notas || "-");

    var mailto =
      "mailto:beraguirre@gmail.com" +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);

    window.location.href = mailto;
  });
});
