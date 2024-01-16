

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


export { getCryptosQuery, getNews, getCoin }