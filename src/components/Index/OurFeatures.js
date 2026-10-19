import React from "react"
import starIcon from "../../images/star-icon.png"
import serviceIcon1 from "../../images/services/service-icon1.png"
import serviceIcon2 from "../../images/services/service-icon2.png"
import serviceIcon3 from "../../images/services/service-icon3.png"
import serviceIcon4 from "../../images/services/service-icon4.png"
import serviceIcon5 from "../../images/services/service-icon5.png"
import serviceIcon6 from "../../images/services/service-icon6.png"
import { useTranslation } from "../../utils/useTranslation"

const OurFeatures = () => {
  const { t } = useTranslation()

  return (
    <>
      <section className="services-area pt-100 pb-70 bg-f1f8fb">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="feature" />
              {t("featuresSubTitle")}
            </span>

            <h2>{t("featuresTitle")}</h2>
            <p>{t("featuresDesc")}</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-item-box">
                <div className="icon">
                  <img src={serviceIcon1} alt="feature" />
                </div>
                <h3>{t("feature1Title")}</h3>
                <p>{t("feature1Desc")}</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-item-box">
                <div className="icon">
                  <img src={serviceIcon2} alt="feature" />
                </div>
                <h3>{t("feature2Title")}</h3>
                <p>{t("feature2Desc")}</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-item-box">
                <div className="icon">
                  <img src={serviceIcon3} alt="feature" />
                </div>
                <h3>{t("feature3Title")}</h3>
                <p>{t("feature3Desc")}</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-item-box">
                <div className="icon">
                  <img src={serviceIcon4} alt="feature" />
                </div>
                <h3>{t("feature4Title")}</h3>
                <p>{t("feature4Desc")}</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-item-box">
                <div className="icon">
                  <img src={serviceIcon5} alt="feature" />
                </div>
                <h3>{t("feature5Title")}</h3>
                <p>{t("feature5Desc")}</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-item-box">
                <div className="icon">
                  <img src={serviceIcon6} alt="feature" />
                </div>
                <h3>{t("feature6Title")}</h3>
                <p>{t("feature6Desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurFeatures
