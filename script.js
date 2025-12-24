// ===============================
// Mobile Menu Toggle
// ===============================
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// ===============================
// Load Latest Results
// ===============================
const resultList = document.getElementById("resultList");

if (resultList && typeof latestResults !== "undefined") {
  latestResults.forEach(item => {
    const a = document.createElement("a");
    a.href = item.link;
    a.textContent = item.title;
    a.className = "result-link";
    resultList.appendChild(a);
  });
}
// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}
