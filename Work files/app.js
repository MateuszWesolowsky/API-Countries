import { renderCountries } from "./dom-elements.js";

const API_URL = "https://restcountries.com/v3.1/all";


// fetch(API_URL)
// 	.then((res) => res.json())
// 	.then((country) =>
// 		country.map((country) => {
// 			return {
// 				capital: country.capital,
// 				population: country.population,
// 				name: country.name.common,
// 				region: country.region,
// 				flag: country.flags.png,
// 			};
// 		})
// 	);

// capital, population, name.common, region, flags.png

(async () => {
	const data = await (await fetch(API_URL)).json(); //skrócony zapis
	// const resData = await data.json(); //dłuższy, czytelniejszy zapis
	const countries = data.map((country) => {
		return {
			capital: country.capital || 'No Capital',
			population: country.population,
			name: country.name.common,
			region: country.region,
			flag: country.flags.png,
		};
	});
	// console.log(countries);
	renderCountries(countries);
})();
