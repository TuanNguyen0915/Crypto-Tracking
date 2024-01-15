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
