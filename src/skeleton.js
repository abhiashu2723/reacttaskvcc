import React from 'react'

export default function Skeleton() {
  return (
    <>
    <div className="container">
    <div className="manu_main">
      <div className="manu_body ">
        <span className="skeleton">Manufacturing</span>
        {/* <h3>{value.title}</h3> */}
        <h1 className="skeleton">
          Warburg Pincus set to acquire majority stake in auto parts
          maker
        </h1>
        <p className="skeleton">
          Private equity firm TPG, which is reportedly heading towards a
          public listing, said on Thursday it had appointed long-time
          company executive Todd Sisitsky as president, effective
          immediately.
        </p>
        <p >
          <span className="text-color skeleton">30 September</span>
          <span className="text-color skeleton">Madhurima Nandy</span>
        </p>
        <p className="skeleton">
          <button className="text-button skeleton">Read More</button>
        </p>
      </div>

      <div className="manu-img skeleton">
        <img src="./images/Manufacturing.png" alt="images" style={{ visibility: "hidden"}} />
        {/* <img src={value.file_url} alt="" /> */}
      </div>
    </div>
  
   <div className="card ">
          <div className="card-content card-content-responsive ">
            <div className="skeleton">
            <img  src="./images/Economy.png" alt="images" style={{ visibility: "hidden"}} />
            </div>
            {/* <img  className="zomato"src={props.value.stories_list[1].file_url} alt="" /> */}
            <h4 className="skeleton">
              Economy
              {/* {props.value.stories_list[1].industry_details[0].name} */}
              </h4>
            <p className="skeleton">
              Indian shares snap 5-day rally on weak global cues, post weekly
              gain
              {/* {props.value.stories_list[1].title} */}
            </p>
            <p className="text-span">
              <span className="skeleton">30 September</span>
              <span className="skeleton">Madhurima Nandy+1</span>
            </p>
          </div> 

           <div className="card-content ">
            <div className="skeleton">
            <img src="./images/Finance.png" alt="images" style={{ visibility: "hidden"}}/>
            </div>
            {/* <img  className="zomato"src={props.value.stories_list[2].file_url} alt="" /> */}
            <h4 className="skeleton">
              Finance
            {/* {props.value.stories_list[2].industry_details[0].name} */}
            </h4>
            <p className="skeleton">
              Paytm to shut Canada B2C app amid eroding market capitalisation
              {/* {props.value.stories_list[2].title} */}
            </p>
            <p className="text-span">
              <span className="skeleton">30 September</span>
              <span className="skeleton">Madhurima Nandy</span>
            </p>
          </div> 
           <div className="card-content">
            <div className="skeleton">
            <img src="./images/Consumer.png" alt="images" style={{ visibility: "hidden"}}/>
            </div>
            {/* <img  className="zomato"src={props.value.stories_list[3].file_url} alt="" /> */}
            <h4 className="skeleton">
              Consumer
              {/* {props.value.stories_list[3].industry_details[0].name} */}</h4>
            <p className="skeleton">
              Exclusive: PE-backed sauce maker Wingreens acquires Lok
              Capital-backed cereal maker
              {/* {props.value.stories_list[3].title} */}
            </p>
            <p className="text-span">
              <span className="skeleton">30 September</span>
              <span className="skeleton">Madhurima Nandy+3</span>
            </p>
          </div> 
           <div className="card-content">
            <div className="skeleton">
            <img src="./images/Economy1.png" alt="images" style={{ visibility: "hidden"}} />
            </div>
            {/* <img  className="zomato"src={props.value.stories_list[4].file_url} alt="" /> */}
            <h4 className="skeleton">
              Economy
              {/* {props.value.stories_list[4].industry_details[0].name} */}

              </h4>
            <p className="skeleton">
              GLOBAL MARKETS-European shares in the red after hawkish Fed
              comments
              {/* {props.value.stories_list[4].title} */}
            </p>
            <p className="text-span">
              <span className="skeleton">30 September .</span>
              <span className="skeleton">Madhurima Nandy</span>
            </p>
          </div> 
         </div> 
         </div>
   
  </>);
}
