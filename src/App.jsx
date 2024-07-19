import React from "react";
import Home from "./Components/home";
import Header from "./Components/sideComponents/header";
import CovidStats from "./Components/sideComponents/covidStats";
import CountryStats from "./Components/sideComponents/countryStats";
import AboutUs from "./Components/sideComponents/aboutUs";
import Footer from "./Components/sideComponents/footer";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Header />
        <Home />
        <Footer />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/covidStats" element={<CovidStats />}></Route>
          <Route path="countryStats" element={<CountryStats />}></Route>
          <Route path="aboutUs" element={<AboutUs />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
