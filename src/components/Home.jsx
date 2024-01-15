import { useEffect } from "react"
import { getCryptosQuery } from "../services/cryptoApi"
import {
  fetchCryptoStart,
  fetchCryptoSuccess,
  fetchCryptoFailure,
} from "../redux/cryptoSlice/cryptoSlice"
import { useDispatch, useSelector } from "react-redux"
import { RingSpinner } from "./Spinner/Spinner"
import CryptoStats from "./Crypto/CryptoStats"
import Top10Cryptos from "./Crypto/Top10Cryptos"

const Home = () => {
  const dispatch = useDispatch()
  const { currentCryptos, loading } = useSelector((state) => state.cryptos)
  useEffect(() => {
    try {
      dispatch(fetchCryptoStart())
      const fetchData = async () => {
        const res = await getCryptosQuery()
        if (res.status === "success") {
          dispatch(fetchCryptoSuccess(res.data))
        } else {
          dispatch(fetchCryptoFailure(res.status))
        }
      }
      fetchData()
    } catch (error) {
      dispatch(fetchCryptoFailure(error))
    }
  }, [dispatch])

  if (loading) {
    return (
      <div className="flex h-[79vh] w-full items-center justify-center">
        <RingSpinner />
      </div>
    )
  }

  return (
    <div className="w-full p-2">
      <CryptoStats
        globalStats={currentCryptos?.stats && currentCryptos?.stats}
      />

      <div className="mt-10">
        <Top10Cryptos
          allCryptos={currentCryptos?.coins && currentCryptos?.coins}
        />
      </div>
    </div>
  )
}

export default Home
