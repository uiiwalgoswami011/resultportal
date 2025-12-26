document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // LOAD HEADER
  // =========================
  const headerDiv = document.getElementById("header");
  if (headerDiv) {
    fetch("header.html")
      .then(res => res.text())
      .then(html => {
        headerDiv.innerHTML = html;

        // MENU BUTTON AFTER HEADER LOAD
        const menuBtn = document.getElementById("menuBtn");
        const navLinks = document.getElementById("navLinks");

        if (menuBtn && navLinks) {
          menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");
          });
        }
      });
  }

  // =========================
  // LOAD LATEST RESULTS
  // =========================
  if (typeof latestResults !== "undefined") {
    const resultList = document.getElementById("resultList");
    if (resultList) {
      resultList.innerHTML = "";
      latestResults.forEach(item => {
        const a = document.createElement("a");
        a.href = item.link;
        a.textContent = item.title;
        a.className = "result-link";
        resultList.appendChild(a);
      });
    }
  }

});
