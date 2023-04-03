//////////////
// Variables
//////////////
let stock;
const watchlist = ['AAPL', 'FB', 'MSFT', 'TSLA'];


// ///////////////
// DOM Elements
// ///////////////
const topGainers = document.querySelector('.rwd-table');
const topTrending = document.querySelector('#top-trending');
const marketSearch = document.querySelector('#market-search');
const watchlistData = document.querySelector('#watchlist-data');


// marketSearch.addEventListener('submit', searchStock);

// function searchStock (event) {
//     event.preventDefault();
//     stock = document.querySelector('#stock').value.toUpperCase();
//     body = document.querySelector('body');
//     body.innerHTML = ``
// }







document.addEventListener("DOMContentLoaded", async (e) => {
  const gainers = await fetch (`https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=${FMP_API_KEY}`);
  const responseG = await gainers.json();

  const losers = await fetch (`https://financialmodelingprep.com/api/v3/stock_market/losers?apikey=${FMP_API_KEY}`);
  const responseL = await losers.json();

  const actives = await fetch (`https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=${FMP_API_KEY}`);
  const activesData = await actives.json();

  const data = responseG.concat(responseL);
  data.sort((a, b) => Math.abs(b.changesPercentage) - Math.abs(a.changesPercentage));

  

  console.log(data)

  for (let i = 0; i < 15; i++){
    const tbody = document.createElement('tbody');
    data[i].changesPercentage >= 0 ? tbody.setAttribute('class', 'gain') : tbody.setAttribute('class', 'loss');
    topGainers.append(tbody);
    const tr = document.createElement('tr');
    tbody.append(tr);
    const ranking = document.createElement('td');
    tr.append(ranking)
    ranking.innerText = `${i + 1}`;
    const symbol = document.createElement('td');
    tr.append(symbol);
    symbol.innerText = `${data[i].symbol}`;
    const company = document.createElement('td');
    tr.append(company);
    company.innerText = `${data[i].name}`;
    const price = document.createElement('td');
    tr.append(price);
    price.innerText = `$${(data[i].price).toFixed(2)}`;
    const pct = document.createElement('td');
    tr.append(pct);
    pct.innerText = `${(data[i].changesPercentage).toFixed(2) + '%'}`;
    const add = document.createElement('td');
    add.setAttribute('class', 'button');
    add.innerHTML = `<button class='add-btn btn btn-primary' type='button' name='${data[i].symbol}'>+<button/>`;
    tr.append(add);
    // add.setAttribute('class', 'add-btn');
    // add.setAttribute('name', `${data[i].symbol}`);
    // add.innerText = `+`;
  }

  for (let i = 0; i < 15; i++){
    const tbody = document.createElement('tbody');
    // data[i].changesPercentage >= 0 ? tbody.setAttribute('class', 'gain') : tbody.setAttribute('class', 'loss');
    topTrending.append(tbody);
    const tr = document.createElement('tr');
    tbody.append(tr);
    const ranking = document.createElement('td');
    tr.append(ranking)
    ranking.innerText = `${i + 1}`;
    const symbol = document.createElement('td');
    tr.append(symbol);
    symbol.innerText = `${activesData[i].symbol}`;
    const company = document.createElement('td');
    tr.append(company);
    company.innerText = `${activesData[i].name}`;
    const price = document.createElement('td');
    tr.append(price);
    price.innerText = `$${(activesData[i].price).toFixed(2)}`;
    const pct = document.createElement('td');
    tr.append(pct);
    pct.innerText = `${(activesData[i].changesPercentage).toFixed(2) + '%'}`;
    const add = document.createElement('td');
    add.setAttribute('class', 'button');
    add.innerHTML = `<button class='add-btn btn btn-primary' type='button' name='${activesData[i].symbol}'>+<button/>`;
    tr.append(add);
    // add.setAttribute('class', 'add-btn');
    // add.setAttribute('name', `${activesData[i].symbol}`);
    // add.innerText = `+`;
  }

 [...document.querySelectorAll('.add-btn')].forEach((element) => {
  element.addEventListener('click', () => {
    watchlist.push(element.name);
    const newWatchlist = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', newWatchlist);
  });
 });

 const watchlistFetch = await fetch (`https://financialmodelingprep.com/api/v3/quote/${JSON.parse(localStorage.getItem('watchlist')).join(',')}?apikey=${FMP_API_KEY}`);
 const watchlistResponse = await watchlistFetch.json();

 for(let i = 0; i < watchlistResponse.length; i++){
  const tr = document.createElement('tr');
  tr.innerHTML = `<td>${watchlistResponse[i].symbol}</td><td>${(watchlistResponse[i].price).toFixed(2)}</td><td>${(watchlistResponse[i].changesPercentage).toFixed(2)}</td>`;
  const minus = document.createElement('td');
  minus.setAttribute('class', 'button');
  minus.innerHTML = `<button class='minus-btn btn btn-primary' type='button' name='${watchlistResponse[i].symbol}'>-<button/>`;
  tr.append(minus);
  // add.setAttribute('class', 'minus-btn');
  // add.setAttribute('name', `${watchlistResponse[i].symbol}`);
  // add.innerText = `-`;
  watchlistData.append(tr);
 }

 [...document.querySelectorAll('.minus-btn')].forEach((element) => {
  element.addEventListener('click', () => {
    const storage = JSON.parse(localStorage.getItem('watchlist'));
    const index = storage.indexOf(element.name);
    if (index > -1) storage.splice(index, 1);
    console.log(element.name);
    localStorage.setItem('watchlist', storage);
  });
 });

})


