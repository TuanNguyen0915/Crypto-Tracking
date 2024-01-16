const CryptoDetails = ({ coin }) => {
  return (
    <div className="flex w-full flex-col justify-center gap-4 mt-10">
      <div className=" flex w-full items-center text-center ">
        <h1 className="textTitle text-3xl text-blue-400 hover:text-blue-800 text-center">
          <img src={coin.iconUrl} alt="" className="h-20 w-20 rounded-full"/>
        </h1>
      </div>
    </div>
  )
}

export default CryptoDetails
