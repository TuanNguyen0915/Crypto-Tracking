import { getExchanges } from "../services/cryptoApi"
import { RingSpinner } from "../components/Spinner/Spinner"
import { useEffect, useState } from "react"
import Exchanges from "../components/Exchanges/Exchanges"

const ExchangesPage = () => {
  const [fetching, setFetching] = useState(true)
  const [exchanges, setExchanges] = useState(null)
  // fetching data
  useEffect(() => {
    try {
      setFetching(true)
      const fetchData = async () => {
        const data = await getExchanges()
        setExchanges(data)
      }
      fetchData()
      setFetching(false)
    } catch (error) {
      setFetching(false)
      return (
        <div className="h-[600px]">
          <RingSpinner message="Loading data fail. We will updated soon" />
        </div>
      )
    }
  }, [])

  if (fetching) {
    return (
      <div className="h-[600px]">
        <RingSpinner message="Loading data" />
      </div>
    )
  }

  if (exchanges) {
    return <Exchanges exchanges={exchanges} />
  }
}
export default ExchangesPage
