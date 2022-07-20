import React from "react";
import Advertisement from "./advertisement";
// import Editior from "./editior";

export default function Manufacturing() {
  return (
    <>
      <div className="container">
        <div className="manu_main">
          <div className="manu_body">
            <h3>Manufacturing</h3>
            <h1>
              Warburg Pincus set to acquire majority stake in auto parts maker
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
          </div>
          
        </div>
        <div className="sudhir-res">
          <h5 className="left-section1 sudhir-responsive-adv">Advertisnment</h5>
          <img src="./images/sudhirzeenews.png" alt="" />
        </div>

        <div className="card ">
          <div className="card-content card-content-responsive">
            <img src="./images/Economy.png" alt="images" />
            <h5>Economy</h5>
            <p>
              Indian shares snap 5-day rally on weak global cues, post weekly
              gain
            </p>
            <p className="text-span">
              <span>30 September</span>
              <span>Madhurima Nandy+1</span>
            </p>
          </div>

          <div className="card-content ">
            <img src="./images/Finance.png" alt="images" />
            <h5>Finance</h5>
            <p>
              Paytm to shut Canada B2C app amid eroding market capitalisation
            </p>
            <p className="text-span">
              <span>30 September</span>
              <span>Madhurima Nandy</span>
            </p>
          </div>
          <div className="card-content">
            <img src="./images/consumer.png" alt="images" />
            <h5>Consumer</h5>
            <p>
              Exclusive: PE-backed sauce maker Wingreens acquires Lok
              Capital-backed cereal maker
            </p>
            <p className="text-span">
              <span>30 September</span>
              <span>Madhurima Nandy+3</span>
            </p>
          </div>
          <div className="card-content">
            <img src="./images/Economy1.png" alt="images" />
            <h5>Economy</h5>
            <p>
              GLOBAL MARKETS-European shares in the red after hawkish Fed
              comments
            </p>
            <p className="text-span">
              <span>30 September</span>
              <span>Madhurima Nandy</span>
            </p>
          </div>
        </div>
        <div className="card-editior-responsive">
          <div className="editior-responsive1">
            <img src="./images/Economy.png" alt="images" />
          </div>
          <div className="editior-responsive">
            <h5>Economy</h5>
            <p>
              Indian shares snap 5-day rally on weak global cues, post weekly
              gain
            </p>
            <p className="text-span">
              <span>30 September</span>
              <span>Madhurima Nandy+1</span>
            </p>
          </div>
        </div>
        <div className="card-editior-responsive">
          <div className="editior-responsive1">
            <img src="./images/Finance.png" alt="images" />
          </div>
          <div className="editior-responsive">
            <h5>Finance</h5>
            <p>
              Paytm to shut Canada B2C app amid eroding market capitalisation
            </p>
            <p className="text-span">
              <span>30 September</span>
              <span>Madhurima Nandy</span>
            </p>
          </div>
        </div>
        <div className="card-editior-responsive">
          <div className="editior-responsive1">
            <img src="./images/Consumer.png" alt="images" />
          </div>
          <div className="editior-responsive">
            <h5>Consumer</h5>
            <p>
              Exclusive: PE-backed sauce maker Wingreens acquires Lok
              Capital-backed cereal maker
            </p>
            <p className="text-span">
              <span>30 September</span>
              <span>Madhurima Nandy+3</span>
            </p>
          </div>
        </div>
        <div className="card-editior-responsive">
          <div className="editior-responsive1">
            <img src="./images/Economy1.png" alt="images" />
          </div>
          <div className="editior-responsive">
            <h5>Economy</h5>
            <p>
              GLOBAL MARKETS-European shares in the red after hawkish Fed
              comments
            </p>
            <p className="text-span">
              <span>30 September</span>
              <span>Madhurima Nandy</span>
            </p>
          </div>
        </div>
        <div className="sudhir-res">
          <h5 className="left-section1 sudhir-responsive-adv">Advertisnment</h5>
          <img src="./images/sudhirzeenews.png" alt="" />
        </div>
      </div>
      {/* <Advertisement  image ="./images/adv1.png"/> */}
      <Advertisement image="./images/advertisenment.png" width="950px" />
      {/* <Editior title="Editior's Choice" img="./images/Economy3.png" name="Economy" para="EMERGING MARKETS - Asian markets mixed as they digest Chinese data; South Korean stocks fall" author="30 September"
    description="Madhurima Nandy" img1="./images/reliance.png" finasec="FINANCE" finadesc="RIL invests Rs 7600 crores in acquisitions to strengthen retail arm" author1="30 September" description1="Madhurima Nandy" imgtmt="./images/Daily News.png"tmtsec="TMT" tmtdesc="Dailyhunt parent raises close to $28 mn at $3.1 bn valuation" authortmt="30 September" descriptiontmt="Madhurima Nandy" imgconsumer="./images/basket.png" consumersec="CONSUMER" consumerdesc="Delivery race among Indian grocery startups brings road safety risks"  authorconsumer="30 September" descriptionconsumer="Madhurima Nandy" aajtak="Advertisnment"
    imgaajtak="./images/sudhirzeenews.png"/> */}
    </>
  );
}
