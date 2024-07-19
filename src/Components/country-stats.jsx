import React from "react";
import Header from "./sideComponents/header.jsx"
function Countrystats() {
    return (
      <>
      <Header/>
        <div className="container"> 
          <div className="menus"></div>
          <div className="country-info">
            {/* ispod su po blokovima postavljene informacije o drzavama */}
            <div className="country-name"></div>

            <div>
                <div className="country-new-cases">

                </div>
                <div className="country-new-deaths">

                </div>
                <div className="country-new-recovered">

                </div>
            </div>

            <div className="country-total-active">

            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Countrystats;