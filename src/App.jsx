import { Routes, Route } from "react-router"
import { AiFillCloseCircle } from "react-icons/ai"
import { useState, useRef, useEffect } from "react"

//pages
import SideBar from "./components/Bar/SideBar"
import HomePage from "./pages/HomePage"
import ExchangesPage from "./pages/ExchangesPage"
import CryptoCurrenCiesPage from "./pages/CryptoCurrenCiesPage"
import CryptoDetailsPage from "./pages/CryptoDetailsPage"
// components
import NavBar from "./components/Bar/NavBar"
import Footer from "./components/Footer/Footer"
import SearchPage from "./pages/SearchPage"
import News from "./pages/News"

const App = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const scrollRef = useRef()

  useEffect(() => {
    scrollRef.current.scrollTo(0, 0)
  })

  return (
    <div className="flex flex-col md:flex-row ">
      <div className=" hidden h-screen md:flex">
        {/* DESKTOP VIEW */}
        <SideBar />
      </div>
      {/* MOBILE VIEW */}
      <div className="flex-rol flex md:hidden">
        {toggleSidebar && (
          <div className="fixed z-10 h-screen w-4/5 animate-slide-in overflow-hidden">
            <div className="relative">
              <div className="flex w-full items-center justify-end bg-dark-blue">
                <AiFillCloseCircle
                  fontSize={30}
                  className="mr-4 mt-4 cursor-pointer dark:text-slate-200"
                  onClick={() => setToggleSidebar(false)}
                />
              </div>
            </div>

            <SideBar setToggleSidebar={setToggleSidebar} />
          </div>
        )}
      </div>

      {/* PAGES */}

      <div className="h-screen w-full flex-1 overflow-y-scroll" ref={scrollRef}>
        <NavBar
          setToggleSidebar={setToggleSidebar}
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
        />
        <div className="w-full p-4">
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
            <Route
              exact
              path="/search"
              element={<SearchPage searchTerm={searchTerm} />}
            />
            <Route exact path="/news" element={<News />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
