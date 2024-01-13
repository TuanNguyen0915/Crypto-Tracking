import ThemeController from "./ThemeController"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="max-w-full">
      {/* THEME CONTROLLER */}
      <ThemeController />
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      {/* NAV ITEM */}
      <Link to="/" className="btn">
        CryptoTracking
      </Link>
      <Link to="/exchanges" className="btn">
        Exchanges
      </Link>
      <Link to="/cryptocurrencies" className="btn">
        Crypto Currencies
      </Link>
    </div>
  )
}

export default NavBar
