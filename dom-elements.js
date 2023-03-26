// import { searchInput, selectInput } from "./app.js";


// const filteredCountries = () => {

// }

const createInfoElement = (label, value) => {
	const divInfo = document.createElement('div');
	divInfo.classList.add('info');
	const labelElement = document.createElement("strong");
	const valueElement = document.createElement("span");
	labelElement.textContent = `${label}: `;
	valueElement.textContent = `${value}`;
	divInfo.appendChild(labelElement);
	divInfo.appendChild(valueElement);
	return divInfo;
}

const createFlagElement = (country) => {
	const divFlag = document.createElement("div");
	const countryFlag = document.createElement("img");
	countryFlag.src = country;
	divFlag.appendChild(countryFlag);
	return divFlag;
}



const createCardElement = (country) => {
	const countryCard = document.createElement("div");
	countryCard.classList.add('card');
	const anchorElement = document.createElement('a');
	anchorElement.href = `?country=${country.code}`;
	const countryName = document.createElement("strong");
	countryName.classList.add('name');
	countryName.innerText = country.name;
	anchorElement.append(createFlagElement(country.flag),countryName,createInfoElement("Population", country.population.toLocaleString()),createInfoElement("Region", country.region), createInfoElement("Capital", country.capital))
	countryCard.append(anchorElement);
	return countryCard;
};

const createDetailElement = (country) => {
	const detailContainer = document.createElement('div');
	detailContainer.classList.add('detail-container');
	const flagElement = createFlagElement(country.flag);
	const detailNameElement = document.createElement('strong');
	detailNameElement.textContent = country.name;

	detailContainer.append(flagElement, detailNameElement, createInfoElement('Native Name', country.nativeName),
	createInfoElement('Population', country.population),
	createInfoElement('Region', country.region),
	createInfoElement('Sub Region', country.subregion),
	createInfoElement('Capital', country.capital),
	createInfoElement('Top level domain', country.tld),
	createInfoElement('Currencies', country.currencies),
	createInfoElement('Languages', country.languages));

	return detailContainer; 
}

export const renderCountries = (countries) => {
	const mainElement = document.querySelector(".main");
	mainElement.innerHTML ='';
	const country = countries.forEach((country) => {
		mainElement.appendChild(createCardElement(country));
	});
	return country;
};

export const renderCountryDetail = (country) => {
	const mainElement = document.querySelector(".main");
	mainElement.classList.add('detail')
	mainElement.innerHTML ='';
	mainElement.appendChild(createDetailElement(country));
}