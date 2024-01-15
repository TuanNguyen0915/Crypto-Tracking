import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="w-full justify-end">
      <div className="bg-dark-blue flex w-full flex-col items-center justify-center gap-2 text-slate-200">
        <h1 className="text-xl">Crypto Tracking</h1>
        <h2>All rights reserved</h2>
        <div className="bottom-0 flex items-center gap-4">
          <Link
            to="/"
            className="text-blue-500 transition-all duration-300 ease-in hover:text-white"
          >
            Home
          </Link>
          <Link
            to="/exchanges"
            className="text-blue-500 transition-all duration-300 ease-in hover:text-white"
          >
            Exchange
          </Link>
          <Link
            to="/news"
            className="text-blue-500 transition-all duration-300 ease-in hover:text-white"
          >
            News
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer