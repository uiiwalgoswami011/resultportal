document.addEventListener("DOMContentLoaded", () => {

  /* ===== HEADER LOAD ===== */
  const headerDiv = document.getElementById("header");

  if (headerDiv) {
    fetch("header.html")
      .then(res => res.text())
      .then(html => {
        headerDiv.innerHTML = html;

        const menuBtn = document.getElementById("menuBtn");
        const navLinks = document.getElementById("navLinks");

        if (menuBtn && navLinks) {
          menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");
          });
        }
      });
  }

  /* ===== LATEST RESULTS (HOME ONLY) ===== */
  if (typeof latestResults !== "undefined") {
    const box = document.getElementById("latest-results");

    if (box) {
      box.innerHTML = "";

      latestResults.forEach(item => {
        const a = document.createElement("a");
        a.href = item.url;
        a.className = "result-link";
        a.textContent = item.title;
        box.appendChild(a);
      });
    }
  }

});
