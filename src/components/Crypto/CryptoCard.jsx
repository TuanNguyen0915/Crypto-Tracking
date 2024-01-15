import millify from "millify"
import { Link } from "react-router-dom"

const CryptoCard = ({ coin }) => {
  console.log(coin)

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
        <p>Price: {millify(coin.price)}</p>
        <p>Market Cap: {millify(coin.marketCap)}</p>
        <p>Daily Change: {millify(coin.change)}%</p>
      </div>
    </Link>
  )
}
export default CryptoCard