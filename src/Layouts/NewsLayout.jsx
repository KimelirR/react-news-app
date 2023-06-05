import React from "react";
// import ResponsiveNavbar from "../components/ResponsiveNavbar";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

const NewsLayout = () => {

  return (
    <>
        <div className="row mt-5">
        <div className="col-12 mb-3">
          <h4>News Broadcasting</h4>
          <p>
            Customized Data
          </p>
          <hr />
        </div>
      </div>
      
      <Cards />
      
      <Footer />
    </>

  );
};

export default NewsLayout;
