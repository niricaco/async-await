const renderCountries = (arr) => {
  let returnHtml = "";
  for (const countryOfArr of arr) {
    returnHtml += `<div>${countryOfArr.name.official}</div>`;
  }
  return returnHtml;
};

const renderFlags = (arr) => {
  let returnHtml = "";
  for (const flag of arr) {
    returnHtml += `<img src="${flag.flags.png}">`;
  }
  return returnHtml;
};

async function loadEvent() {
  const countryRes = await fetch("https://restcountries.com/v3.1/all");
  const countryArr = await countryRes.json();
  document
    .getElementById("root")
    .insertAdjacentHTML(
      "beforeend",
      `<div id="countryNames">${renderCountries(countryArr)}</div>`
    );
  document
    .getElementById("root")
    .insertAdjacentHTML(
      "beforeend",
      `<div id="countryNames">${renderFlags(countryArr)}</div>`
    );
}
window.addEventListener("load", loadEvent);
