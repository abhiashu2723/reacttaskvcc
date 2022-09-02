import React, { useState } from "react";
import Advertisement from "./advertisement";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const show = () => {
    setMenu(!menu);
    if(menu===false) {
      document.body.style.overflow="hidden";
    }
    else if(menu===true) {
      document.body.style.overflow="scroll";

    }
  };
  return (
    <>
      <div className="navbar_box navbar-box-res">
          <div className="navbar-height">
        <div className="container">
            <div className="navbar">
              <div className="nav-logo">
                <img src="./images/VCC-logo.svg" alt="log" />
              </div>
               <div className="nav-humbarger">
                <div className="subscribe-responsive">
                  <div className="humbarger">
                    <a  className="humbargericon"href="/#" onClick={show}>
                    
                      <FaBars />
                    </a>

                    <img src="./images/VCC-logo.svg" alt="log" />
                  </div>
                  <div>
                  <li className="nav-list">
                  <a className="tag" href="/">
                    <img src="./images/crown.png" alt="" />
                    subscribe
                  </a>
                </li>

                  </div>
                </div>
                <div className="humbarger-scroll">
                  <div className={menu ? "hum-res" : "sub-nav"}>
                    <ul className="hum-res1">
                      <li className="hum-nav-li ">Home</li>
                      <li className="hum-nav-li ">
                        Sign In
                      </li>
                      <li className="hum-res-li hum-menu">
                        <img
                          src="./images/crown.png"
                          alt="glass-icon"
                          className="nav-img menu-nav-img"
                        />
                        Subscribe
                      </li>
                      <li className="hum-nav-li extra-menu-one">
                        Private Equity
                      </li>
                      <li className="hum-nav-li">Venture Capital</li>
                      <li className="hum-nav-li">M&A</li>
                      <li className="hum-nav-li">
                        Industry
                        <img
                          src="./images/drop-arrow.png"
                          alt="dropdwon"
                          className="nav-drop-img"
                        />
                      </li>
                      <li className="hum-nav-li">Stressed Assests</li>
                      <li className="hum-nav-li">Limited Partner</li>
                      <li className="hum-nav-li">Founder</li>
                      <li className="hum-nav-li hum-extra">About Us</li>
                      <li className="hum-nav-li hum-extra">Tag Listing</li>
                      <li className="hum-nav-li hum-extra">
                        Advertise With Us
                      </li>
                      <li className="hum-nav-li hum-extra">Contact Us</li>
                      <li className="hum-nav-li hum-extra">VCC Mobile APP</li>
                    </ul>
                    <ul>
                      <li className="hum-nav-li humbarger-custom">
                        Customize
                        <img
                          src="./Images/dropdown.png"
                          alt="dropdown"
                          className="nav-drop-img"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div> 
              <ul className="list-navbar">
                <li className="nav-list">
                  <a className="tag" href="/">
                    <img src="./images/search.png" alt="images" />
                    search
                  </a>
                </li>

                <li className="nav-list">
                  <a className="tag" href="/">
                    <img src="./images/crown.png" alt="" />
                    subscribe
                  </a>
                </li>

                <li className="nav-list">
                  <a className="tag" href="/">
                    <img src="./images/Path 2168.png" alt="" />
                    sign in
                  </a>
                </li>
              </ul>
            </div>
            <div className="nav-lower">
              <ul className="list-navbar1">
                <li className="nav-list2">
                  <a className="tag" href="/">
                    private Equity
                  </a>
                </li>
                <li className="nav-list1">
                  <a className="tag" href="/">
                    venture capital
                  </a>
                </li>
                <li className="nav-list1">
                  <a className="tag" href="/">
                    M&A
                  </a>
                </li>
                <li className="nav-list1">
                  <a className="tag" href="/">
                    Industry
                  </a>
                </li>
                <li className="nav-list1">
                  <a className="tag" href="/">
                    stressed Assets
                  </a>
                </li>
                <li className="nav-list1">
                  <a className="tag" href="/">
                    limited Patner
                  </a>
                </li>
                <li className="nav-list1">
                  <a className="tag" href="/">
                    founder
                  </a>
                </li>
              </ul>
              <div className="nav-low1">
                <h2>
                  <a className="tag" href="/">
                    customize
                  </a>{" "}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Advertisement image="./images/walk in kholer.png" />
    </>
  );
}
