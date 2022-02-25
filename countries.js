const loadData = () => {
    fetch('https://restcountries.com/v2/all')
        .then(response => response.json())
        .then(data => loadCountries(data))
}


loadData();

const loadCountries = (countryData) => {
    // console.log(countryData)
    const divCountry = document.getElementById('countries')
    countryData.forEach(country => {
        // console.log(country.name)
        const creatingDiv = document.createElement('div');
        creatingDiv.classList.add('style')
        creatingDiv.innerHTML = `
        <h2> ${country.name} </h2>
        <p> ${country.capital} </p>
        <button onclick=" loadCountryDetailes('${country.name}')"> Detailes</button>
        `

        divCountry.appendChild(creatingDiv);









        /* ---------------------------------------------- */
        // const creatingDiv = document.createElement('div');
        // creatingDiv.classList.add('style')

        // const h2 = document.createElement('h2');
        // h2.innerText = country.name;
        // // h2.classList.add('style2')
        // creatingDiv.appendChild(h2);


        // const p = document.createElement('p');
        // p.innerText = country.capital;
        // // p.classList.add('style2')
        // creatingDiv.appendChild(p);

        // divCountry.appendChild(creatingDiv);

    });
}


const loadCountryDetailes = infoDetails => {


    const url = `https://restcountries.com/v2/name/${infoDetails}`


    fetch(url)
        .then(response => response.json())
        .then(detailedData => displayDetails(detailedData[0]))
}


const displayDetails = detailInfo => {

    const displayInfo = document.getElementById('display-info');
    console.log(detailInfo)
    displayInfo.innerHTML = `
    <h4> population : ${detailInfo.population}</h4>
    <h5> population : ${detailInfo.region}</h5>
    <img width="300px" src="${detailInfo.flag}">
     `
}

