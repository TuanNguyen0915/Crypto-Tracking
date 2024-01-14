import { Routes, Route } from "react-router"
import { AiFillCloseCircle } from "react-icons/ai"

//pages
import SideBar from "./components/Bar/SideBar"
import HomePage from "./pages/HomePage"
import ExchangesPage from "./pages/ExchangesPage"
import CryptoCurrenCiesPage from "./pages/CryptoCurrenCiesPage"
import CryptoDetailsPage from "./pages/CryptoDetailsPage"
import { useState } from "react"
import NavBar from "./components/Bar/NavBar"
<<<<<<< HEAD
import Footer from "./components/Footer/Footer"
=======

>>>>>>> 931482173f2751a334a441de28d0668f0e0dcd24
const App = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false)

  return (
    <div className="flex h-screen flex-col md:flex-row ">
      <div className=" hidden h-screen md:flex md:justify-between">
        {/* DESKTOP VIEW */}
        <SideBar />
      </div>
      {/* MOBILE VIEW */}
      <div className="flex-rol flex md:hidden">
        {toggleSidebar && (
          <div className="fixed z-10 h-screen w-4/5 animate-slide-in overflow-hidden">
            <div className="bg-dark-blue flex w-full items-center justify-end">
              <AiFillCloseCircle
                fontSize={30}
                className="mr-4 mt-4 cursor-pointer dark:text-slate-200"
                onClick={() => setToggleSidebar(false)}
              />
            </div>

            <SideBar setToggleSidebar={setToggleSidebar} />
          </div>
        )}
      </div>

      {/* PAGES */}
      <div className="w-full">
<<<<<<< HEAD
        <NavBar setToggleSidebar={setToggleSidebar} />
        <div className="w-full flex-1 overflow-y-scroll p-4">
=======
        <NavBar setToggleSidebar={setToggleSidebar}/>
        <div className="h-screen w-full flex-1 overflow-y-scroll p-4">
>>>>>>> 931482173f2751a334a441de28d0668f0e0dcd24
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/exchanges" element={<ExchangesPage />} />
            <Route
              exact
              path="/cryptocurrencies"
              element={<CryptoCurrenCiesPage />}
            />
            <Route
              exact
              path="/crypto/:coinId"
              element={<CryptoDetailsPage />}
            />
          </Routes>
        </div>
<<<<<<< HEAD
        <Footer />
=======
>>>>>>> 931482173f2751a334a441de28d0668f0e0dcd24
      </div>
    </div>
  )
}

export default App
