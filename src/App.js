import Advertisement from './advertisement';
import "./App.css";
import "./media.css";
import Navbar from "./navbar";
import Manufacturing from "./manufacturing";
import Infographic from "./infographic";
import Editior from "./editior";
import Input from "./input";
import Stories from './stories';
import Maincards from "./Slider";
import Vcctv from './vcctv';
import VcCirclePremium from './vcccirclepremium';
// import Impocards1 from './impocards1';
// import {caraImg,founder,tmt,techCircle,mergers,financials} from './dataserver';
// import Manufacturingapi from './manufacturingapi';
// import Ans from './files';
import { useState } from "react";
import axios from "axios";
import Footer from './footer';
// import Cardapi from './cardapi';

function App() {
  const [data, setData] = useState([]);
  axios
    .get("https://run.mocky.io/v3/25b66855-89a3-45a5-8db6-85fc85041185")
    .then((response) => {
      console.log(response.data.section_list[0].stories_list);
      setData(response.data.section_list);
    });
  return (
    <>
      <div>
        <Navbar />
        {data.map((value, index) => {
          if (value.section_slug==="top-stories") {
            return <Manufacturing value={value} />;
          }
          if (value.section_slug==="top-stories") {
            return (
              <>
                <Editior value={value} />
                
              </>
            );
          }
          if (value.section_slug==="editors-pick") {
            return(
               <>
               <Editior value={value} 
               aajtak="Advertisnment"
               imgaajtak="./images/sudhirzeenews.png" line={{display:"none"}}/>
               <Input />
                <Infographic />
               {/* <Advertisement image="./images/advertisenment.png" width="100%" /> */}
               </>);
          }
          
          if (value.section_slug==="limited-partner") {
            return(
               <>
               <Maincards value={value} />
               <Advertisement image="./images/advertisenment.png" width="100%" />
               <VcCirclePremium/>
               </>);
          }
          if (value.section_slug==="founders") {
            return(
               <>
               <Maincards value={value} />
               <Advertisement image="./images/advertisenment.png" width="100%" />
               </>);
          }
          if (value.section_slug==="most-popular") {
            return(
               <>
               <Editior value={value}
               aajtak="Advertisnment"
               imgaajtak="./images/sudhirzeenews.png" line={{display:"none"}} />
               <Advertisement image="./images/advertisenment.png" width="100%" />
               </>);
          }
          if (value.section_slug==="vcc-tv") {
            return(
               <>
               <Vcctv value={value}/>
               <Advertisement image="./images/advertisenment.png" width="100%" />
               
               </>);
          }
          if (value.section_slug==="tmt") {
            return(
               <>
               <Maincards value={value} />
               
               </>);
          }
          if (value.section_slug==="financials") {
            return(
               <>
               <Maincards value={value} />
               <Advertisement image="./images/advertisenment.png" width="100%" />
               
               </>);
          }
          if (value.section_slug === "more-stories") {
            return(
               <>
               <Stories value={value}/>  
               
               </>);
          }
          
          if (value.section_slug==="mergers-acquisitions") {
            return(
               <>
               <Maincards value={value} />
               
               </>);
          }
          return null;

        })}
        <Footer/>
        {/* <Input />
        <Infographic /> */}
        {/* <Manufacturing/> */}

        {/* <Maincards heading="Founders" dataImg={founder}/> */}
        {/* <Editior title="Editior's Choice" img="./images/Economy3.png" name="Economy" para="EMERGING MARKETS - Asian markets mixed as they digest Chinese data; South Korean stocks fall" author="30 September"
     description="Madhurima Nandy" img1="./images/reliance.png" finasec="FINANCE" finadesc="RIL invests Rs 7600 crores in acquisitions to strengthen retail arm" author1="30 September" description1="Madhurima Nandy" imgtmt="./images/Daily News.png"tmtsec="TMT" tmtdesc="Dailyhunt parent raises close to $28 mn at $3.1 bn valuation" authortmt="30 September" descriptiontmt="Madhurima Nandy" imgconsumer="./images/basket.png" consumersec="CONSUMER" consumerdesc="Delivery race among Indian grocery startups brings road safety risks"  authorconsumer="30 September" descriptionconsumer="Madhurima Nandy" aajtak="Advertisnment"
     imgaajtak="./images/sudhirzeenews.png"/>   */}

        {/* <Advertisement image="./images/advertisenment.png" width="100%" />
      <Advertisement image="./images/advertisenment.png" width="100%" />

       <Editior title="Most Popular" img="./images/tmttruck.png" name="TMT" para="Quick commerce deliveries surge 500% in a year, says logistics provider Shadowfax" author="30 September"
    description="Madhurima Nandy" img1="./images/consumer$.png" finasec="CONSUMER" finadesc="Consumer firm Madbow bags $2 mn funding at $13 mn valuation" author1="30 September ." description1="Madhurima Nandy" imgtmt="./images/economypop.png"tmtsec="ECONOMY" tmtdesc="Indian shares hit three-week lows in broad-based selling" authortmt="30 September ." descriptiontmt="Madhurima Nandy" imgconsumer="./images/house.png" consumersec="MANUFACTURING" consumerdesc="HDFC Capital marks initial close at $1.88 bn for its affordable housing fund 3"  authorconsumer="30 September ." descriptionconsumer="Madhurima Nandy" aajtak="Advertisnment"
    imgaajtak="./images/sudhirzeenews.png" line={{display:"none"}}/>
    

     <Advertisement image="./images/advertisenment.png" width="100%" />
    <Maincards heading="TMT" dataImg={tmt}/>

    <Maincards heading="TechCircle" dataImg={techCircle}/> 
     <Advertisement image="./images/advertisenment.png" width="100%" /> 

    <Maincards heading="Mergers & Acquistions" dataImg={mergers}/>



       <Maincards heading="Financials" dataImg={financials}/>

        {/* <Cardapi/> */}

        {/* <Ans/> */}
        {/* <Impocards1/>  */}
        {/* <Manufacturingapi/> */}
      </div>
    </>
  );
}

export default App;
