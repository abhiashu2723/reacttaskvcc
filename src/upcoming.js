import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/scss/navigation";
import Cardapi from "./cardapi";
function Upcoming(props) {
  return (
    <>
    <div >
      <div className="container" key={props.value.stories_list.feid}>
        <div>
          <h3>{props.value.section_name}</h3>
        </div>

        <div className="cardimg">
          <Swiper
            breakpoints={{
              340: {
                slidesPerView: 1,
                // spaceBetween:10,
              },
              360:{
                slidesPerView:1.2,
                spaceBetween:10,
              },
              500: {
                slidesPerView: 2.2,
                spaceBetween: 20,
              },
              576: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2.5,
                spaceBetween: 20,
                // spaceBetween:50,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },

              992: {
                slidesPerView: 4.5,
                spaceBetween: 50,
              },
            }}
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={4.5}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <div className="crausol">
              {props.value.stories_list.map((value, index) => {
                // if(index === 0) return null;
                return (
                  <SwiperSlide>
                    {/* <div className="card"> */}
                    <Cardapi
                      cardcomp="card-content-crausal"
                      imgdiv="card-zomato-container1"
                      premium={value.premium}
                      storiesapi="card_width"
                      img={value.file_url}
                      width="100%"
                      bdrradius="zomato1"
                      heading={value.industry_details[0].name}
                      title={value.title}
                      contentapi="premium1"
                      author={value.author_details[0].name}
                      publish={value.publish}
                      header="headercard"
                      headerfinance="headerfinancezomato"
                      authorapi="sliderauthor1"
                      publishapi="sliderauthor"
                      dotted="dotapi"
                      action="actionapi"
                      contentslug="contentapislug"
                      contentauthorslug="contentapislug"
                      contentnameslug="contentapislug"
                      // premiumcardclass="premium-card"

                      // name={value.industry_details[0].name}
                    />
                    {/* </div> */}
                  </SwiperSlide>
                );
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
      </div>
    </>
  );
}
export default Upcoming;
