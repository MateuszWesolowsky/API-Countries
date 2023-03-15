import { renderCountries } from "./dom-elements.js";

const API_URL = "https://restcountries.com/v3.1/all";

const searchInput = document.querySelector("#search");

searchInput.addEventListener("input", (e) => {
	let countryName = e.target.value;

	fetch(`https://restcountries.com/v3.1/name/${countryName}`)
		.then((res) => res.json())
		.then((country) => {
			console.log(country);
			const countries = country.map((country) => {
				return {
					capital: country.capital || "No Capital",
					population: country.population,
					name: country.name.common,
					region: country.region,
					flag: country.flags.png,
				};
			});
			renderCountries(countries);
		});
});

////////////////

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
			capital: country.capital || "No Capital",
			population: country.population,
			name: country.name.common,
			region: country.region,
			flag: country.flags.png,
		};
	});
	// console.log(countries);
	renderCountries(countries);
})();
