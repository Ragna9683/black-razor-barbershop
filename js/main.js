/**
 * Black Razor Barbershop: page interactions
 *
 *  1. Mobile navigation toggle
 *  2. Scroll-reveal animation for sections
 *  3. Booking form (demo only, nothing is sent anywhere)
 */
(function () {
  "use strict";

  /* ---------- 1. Mobile navigation ---------- */

  var toggle = document.getElementById("menu-toggle");
  var nav = document.getElementById("site-nav");

  var ICON_OPEN = "\u2715";   // ✕
  var ICON_CLOSED = "\u2630"; // ☰

  function setMenu(open) {
    nav.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? ICON_OPEN : ICON_CLOSED;
  }

  toggle.addEventListener("click", function () {
    setMenu(!nav.classList.contains("open"));
  });

  // Close the menu after a link is chosen
  nav.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      setMenu(false);
    }
  });

  /* ---------- 2. Scroll reveal ---------- */

  var blocks = document.querySelectorAll(".rv");

  function reveal(element) {
    element.classList.add("in");
  }

  if (!("IntersectionObserver" in window)) {
    // Very old browsers: just show everything
    blocks.forEach(reveal);
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            reveal(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    blocks.forEach(function (block) {
      observer.observe(block);
    });
  }

  /* ---------- 3. Booking form (demo) ---------- */

  var form = document.getElementById("booking-form");
  var nameInput = document.getElementById("name");
  var message = document.getElementById("form-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!nameInput.value.trim()) {
      message.textContent = "Podaj imię, aby kontynuować.";
      return;
    }

    message.textContent =
      "Dziękuję! To projekt koncepcyjny, formularz nie wysyła danych.";
  });
})();
