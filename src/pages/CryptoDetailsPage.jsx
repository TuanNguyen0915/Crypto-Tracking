import { useParams } from "react-router-dom"
import { getCoin } from "../services/cryptoApi"
import { useEffect, useState } from "react"
import { RingSpinner } from "../components/Spinner/Spinner"
const CryptoDetailsPage = () => {
  const { coinId } = useParams()
  const [coin, setCoin] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    try {
      const fetchData = async () => {
        const data = await getCoin(coinId)
        setCoin(data.data.coin)
      }
      fetchData()
    } catch (error) {
      throw new Error(error)
    }
    setLoading(false)
  }, [coinId])
  if (loading) {
    return (
      <div className="flex h-[600px] w-full items-center justify-center">
        <RingSpinner message="Loading coin" />
      </div>
    )
  }

  if(coin) {
    return (
      <div className="w-full flex flex-col justify-center gap-4">
        {coin.name}
      </div>
    )
  }
}

export default CryptoDetailsPage
