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

const Home = () => {
  const dispatch = useDispatch()
  const {loading} = useSelector(state=> state.cryptos)

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

  if(loading) {
    return (
      <div className="h-[79vh] w-full flex items-center justify-center">
        <RingSpinner />
      </div>
    )
  }

  return (
    <div className="p-2">
      <CryptoStats />
    </div>
  )
}

export default Home
