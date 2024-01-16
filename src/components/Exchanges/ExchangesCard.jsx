import millify from "millify"
import { useState } from "react"

const ExchangesCard = ({ exchange, selectSort }) => {
  const [isClick, setIsClick] = useState(false)
  let links = []
  if (exchange.links) {
    Object.keys(exchange.links).map((link) => {
      links.push({ name: link, url: exchange.links[link][0] })
    })
  }

  return (
    <>
      <tr className="hover">
        <td
          onClick={() => setIsClick(!isClick)}
          className="flex w-full items-center"
        >
          <button className="btn btn-outline btn-info w-full md:w-1/2">
            {exchange.name}
          </button>
        </td>
        {selectSort === "24h" && (
          <td>{millify(exchange.quotes.USD.reported_volume_24h)}</td>
        )}
        {selectSort === "7d" && (
          <td>{millify(exchange.quotes.USD.reported_volume_7d)}</td>
        )}
        {selectSort === "30d" && (
          <td>{millify(exchange.quotes.USD.reported_volume_30d)}</td>
        )}
        <td>{millify(exchange.currencies)}</td>
        <td className="hidden md:flex">{millify(exchange.confidence_score)}</td>
      </tr>
      <tr className="w-full">
        {isClick && (
          <td className="w-full border-b p-4" colSpan={5}>
            <div className="w-full">
              {links.length > 0 ? (
                <div className="flex  w-full flex-col items-center justify-center gap-2">
                  {links.map((link, idx) => (
                    <div
                      key={idx}
                      className="flex w-full items-center justify-between md:w-1/2"
                    >
                      <p>{link.name}</p>
                      <a
                        className="textLink hover:text-blue-600"
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.url.split("/")[2]}
                      </a>
                    </div>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
          </td>
        )}
      </tr>
    </>
  )
}

export default ExchangesCard
