document.addEventListener("DOMContentLoaded", () => {

  /* ===== LOAD HEADER ===== */
  const headerDiv = document.getElementById("header");
  if (headerDiv) {
    fetch("header.html")
      .then(res => res.text())
      .then(html => {
        headerDiv.innerHTML = html;

        const menuBtn = document.querySelector(".menu-btn");
        const navLinks = document.querySelector(".nav-links");

        if (menuBtn && navLinks) {
          menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");
          });
        }
      })
      .catch(err => console.error("Header load error:", err));
  }

  /* ===== LOAD LATEST RESULTS (HOME) ===== */
  if (typeof latestResults !== "undefined") {
    const latestBox = document.getElementById("resultList");

    if (latestBox) {
      latestBox.innerHTML = "";

      latestResults.forEach(item => {
        const a = document.createElement("a");
        a.href = item.link;
        a.className = "result-link";
        a.textContent = item.title;
        latestBox.appendChild(a);
      });
    }
  }

});
