const CryptoLinks = ({ coin }) => {
  return (
    <div className="flex w-full items-center">
      <table className="table flex w-full items-center">
        <tbody className="w-full">
          {coin.links?.map((link, idx) => (
            <tr key={idx} className="flex w-full items-center justify-between hover:bg-slate-100 hover:rounded-md transition-all duration-300 ease-in my-1">
              <td >{link.type}</td>
              <td className="text-end">
                <a href={link.url} target="_blank" rel="noreferrer"
                className="textLink hover:text-blue-800">
                  {link.name}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CryptoLinks
