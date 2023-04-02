var token = config.MY_API_TOKEN;
var key = config.SECRET_API_KEY;
var key2 = fin.My_api_key;



const wrapper = document.querySelector("#wrapper")
const currentStocks = document.querySelector(".current-stocks")


document.addEventListener("DOMContentLoaded", async (e) => {
    let response = await fetch(
        `https://api.nytimes.com/svc/topstories/v2/business.json?api-key=${token}`);
    let call = await response.json();
    console.log(call)
    for (let i = 0; i < 10; i++) {
        let article = call.results[i];
        let card = document.createElement("div");
        card.innerHTML = `<div class = "card"><img src="${article.multimedia[0].url}"/> <div class ="info"> <h1>${article.title}</h1> <p>${article.abstract}</p> <a href="${article.url}" class ="button">Read More</a> </div> </div>`
        wrapper.append(card);
    }



})

// document.addEventListener("DOMContentLoaded", async (e) => {
//     let response1 = await fetch(
//         `https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=${key2}`);
//         console.log(response1)
//     let call1 = await response1.json();
//     console.log(call1)
//     for(let i = 0; i < 3; i++){
//         let data = call1[i]
//         let stock1 = document.createElement("div")
//         stock1.innerHTML = ` <div class= "current-stocks"><div class= "stock1"><p>${data.change}</p> <p>${data.symbol}</p><p>${data.changesPercentage}</p></div></div>`
//         currentStocks.append(stock1);
//     }
//   });
