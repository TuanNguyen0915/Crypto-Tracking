import { useEffect, useState } from "react"
import ExchangesCard from "./ExchangesCard"

const Exchanges = ({ exchanges }) => {
  const [sortedRank, setSortedRank] = useState([])
  const [selectSort, setSelectSort] = useState("24h")
  useEffect(() => {
    if (selectSort === "24h") {
      const newData = exchanges.sort(
        (a, b) =>
          b.quotes.USD.reported_volume_24h - a.quotes.USD.reported_volume_24h,
      )

      setSortedRank(newData)
    } else if (selectSort === "7d") {
      const newData = exchanges.sort(
        (a, b) =>
          b.quotes.USD.reported_volume_7d - a.quotes.USD.reported_volume_7d,
      )

      setSortedRank(newData)
    } else if (selectSort === "30d") {
      const newData = exchanges.sort(
        (a, b) =>
          b.quotes.USD.reported_volume_30d - a.quotes.USD.reported_volume_30d,
      )
      setSortedRank(newData)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectSort])

  if (sortedRank.length > 0) {
    return (
      <table className="table p-0 m-0 w-full">
        {/* head */}
        <thead className="bg-slate-100 font-semibold w-full p-0 m-0">
          <tr>
            <th className="w-1/2"></th>
            <th>
              <select
                defaultValue="24h"
                onChange={(e) => setSelectSort(e.target.value)}
                className="p-2 bg-transparent border-blue-300 border-2 rounded-lg focus:outline-none hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300 ease-in"
              >
                <option value="24h">1d Trade Volume</option>
                <option value="7d">7d Trade Volume</option>
                <option value="30d">1m Trade Volume</option>
              </select>
            </th>
            <th className="hidden md:flex">Currencies</th>
            <th className="hidden md:flex">Confidence Score</th>
          </tr>
        </thead>
        {/* body */}
        <tbody className="w-full">
          {sortedRank.map((exchange) => (
          <ExchangesCard key={exchange.id} exchange={exchange && exchange} selectSort={selectSort}/>
        ))}
        </tbody>
      </table>
    )
  }
}
export default Exchanges
