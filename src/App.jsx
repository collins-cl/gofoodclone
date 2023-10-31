import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNotif from "./Components/AppNotif/AppNotif";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Search from "./Pages/Search/Search";
import Recommendation from "./Pages/Recommendations/Recommendation";
import SearchedData from "./Pages/Search/SearchedData/SearchedData";
import { ErrorPage } from "./Pages/Error/ErrorPage";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Router>
        <div className="app">
          {isMobile && isHidden ? <AppNotif setIsHidden={setIsHidden} /> : null}
          <Navbar />

          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/search" element={<Search />}></Route>
            <Route path="/search-result" element={<SearchedData />} />
            <Route path="/recommendation" element={<Recommendation />}></Route>
            <Route path="/404" element={<ErrorPage />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
