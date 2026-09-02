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

// Galería: carrusel que avanza solo
document.addEventListener("DOMContentLoaded", function () {
  var carousel = document.querySelector(".carousel");
  if (!carousel) return;

  var slides = carousel.querySelectorAll(".carousel-slide");
  var dots = carousel.querySelectorAll(".carousel-dot");
  var interval = parseInt(carousel.dataset.interval, 10) || 4500;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var current = 0;
  var timer = null;

  function goTo(index) {
    slides[current].classList.remove("is-active");
    dots[current].classList.remove("is-active");
    current = (index + slides.length) % slides.length;
    slides[current].classList.add("is-active");
    dots[current].classList.add("is-active");
  }

  function start() {
    if (reduceMotion || slides.length < 2) return;
    stop();
    timer = setInterval(function () {
      goTo(current + 1);
    }, interval);
  }

  function stop() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  dots.forEach(function (dot, i) {
    dot.addEventListener("click", function () {
      goTo(i);
      start();
    });
  });

  carousel.addEventListener("mouseenter", stop);
  carousel.addEventListener("mouseleave", start);

  start();
});
