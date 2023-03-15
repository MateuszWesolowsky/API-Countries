

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
	countryCard.classList.add('card')
	const countryName = document.createElement("strong");
	countryName.classList.add('name');
	countryName.innerText = country.name;
	countryCard.append(createFlagElement(country.flag),countryName,createInfoElement("Population", country.population.toLocaleString()),createInfoElement("Region", country.region), createInfoElement("Capital", country.capital))

	return countryCard;
};

export const renderCountries = (countries) => {
	const mainElement = document.querySelector(".main");
	mainElement.innerHTML ='';
	const country = countries.forEach((country) => {
		mainElement.appendChild(createCardElement(country));
	});
	return country;
};
