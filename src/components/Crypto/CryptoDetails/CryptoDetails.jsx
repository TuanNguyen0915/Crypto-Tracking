import CryptoDetailsStats from "./CryptoDetailsStats"


const CryptoDetails = ({ coin }) => {
  return (
    <div className="mt-10 flex w-full flex-col justify-center gap-4">
      <div className=" flex w-full flex-col items-center justify-center">
        <h1 className="textTitle text-2xl">{coin.name} Value Statistic</h1>
        <p className="textPara text-base">
          An overview showing the stats of {coin.name}
        </p>
      </div>
      {/* OVERVIEW */}
      <CryptoDetailsStats coin={coin && coin} />
    </div>
  )
}

export default CryptoDetails
