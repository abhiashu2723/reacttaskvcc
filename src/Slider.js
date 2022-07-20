import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/scss/navigation";
function Maincards(props) {
  return (<>
  <div className="container">
    <div>
      <h3>{props.heading}</h3>
    </div>
   
    <div className="cardimg">
      <Swiper
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
          {props.dataImg.map((item) => {
            return (
              <SwiperSlide>
                <div >
                  <div className="swiper-crausal">
                  <img
                    className="img-responsive"
                    src={item.src}
                    alt="images"
                    width="100%"
                  />
                  </div>
                  {/* <h5>{props.partner}</h5> */}
                  <div className="card-content-crausol">
                  <p>{item.para}</p>
                  <p className="text-span">
                    <span>{item.author}</span>
                    {/* <span>{item.author}</span> */}
                  </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </div>
    </div>
    
    </>
  );
}
export default Maincards;
