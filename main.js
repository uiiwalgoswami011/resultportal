const ul = document.getElementById("resultList");

resultsData.forEach(r => {
  ul.innerHTML += `
    <li>
      <a href="${r.link}">${r.title}</a>
      <p>
        Status: <b>${r.status}</b>
        ${r.tag ? `<span class="tag">${r.tag}</span>` : ""}
      </p>
    </li>
  `;
});