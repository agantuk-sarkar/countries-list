// import { navBar } from "../components/navBar.js";
import { fetchCountries } from "../components/fetchCountries.js";

// getting the html elements into js
const countries_card_container = document.querySelector(".countries-card-container");

async function getCountriesData(){
    const countries_list = await fetchCountries();

    console.log("data:",countries_list);
}
getCountriesData();
