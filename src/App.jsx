import { Routes, Route } from "react-router"
import NavBar from "./components/NavBar/SideBar"

//pages
import HomePage from "./pages/HomePage"
import ExchangesPage from "./pages/ExchangesPage"
import CryptoCurrenCiesPage from "./pages/CryptoCurrenCiesPage"
import CryptoDetailsPage from "./pages/CryptoDetailsPage"

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/exchanges" element={<ExchangesPage />} />
        <Route exact path="/cryptocurrencies" element={<CryptoCurrenCiesPage />} />
        <Route exact path="/crypto/:coinId" element={<CryptoDetailsPage />} />
      </Routes>
    </div>
  )
}

export default App
