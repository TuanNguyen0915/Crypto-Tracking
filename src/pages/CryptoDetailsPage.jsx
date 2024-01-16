// npm modules
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
// service
import { getCoin } from "../services/cryptoApi"
// components
import { RingSpinner } from "../components/Spinner/Spinner"
import CryptoDetails from "../components/Crypto/CryptoDetails"

const time = ["7d", "30d", "3m", "6m", "1y", "3y", "5y"]
const CryptoDetailsPage = () => {
  const { coinId } = useParams()
  const [coin, setCoin] = useState(null)
  const [loading, setLoading] = useState(true)
  const [timePeriod, setTimePeriod] = useState('24h')
  useEffect(() => {
    setLoading(true)
    try {
      const fetchData = async () => {
        const data = await getCoin(coinId, timePeriod)
        setCoin(data.data.coin)
      }
      fetchData()
    } catch (error) {
      throw new Error(error)
    }
    setLoading(false)
  }, [coinId, timePeriod])

  if (loading) {
    return (
      <div className="flex h-[600px] w-full items-center justify-center">
        <RingSpinner message="Loading coin" />
      </div>
    )
  }

  if (coin) {
    return (
      <div className="w-full">
        <div className="flex w-full flex-col items-center justify-center gap-5 border-b">
          <h1 className=" textTitle text-blue-500 transition-all text-3xl duration-500 ease-in hover:text-blue-800">
            {coin.name} ({coin.symbol})
          </h1>
          <p className="textPara mb-2 text-center text-base">
            {coin.name} live price in USD. View value statistics, market cap and
            supply.
          </p>
        </div>
        <select
          className="select select-info mt-5 w-full max-w-xs focus:outline-none"
          onChange={(e) => setTimePeriod(e.target.value)}
        >
          <option disabled selected>
            Select Time Period
          </option>
          {time.map((period) => (
            <option key={period} value={period}>
              {period}
            </option>
          ))}
        </select>
        <CryptoDetails coin={coin}/>
      </div>
    )
  }
}

export default CryptoDetailsPage
