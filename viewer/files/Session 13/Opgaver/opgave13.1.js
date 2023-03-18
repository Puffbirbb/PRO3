// opgave12.1.js
const earthquakeUrl = // https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

function get(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}

get(earthquakeUrl);

function showEarthquakes() {
  get(earthquakeUrl)
    .then((response) => {
      const earthquakes = JSON.parse(response);
      const table = document.createElement("table");
      const tr = document.createElement("tr");
      const th1 = document.createElement("th");
      const th2 = document.createElement("th");
      const th3 = document.createElement("th");
      th1.textContent = "Magnitude";
      th2.textContent = "Place";
      th3.textContent = "Time";
      tr.appendChild(th1);
      tr.appendChild(th2);
      tr.appendChild(th3);
      table.appendChild(tr);
      earthquakes.features.sort((a, b) => b.properties.mag - a.properties.mag);
      earthquakes.features.forEach((earthquake) => {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        if (earthquake.properties.mag > 5) {
          td1.textContent = earthquake.properties.mag;
          td2.textContent = earthquake.properties.place;
          td3.textContent = new Date(earthquake.properties.time);
          tr.appendChild(td1);
          tr.appendChild(td2);
          tr.appendChild(td3);
          table.appendChild(tr);
        }
      });
      document.body.appendChild(table);
    })
    .catch((error) => console.log(error));
}

showEarthquakes();
