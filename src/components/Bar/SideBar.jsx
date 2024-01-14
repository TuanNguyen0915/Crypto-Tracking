
import { Link, NavLink } from "react-router-dom"
import logo from "../../assets/cryptocurrency.png"

const SideBar = ({ setToggleSidebar }) => {
  const isActiveStyle = "bg-blue-600 text-white flex items-center px-8 py-2"
  const isNotActiveStyle = "text-slate-400 flex items-center px-8 py-2 hover:text-white transition-all duration-300 ease-in"
  const handleCloseSideBar = () => {
    if(setToggleSidebar) setToggleSidebar(false)
  }
  

  return (
    <div className="bg-dark-blue flex h-screen min-w-[300px] flex-col gap-5 overflow-hidden">
      {/* THEME CONTROLLER AND LOGO */}
      <div className=" mt-5 flex w-full flex-col items-center justify-between px-4">
        <div className="flex w-full items-center justify-between md:justify-end gap-5">
          <Link to='/' className="flex items-center gap-5">
            <img src={logo} alt="logo" className="h-[50px] w-[50px]" />
            <h1 className="text-xl font-bold text-blue-500">Crypto Tracking</h1>
          </Link>
        </div>
      </div>
      <div className="mt-[100px] flex w-full flex-col gap-5 md:text-xl font-semibold text-slate-200">
        {/* NAV ITEM */}
        <NavLink
          className={(navClass) =>
            navClass.isActive ? isActiveStyle : isNotActiveStyle
          }
          onClick={handleCloseSideBar}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={(navClass) =>
            navClass.isActive ? isActiveStyle : isNotActiveStyle
          }
          onClick={handleCloseSideBar}
          to="/exchanges"
        >
          Exchanges
        </NavLink>
        <NavLink
          className={(navClass) =>
            navClass.isActive ? isActiveStyle : isNotActiveStyle
          }
          onClick={handleCloseSideBar}
          to="/cryptocurrencies"
        >
          Crypto Currencies
        </NavLink>
      </div>
    </div>
  )
}

export default SideBar
