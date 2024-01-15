import millify from "millify"
import { Link } from "react-router-dom"

const CryptoCard = ({ coin}) => {

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
      <div className="w-full flex flex-col gap-2 mt-2">
        <p>Price: {coin.price > 10?millify(coin.price):coin.price}</p>
        <p>Market Cap: {millify(coin.marketCap)}</p>
        <p>Daily Change: <span className={`${coin.change > 0?'text-green-600':"text-red-600"} font-semibold`}>{millify(coin.change)}%</span></p>
      </div>
    </Link>
  )
}
export default CryptoCard
