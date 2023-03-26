import { renderApi } from "./app.js";
import { renderCountryDetail } from "./dom-elements.js";



const renderDetail = () => {
	const searchParams = new URLSearchParams(window.location.search);
	const countryCode = searchParams.get("country");
	if(!countryCode) {
	    goBackToDashboard();
	}
	const API_URL_DETAIL = `https://restcountries.com/v3.1/alpha/${countryCode}`;
	fetch(API_URL_DETAIL)
		.then((res) => res.json())
		.then(([country]) => {
            if(!country) {
                goBackToDashboard();
            }
        country = {
            capital: country.capital || "No Capital",
			population: country.population.toLocaleString(),
			name: country.name.common,
			region: country.region,
			flag: country.flags.png,
			code: country.cioc,
            subregion: country.subregion,
            tld: country.tld[0],
            currencies: Object.values(country.currencies).map((currency) => currency.name),
            languages: Object.values(country.languages).join(", "),
            nativeName: Object.values(country.name.nativeName)[0].official,
        }
        renderCountryDetail(country);
        });
};

if (window.location.search.includes("?country=")) {
	document.querySelector(".filters").classList.add("hidden");
    renderDetail();
} else {
	goBackToDashboard();
}

const goBackToDashboard = () => {
    window.location.href = 'http://127.0.0.1:5500/Work%20files/';
}