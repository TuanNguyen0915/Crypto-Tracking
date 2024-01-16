import { useState } from "react"
import CryptoDetailsStats from "./CryptoDetailsStats"
import CryptoLinks from "./CryptoLinks"

const CryptoDetails = ({ coin }) => {
  const [isShow, setIsShow] = useState(false)
  const coinColor = coin?.color ? `border border-[${coin.color}]` : "border"
  if (coin) {
    return (
      <div className="mt-10 flex w-full flex-col justify-center gap-4 ">
        <div className=" flex w-full flex-col items-center justify-center">
          <button
            className={`${coinColor} textTitle btn w-4/5 bg-blue-600 text-2xl text-white shadow-lg md:w-2/5`}
            onClick={() => setIsShow(!isShow)}
          >
            {coin.name} Value Statistic
          </button>
          {isShow && (
            <>
              <p className="textPara mt-4 text-base">
                An overview showing the stats of {coin.name}
              </p>
              {/* OVERVIEW */}
              <CryptoDetailsStats coin={coin && coin} />
            </>
          )}
        </div>
        {/* COIN DETAILS */}
        <div className="mt-10 flex w-full flex-col justify-center gap-4">
          <h1 className="textTitle text-3xl text-blue-500">
            What is {coin.name}
          </h1>
          <p>{coin.description}</p>
          <h1 className="textTitle text-3xl text-blue-500">
            {coin.name} Links
          </h1>
          <CryptoLinks coin={coin && coin} />
        </div>
      </div>
    )
  }
}

export default CryptoDetails
