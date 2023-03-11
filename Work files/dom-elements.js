

const createInfoElement = (label, value) => {
	const divCard = document.createElement('div');
	const labelElement = document.createElement("strong");
	const valueElement = document.createElement("span");
	labelElement.textContent = `${label}: `;
	valueElement.textContent = `${value}`;
	divCard.appendChild(labelElement);
	divCard.appendChild(valueElement);
	return divCard;
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
	countryName.innerText = country.name;

	countryCard.appendChild(createFlagElement(country.flag));
	countryCard.appendChild(countryName);
	countryCard.appendChild(createInfoElement("Population", country.population.toLocaleString()));
	countryCard.appendChild(createInfoElement("Region", country.region));
	countryCard.appendChild(createInfoElement("Capital", country.capital));

	return countryCard;
};

export const renderCountries = (countries) => {
	const mainElement = document.querySelector(".main");
	const country = countries.forEach((country) => {
		mainElement.appendChild(createCardElement(country));
	});
	return country;
};
