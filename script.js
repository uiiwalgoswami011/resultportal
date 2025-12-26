// ===============================
// LOAD COMMON HEADER (VERY IMPORTANT)
// ===============================
document.addEventListener("DOMContentLoaded", function () {
  const headerDiv = document.getElementById("header");

  if (headerDiv) {
    fetch("header.html")
      .then(response => response.text())
      .then(data => {
        headerDiv.innerHTML = data;
      })
      .catch(error => {
        console.error("Header load error:", error);
      });
  }

  // ===============================
  // MOBILE MENU TOGGLE
  // ===============================
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // ===============================
  // LOAD LATEST RESULTS
  // ===============================
  if (typeof latestResults !== "undefined") {
    const resultList = document.getElementById("resultList");

    if (resultList) {
      resultList.innerHTML = "";
      latestResults.forEach(item => {
        const a = document.createElement("a");
        a.href = item.link;
        a.innerText = item.title;
        a.className = "result-link";
        resultList.appendChild(a);
      });
    }
  }
});
