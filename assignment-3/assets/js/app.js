(async function () {
  const response = await fetch("./data.json");
  const data = await response.json();

  const genreElem = document.getElementById("searchGenre");
  const yearElem = document.getElementById("searchYear");
  const langElem = document.getElementById("searchLang");
  const rateElem = document.getElementById("searchRate");
  const tableElem = document.getElementById("tableBody");

  function displaySearchRes(results) {
    tableElem.innerHTML = "";
    counter = 1;
    results.forEach(function (movieData) {
      let date = movieData.release_date.split("-");
      let year = date[0];
      tableElem.innerHTML = `
<tr>
<td>${movieData.id}</td>
  <td> 
    <div class="movie-content">
      <div>
        <img class="px-2 inline-block" src="${'https://image.tmdb.org/t/p/w45' + movieData.poster_path}" />
      </div>
        <div>
          ${movieData.title}
        </div> 
        <div>
        <button>${movieData.certification}</button>  
        ${movieData.genres.toString(" , ")}
        </div>
    </div>
  </td>
<td>${year}</td>
</tr>
    `;
      counter++;
    });
  }

  function search() {
    const genreQuery = genreElem.value.toLowerCase();
    const yearQuery = yearElem.value.toLowerCase();
    const langQuery = langElem.value.toLowerCase();
    const rateQuery = rateElem.value.toLowerCase();

    const results = data.filter(function (movieData) {
      return (
        (genreQuery == "all" ||
          movieData.genres.toString().toLowerCase().includes(genreQuery)) &&
        (yearQuery === "all" ||
          movieData.release_date
            .toString()
            .toLowerCase()
            .includes(yearQuery)) &&
        (langQuery === "all" ||
          movieData.original_language
            .toString()
            .toLowerCase()
            .includes(langQuery)) &&
        (rateQuery === "all" ||
          movieData.vote_average.toString().toLowerCase().includes(rateQuery))
      );
    });

    displaySearchRes(results);
  }

  genreElem.addEventListener("click", search);
  yearElem.addEventListener("click", search);
  langElem.addEventListener("click", search);
  rateElem.addEventListener("click", search);
})();