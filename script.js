function FilterBtn(target) {
  const SingleMovie = document.querySelectorAll(".single-movie");

  SingleMovie.forEach((EachSingleMovie) => {
    EachSingleMovie.style.display = "none";
  });

  SingleMovie.forEach((EachSingleMovie) => {
    if (EachSingleMovie.getAttribute("data-type").split(" ").includes(target)) {
      EachSingleMovie.style.display = "block";
    }
  });
}

function searchNav() {
  const navSearch = document.querySelector(".nav-search");
  const SingleMovieTitle = document.querySelectorAll(".movie-title");

  navSearch.value = navSearch.value.toLowerCase();

  SingleMovieTitle.forEach((EachSingleMovieTitle) => {
    const singleMovie = EachSingleMovieTitle.closest(".single-movie");

    // singleMovie.style.display = "none";

    if (navSearch.value.length >= 1) {
      if (
        navSearch.value.includes(EachSingleMovieTitle.textContent) ||
        navSearch.value[0] === EachSingleMovieTitle.textContent[0]
      ) {
        singleMovie.style.display = "block";
      } else {
        singleMovie.style.display = "none";
      }
    } else {
      singleMovie.style.display = "block";
    }
  });
}
function FilterBtnAll() {
  const singleMovie = document.querySelectorAll(".single-movie");
  singleMovie.forEach((singleMovie) => {
    singleMovie.style.display = "block";
  });
}
