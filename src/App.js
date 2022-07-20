
import Advertisement from './advertisement';
import './App.css';
import './media.css';
import Navbar from './navbar';
import Manufacturing from './manufacturing';
import Infographic from './infographic';
import Editior from './editior';
import Input from './input';
import Stories from './stories';
import Maincards from './Slider';
import Vcctv from './vcctv';
import VcCirclePremium from './vcccirclepremium';
// import Impocards1 from './impocards1';
import {caraImg,founder,tmt,techCircle,mergers,financials} from './dataserver';
// import Ans from './files';


function App() {
  return (
    <>
    <div >
      
        <Navbar/>
       
        <Manufacturing/>
       <Editior title="Editior's Choice" img="./images/Economy3.png" name="Economy" para="EMERGING MARKETS - Asian markets mixed as they digest Chinese data; South Korean stocks fall" author="30 September"
     description="Madhurima Nandy" img1="./images/reliance.png" finasec="FINANCE" finadesc="RIL invests Rs 7600 crores in acquisitions to strengthen retail arm" author1="30 September" description1="Madhurima Nandy" imgtmt="./images/Daily News.png"tmtsec="TMT" tmtdesc="Dailyhunt parent raises close to $28 mn at $3.1 bn valuation" authortmt="30 September" descriptiontmt="Madhurima Nandy" imgconsumer="./images/basket.png" consumersec="CONSUMER" consumerdesc="Delivery race among Indian grocery startups brings road safety risks"  authorconsumer="30 September" descriptionconsumer="Madhurima Nandy" aajtak="Advertisnment"
     imgaajtak="./images/sudhirzeenews.png"/>  

       <Infographic/>
        <Maincards heading="Limited Partner" dataImg={caraImg}/> 

      <Advertisement image="./images/advertisenment.png" width="100%" />
      <VcCirclePremium/>
      <Maincards heading="Founders" dataImg={founder}/>
      <Advertisement image="./images/advertisenment.png" width="100%" />


       <Editior title="Most Popular" img="./images/tmttruck.png" name="TMT" para="Quick commerce deliveries surge 500% in a year, says logistics provider Shadowfax" author="30 September"
    description="Madhurima Nandy" img1="./images/consumer$.png" finasec="CONSUMER" finadesc="Consumer firm Madbow bags $2 mn funding at $13 mn valuation" author1="30 September ." description1="Madhurima Nandy" imgtmt="./images/economypop.png"tmtsec="ECONOMY" tmtdesc="Indian shares hit three-week lows in broad-based selling" authortmt="30 September ." descriptiontmt="Madhurima Nandy" imgconsumer="./images/house.png" consumersec="MANUFACTURING" consumerdesc="HDFC Capital marks initial close at $1.88 bn for its affordable housing fund 3"  authorconsumer="30 September ." descriptionconsumer="Madhurima Nandy" aajtak="Advertisnment"
    imgaajtak="./images/sudhirzeenews.png" line={{display:"none"}}/>
    

     <Advertisement image="./images/advertisenment.png" width="100%" />
    <Vcctv/>
    <Maincards heading="TMT" dataImg={tmt}/>

     <Input/>
    <Maincards heading="TechCircle" dataImg={techCircle}/> 
     <Advertisement image="./images/advertisenment.png" width="100%" /> 

    <Maincards heading="Mergers & Acquistions" dataImg={mergers}/>



       <Maincards heading="Financials" dataImg={financials}/>

       <Stories/> 
       

       {/* <Ans/> */}
       {/* <Impocards1/>  */}
     
      
      
      
      
      
      
      
    </div>
    </>
  );
}

export default App;
