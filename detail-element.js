import { renderCountryDetail } from "./dom-elements.js";


const goBackToDashboard = () => {
    window.location.href = '/';
}

const renderDetail = () => {
	const searchParams = new URLSearchParams(window.location.search);
	const countryCode = searchParams.get("country");

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
			code: country.cioc || '',
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
}
else {
	document.querySelector(".filters").classList.remove("hidden");
}

if (window.location.search.includes("?country=undefined")) {
	document.querySelector(".filters").classList.remove("hidden");
	goBackToDashboard();
}

