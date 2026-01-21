const accessKey = "JinjGNbZzZmnQxSXID3Q-XsIJ_a6QSyXZfDBsybmmgA";

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const gallery = document.getElementById("gallery");
const showMoreBtn = document.getElementById("show-more");
const emptyState = document.getElementById("empty");

let keyword = "";
let page = 1;

async function searchImages() {
  keyword = searchInput.value.trim();
  if (!keyword) return;

  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=8`;

  const response = await fetch(url);
  const data = await response.json();

  // hide empty state
  emptyState.style.display = "none";

  if (page === 1) {
    gallery.innerHTML = "";
  }

  const results = data.results;

  results.forEach((result) => {
    const link = document.createElement("a");
    link.href = result.links.html;
    link.target = "_blank";
    
    const img = document.createElement("img");
    img.src = result.urls.small;
    
    link.appendChild(img);
    gallery.appendChild(link);
  });

  // show more button only if images exist
  if (results.length > 0) {
    showMoreBtn.style.display = "inline-block";
  } else {
    if (page === 1) {
      emptyState.innerHTML = "No results found for: <b>" + keyword + "</b>";
      emptyState.style.display = "block";
    }
    showMoreBtn.style.display = "none";
  }
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});

showMoreBtn.addEventListener("click", () => {
  page++;
  searchImages();
});
