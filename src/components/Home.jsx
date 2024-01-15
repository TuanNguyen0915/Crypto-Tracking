import { useEffect } from "react"
import { getCryptosQuery } from "../services/cryptoApi"
import {
  fetchCryptoStart,
  fetchCryptoSuccess,
  fetchCryptoFailure,
} from "../redux/cryptoSlice/cryptoSlice"
import { useDispatch, useSelector } from "react-redux"

const Home = () => {
  const dispatch = useDispatch()
  const {currentCryptos, loading} = useSelector(state=> state.cryptos)
  console.log(currentCryptos)
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

  return (
    <div className="p-2">
      <h1 className="text-2xl font-bold">Global Crypto Stats</h1>
      {/* INFO */}
      <div className="mt-5 flex w-full flex-col gap-5">
        <div className="flex w-full  items-center gap-5">
          <div className="flex w-1/2 flex-col">
            <div>
              <p className="text-sm text-slate-400">Total Cryptocurrencies</p>
              <h1 className="text-lg font-semibold">10</h1>
            </div>
          </div>
          <div className="flex w-1/2 flex-col">
            <div>
              <p className="text-sm text-slate-400">Total Exchanges</p>
              <h1 className="text-lg font-semibold">10</h1>
            </div>
          </div>
        </div>
        <div className="flex w-full  items-center gap-5 ">
          <div className="flex w-1/2 flex-col">
            <div>
              <p className="text-sm text-slate-400">Total Market Cap</p>
              <h1 className="text-lg font-semibold">10</h1>
            </div>
          </div>
          <div className="flex w-1/2 flex-col">
            <div>
              <p className="text-sm text-slate-400">Total 24h Volume</p>
              <h1 className="text-lg font-semibold">10</h1>
            </div>
          </div>
        </div>
        <div className=" flex  w-full items-center gap-5">
          <div className="flex w-1/2 flex-col">
            <div>
              <p className="text-sm text-slate-400">Total Markets</p>
              <h1 className="text-lg font-semibold">10</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
