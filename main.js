document.addEventListener("DOMContentLoaded", function () {
  const list = document.getElementById("resultList");

  if (!list) {
    console.error("resultList not found");
    return;
  }

  results.forEach(item => {
    const li = document.createElement("li");

    li.innerHTML = `
      <a href="${item.link}" style="cursor:pointer;">
        ${item.title}
      </a>
      <p>${item.desc || ""}</p>
    `;

    list.appendChild(li);
  });
});
