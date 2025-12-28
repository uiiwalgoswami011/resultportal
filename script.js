document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     LOAD HEADER (ALL PAGES)
  ========================== */
  const headerDiv = document.getElementById("header");

  if (headerDiv) {
    fetch("header.html")
      .then(res => res.text())
      .then(html => {
        headerDiv.innerHTML = html;

        // MOBILE MENU (3 line)
        const menuBtn = document.getElementById("menuBtn");
        const navLinks = document.getElementById("navLinks");

        if (menuBtn && navLinks) {
          menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");
          });
        }
      })
      .catch(err => console.error("Header load error:", err));
  }

  /* =========================
     LOAD LATEST RESULTS (HOME)
  ========================== */
  if (typeof resultsData !== "undefined") {
    const latestBox = document.getElementById("latest-results");

    if (latestBox) {
      latestBox.innerHTML = "";

      resultsData.forEach(item => {
        const a = document.createElement("a");
        a.href = item.url;
        a.className = "result-link";
        a.textContent = item.title;
        latestBox.appendChild(a);
      });
    }
  }

});
