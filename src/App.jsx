import React from "react";
import Home from "./Components/home";
import Header from "./Components/sideComponents/header";
import Footer from "./Components/sideComponents/footer";
import "./App.css";
function App() {
  return (
    <>
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;
