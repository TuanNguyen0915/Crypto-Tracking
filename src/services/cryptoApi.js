
const url = import.meta.env.VITE_BASE_URL

const getCryptosQuery = async () => {
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_X_RAPID_API_KEY,
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  })
  const json = await res.json()
  return json
}

export {getCryptosQuery}