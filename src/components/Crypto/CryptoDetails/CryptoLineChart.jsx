import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
} from "chart.js"
import { RingSpinner } from "../../Spinner/Spinner"
import millify from "millify"

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title)

const CryptoLineChart = ({ coin, coinHistory }) => {
  if (!coin || !coinHistory) {
    return (
      <div>
        <RingSpinner message="Loading data" />
      </div>
    )
  }

  // Get Data for Line Chart
  let coinPrice = [],
    coinTimestamp = []
  coinHistory?.history.forEach((history) => {
    coinPrice.push(history.price)
    coinTimestamp.push(new Date(history.timestamp * 1000).toLocaleDateString())
  })

  coinPrice = coinPrice.reverse()
  coinTimestamp = coinTimestamp.reverse()

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price in UDS",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
        tension: 0.4,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Prices in USD",
      },
    },
  }

  return (
    <div className="flex w-full flex-col justify-center">
      {/* TITLE */}
      <div className="flex w-full flex-col justify-between md:flex-row gap-4">
        <h1 className="textTitle text-3xl text-blue-500">
          {coin.name} Price Chart
        </h1>
        <p className="flex items-center justify-between gap-5 rounded-lg border p-4 shadow-md opacity-80 hover:opacity-100 transition-all duration-300 ease-in">
          <span
            className={`${coinHistory.change >= 0 ? "text-green-600" : "text-red-600"} font-bold`}
          >
            {coinHistory.change}%
          </span>{" "}
          Current Price: $ {millify(coin.price)}
        </p>
      </div>
      <div className="mt-15 w-full p-2">
        <Line data={data} options={options} />
      </div>
    </div>
  )
}

export default CryptoLineChart
