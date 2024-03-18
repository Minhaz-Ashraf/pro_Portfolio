import React from "react";
import "./service.css";
import { FaWordpress, FaPager } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { MdAppShortcut, MdDashboardCustomize, MdDesignServices  } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards, Autoplay } from "swiper/modules";
const Service = () => {
  return (
    <>
      <div className="service-container" id="service">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 service-content">
            <h1>Services</h1>
            <p>
              Elevate your online presence with my tailored freelance services.
              I specialize in crafting custom-coded websites and apps with
              intuitive designs, ensuring a seamless user experience. From
              responsive layouts that adapt to various devices to efficient
              backend development, I create digital solutions that leave a
              lasting impression. Whether you need an eye-catching e-commerce
              platform, a user-friendly CMS, or a captivating mobile app, I've
              got you covered.
            </p>
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 service-slide">
            <Swiper
              effect={"cards"}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              
              modules={[EffectCards, Autoplay]}
              className="mySwiper"
            >
                
              <SwiperSlide className="one">
              <SiAntdesign size={30}/>  UI/UX{" "}
                <p>
                  Immerse your audience in visually stunning and user-friendly
                  designs. Our UI/UX experts are passionate about creating
                  engaging interfaces that not only captivate but also enhance
                  the overall user experience.{" "}
                </p>
              </SwiperSlide>
              <SwiperSlide className="two">
              <CgWebsite size={30}/>   Web Applications{" "}
                <p>
                  Transforming ideas into interactive and dynamic digital
                  experiences, our web application development services are
                  tailored to meet the unique needs of your business. Whether
                  it's enhancing existing functionalities or creating from
                  scratch, I ensure seamless and scalable solutions.{" "}
                </p>
              </SwiperSlide>
              <SwiperSlide className="three">
              <MdAppShortcut size={30}/>  App Development{" "}
                <p>
                  In the fast-paced world of mobile technology, me and my team
                  specialize in crafting intuitive and high-performance mobile
                  applications. From concept to deployment, My app development
                  team is dedicated to bringing your vision to life on both
                  Android and iOS platforms.
                </p>
              </SwiperSlide>
              <SwiperSlide className="four">
              <FaPager size={30}/>  Portfolios{" "}
                <p>
                  {" "}
                  Your online portfolio is a reflection of your unique identity.
                  I specialize in crafting bespoke portfolio websites that
                  showcase your work in a way that is both elegant and
                  impactful. Let your portfolio speak for itself and leave a
                  lasting impression on visitors and potential clients.{" "}
                </p>
              </SwiperSlide>
              <SwiperSlide className="five">
              <FaWordpress  size={30}/>  Wordpress{" "}
                <p>
                  Unlock the power of WordPress with our comprehensive services.
                  Whether you need a E-Commerce, CMS, or a full-fledged
                  WordPress website, I've got you covered. My team ensures that
                  your online presence is not only visually appealing but also
                  optimized for performance and functionality.
                </p>
              </SwiperSlide>
              <SwiperSlide className="six">
              <MdDesignServices size={30} />  Graphic Design{" "}
                <p>
                  Craft a brand identity that speaks volumes. Our graphic design
                  services cover everything from logo creation to marketing
                  collateral. Let our creative team add a visual flair to your
                  brand, ensuring it stands out in a crowded digital landscape.
                </p>
              </SwiperSlide>
              <SwiperSlide className="seven">
              <MdDashboardCustomize size={30}/>  Dashboard{" "}
                <p>
                  Data-driven decisions are key to success. Our dashboard
                  development services provide you with intuitive and insightful
                  tools to monitor, analyze, and strategize effectively. Stay in
                  control with real-time data at your fingertips.
                </p>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
