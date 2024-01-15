import Search from "../Search/Search"
import ThemeController from "./ThemeController"
import { HiMenu } from "react-icons/hi"


const NavBar = ({ setToggleSidebar, searchTerm, setSearchTerm }) => {
  const handleClick = () => {
    if (setToggleSidebar) setToggleSidebar(true)
  }

  return (
    <div className="mt-2 flex w-full items-center justify-center px-2">
      <div className=" flex w-full items-center justify-between gap-4 rounded-lg border-2 border-slate-400 p-2 md:p-4">
        <div className="flex w-[100px] items-center justify-between md:hidden">
          <HiMenu
            fontSize={40}
            className="ml-4 cursor-pointer text-slate-600"
            onClick={handleClick}
          />
        </div>
        <div className="w-full">
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </div>
        <div className="w-full">
          <div className="flex items-center justify-end gap-5">
            <ThemeController />
            <div className="mr-4 h-10 w-10 rounded-full bg-slate-500">
              <img
                src="https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg"
                alt="logo"
                className="h-full w-full rounded-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
