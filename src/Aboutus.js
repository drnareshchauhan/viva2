import React, { useState } from "react";
import howToUseApp from "./API/howToUse";
const Aboutus = () => {
  const [use] = useState(howToUseApp);
  return (
    <>
      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-5 text-center our-service-leftside-img">
              <img src="./images/hero4.jpg" alt="aboutusImg" />
            </div>
            <div className="col-12 col-lg-7 our-services-list">
              <h3 className="mini-title"> -- @SMARTPHONE RESPONSIVE DESIGN</h3>
              <h1 className="main-heading">How to use the App?</h1>
              {use.map((curEl) => {
                const { id, title, info } = curEl;
                return (
                  <>
                    <div className="row our-services-info" key={id}>
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              <button className="btn-style btn-style-border">learn more</button>
            </div>
          </div>
        </div>
      </section>
      {/* second part of about us section  */}
    </>
  );
};

export default Aboutus;
