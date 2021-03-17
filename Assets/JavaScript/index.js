var requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch("https://api.covid19api.com/summary", requestOptions)
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
let chart = document.getElementById("Corona-chart").getContext("2d");
