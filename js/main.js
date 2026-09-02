// Acordeón de preguntas frecuentes
document.addEventListener("DOMContentLoaded", function () {
  var items = document.querySelectorAll(".faq-item");

  items.forEach(function (item) {
    var question = item.querySelector(".faq-question");
    var answer = item.querySelector(".faq-answer");

    question.addEventListener("click", function () {
      var isOpen = item.classList.contains("open");

      // Cierra los demás para dejar solo una respuesta abierta a la vez
      items.forEach(function (other) {
        other.classList.remove("open");
        other.querySelector(".faq-answer").style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add("open");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
});
