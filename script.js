
// const fecthdata = () => {
const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`;
    let cryptodata;
    fetch(url)
        .then((data) => { 
            console.log(data);
            return data.json(); }
        )

        .then((objectdata) => {
            console.log(objectdata[0].id)
            cryptodata = objectdata;
          // Document Manipulating
           document.getElementById('btc- value1').innerHTML = objectdata[0].current_price
           document.getElementById('btc-value2').innerHTML =objectdata[0]. total_volume
           document.getElementById('btc-percentage').innerHTML =objectdata[0].price_change_percentage_24h
           document.getElementById('btc-maktcap').innerHTML =objectdata[0]. market_cap

           document.getElementById('eth-value1').innerHTML = objectdata[1].current_price
           document.getElementById('eth-value2').innerHTML =objectdata[1]. total_volume
           document.getElementById('eth-percentage').innerHTML =objectdata[1].price_change_percentage_24h
           document.getElementById('eth-maktcap').innerHTML =objectdata[1]. market_cap

           
           document.getElementById('tether-value1').innerHTML = objectdata[2].current_price
           document.getElementById('tether-value2').innerHTML =objectdata[2]. total_volume
           document.getElementById('tether-percentage').innerHTML =objectdata[2].price_change_percentage_24h
           document.getElementById('tether-maktcap').innerHTML =objectdata[2]. market_cap


           document.getElementById('bnb-value1').innerHTML = objectdata[3].current_price
           document.getElementById('bnb-value2').innerHTML =objectdata[3]. total_volume
           document.getElementById('bnb-percentage').innerHTML =objectdata[3].price_change_percentage_24h
           document.getElementById('bnb-maktcap').innerHTML =objectdata[3]. market_cap

           document.getElementById('usdc-value1').innerHTML = objectdata[4].current_price
           document.getElementById('usdc-value2').innerHTML =objectdata[4]. total_volume
           document.getElementById('usdc-percentage').innerHTML =objectdata[4].price_change_percentage_24h
           document.getElementById('usdc-maktcap').innerHTML =objectdata[4]. market_cap

           document.getElementById('xrp-value1').innerHTML = objectdata[5].current_price
           document.getElementById('xrp-value2').innerHTML =objectdata[5]. total_volume
           document.getElementById('xrp-percentage').innerHTML =objectdata[5].price_change_percentage_24h
           document.getElementById('xrp-maktcap').innerHTML =objectdata[5]. market_cap

           document.getElementById('busd-value1').innerHTML = objectdata[6].current_price
           document.getElementById('busd-value2').innerHTML =objectdata[6]. total_volume
           document.getElementById('busd-maktcap').innerHTML =objectdata[6]. market_cap
           document.getElementById('busd-percentage').innerHTML =objectdata[6].price_change_percentage_24h

           document.getElementById('cardano-value1').innerHTML = objectdata[7].current_price
           document.getElementById('cardano-value2').innerHTML =objectdata[7]. total_volume
           document.getElementById('cardano-maktcap').innerHTML =objectdata[7]. market_cap
           document.getElementById('cardano-percentage').innerHTML =objectdata[7].price_change_percentage_24h
        }
        )
   
        .catch(error => {
            alert("Failed to load Market Info")
            throw(error);
        })

    // }
    // export default fecthdata;