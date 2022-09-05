import React from "react";
import Advertisement from "./advertisement";
// import Editior from "./editior";
import Cardapi from "./cardapi";

export default function Manufacturing(props) {
  
  return (
    <>
      <div className="container" key={props.value.stories_list.feid}>
        <div className="manu_main">
          <div className="manu_body">
            <h3>
              {/* Manufacturing */}
            {props.value.stories_list[0].industry_details[0].name}
            </h3>
            <h1>
              {/* Warburg Pincus set to acquire majority stake in auto parts maker */}
              {props.value.stories_list[0].title}
            </h1>
            <p>
              {/* Private equity firm TPG, which is reportedly heading towards a
              public listing, said on Thursday it had appointed long-time
              company executive Todd Sisitsky as president, effective
              immediately. */}
              {props.value.stories_list[0].summary}
            </p>
            <p className="text-color">
              {/* <span>{props.value.stories_list[0].publish} </span> */}
              <span>{props.value.stories_list[0].author_details[0].name}</span>
              {/* <span>{props.value.stories_list[0].author_details[0].name}</span> */}
            </p>
            <p>
              <button className="text-button">Read More</button>
            </p>
          </div>

          <div className="manu-img">
            {/* <img src="./images/Manufacturing.png" alt="images" /> */}
            <img  className="electriccar" src={props.value.stories_list[0].file_url} alt="" />
          </div>
          
        </div>
        {/* <div className="sudhir-res">
          <h5 className="left-section1 sudhir-responsive-adv">Advertisnment</h5>
          <img src="./images/sudhirzeenews.png" alt="" />
        </div> */}





        <div className="card">
          {props.value.stories_list.map((value ,index)=>{
            if(index===0)return null;
            return(
              <Cardapi 
              cardcomp="card-content"
              imgdiv="card-zomato-container12"
              premium={value.premium}
              img={value.file_url}
              width="100%"
              bdrradius="zomato"
              heading={value.industry_details[0].name}
              title={value.title}
              author={value.author_details[0].name}
              // publish={value.author_detail[0].name}
              publish={value.publish} 
              headingslug={value.industry_details[0].slug}
              imgslug={value.file_url}
              header="headercard"
              headerfinance="headerfinancezomato"
              storiesapi="card-zomato-container"
              contentapi="card-zomato-container2"
              authorapi="sliderauthor1"
              publishapi="sliderauthor"
              dotted="dotapi"
              contentslug="contentapislug"
              contentauthorslug="contentapislug"
              contentnameslug="contentapislug"
              premiumcardclass="premium-card"
            
              />
            )
            
          })}
        </div>

        {/* <div className="card ">
          <div className="card-content card-content-responsive">
            <img src="./images/Economy.png" alt="images" />
            <img  className="zomato"src={props.value.stories_list[1].file_url} alt="" />
            <h4>
              Economy
              {props.value.stories_list[1].industry_details[0].name}
              </h4>
            <p>
              Indian shares snap 5-day rally on weak global cues, post weekly
              gain
              {props.value.stories_list[1].title}
            </p>
            <p className="text-span">
              <span>30 September</span>
              <span>Madhurima Nandy+1</span>
            </p>
          </div> */}

          {/* <div className="card-content ">
            <img src="./images/Finance.png" alt="images" />
            <img  className="zomato"src={props.value.stories_list[2].file_url} alt="" />
            <h4>
              Finance
            {props.value.stories_list[2].industry_details[0].name}
            </h4>
            <p>
              Paytm to shut Canada B2C app amid eroding market capitalisation
              {props.value.stories_list[2].title}
            </p>
            <p className="text-span">
              <span>30 September</span>
              <span>Madhurima Nandy</span>
            </p>
          </div> */}
          {/* <div className="card-content">
            <img src="./images/Consumer.png" alt="images" />
            <img  className="zomato"src={props.value.stories_list[3].file_url} alt="" />
            <h4>
              Consumer
              {props.value.stories_list[3].industry_details[0].name}</h4>
            <p>
              Exclusive: PE-backed sauce maker Wingreens acquires Lok
              Capital-backed cereal maker
              {props.value.stories_list[3].title}
            </p>
            <p className="text-span">
              <span>30 September</span>
              <span>Madhurima Nandy+3</span>
            </p>
          </div> */}
          {/* <div className="card-content">
            <img src="./images/Economy1.png" alt="images" />
            <img  className="zomato"src={props.value.stories_list[4].file_url} alt="" />
            <h4>
              Economy
              {props.value.stories_list[4].industry_details[0].name}

              </h4>
            <p>
              GLOBAL MARKETS-European shares in the red after hawkish Fed
              comments
              {props.value.stories_list[4].title}
            </p>
            <p className="text-span">
              <span>30 September .</span>
              <span>Madhurima Nandy</span>
            </p>
          </div> */}
        {/* </div> */}
        {/* <div className="card-editior-responsive">
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
        </div> */}
        {/* <div className="sudhir-res">
          <h5 className="left-section1 sudhir-responsive-adv">Advertisnment</h5>
          <img src="./images/sudhirzeenews.png" alt="" />
        </div> */}
      </div>
      {/* <Advertisement  image ="./images/adv1.png"/> */}
      <Advertisement image="./images/advertisenment.png" width="950px" />
      {/* <Editior title="Editior's Choice" img="./images/Economy3.png" name="Economy" para="EMERGING MARKETS - Asian markets mixed as they digest Chinese data; South Korean stocks fall" author="30 September"
    description="Madhurima Nandy" img1="./images/reliance.png" finasec="FINANCE" finadesc="RIL invests Rs 7600 crores in acquisitions to strengthen retail arm" author1="30 September" description1="Madhurima Nandy" imgtmt="./images/Daily News.png"tmtsec="TMT" tmtdesc="Dailyhunt parent raises close to $28 mn at $3.1 bn valuation" authortmt="30 September" descriptiontmt="Madhurima Nandy" imgconsumer="./images/basket.png" consumersec="CONSUMER" consumerdesc="Delivery race among Indian grocery startups brings road safety risks"  authorconsumer="30 September" descriptionconsumer="Madhurima Nandy" aajtak="Advertisnment"
    imgaajtak="./images/sudhirzeenews.png"/> */}
    </>
  );
}
