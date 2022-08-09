import React, { useState } from "react";
// import Advertisement from "./advertisement";
// import Editior from "./editior";
import axios from 'axios';

export default function Manufacturingapi() {
 

  return (
          <div className="container">
            <div className="manu_main">
              <div className="manu_body">
                <h3>Manufacturing</h3>
                {/* <h3>{value.title}</h3> */}
                <h1>
                  Warburg Pincus set to acquire majority stake in auto parts
                  maker
                </h1>
                <p>
                  Private equity firm TPG, which is reportedly heading towards a
                  public listing, said on Thursday it had appointed long-time
                  company executive Todd Sisitsky as president, effective
                  immediately.
                </p>
                <p className="text-color">
                  <span>30 September</span>
                  <span>Madhurima Nandy</span>
                </p>
                <p>
                  <button className="text-button">Read More</button>
                </p>
              </div>

              <div className="manu-img">
                <img src="./images/Manufacturing.png" alt="images" />
                {/* <img src={value.file_url} alt="" /> */}
              </div>
            </div>
          </div>
        );
    

  
}
