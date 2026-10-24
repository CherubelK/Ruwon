// The Canva-exported home page renders its menu as plain text with no links.
// Make "Home | Work | About" clickable by matching the rendered text.
(function () {
  var routes = { Home: "./", Work: "work.html", About: "about.html" };

  function routeFor(el) {
    for (; el && el !== document.body; el = el.parentElement) {
      if (el.tagName !== "SPAN") continue;
      var label = el.textContent.replace("|", "").trim();
      if (routes[label]) return routes[label];
    }
    return null;
  }

  document.addEventListener("click", function (e) {
    var href = routeFor(e.target);
    if (href) {
      e.preventDefault();
      location.href = href;
    }
  }, true);

  document.addEventListener("mouseover", function (e) {
    if (routeFor(e.target)) e.target.style.cursor = "pointer";
  });
})();
