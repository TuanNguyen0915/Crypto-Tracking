

const getCryptosQuery = async () => {
  const url = import.meta.env.VITE_CRYPTO_BASE_URL
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


// const url = 'https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw';
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-BingApis-SDK': 'true',
  //     'X-RapidAPI-Key': '69125ac046msh827a489bc4ccec4p1b275ejsn9b58f92f6578',
  //   }
  // };

  // try {
  //   const response = await fetch(url, options);
  //   const result = await response.text();
  //   console.log(result);
  // } catch (error) {
  //   console.error(error);
  // }
const getNews = async () => {
  const url = import.meta.env.VITE_NEWS_UR
  const res = await fetch(url)
  const json = await res.json()
  return json
}

export { getCryptosQuery, getNews }