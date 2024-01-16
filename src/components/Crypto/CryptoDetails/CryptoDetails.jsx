import CryptoDetailsStats from "./CryptoDetailsStats"
import CryptoLinks from "./CryptoLinks"
import CryptoLineChart from "./CryptoLineChart"
import { useSelector } from "react-redux"
import NewsCard from "../../News/NewsCard"
import { RingSpinner } from "../../Spinner/Spinner"

const CryptoDetails = ({ coin, coinHistory }) => {
  const { currentNews } = useSelector((state) => state.news)

  const newsFilter = currentNews?.filter((news) => {
    return (
      news.title.toLowerCase().includes(coin?.name.toLowerCase()) ||
      news.description.toLowerCase().includes(coin?.name.toLowerCase()) ||
      news.content.toLowerCase().includes(coin?.name.toLowerCase())
    )
  })

  console.log(newsFilter.length)

  if (coin) {
    return (
      <div className="mt-10 flex w-full flex-col justify-center gap-4 ">
        <div className=" flex w-full flex-col items-center justify-center">
          {/* LINE CHART */}
          <CryptoLineChart
            coinHistory={coinHistory && coinHistory}
            coin={coin && coin}
          />
          {/* STATISTIC */}
          <button className="textTitle md:w-2/5` btn m-5 w-4/5 bg-blue-500 text-2xl text-white opacity-80 shadow-lg hover:bg-blue-500 hover:opacity-100">
            {coin.name} Value Statistic
          </button>

          <p className="textPara mt-4 text-base">
            An overview showing the stats of {coin.name}
          </p>
          {/* OVERVIEW */}
          <CryptoDetailsStats coin={coin && coin} />
        </div>
        {/* COIN DETAILS */}
        <div className="mt-10 flex w-full flex-col justify-center gap-10 md:flex-row">
          <div className="flex w-full flex-col gap-5">
            <h1 className="textTitle text-3xl text-blue-500">
              What is {coin.name}
            </h1>
            <p>{coin.description}</p>
          </div>
          <div className="flex w-full flex-col gap-5">
            <h1 className="textTitle text-3xl text-blue-500">
              {coin.name} Links
            </h1>
            <CryptoLinks coin={coin && coin} />
          </div>
        </div>
        {/* NEWS */}
        <div className="w-full">
          <h1 className="textTitle my-5 text-3xl text-blue-500">Latest News</h1>
          {newsFilter.length === 0 && (
            <RingSpinner message="We are updating news" />
          )}
          {newsFilter.length > 0 && (
            <div>
              {newsFilter.map((news, idx) => (
                <NewsCard key={idx} news={news} />
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default CryptoDetails
