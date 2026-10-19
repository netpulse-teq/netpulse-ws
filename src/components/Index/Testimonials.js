import React from "react"
import { Link } from "gatsby"
import starIcon from "../../images/star-icon.png"
import client1 from "../../images/testimonials/client1.jpg"
import client2 from "../../images/testimonials/client2.jpg"
import client3 from "../../images/testimonials/client3.jpg"
import shape from "../../images/shape/shape1.svg"
import { useTranslation } from "../../utils/useTranslation"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper"

const Testimonials = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="testimonials-area pt-100 bg-f1f8fb">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="testimonial" />
              {t("testimonials")}
            </span>
            <h2>{t("whatClientsSayTitle")}</h2>
            <p>{t("whatClientsSayDesc")}</p>
          </div>

          <Swiper
            navigation={true}
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            }}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Navigation, Autoplay]}
            className="testimonials-slides"
          >
            <SwiperSlide>
              <div className="single-testimonials-item">
                <p>{t("testimonial1Text")}</p>

                <div className="client-info">
                  <div className="d-flex justify-content-center align-items-center">
                    <img src={client1} alt="testimonial" />
                    <div className="title">
                      <h3>Alex Maxwell</h3>
                      <span>CEO at EnvyTheme</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-item">
                <p>{t("testimonial2Text")}</p>

                <div className="client-info">
                  <div className="d-flex justify-content-center align-items-center">
                    <img src={client2} alt="testimonial" />
                    <div className="title">
                      <h3>David Warner</h3>
                      <span>CEO at Envato</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-item">
                <p>{t("testimonial3Text")}</p>
                <div className="client-info">
                  <div className="d-flex justify-content-center align-items-center">
                    <img src={client3} alt="testimonial" />
                    <div className="title">
                      <h3>Sarah Taylor</h3>
                      <span>CEO at ThemeForest</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="testimonials-view-btn text-center">
            <Link to="/testimonials" className="default-btn">
              <i className="flaticon-view"></i>
              {t("checkAllReviews")} <span></span>
            </Link>
          </div>
        </div>

        <div className="shape-img1">
          <img src={shape} alt="testimonial" />
        </div>
      </div>
    </>
  )
}

export default Testimonials
