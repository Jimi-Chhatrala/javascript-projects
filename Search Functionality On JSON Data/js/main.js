const search = document.getElementById("search");
const matchList = document.getElementById("match-list");

// Search state_capitals data from data.js file and filter it.

const searchStates = (searchText) => {
  // console.log(state_capitals);
  // console.log(states);

  // Get matches to current text input

  let matches = state_capitals.filter((state) => {
    const regex = new RegExp(`^${searchText}`, "gi");
    return state.name.match(regex) || state.abbr.match(regex);
  });

  if (searchText.length === 0) {
    matches = [];
    matchList.innerHTML = "";
  }

  outputHtml(matches);

  // console.log(matches);
};

const outputHtml = (matches) => {
  if (matches.length > 0) {
    let html = "<ul>";
     html += matches
      .map(
        (match) => `<li>
    <div class="card card-body mb-1"><h4>${match.name} (${match.abbr}) <span class="text-primary">${match.capital}</span></h4>
    <small>Lat: ${match.lat} / Long: ${match.long}</small></div>
    </li>`
      )
      .join("");
      html+= "</ul>";

    matchList.innerHTML = html;
  }
};

search.addEventListener("input", () => searchStates(search.value));
