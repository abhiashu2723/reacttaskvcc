import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/scss/navigation";
import Cardapi from "./cardapi";
function Maincards(props) {
  return (
    <>
      <div className="container" key={props.value.stories_list[0].feid}>
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
                slidesPerView:1.5,
                spaceBetween:10,
              },
              450:{
                slidesPerView:2,
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
                slidesPerView: 3.5,
                spaceBetween: 10,
              },

              992: {
                slidesPerView: 4.5,
                spaceBetween: 30,
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
                      heading={value.section_name}
                      img={value.file_url}
                      contentapi="kotak"
                      width="100%"
                      bdrradius="zomato1"
                      title={value.title}
                      author={value.author_details[0].name}
                      publish={value.publish}
                      authorapi="sliderauthor1"
                      publishapi="sliderauthor"
                      dotted="dotapi"
                      action="actionapi"
                      contentslug="contentapislug"
                      contentauthorslug="contentapislug"
                      contentnameslug="contentapislug"
                      headerfinance="slidermargin"
                      buttonhover="authordescriptionsbutton"
                      buttonhover1="authorhover"
                      onebutton={value.author_details.length>1? "+1":null}
                      authorextra={value.author_details.length>1?value.author_details[1].name:""}
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
    </>
  );
}
export default Maincards;
