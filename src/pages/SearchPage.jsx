import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import CryptoCard from "../components/Crypto/CryptoCard"
import { RingSpinner } from "../components/Spinner/Spinner"
const SearchPage = ({ searchTerm }) => {
  const { currentCryptos } = useSelector((state) => state.cryptos)
  const cryptos = currentCryptos?.coins


  // Return to home page if we have problem when render search page
  if (!cryptos) {
    return <Navigate to="/" />
  }

  const cryptoFilter = cryptos.filter((coin) => {
    return coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  })
  return (
    <div className="w-full h-[90vh]">
      {!searchTerm && (
        <div className="h-[600px]">
          <RingSpinner message="Enter the coin you are looking for ..." />
        </div>
      )}
      {searchTerm && (cryptoFilter.length < 1) && (
        <div className="flex h-[600px] w-full items-center justify-center">
          <RingSpinner message="Sorry, we dont have data about" searchTerm={searchTerm}/>
        </div>
      )}
      <div className="grid w-full grid-cols-2 gap-2 md:grid-cols-4  md:gap-4">
        {cryptoFilter &&
          searchTerm &&
          cryptoFilter.map((coin) => (
            <CryptoCard coin={coin} key={coin.uuid} />
          ))}
      </div>
    </div>
  )
}

export default SearchPage
