import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import CryptoCard from "../components/Crypto/CryptoCard"
import { RingSpinner } from "../components/Spinner/Spinner"
import NewsCard from "../components/News/NewsCard"
const SearchPage = ({ searchTerm }) => {
  // all cryptos
  const { currentCryptos } = useSelector((state) => state.cryptos)
  const cryptos = currentCryptos?.coins
  // all news
  const { currentNews } = useSelector((state) => state.news)
  // Return to home page if we have problem when render search page
  if (!cryptos && !currentNews) {
    return <Navigate to="/" />
  }

  const cryptoFilter = cryptos.filter((coin) => {
    return coin.name.toLowerCase().includes(searchTerm.toLowerCase()) || coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  })

  const newsFilter = currentNews?.filter((news) => {
    return (
      news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      news.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      news.content.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })
  
  return (
    <div className="w-full">
      {!searchTerm && (
        <div className="h-[600px]">
          <RingSpinner message="How can I help ??? ..." />
        </div>
      )}
      {searchTerm && cryptoFilter.length === 0 && (
        <div className="flex h-[600px] w-full items-center justify-center">
          <RingSpinner
            message="Sorry, we dont have data about"
            searchTerm={searchTerm}
          />
        </div>
      )}

      <div>
        {(cryptoFilter || newsFilter) && searchTerm && (
          <div>
            {cryptoFilter.length > 0 && <h1 className="textTitle mb-4">Coins</h1>} 
            <div className="grid w-full grid-cols-2 gap-2 md:grid-cols-4  md:gap-4">
              {cryptoFilter?.map((coin) => (
                <CryptoCard coin={coin} key={coin.uuid} />
              ))}
            </div>
            {newsFilter.length >0 && <h1 className="textTitle m-4">News</h1>}
            <div className="mt-5">
              {newsFilter?.map(news => (
                <NewsCard news={news}  key={news.article_id}/>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchPage
