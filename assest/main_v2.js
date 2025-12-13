async function get_countries() {
  try {
    let response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,latlng"
    );
    let data = await response.json();

    let select = document.getElementById("selection");

    data.forEach(val => {
      // 🔒 GUARD — THIS IS THE KEY
      if (!val.latlng || val.latlng.length < 2) return;

      let option = document.createElement("option");
      option.value = val.name.common;
      option.textContent = val.name.common;
      option.dataset.lat = val.latlng[0];
      option.dataset.lng = val.latlng[1];

      select.appendChild(option);
    });
  } catch (error) {
    console.log(error);
  }
}


document.getElementById("btnseeweather").addEventListener("click", function () {

  const select = document.getElementById("selection");
  const option = select.options[select.selectedIndex]

  console.log("Latitude:", option.dataset.lat, "Longitude:", option.dataset.lng);
});


get_countries();