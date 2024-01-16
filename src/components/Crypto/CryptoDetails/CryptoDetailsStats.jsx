import { RiExchangeDollarLine, RiHashtag, RiFlashlightLine, RiTrophyLine } from "react-icons/ri"
import millify from "millify"

const CryptoDetailsStats = ({coin}) => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
        <div className="flex w-4/5 items-center justify-between border-b p-4 transition-all duration-500 ease-in hover:bg-slate-200 hover:rounded-b-lg md:w-1/2">
          {/* PRICE */}
          <div className="flex items-center gap-2">
            <RiExchangeDollarLine size={25} />
            <p>Price to USD</p>
          </div>
          <p className="font-bold">
            $ {coin.price > 10 ?millify(coin.price): coin.price.slice(0,10) }
          </p>
        </div>
        {/* RANK */}
        <div className="flex w-4/5 items-center justify-between border-b p-4 transition-all duration-500 ease-in hover:bg-slate-200 hover:rounded-b-lg md:w-1/2">
          <div className="flex items-center gap-2">
            <RiHashtag size={25} />
            <p>Rank</p>
          </div>
          <p className="font-bold">{coin.rank}</p>
        </div>
        {/* 24h Volume */}
        <div className="flex w-4/5 items-center justify-between border-b p-4 transition-all duration-500 ease-in hover:bg-slate-200 hover:rounded-b-lg md:w-1/2">
          <div className="flex items-center gap-2">
            <RiFlashlightLine size={25} />
            <p>24h Volume</p>
          </div>
          <p className="font-bold">$ {millify(coin['24hVolume'])}</p>
        </div>
         {/* Market Cap */}
         <div className="flex w-4/5 items-center justify-between border-b p-4 transition-all duration-500 ease-in hover:bg-slate-200 hover:rounded-b-lg md:w-1/2">
          <div className="flex items-center gap-2">
            <RiExchangeDollarLine size={25} />
            <p>Market Cap</p>
          </div>
          <p className="font-bold">$ {millify(coin.marketCap)}</p>
        </div>
        {/* All Time Hight */}
        <div className="flex w-4/5 items-center justify-between border-b p-4 transition-all duration-500 ease-in hover:bg-slate-200 hover:rounded-b-lg md:w-1/2">
          <div className="flex items-center gap-2">
            <RiTrophyLine size={25} />
            <p>All-Time-Hight (ATH)</p>
          </div>
          <p className="font-bold">$ {coin.allTimeHigh.price > 10? millify(coin.allTimeHigh.price): coin.allTimeHigh.price.slice(0,10)}</p>
        </div>
      </div>
  )
}

export default CryptoDetailsStats