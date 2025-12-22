document.addEventListener("DOMContentLoaded", function () {
  const list = document.getElementById("resultList");

  if (!list) {
    console.log("resultList not found");
    return;
  }

  if (typeof results === "undefined") {
    console.log("results not defined");
    return;
  }

  results.forEach(item => {
    const li = document.createElement("li");

    const a = document.createElement("a");
    a.href = item.link;
    a.textContent = item.title;

    li.appendChild(a);
    list.appendChild(li);
  });
});
