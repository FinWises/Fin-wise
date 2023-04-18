
const name = document.querySelector('#company-name');
name.innerText = data[0].companyName;
const price = document.querySelector('#price');
price.innerText = data[0].price;
const priceChange= document.querySelector('#price-change');
priceChange = data[0].changes;
const logo = document.querySelector('#stock-logo');
logo.src = '${data[0].image}';
const ceo = document.querySelector('#ceo');
ceo.innerText = data[0].ceo;
const = document.querySelector('#location');
location.innerText = ${data[0].city};
const beta = document.querySelector('#beta');
beta.innerText = data[0].beta;
const avgVol= document.querySelector('#avg-vol');
avgVol.innerText = data[0].volAvg;
const mktCap = document.querySelector('#mkt-cap');
mktCap.innerText = data[0].mktCap;
const industry = document.querySelector('#industry');
industry.innerText = data[0].industry;

const sector = document.querySelector('#sector');
sector.innerText = data[0].sector;
const priceRange = document.querySelector('price-range');
priceRange.innerText = data[0].range;


document.addEventListener("DOMContentLoaded", async (e) => {
    const data = await fetch (`https://financialmodelingprep.com/api/v3/profile/AAPL?apikey=${FMP_API_KEY}`);
    const response = await data.json();
    console.log(response);
})