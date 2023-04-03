
// const name = document.querySelector('#company-name');
// name.innerText = ;
// const price = document.querySelector('#price');
// price.innerText = ;
// const priceChange= document.querySelector('#price-change');
// priceChange = ;
// const logo = document.querySelector('#stock-logo');
// logo.src = '';
// const ceo = document.querySelector('#ceo');
// ceo.innerText = ;
// const = document.querySelector('#location');
// location.innerText =;
// const beta = document.querySelector('#beta');
// beta.innerText = ;
// const avgVol= document.querySelector('#avg-vol');
// avgVol.innerText = ;
// const mktCap = document.querySelector('#mkt-cap');
// mktCap.innerText = ;
// const industry = document.querySelector('#industry');
// industry.innerText = ;

// const sector = document.querySelector('#sector');
// sector.innerText = ;
// const priceRange = document.querySelector('price-range');
// priceRange.innerText = ;


document.addEventListener("DOMContentLoaded", async (e) => {
    const data = await fetch (`https://financialmodelingprep.com/api/v3/profile/${stock}?apikey=${FMP_API_KEY}`);
    const response = await data.json();
    console.log(response);
})