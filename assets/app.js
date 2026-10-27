(function () {
  // "Get Started" / "Sign in" go to the AlphaGem platform login page (set in assets/config.js).
  var appUrl = window.ALPHAGEM_APP_URL;
  if (appUrl) {
    document.querySelectorAll("[data-app-link]").forEach(function (a) { a.setAttribute("href", appUrl); });
  }

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // mobile menu
  var menu = document.querySelector(".menu");
  var nav = document.getElementById("nav");
  if (menu && nav) {
    menu.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      menu.setAttribute("aria-expanded", String(open));
      menu.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") { nav.classList.remove("open"); menu.setAttribute("aria-expanded", "false"); }
    });
  }

  // credits -> reports estimate (a report uses 10 to 20 credits)
  var slider = document.getElementById("credits");
  if (slider) {
    var MIN_PER = 10, MAX_PER = 20;
    var out = document.getElementById("credits-out");
    var low = document.getElementById("calc-low");
    var high = document.getElementById("calc-high");
    var fmt = new Intl.NumberFormat("en-IN");
    var update = function () {
      var c = Number(slider.value);
      out.textContent = fmt.format(c);
      low.textContent = fmt.format(Math.floor(c / MAX_PER));
      high.textContent = fmt.format(Math.floor(c / MIN_PER));
    };
    slider.addEventListener("input", update);
    update();
  }
})();
