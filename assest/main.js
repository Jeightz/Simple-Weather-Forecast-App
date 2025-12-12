async function get_countries(){
  try{
  let response = await fetch("https://www.apicountries.com/countries");
  let data = await response.json();

  let select = document.getElementById("selection");

  data.array.forEach(val => {
    if(!val.latlang) return;
    let option = document.createAttribute("option");
    option.value = val.name.common;
    option.textContent = val.name.common;
    option.dataset.lang =value.latlang[0];
    option.dataset.lang =value.latlang[1];
    select.appendChild(option);
  });
  }catch(error){
    console.log(error);
  }
  
}

document.getElementById("btnseeweather").addEventListener("click", function(){
  let lat = this.selectedOptions[0].dataset.lat;
  let lng = this.selectedOptions[0].dataset.lng;
  console.log("Latitude:", lat, "Longitude:", lng);
})

get_countries();