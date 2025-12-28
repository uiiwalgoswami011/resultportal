document.addEventListener("DOMContentLoaded", () => {

  // ===== HEADER LOAD =====
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
      })
      .catch(err => console.error("Header load error:", err));
  }

  // ===== LATEST RESULTS LOAD =====
  if (typeof latestResults !== "undefined") {
    const latestBox = document.getElementById("resultList"); // ✅ FIXED

    if (latestBox) {
      latestBox.innerHTML = "";

      latestResults.forEach(item => {
        const a = document.createElement("a");
        a.href = item.link;     // ✅ correct key
        a.className = "result-link";
        a.textContent = item.title;
        latestBox.appendChild(a);
      });
    }
  }

});
