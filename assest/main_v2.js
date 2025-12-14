

async function get_countries() {
  try {
    let response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,latlng"
    );
    let data = await response.json();

    let select = document.getElementById("selection");

    data.forEach(val => {
      if (!val.latlng ) return;

      let option = document.createElement("option");//create a option element for the html
      option.value = val.name.common;//value of the selected item
      option.textContent = val.name.common;//display of the selected item

      //dateset is a build in object for the element
      option.dataset.lat = val.latlng[0];//extra information of the item 
      option.dataset.lng = val.latlng[1];//extra information of the item
      
      select.appendChild(option);
    });
  } catch (error) {
    console.log(error);
  }
}

async function get_weather(lat,lng){
    try{
      const API_KEY ="e5eaa2a53f911685e9385d890863e6e2";
      let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`);
      let data = await response.json();
      document.getElementById("resultbox").classList.remove("hidden");
      document.getElementById("wth").textContent = "The Weather of " + data.name;
      document.getElementById("resultholder").textContent = data.weather[0].main;
        console.log("Data: "+data.weather[0].main)
    }catch(error){
      console.log(error);
    }
    
}

document.getElementById("btnseeweather").addEventListener("click", function () {
  const select = document.getElementById("selection");
  const option = select.options[select.selectedIndex]
  get_weather(option.dataset.lat,option.dataset.lng)

});


get_countries();