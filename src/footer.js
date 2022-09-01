import React from 'react'

export default function Footer() {
  return (
    <div>
       <div >
        <div className="footer footer-responsive">
          <div className='container'>
          <div className="footer-content">
            <img src="./images/Mosaic-digital.png" alt="" />
            <p>
              <img className="ft-content" src="./images/facebook.png" alt="" />
              <img className="ft-content" src="./images/twitter.png" alt="" />
              <img className="ft-content" src="./images/linkedin.png" alt="" />
            </p>
            <p>
              <a className="footer-link" href="/">
                About Us
              </a>
              <a className="footer-link" href="/">
                Advertise With us
              </a>
              <a className="footer-link" href="/">
                Contact Us
              </a>
              <a className="footer-link" href="/">
                Copyright
              </a>
              <a className="footer-link" href="/">
                Privacy Policy
              </a>
              <a className="footer-link" href="/">
                Terms of Use
              </a>
              <a className="footer-link" href="/">
                Company Listing
              </a>
              <a className="footer-link" href="/">
                Tag Listing
              </a>
            </p>
            <ul className="footer-products">
              <li>Our Products:</li>
              <li>VCCCircle</li>
              <li>TechCircle</li>
              <li>Events</li>
              <li>Training</li>
              <li>VCCEdge</li>
              <li>SalesEdge</li>
              <li>PartnerEdge</li>
              <li>Edge Insights</li>
            </ul>
            <p className="footer-copy">
              Copyright © 2022 VCCircle.com. Property of Mosaic Media Ventures
              Pvt. Ltd.
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
