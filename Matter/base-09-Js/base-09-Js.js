//// ASYNCHROUNOUS JAVASCRIPT: PROMISES, ASYNC/AWAIT, AND AJAX ////
'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// Our First AJAX Call: XMLHttpRequest
const getCountryDate = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();
  // console.log(request.responseText); // Do not work cause load are not complete

  request.addEventListener('load', function () {
    // console.log(this.responseText); // Data as string => JSON

    const [data] = JSON.parse(this.responseText); // data = JSON.parse(this.responseText)[0]
    console.log(data);

    const html = `
    <article class="country">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
  `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryDate('brasil');
getCountryDate('usa');
getCountryDate('portugal');
getCountryDate('india');
getCountryDate('japan');
getCountryDate('britain');
getCountryDate('congo');
getCountryDate('mexico');
getCountryDate('germany');
