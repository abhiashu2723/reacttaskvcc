import React from "react";

export default function Infographic() {
  return (
    <div className="container">
      <div className="infographic-container responsive-infographic">
        <div className="twitter-container-upper responsive-infographic1">
          <img src="./images/Group 9139.png" alt="images" className="twitter-container-upperimg"/>
          <div className="twitter-container responsive-twitter">
            <h6>VCCircle.com </h6>
            <p>
              World Bank arm IFC to double down its investments into funds in
              2022
            </p>
          </div>
        </div>
        <div className="line"></div>
        <div>
          <h2 className="info-heading">Infographic</h2>
          <img src="./images/Mask Group 18.png" alt="images" />
        </div>
        <div className="left-section1 ">
          <h5  >Advertisnment</h5>
          <img src="./images/sudhirzeenews.png" alt="" />
        </div>
      </div>
      <hr className="line"/>
    </div>
    
  );
}
