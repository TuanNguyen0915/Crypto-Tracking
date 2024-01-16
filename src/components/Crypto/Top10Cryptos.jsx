import { Link } from "react-router-dom"
import CryptoCard from "./CryptoCard"
const Top10Cryptos = ({ allCryptos }) => {
  const top10coins = allCryptos?.slice(0, 10)
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between m-5">
        <p className="textTitle">Top 10 Cryptocurrencies</p>
      </div>
      {/* RENDER TOP 10 COINS */}
      {top10coins && (
        <div className="grid w-full  grid-cols-2 gap-2 md:grid-cols-4  md:gap-4">
          {top10coins.map((coin) => (
            <CryptoCard key={coin.symbol} coin={coin}/>
            // <div
            //   key={coin.name}
            //   className="w-full rounded-lg border border-slate-400 p-2"
            // >
            //   {coin.name}
            // </div>
          ))}
        </div>
      )}
      {top10coins && (
        <div className="mt-2 w-full text-end md:mt-0">
          <Link
            className="textLink text-base hover:text-blue-600 md:text-lg"
            to="/cryptocurrencies"
          >
            Show More
          </Link>
        </div>
      )}
    </div>
  )
}

export default Top10Cryptos
