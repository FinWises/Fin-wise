var token = 'eDTgjiwozGkf4mbFkwGq4AE8AzuGP0KF';
var key = "HZIza6gou7uA1g0M";
var key2 = 'fcc6149c4e7180ff4d91bed9487d9545';



const wrapper = document.querySelector("#wrapper")
const currentStocks = document.querySelector(".top-stocks")
const topNews = document.querySelector("#top-news") 
const stockChart = $('#stock-chart');



document.addEventListener("DOMContentLoaded", async (e) => {
    let response = await fetch(
        `https://api.nytimes.com/svc/topstories/v2/business.json?api-key=${token}`);
    let call = await response.json();
    console.log(call)
    for (let i = 0; i < 8; i++) {
        let article = call.results[i];
        let card = document.createElement("div");
        card.innerHTML = `<div class = "card"><img src="${article.multimedia[0].url}"/> <div class ="info"> <h1>${article.title}</h1> <p>${article.abstract}</p> <a href="${article.url}" class ="button">Read More</a> </div> </div>`
        wrapper.append(card);
    }



})

document.addEventListener("DOMContentLoaded", async (e) => {
    let response1 = await fetch(
        `https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=${key2}`);
        console.log(response1)
    let call1 = await response1.json();
    console.log(call1)
    for(let i = 0; i < 3; i++){
        let data = call1[i]
        let stock1 = document.createElement("th")
        stock1.innerHTML = `${data.symbol} <br> ${data.change} <br>
        S${data.changesPercentage}`
        // stock1.innerHTML = ` <div class= "current-stocks"><div class= "stock1"><p>${data.change}</p> <p>${data.symbol}</p><p>${data.changesPercentage}</p></div></div>`
        stockChart.append(stock1);
    }
  });

document.addEventListener("DOMContentLoaded", async (e) => {
    let response = await fetch(
        `https://financialmodelingprep.com/api/v3/fmp/articles?page=0&size=5&apikey=${key2}`);
    let call = await response.json();
    console.log(call)
    for (let i = 0; i < 3; i++){
        let data = call.content[i]
        let news = document.createElement("div")
        news.innerHTML = `<div class="row g-0"><div class="col-md-4"><img src="${data.image}" height="230" width="490" /></div> <div class="col-md-8"><div class="card-body"><h5 class="card-title">${data.title}</h5><p class="card-text">${data.content}</p><a href="href=${data.link}" class="btn btn-light">Read More</a>`
        news.setAttribute('class', 'card2 mb-3');
        topNews.append(news)
        
    }

})
