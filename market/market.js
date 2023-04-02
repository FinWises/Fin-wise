//////////////
// Variables
//////////////
let stock;


// ///////////////
// DOM Elements
// ///////////////
const topGainers = document.querySelector('.rwd-table');
const marketSearch = document.querySelector('#market-search');


marketSearch.addEventListener('submit', searchStock);

function searchStock (event) {
    event.preventDefault();
    stock = document.querySelector('#stock').value.toUpperCase();
    body = document.querySelector('body');
    body.innerHTML = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>FinWise</title>
        <link rel="stylesheet" href="../../styles.css"/>
        <link rel="stylesheet" href="stock.css"/>
    </head>
    <body>
        <header>
            <a href="../../home/home.html" class="logo">
                <img id="logo-img" src="../../assets/owl-logo.png" alt=""/>
                <span>FinWise</span>
            </a>
            <div class="hamburger">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
            <nav id="nav-bar">
                <ul>
                    <li>
                        <a href="../../newsfeed/newsfeed.html" class="active">Newsfeed</a>
                    </li>
                    <li>
                        <a href="../../market.html">Market</a>
                    </li>
                    <li>
                        <a href="../../watchlist/watchlist.html">Watchlist</a>
                    </li>
                    <li>
                        <a href="">Learn</a>
                    </li>
                </ul> 
            </nav>
        </header>
        <main>
            <h1>${stock}</h1>
        </main>
        <script src="../config.js"></script>
        <script src="stock.js"></script>
        <script>
            hamburger = document.querySelector(".hamburger");
            nav = document.querySelector("#nav-bar");
            hamburger.onclick = function() {
                nav.classList.toggle("active");
            }
        </script>
    </body>
    </html>`
}







document.addEventListener("DOMContentLoaded", async (e) => {
  const gainers = await fetch (`https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=${FMP_API_KEY}`);
  const responseG = await gainers.json();

  const losers = await fetch (`https://financialmodelingprep.com/api/v3/stock_market/losers?apikey=${FMP_API_KEY}`);
  const responseL = await losers.json();

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
    tr.append(add);
    add.innerText = `+`;
  }
})


