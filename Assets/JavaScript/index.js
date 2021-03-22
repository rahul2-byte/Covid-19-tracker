/*
 *---------------------------------------------------------
 * /// Callback Function to Fetch the corona data from COVID-19 API.(@Start)///
 * --------------------------------------------------------
 */

{
  function fetchdata() {
    return fetch("https://api.covid19api.com/summary")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        // console.log(result);
        return result;
      })
      .catch((error) => console.log("error", error));
  }
}
window.addEventListener("load", (e) => {
  let datasend = fetchdata().then((data) => {
    // console.log(data);
    let total_death_cases = document.getElementById("T-death-cases");
    let total_active_cases = document.getElementById("T-active-cases");
    let total_recoverd_cases = document.getElementById("T-recoverd-cases");
    let new_death_cases = document.getElementById("Y-death-cases");
    let new_active_cases = document.getElementById("Y-active-cases");
    let new_recoverd_cases = document.getElementById("Y-recoverd-cases");
    const {
      NewConfirmed,
      NewDeaths,
      NewRecovered,
      TotalConfirmed,
      TotalDeaths,
      TotalRecovered,
    } = data.Global;
    total_death_cases.textContent = TotalDeaths;
    total_recoverd_cases.textContent = TotalRecovered;
    total_active_cases.textContent = TotalConfirmed;
    new_death_cases.textContent = NewDeaths;
    new_recoverd_cases.textContent = NewRecovered;
    new_active_cases.textContent = NewConfirmed;
  });
});
/*
 *---------------------------------------------------------
 * /// Callback Function to Fetch the corona data from COVID-19 API.(@End)///
 * --------------------------------------------------------
 */
