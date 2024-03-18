import React from "react";
import "./testo.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const Testo = () => {
  return (
    <>
      <div className="testo" id="testo">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 testo-content">
            <h1>Clients Testimonials</h1>
            <p>
              A highly satisfied clientele base who have availed my services
              over the course of time and preferred to continue collaborating
              with me after finding me worth their time.
            </p>
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 testo-swiper">
            <Swiper
              slidesPerView={1}
              spaceBetween={50}
              direction={"vertical"}
              grabCursor={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="highlightSwiper"
            >
              <SwiperSlide className="testo-one">
                <img src="/images/dhara.avif" alt="img" />
                <p style={{ color: "black" }}>
                  Transformed my ideas into a stunning portfolio website with
                  seamless functionality. Professional, creative, and a pleasure
                  to work with. Highly recommend for any web development needs!
                </p>
                <h6 style={{ margin: "-20px 0 0 0", color: "black" }}>
                  -Dhara Thakker
                </h6>
              </SwiperSlide>
              <SwiperSlide className="testo-two">
                <img src="/images/gauravtesto.avif" alt="img" />
                <p style={{ color: "black" }}>
                  I worked with Minhaz on my website and it was amazing
                  experience! He was great from the start to the finish, making
                  everything creative and techie. His hard work
                  made my website awesome.
                </p>
                <h6 style={{ margin: "-20px 0 0 0", color: "black" }}>
                  -Gaurav Srivasatava
                </h6>
              </SwiperSlide>
              <SwiperSlide className="testo-three">
                <img src="/images/dhruv.avif" alt="img" />
                <p style={{ color: "black" }}>
                  Timely delivery, seamless communication, and unwavering trust
                  throughout the development process. Truly impressed with the
                  amazing results!
                </p>
                <h6 style={{ margin: "-20px 0 0 0", color: "black" }}>
                  -Dhruv Sharma
                </h6>{" "}
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testo;
