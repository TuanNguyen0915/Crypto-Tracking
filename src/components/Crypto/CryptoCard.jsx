import millify from "millify"
import { Link } from "react-router-dom"

const CryptoCard = ({ coin }) => {
  return (
    <Link
      className="w-full flex-col items-center rounded-lg border p-4 hover:shadow-lg hover:shadow-dark-blue"
      to={`/crypto/${coin.uuid}`}
    >
      {/* INFO */}
      <div className="flex w-full items-center justify-between border-b pb-2">
        <p>
          <span className="font-semibold">{coin.rank}</span>. {coin.name}
        </p>
        <img src={coin.iconUrl} alt="" className="h-8 w-8 rounded-full" />
      </div>
      <div className="mt-2 flex w-full flex-col gap-2">
        <div className="flex w-full items-center justify-between">
          <p>Symbol:</p>
          <p>{coin.symbol}</p>
        </div>
        <div className="flex w-full items-center justify-between">
          <p>Price: </p>
          <p>{coin.price > 10 ? millify(coin.price) : coin.price.slice(0,10)}</p>
        </div>
        <div className="flex w-full items-center justify-between">
          <p>Market Cap: </p>
          <p> {millify(coin.marketCap)}</p>
        </div>
        <div className="flex w-full items-center justify-between">
          <p>Daily Change:</p>
          <p
            className={`${coin.change > 0 ? "text-green-600" : "text-red-600"} font-semibold`}
          >
            {millify(coin.change)}%
          </p>
        </div>
      </div>
    </Link>
  )
}
export default CryptoCard
