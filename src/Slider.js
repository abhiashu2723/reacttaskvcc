import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/scss/navigation";
import Cardapi from "./cardapi";
function Maincards(props) {
  return (<>
  <div className="container" key={props.value.stories_list[0].feid}>
    <div>
      <h3>{props.value.section_name}</h3>
    </div>
   
    <div className="cardimg">
      <Swiper


// breakpoints: {{
//   640: {
//     slidesPerView: 2,
//     spaceBetween: 20,
//   },
//   768: {
//     slidesPerView: 4,
//     spaceBetween: 40,
//   },
//   1024: {
//     slidesPerView: 5,
//     spaceBetween: 50,
//   },
// }
      
      breakPoint={{768: {
        slidesPerView: 4,
        
   },
   640:{
    slidesPerView: 2,
    spaceBetween: 20,
   }
  }}
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >

        <div className="crausol">
          {props.value.stories_list.map((value,index) => {
            // if(index === 0) return null;
            return (
              <SwiperSlide>
                 {/* <div className="card"> */}
              <Cardapi 
              cardcomp="card-content-crausal"
              heading={value.section_name}
              img={value.file_url}
              width="100%"
              bdrradius="zomato1"
              title={value.title}
              contentapi="kotak"
              author={value.author_details[0].name}
              authorapi="sliderauthor"
              // name={value.industry_details[0].name}
              />
              {/* </div> */}
              </SwiperSlide>)
          })}
        </div>
                {/* <div >
                  <div className="swiper-crausal">
                  <img
                    className="img-responsive"
                    src={item.src}
                    alt="images"
                    width="100%"
                  />
                  </div>
                  
                  <div className="card-content-crausol">
                  <p>{item.para}</p>
                  <p className="text-span">
                    <span>{item.author}</span>
                   
                  </p>
                  </div>
                </div> */}
           
      </Swiper>
    </div>
    </div>
    
    </>
  );
}
export default Maincards;
