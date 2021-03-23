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
{
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
  let select_box_value = document.getElementById("country");
  // console.log(select_box_value);

  select_box_value.addEventListener("change", (e) => {
    const value = select_box_value.value;
    console.log(value);
    // console.log(select_box_value.value);
    fetch(`https://api.covid19api.com/total/country/${value}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        let total = data.length - 1;
        let lastday = data.length - 2;
        // console.log(length, lastday);
        let total_death_cases = document.getElementById("T-death-cases");
        let total_active_cases = document.getElementById("T-active-cases");
        let total_recoverd_cases = document.getElementById("T-recoverd-cases");
        let new_death_cases = document.getElementById("Y-death-cases");
        let new_active_cases = document.getElementById("Y-active-cases");
        let new_recoverd_cases = document.getElementById("Y-recoverd-cases");
        const { Active, Deaths, Recovered } = data[total];
        // console.log(data[lastday]);
        total_death_cases.textContent = Deaths;
        total_recoverd_cases.textContent = Recovered;
        total_active_cases.textContent = Active;
        new_death_cases.textContent = data[total].Deaths - data[lastday].Deaths;
        new_recoverd_cases.textContent =
          data[total].Deaths - data[lastday].Deaths;
        new_active_cases.textContent =
          data[total].Active - data[lastday].Deaths;
      })
      .catch((error) => console.log("error", error));
  });
}
/*
 *---------------------------------------------------------
 * /// Callback Function to Fetch the corona data from COVID-19 API.(@End)///
 * --------------------------------------------------------
 */
