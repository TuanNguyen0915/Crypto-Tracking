import millify from "millify"

const CryptoStats = ({ globalStats }) => {
  return (
    <>
      <h1 className="textTitle mb-5">Global Crypto Stats</h1>
      {/* INFO */}
      <div className="flex w-full flex-col items-center justify-center gap-5">
        <div className="flex w-full  items-center justify-center gap-5">
          {/* GROUP 1 */}
          <div className="flex w-1/2 flex-col md:ml-10 md:w-1/3">
            <p className="textPara">Total Cryptocurrencies</p>
            <h1 className="text-xl font-semibold">
              {millify(globalStats?.totalCoins)}
            </h1>
          </div>
          <div className="flex w-1/2 flex-col md:w-1/3">
            <p className="textPara">Total Exchanges</p>
            <h1 className="text-xl font-semibold">
              {millify(globalStats?.totalExchanges)}
            </h1>
          </div>
        </div>
        {/* GROUP 2 */}
        <div className="flex w-full  items-center justify-center gap-5">
          <div className="flex w-1/2 flex-col md:ml-10 md:w-1/3">
            <p className="textPara">Total Market Cap</p>
            <h1 className="text-xl font-semibold">
              {millify(globalStats?.totalMarketCap)}
            </h1>
          </div>
          <div className="flex w-1/2 flex-col md:w-1/3">
            <p className="textPara">Total 24h Volume</p>
            <h1 className="text-xl font-semibold">
              {millify(globalStats?.total24hVolume)}
            </h1>
          </div>
        </div>
        {/* GROUP 3 */}
        <div className="flex w-full  items-center justify-center gap-5">
          <div className="flex w-full flex-col md:ml-10 md:w-1/3">
            <p className="textPara">Total Markets</p>
            <h1 className="text-xl font-semibold">
              {millify(globalStats?.totalMarkets)}
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default CryptoStats
