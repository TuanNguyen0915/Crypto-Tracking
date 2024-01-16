

const getCryptosQuery = async () => {
  const url = import.meta.env.VITE_CRYPTO_BASE_URL
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_X_RAPID_API_KEY,
      'X-RapidAPI-Host': import.meta.env.VITE_X_RAPID_API_HOST
    }
  })
  const json = await res.json()
  return json
}

const getNews = async () => {
  const url = import.meta.env.VITE_NEWS_URL
  const res = await fetch(url, {
    method: "GET"
  })
  const json = await res.json()
  return json.results
}

const getCoin = async (coinId, timePeriod) => {
  const url = import.meta.env.VITE_COIN_BASE_URL

  const res = await fetch(`${url}/${coinId}?timePeriod=${timePeriod}`, {
    method: "GET",
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_X_RAPID_API_KEY,
      'X-RapidAPI-Host': import.meta.env.VITE_X_RAPID_API_HOST
    }
  }
  )
  const json = await res.json()
  return json
}

const getCoinPriceHistory = async (coinId, timePeriod) => {
  const url = import.meta.env.VITE_COIN_BASE_URL

  const res = await fetch(`${url}/${coinId}/history?timePeriod=${timePeriod}`, {
    method: "GET",
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_X_RAPID_API_KEY,
      'X-RapidAPI-Host': import.meta.env.VITE_X_RAPID_API_HOST
    }
  }
  )
  const json = await res.json()
  return json
}

// let config = {
//   method: 'get',
// maxBodyLength: Infinity,
//   url: 'https://rest.coinapi.io/v1/exchanges',
//   headers: { 
//     'Accept': 'text/plain', 
//     'X-CoinAPI-Key': '5B25601F-1F82-4057-98A2-92970AE1BE58'
//   }
// };

const getExchanges = async () => {
  const url = 'https://coinpaprika1.p.rapidapi.com/exchanges';
  // const options = {
  // 	method: 'GET',
  // 	headers: {
  // 		'X-RapidAPI-Key': import.meta.env.VITE_X_RAPID_API_KEY,
  // 		'X-RapidAPI-Host': 'coinpaprika1.p.rapidapi.com'
  // 	}
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_X_RAPID_API_KEY,
      'X-RapidAPI-Host': 'coinpaprika1.p.rapidapi.com'
    }})
    const json = await res.json()
    return json
}


export { getCryptosQuery, getNews, getCoin, getCoinPriceHistory, getExchanges }