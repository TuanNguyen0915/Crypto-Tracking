import millify from "millify"
import { useSelector } from "react-redux"

const CryptoStats = () => {
  const {currentCryptos} = useSelector(state => state.cryptos)
  const globalStats = currentCryptos?.stats

  return (
    <div>
      <h1 className="text-2xl font-bold">Global Crypto Stats</h1>
      {/* INFO */}
      <div className="mt-5 flex w-full flex-col gap-5">
        <div className="flex w-full  items-center gap-5">
          <div className="flex w-1/2 flex-col">
            <div>
              <p className="text-sm text-slate-400">Total Cryptocurrencies</p>
              <h1 className="text-lg font-semibold">
                {millify(globalStats?.totalCoins)}
              </h1>
            </div>
          </div>
          <div className="flex w-1/2 flex-col">
            <div>
              <p className="text-sm text-slate-400">Total Exchanges</p>
              <h1 className="text-lg font-semibold">
                {millify(globalStats?.totalExchanges)}
              </h1>
            </div>
          </div>
        </div>
        <div className="flex w-full  items-center gap-5 ">
          <div className="flex w-1/2 flex-col">
            <div>
              <p className="text-sm text-slate-400">Total Market Cap</p>
              <h1 className="text-lg font-semibold">
                {millify(globalStats?.totalMarketCap)}
              </h1>
            </div>
          </div>
          <div className="flex w-1/2 flex-col">
            <div>
              <p className="text-sm text-slate-400">Total 24h Volume</p>
              <h1 className="text-lg font-semibold">
                {millify(globalStats?.total24hVolume)}
              </h1>
            </div>
          </div>
        </div>
        <div className=" flex  w-full items-center gap-5">
          <div className="flex w-1/2 flex-col">
            <div>
              <p className="text-sm text-slate-400">Total Markets</p>
              <h1 className="text-lg font-semibold">
                {millify(globalStats?.totalMarkets)}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CryptoStats
