// ================================
// MOBILE MENU TOGGLE
// ================================
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// ================================
// LOAD LATEST RESULTS
// ================================
if (typeof latestResults !== "undefined") {
  const resultList = document.getElementById("resultList");

  if (resultList) {
    resultList.innerHTML = ""; // clear old

    latestResults.forEach(item => {
      const a = document.createElement("a");
      a.href = item.link;
      a.innerText = item.title;
      a.className = "result-link";
      resultList.appendChild(a);
    });
  }
  // Load common header
fetch("header.html")
  .then(res => res.text())
  .then(data => {
    const headerDiv = document.getElementById("header");
    if (headerDiv) headerDiv.innerHTML = data;
  });
}
