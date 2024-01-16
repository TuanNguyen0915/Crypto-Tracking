import { useSelector } from "react-redux"
import { RingSpinner } from "../components/Spinner/Spinner"
import CryptoCard from "../components/Crypto/CryptoCard"

const CryptoCurrenCiesPage = () => {
  const { currentCryptos, loading } = useSelector((state) => state.cryptos)
  const coins = currentCryptos?.coins
  if (loading) {
    return (
      <div className="flex h-[600px] w-full items-center justify-center">
        <RingSpinner />
      </div>
    )
  }
  return (
    <div>
      <h1 className="textTitle text-blue-500 text-center text-3xl my-5">Top {coins.length} Cryptocurrencies </h1>
      {coins && (
        <div className="grid w-full grid-cols-2 gap-2 md:grid-cols-4 md:gap-4">
          {coins?.map((coin) => (
            <CryptoCard key={coin.symbol} coin={coin && coin} />
          ))}
        </div>
      )}
    </div>
  )
}

export default CryptoCurrenCiesPage
