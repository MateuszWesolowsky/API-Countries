import { renderCountries } from "./dom-elements.js";

const API_URL = "https://restcountries.com/v3.1/all";

export const searchInput = document.querySelector("#search");
export const selectInput = document.querySelector("#region");

// INPUT FILTER API
searchInput.addEventListener("input", async (e) => {
	let countryName = e.target.value;
	const data = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
	const resData = await data.json();
	if(resData.message === "Page Not Found" || resData.status === 404 || !countryName) return window.location.href = 'http://127.0.0.1:5500/Work%20files/';
	const countries = resData.map((country) => {
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

//REGION FILTER API
selectInput.addEventListener("change", (e) => {
	let countryRegion = e.target.value;
		fetch(`https://restcountries.com/v3.1/region/${countryRegion}`)
			.then((res) => res.json())
			.then((country) => {
				if(!country) return;
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
			if(countryRegion === '') {
				window.location.href = 'http://127.0.0.1:5500/Work%20files/';
			}
});

//GLOBAL API
export const renderApi = async () => {
	//skrócony zapis
	const data = await (await fetch(API_URL)).json(); 
	// const resData = await data.json(); //dłuższy, czytelniejszy zapis
	const countries = data.map((country) => {
		return {
			capital: country.capital || "No Capital",
			population: country.population,
			name: country.name.common,
			region: country.region,
			flag: country.flags.png,
			code: country.cioc,
		};
	});
	renderCountries(countries);
};
renderApi();



















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